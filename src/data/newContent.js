// Technical Stories
import alexnetsHiddenGift from './posts/technical/alexnets-hidden-gift';
import keysOnARing from './posts/technical/keys-on-a-ring';
import publicMachinePrivateFiles from './posts/technical/public-machine-private-files';
import stronglyTyped from './posts/technical/strongly-typed';
import everythingIsAMarkdownFile from './posts/technical/everything-is-a-markdown-file';

// Personal Writing
import theDeTethering from './posts/personal/the-de-tethering';
import valuesInWorkAndLife from './posts/personal/values-in-work-and-life';
import myStory from './posts/personal/my-story';

// Projects
import sonosApiSetup from './posts/projects/sonos-api-setup';
import esp32Cam from './posts/projects/esp32-cam';
import househunter from './posts/projects/househunter';
import fairwayForecast from './posts/projects/fairway-forecast';
import relationalNfl from './posts/projects/relational-nfl';
import logger from './posts/projects/logger';
import byotcp from './posts/projects/byotcp';
import vida from './posts/projects/vida';
import movieRecommender from './posts/projects/movie-recommender';
// import facialDetector from './posts/projects/facial-keypoints.js';


// Open Questions
import modelAddiction from './posts/questions/model-addiction';
import isIgnoranceBliss from './posts/questions/is-ignorance-bliss';

export const technicalStories = [
  alexnetsHiddenGift,
  keysOnARing,
  publicMachinePrivateFiles,
  stronglyTyped,
  everythingIsAMarkdownFile,
];

export const personalWriting = [
  theDeTethering,
  valuesInWorkAndLife,
  myStory,
];

export const projects = [
  vida,
  sonosApiSetup,
  esp32Cam,
  househunter,
  fairwayForecast,
  relationalNfl,
  movieRecommender,
  logger,
  byotcp,
]


export const openQuestions = [
  modelAddiction,
  isIgnoranceBliss,
];

export const blogPosts = [
  ...technicalStories.map(p => ({ ...p, category: ['Technical'], id: `technical-${p.id}` })),
  ...personalWriting.map(p => ({ ...p, category: ['Personal'], id: `personal-${p.id}` })),
  ...openQuestions.map(p => ({ ...p, category: p.id === 2 ? ['Technical', 'Philosophical'] : ['Philosophical'], id: `question-${p.id}` })),
].sort((a, b) => new Date(b.date) - new Date(a.date));
