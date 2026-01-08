export const technicalStories = [
  {
    id: 1,
    title: 'AlexNets Hidden Gift',
    subtitle: 'The Ah-Ha Moment of Filters Making Deep Learning Understandable',
    date: '2026-01-04T22:08:52.490Z',
    services: ['AI', 'Computer Vision', 'Interpretability'],
    image: null,
    content: `
A few years ago I was taking a computer vision class. The first few weeks of this class we spent learning classical computer vision techniques - edge detection, SIFT features, hand-designed filters. These were algorithms that were not only effective, but legible. You could trace how an image moved through the system and understand why a particular decision was made. It felt satisfying in a very human way. But then a few weeks in, the class took a turn.

In the microcosm of that class, this change mirrored the change that happened in the Computer Vision community just a few years prior. We got to AlexNet.

AlexNet was introduced as a new approach to image classification (a task where a model is given a photo and asked to predict what object it contains - you have a photo of a dog and you want your model to output the class “dog”). At the time, most computer vision systems relied on manually designed features and separate classifications stages. AlexNex broke that form by using a single, end-to-end trained convolutional neural network (CNN) that learned directly from the raw pixels. When evaluated on the ImageNet dataset, it dramatically outperformed all previous approaches. The CV world stood still. 

Now I could talk on and on about how AlexNet and backpropagation revived deep learning and set the stage for modern day LLMs and the AI revolution we are currently in, but there’s probably a thousand YouTube videos you could watch on that. 

Instead, I want to talk about the hidden gift of AlexNet - human interpretable layers. 

When you’re learning neural networks, much of the process is surprisingly understandable. You can grasp how models are structured, what happens during training and testing, and how to interpret performance metrics. With some effort, these pieces fit together into a coherent mental model.
What’s far harder to understand is what happens inside the model during inference. When a network looks at an image of a dog and outputs the label “dog,” how does it actually get there? What internal steps does it take, and what representations is it relying on along the way?
This difficulty isn’t new, but it has become especially pronounced with modern large language models. LLMs contain billions, potentially even trillions, of parameters distributed across hundreds of layers. At that scale, the model’s internal reasoning reduces to an immense web of floating-point operations, making it nearly impossible to intuit how any specific prediction is formed.
The result is a familiar black box problem: you understand the architecture, you control the inputs, and you observe the outputs, but the reasoning in between remains opaque.
The hidden benefit of CNNs, and AlexNet in particular, is that instead of extremely long flattened vectors at each layer, the layers in the model are actually grids of pixels. 
This empowers us to open up the model and actually look at what is happening.
This is when I had my first true Ah-Ha moment with how deep learning models are working under the hood.

What you see inside AlexNet is a hierarchy of increasingly abstract visual representations. 

Early layers apply small learned filters across the image, responding to simple patterns like edges and gradients; deeper layers combine these signals into textures, parts, and eventually whole objects. (Early layers detect edges, later layers detect eyes and mouths, later layers detect a whole face, …).

What made AlexNet remarkable to me wasn’t just its performance, but the fact that this hierarchy was visible: you could literally inspect the learned filters and watch classical computer vision concepts re-emerge inside a neural network trained end-to-end. 

For me this was genuinely staggering. All of the sudden this very abstract concept made sense. The model is learning representations - that we can actually look at!

What AlexNet gave me wasn’t a breakthrough model, but a way of seeing how learning happens inside a neural network. For a brief moment in the history of deep learning, the internal representations were not only powerful, but legible: grids of activations that mirrored how humans reason about images, building meaning from edges to objects. That interpretability wasn’t an explicit design goal, but it became an invaluable teaching tool. 

Sometimes the most important breakthroughs are the ones that help us understand why a model works, not just that it does. 


Dear reader: if this intrigues you, and you’d like a post diving into the details on these learned representations with AlexNet, do let me know :)

`,
    polished: true
  },
  {
    id: 2,
    title: 'Keys on a ring',
    subtitle: 'An introduction to combinatorics',
    date: '2021-02-05T14:30:00',
    services: ['Math', 'Combinatorics'],
    image: null,
    content: `This post explores the classic combinatorics problem of counting the number of distinct ways to arrange keys on a ring, introducing concepts like circular permutations and equivalence classes.`,
    polished: false
  },
  {
    id: 3,
    title: 'Public machine, private files',
    subtitle: 'File system in user space based encryption',
    date: '2024-01-05T10:00:00',
    services: ['Cryptography', 'File Systems', 'Linux'],
    image: null,
    content: `A walkthrough of how to use FUSE (File system in User Space) to create a virtual encrypted file system. This allows you to keep your files private even on a public or shared machine.`,
    polished: false
  },
  {
    id: 4,
    title: 'Strongly typed: programming your own language',
    subtitle: 'A journey into type systems and interpreters',
    date: '2024-01-05T10:00:00',
    services: ['Programming Languages', 'Compilers', 'Type Theory'],
    image: null,
    content: `This post documents the process of designing and implementing a small, statically-typed programming language, including the lexer, parser, type checker, and interpreter.`,
    polished: false
  },
];

