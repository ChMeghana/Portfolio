import React, { useEffect, useState } from 'react';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects')
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div>
            <h1>My Projects</h1>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link}>View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
