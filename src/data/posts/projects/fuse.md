---
id: 11
title: "MirrorFS: Transparent Filesystem Encryption"
subtitle: "Architecting a secure C-based storage layer using FUSE and AES-256-CBC"
tags: ["Systems Programming", "UNIX", "Cryptography"]
date: "2025-01-16T12:00:00"
services: ["C", "FUSE", "OpenSSL", "Linux Kernel", "Systems Design"]
image: null
polished: true
# link: "https://github.com/jackherberger/mirror-fs"
---

# MirrorFS: Building a Transparent Encryption Layer with FUSE

In storage security, "Encryption at Rest" is the gold standard. While usually handled by hardware or cloud providers, building a transparent encryption layer from scratch reveals the fascinating complexity of how filesystems actually handle data.

**MirrorFS** is a FUSE-based filesystem that sits between the Linux Kernel and the physical disk. It provides a "plaintext window" into a directory where all underlying data is actually scrambled using AES-256-CBC.

---

## 1. The Hidden Metadata Strategy (IV Management)

AES in CBC (Cipher Block Chaining) mode requires an **Initialization Vector (IV)** for every encryption operation. Using the same IV for the same file twice would result in identical ciphertext, leaking patterns to an attacker.

**The Problem:** Standard filesystems don't have a "secret slot" for 16-bytes of metadata per file. If you prepend the IV to the file, all your offsets break.

**The Solution:** MirrorFS implements a parallel hidden directory structure. For every file `foo.txt`, a 16-byte IV is stored in `.iv/foo.txt`.

```c
// How MirrorFS locates its hidden IV files
char* getIVpath(const char *path, int dir) {
    const char *lastSlash = strrchr(path, '/');
    size_t prefixLen = lastSlash - path + 1; 
    size_t totalLen = strlen(path) + 3 + 1;

    char *newPath = calloc(totalLen, 1);
    strncpy(newPath, path, prefixLen);
    newPath[prefixLen] = '\0';
    strcat(newPath, ".iv/"); // Inject the hidden folder into the path
    
    if (dir == 0) {
        strcat(newPath, lastSlash + 1);
    }
    return newPath;
}
```

---

## 2. Two Philosophies of Encryption

This project explores two radically different ways to integrate cryptography into a C program.

### Approach A: The High-Performance Library (`fuse.c`)
This version links directly against `libcrypto` and uses the OpenSSL EVP (Envelope) API. This allows for high-speed, in-memory encryption without the overhead of process creation.

```c
// Using OpenSSL EVP for in-memory encryption
EVP_CIPHER_CTX *ctx = EVP_CIPHER_CTX_new();
EVP_EncryptInit_ex(ctx, EVP_aes_256_cbc(), NULL, key, iv);
EVP_EncryptUpdate(ctx, ciphertext, &len, plaintext, plaintext_len);
EVP_EncryptFinal_ex(ctx, ciphertext + len, &len);
EVP_CIPHER_CTX_free(ctx);
```

### Approach B: The "Unix Philosophy" Exec (`fuse-exec.c`)
In a clever architectural twist, this version treats the `openssl` binary as a black box. It forks child processes and uses pipes to stream data through the system's existing crypto tools.

```c
// Piping filesystem data through a child process
pid = fork();
if (pid == 0) { // Child
    dup2(pipefd[1], STDOUT_FILENO); // Redirect stdout to pipe
    char *args[] = {"./openssl", "-d", key, fpath, "/dev/stdout", NULL};
    execv("./openssl", args);
} else { // Parent
    read(pipefd[0], buf, size); // Read decrypted data from the pipe
}
```

---

## 3. The "FUSE Hard Mode": Write & Truncate

Implementing `write` and `truncate` is the most difficult part of an encrypted filesystem. Because AES-CBC is a block cipher (16-byte blocks), you cannot simply flip a bit in the middle of a file. If you change byte 10, every subsequent byte in that 16-byte block (and all following blocks in CBC mode) changes.

MirrorFS solves this using a **Read-Modify-Write** cycle:
1.  **Read** the entire encrypted file from disk.
2.  **Decrypt** the entire file into a temporary buffer.
3.  **Apply** the user's write/truncate operation to the plaintext buffer.
4.  **Re-encrypt** the whole buffer with the IV.
5.  **Wipe and Rewrite** the ciphertext back to the physical disk.

```c
// The core logic of xmp_write (Simplified)
if (ciphertext_len > 0) {
    read(fd, ciphertext, ciphertext_len);
    decrypt(ciphertext, res, key, iv, plaintext); // Get current state
    
    memcpy(plaintext + offset, buf, size); // Apply new data
    
    // Scramble everything again
    new_ciphertext_len = encrypt(plaintext, plaintext_len + size, key, iv, output);
    pwrite(fd, output, new_ciphertext_len, 0); 
}
```

---

MirrorFS demonstrates that a filesystem is more than just a place to store bits—it's a programmable interface. By hijacking the FUSE syscalls, we transformed a standard directory into a secure vault, proving that transparency and security can coexist through clever metadata management and robust cryptographic piping.

