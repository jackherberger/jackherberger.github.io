// Function to import all posts from a directory
const importAll = (r) => {
  return r.keys()
    .map(key => {
      const module = r(key);
      return module.default || module;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Technical Stories
export const technicalStories = importAll(require.context('./posts/technical', false, /\.js$/));

// Personal Writing
export const personalWriting = importAll(require.context('./posts/personal', false, /\.js$/));

// Projects
export const projects = importAll(require.context('./posts/projects', false, /\.js$/));

// Open Questions
export const openQuestions = importAll(require.context('./posts/questions', false, /\.js$/));

export const blogPosts = [
  ...technicalStories.map(p => ({ ...p, category: ['Technical'], id: `technical-${p.id}` })),
  ...personalWriting.map(p => ({ ...p, category: ['Personal'], id: `personal-${p.id}` })),
  ...openQuestions.map(p => ({ 
    ...p, 
    category: p.id === 2 ? ['Technical', 'Philosophical'] : ['Philosophical'], 
    id: `question-${p.id}` 
  })),
].sort((a, b) => new Date(b.date) - new Date(a.date));
