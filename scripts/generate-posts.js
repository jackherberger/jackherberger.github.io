const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../src/data/posts');

function parseFrontmatter(content) {
  const lines = content.split('\n');
  if (lines[0].trim() !== '---') return { metadata: {}, content };

  const metadata = {};
  let i = 1;
  for (; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === '---') break;
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      let value = valueParts.join(':').trim();
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
      } else if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      } else if (value === 'true') {
        value = true;
      } else if (value === 'false') {
        value = false;
      } else if (value === 'null') {
        value = null;
      } else if (!isNaN(value) && value !== '') {
        value = Number(value);
      }
      metadata[key.trim()] = value;
    }
  }

  const markdownContent = lines.slice(i + 1).join('\n');
  return { metadata, content: markdownContent };
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const { metadata, content: markdownContent } = parseFrontmatter(content);
      
      if (Object.keys(metadata).length === 0) {
        console.warn(`No frontmatter found in ${fullPath}`);
        return;
      }

      const jsFileName = entry.name.replace('.md', '.js');
      const jsFilePath = path.join(dir, jsFileName);

      const data = {
        ...metadata,
        content: markdownContent.trim()
      };

      const output = `// AUTO-GENERATED FROM ${entry.name} - DO NOT EDIT DIRECTLY
const data = ${JSON.stringify(data, null, 2)};

export default data;
`;

      fs.writeFileSync(jsFilePath, output);
      console.log(`Generated ${jsFilePath}`);
    }
  });
}

processDirectory(postsDir);
