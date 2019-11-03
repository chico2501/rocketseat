const express = require("express");

const server = express();

server.use(express.json());

const projects = [
  {
    id: "1",
    title: "novo projeto",
    tasks: []
  },
  {
    id: "2",
    title: "Projeto X",
    tasks: []
  }
];

let contator = 0;
function logRequests(req, res, next) {
  contator++;

  console.log(`Número de requisições até agora: ${contator}`);

  return next();
}

server.use(logRequests);

function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(projetoId => projetoId.id == id);

  if (!project) {
    return res.status(400).json({ error: "Projeto não exsite." });
  }

  return next();
}

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(projects);
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(projetoId => projetoId.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(projetoId => projetoId.id == id);

  project.title = title;

  return res.json(project);
});

server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(projetoId => projetoId.id == id);

  project.tasks.push(title);

  return res.json(projects);
});

server.listen(3000);
