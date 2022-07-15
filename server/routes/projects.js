const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

//create function to read projects file
const readProjects = () => {
  const projectsDataFile = fs.readFileSync("./data/projects.json");
  const projectsData = JSON.parse(projectsDataFile);
  return projectsData;
};

//create endpoint to get all projects
//GET
router.get("/", (req, res) => {
  const projectsData = readProjects();

  const filteredData = projectsData.map((project) => {
    return {
      name: project.name,
      id: project.id,
    };
  });

  res.status(200).json(filteredData);
});

//create endpoint to get selected project
//GET
router.get("/:id", (req, res) => {
  const projectId = req.params.id;
  const projectsData = readProjects();
  const selectedProject = projectsData.find(
    (project) => project.id === projectId
  );

  if (!selectedProject) {
    res.status(404).send("The project does not exist");
    return;
  }

  res.status(200).json(selectedProject);
});

//create endpoint to add new project
//POST
router.post("/", (req, res) => {
  if (!req.body.name || !req.body.deadline) {
    res.status(400).send("Name, and deadline are required to add project");
    return;
  }

  const projectsData = readProjects();

  const newProject = {
    name: req.body.name,
    timestamp: Date.now(),
    tasks: [],
    deadline: req.body.deadline,
    id: uniqid(),
  };

  projectsData.push(newProject);

  fs.writeFileSync("./data/projects.json", JSON.stringify(projectsData));

  res.status(201).json(newProject);
});

//create endpoint to add new task to a project
//POST
router.post("/:projectId/tasks", (req, res) => {
  if (!req.body.name || !req.body.description) {
    res.status(400).send("Name and description are required to add project");
    return;
  }

  const projectId = req.params.projectId;
  const projectsData = readProjects();

  const newTask = {
    name: req.body.name,
    description: req.body.description,
    stage: "Unassigned",
    id: uniqid(),
  };

  const selectedProject = projectsData.find(
    (project) => project.id === projectId
  );
  selectedProject.tasks.push(newTask);

  fs.writeFileSync("./data/projects.json", JSON.stringify(projectsData));

  res.status(201).json(newTask);
});

//create endpoint to update task stage
//PUT
router.put("/:projectId/tasks/:taskId/stage", (req, res) => {
  if (!req.body.instruction) {
    res.status(400).send("Instruction is required to update task stage");
    return;
  }

  const projectId = req.params.projectId;
  const taskId = req.params.taskId;
  const projectsData = readProjects();

  const selectedProject = projectsData.find(
    (project) => project.id === projectId
  );
  const selectedTask = selectedProject.tasks.find((task) => task.id === taskId);

  const stages = ["Unassigned", "Planning", "Executing", "Completed"];

  let presentStage = selectedTask.stage;
  const nextStage = req.body.instruction;

  const assignStage = () => {
    for (let i = 0; i < stages.length; i++) {
      if (nextStage === "next" && presentStage === stages[3]) {
        return presentStage;
      } else if (nextStage === "previous" && presentStage === stages[0]) {
        return presentStage;
      }

      if (nextStage === "next" && presentStage === stages[i]) {
        return stages[i + 1];
      } else if (nextStage === "previous" && presentStage === stages[i]) {
        return stages[i - 1];
      }
    }
  };

  selectedTask.stage = assignStage();

  fs.writeFileSync("./data/projects.json", JSON.stringify(projectsData));

  res.status(200).json(selectedTask);
});

//create endpoint to delete project
//DELETE
router.delete("/:id", (req, res) => {
  const projectId = req.params.id;
  const projectsData = readProjects();
  const deletedProject = projectsData.find(
    (project) => project.id === projectId
  );

  const filteredData = projectsData.filter(
    (project) => project.id !== projectId
  );

  fs.writeFileSync("./data/projects.json", JSON.stringify(filteredData));

  res.status(200).json(deletedProject);
});

module.exports = router;
