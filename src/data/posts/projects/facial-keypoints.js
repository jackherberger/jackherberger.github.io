import fs from "fs";

const markdown = fs.readFileSync("./facial-keypoints.md", "utf8");

const data = {
  id: 10,
  title: "Facial Keypoints",
  subtitle: "Detecting Facial Keypoints using Deep Learning",
  tags: ["Machine Learning", "Computer Vision"],
  date: "2024-02-04T12:00:00",
  services: ["Deep Learning", "Computer Vision", "PyTorch"],
  image: null,
  content: markdown,
  polished: true
};

const output = `
const data = ${JSON.stringify(data, null, 2)};

export default data;
`;

fs.writeFileSync("./facial-keypoints.js", output);