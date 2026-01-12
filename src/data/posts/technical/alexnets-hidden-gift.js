const data = {
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

The hidden benefit of CNNs, and AlexNet in particular, is that instead of extremely long flattened vectors at each layer, the layers in the model are actually grids of pixels. This empowers us to open up the model and actually look at what is happening.

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
};

export default data;