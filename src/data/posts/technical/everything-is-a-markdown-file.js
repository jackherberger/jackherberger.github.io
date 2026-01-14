const data = {
  id: 5,
  title: 'Everything is a (markdown) file',
  subtitle: 'The return of simple interfaces',
  date: '2026-01-13T10:00:00',
  services: ['AI', 'Unix', 'LLMs'],
  image: null,
  content: `Unix had such a simple idea that worked so well: [everything is a file](https://en.wikipedia.org/wiki/Everything_is_a_file).

A regular file, a directory, an I/O device, a pipe, a socket. All different entities, but same interface. You read from them, write to them and composition between them starts to emerge.

Modern AI agentic capabilities feels strangely similar. 

Agents, skills, tools, policies, memory - it’s all just markdown files. Different entities, but same interface. Just structured natural language in markdown format loaded into the models context.


- An “Agent” is a markdown document describing behavior.
- A “Skill” is a markdown document describing how to perform a task.
- A “tool” is a markdown (okay, sometimes JSON ;) describing inputs and outputs.
- System rules, examples, rubrics, persistent memory - all follow the same pattern.


In Unix, a file does nothing until it’s opened, piped, or executed.
In agent systems, a markdown file does nothing until it’s loaded into the models context.

Context is the runtime!

In traditional software, a runtime is where our predefined artifacts become behavior. COnfiguration is loaded, state is made available, and the program's shape is now defined.
For LLMs, there is no separate execution environment. The model doesn't run code, it responds to text. What we call "runtime" is simply the set of markdown files currently loaded into context.

Like files in Unix, these documents are passive on their own. Their power comes from the uniform interface: plain text can be read, composed, reordered, and swapped. Behavior doesn't come from special object types or hidden machinery, it emerges from which files are present, and how they're combined in context.

Simple interface, powerful composition. The same idea, returned in a new form.`,
  polished: true
};

export default data;