export const personalWriting = [
  {
    id: 1,
    title: 'The de-tethering',
    subtitle: 'Regaining control of our dopamine and attention spans',
    date: '2022-05-20T11:00:00',
    services: ['Psychology', 'Self-Help'],
    image: null,
    content: `An exploration of the modern challenges of digital distraction and a personal account of strategies to regain focus and agency in a world designed to capture our attention.`,
    polished: false
  },
  {
    id: 2,
    title: 'Values in work and life',
    subtitle: 'A personal reflection',
    date: '2023-01-10T18:45:00',
    services: ['Philosophy'],
    image: null,
    content: `A reflection on the importance of aligning personal values with professional goals, and how to navigate a career that is both fulfilling and impactful.`,
    polished: false
  },
  {
    id: 3,
    title: 'My Story',
    subtitle: 'A personal journey through tech and life\'s lessons.',
    date: '2024-01-04T10:00:00',
    services: ['Biography', 'Tech'],
    image: null,
    content: `This is where I'll tell my story. It will include my journey into the world of technology, my passions, and the lessons I've learned along the way.`,
    polished: false
  },
];

export const projects = [
  {
    id: 1,
    title: 'Sonos API setup',
    subtitle: 'A smart home integration',
    date: '2023-09-01T09:00:00',
    services: ['Web Development', 'API'],
    image: '/static/media/cserver.png',
    content: `A walkthrough of how to set up and use the Sonos API to control your speakers and integrate them into your smart home, with examples in Python and JavaScript.`,
    polished: false
  },
  {
    id: 2,
    title: 'ESP32 CAM',
    subtitle: 'A parking spot tracker',
    date: '2024-03-15T16:20:00',
    services: ['IOT', 'Hardware'],
    image: '/static/media/bud_logo2.png',
    content: `This project uses an ESP32 camera to monitor a parking spot and report its availability to a web server. A fun and practical application of IoT technology.`,
    polished: false
  },
  {
    id: 3,
    title: 'HouseHunter',
    subtitle: 'A web scraper for real estate listings',
    date: '2024-01-05T10:00:00',
    services: ['Web Scraping', 'Python', 'Data Analysis'],
    image: null,
    content: `A Python-based web scraper that collects real estate listings from various websites, normalizes the data, and provides tools for filtering and analysis.`,
    polished: false,
    link: 'https://github.com/jackherberger/HouseHunter'
  },
  {
    id: 4,
    title: 'Accelerated PGA Predictor',
    subtitle: 'A machine learning model for golf tournament outcomes',
    date: '2024-01-05T10:00:00',
    services: ['Machine Learning', 'Python', 'Data Science'],
    image: null,
    content: `This project uses historical PGA tour data to train a machine learning model that predicts the outcome of golf tournaments. The model is accelerated with GPU-based libraries for faster training.`,
    polished: false,
    link: 'https://github.com/jackherberger/Accelerated-PGA-Predictor'
  },
  {
    id: 5,
    title: 'Relational NFL',
    subtitle: 'A relational database for NFL statistics',
    date: '2024-01-05T10:00:00',
    services: ['Databases', 'SQL', 'Data Modeling'],
    image: null,
    content: `A project to design and implement a relational database for storing and querying NFL statistics, with a focus on data modeling and efficient query design.`,
    polished: false,
    link: 'https://github.com/jackherberger/NFL_statistics'
  },
  {
    id: 6,
    title: 'logger (Java world simulation)',
    subtitle: 'A Java-based simulation of a world with logging',
    date: '2024-01-05T10:00:00',
    services: ['Java', 'Simulation', 'Logging'],
    image: null,
    content: `A simulation of a world where agents interact with each other and their environment, with a focus on logging their actions and the state of the world.`,
    polished: false,
    link: 'https://github.com/jackherberger/logger'
  },
  {
    id: 7,
    title: 'BYOTCP (Build Your Own TCP)',
    subtitle: 'A from-scratch implementation of the TCP protocol',
    date: '2024-01-05T10:00:00',
    services: ['Networking', 'C++', 'TCP'],
    image: null,
    content: `An educational project to implement the TCP protocol from scratch in C++, providing a deeper understanding of how network protocols work.`,
    polished: false,
    link: 'https://github.com/jackherberger/TCPserver'
  },
];

export const openQuestions = [
  {
    id: 1,
    title: 'Model addiction',
    subtitle: 'Can LLLMs exhibit signs of addiction?',
    date: '2024-06-28T12:00:00',
    services: ['AI', 'Philosophy'],
    image: null,
    content: `An exploration into the philosophical and ethical implications of advanced AI models developing addiction-like behaviors, exploring the boundaries of consciousness and agency in artificial intelligence.`,
    polished: false
  },
  {
    id: 2,
    title: 'Is ignorance bliss?',
    subtitle: 'Is training models on "golden" data exuding ignorance?',
    date: '2026-01-04T20:53:42.353Z',
    services: ['AI', 'LLM', 'alignment'],
    image: null,
    content: `A discussion on the trade-offs of training AI models on highly curated "golden" datasets, and whether this approach limits their ability to handle the messy, unpredictable nature of real-world data.`,
    polished: false
  },
];
