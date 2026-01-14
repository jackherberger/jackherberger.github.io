const data = {
  id: 5,
  title: 'Everything is a (markdown) file',
  subtitle: 'Context is the runtime of the modern AI era',
  date: '2026-01-13T10:00:00',
  services: ['AI', 'Unix', 'LLMs'],
  image: null,
  content: `Unix had such a simple idea that worked so well: [everything is a file](https://en.wikipedia.org/wiki/Everything_is_a_file).

A regular file, a directory, an I/O device, a pipe, a socket. All different entities, but same interface. You read from them, write to them and composition emerges naturally.

Modern AI agentic capabilities feels strangely similar. 

Agents, skills, tools, policies, memory - it’s all just markdown files. Different entities, but same interface. Just structured natural language in markdown format loaded into the models context.


An “Agent” is a markdown document describing behavior.
A “Skill” is a markdown document describing how to perform a task.
A “tool” is a markdown (okay, sometimes JSON ;) describing inputs and outputs.
System rules, examples, rubrics, persistent memory - all follow the same pattern.


In Unix, a file does nothing until it’s opened, piped, or executed.
In agent systems, a markdown file does nothing until it’s loaded into the models context.

Context is the runtime!

In traditional software, runtime is where the code actually comes alive. It holds variables, stack, heap, function calls, etc.

For LLMs, there is no separate execution environment. The model doesn’t actually run code, it conditions on text. The context window is where state lives, where rules are configured, and where behavior is shaped. 2 identical models with different contexts behave like 2 different programs. 

Like how Unix taught us that simple interfaces enable powerful systems, the modern AI is teaching us that context is that interface and runtime.`,
  polished: true
};

export default data;
