const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

const candidates = [
  { id: 1,  name: "Alice Johnson",   skills: "React, Node.js",    yearsOfExperience: 3 },
  { id: 2,  name: "Bob Williams",    skills: "Angular, Node.js",  yearsOfExperience: 5 },
  { id: 3,  name: "Charlie Brown",   skills: "Vue, PHP",          yearsOfExperience: 2 },
  { id: 4,  name: "Deborah Carter",  skills: "Java, Spring",      yearsOfExperience: 4 },
  { id: 5,  name: "Ethan Davis",     skills: "Python, Django",    yearsOfExperience: 6 },
  { id: 6,  name: "Fiona Garcia",    skills: "React, Redux",      yearsOfExperience: 2 },
  { id: 7,  name: "George Harris",   skills: "Node.js, Express",  yearsOfExperience: 5 },
  { id: 8,  name: "Helen Ingram",    skills: "C#, .NET Core",     yearsOfExperience: 7 },
  { id: 9,  name: "Ian Jackson",     skills: "Ruby, Rails",       yearsOfExperience: 3 },
  { id: 10, name: "Jane King",       skills: "React, Node.js",    yearsOfExperience: 1 },
];

app.get("/api/candidates", (req, res) => {
  res.json(candidates);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});