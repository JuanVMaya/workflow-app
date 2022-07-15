const express = require('express');
const app = express();
const projectsRoutes = require('./routes/projects');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/projects', projectsRoutes);

app
    .listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`);
    })