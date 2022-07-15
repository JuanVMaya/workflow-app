const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');


//create function to read projects file
const readProjects = () => {
    const projectsDataFile = fs.readFileSync('./data/projects.json');
    const projectsData = JSON.parse(projectsDataFile);
    return projectsData;
}


//create endpoint to get all projects
//GET
router
    .get('/', (req, res) => {
        const projectsData = readProjects();

        const filteredData = projectsData.map((project) => {
            return {
                name: project.name,
                id: project.id
            }
        });
        
        res.status(200).json(filteredData);
    });


//create endpoint to get selected project
//GET


//create endpoint to add new project
//POST


//create endpoint to update task stage
//PUT


//create endpoint to delete project
//PUT



module.exports = router;
