const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error(err));

const Project = require('./models/Project');

app.get('/projects', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});
