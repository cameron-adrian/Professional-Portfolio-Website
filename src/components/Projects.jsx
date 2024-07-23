import React from "react";
// TODO: Move this out of the header into the main page maybe? Or make it a dropdown or button?
function Projects() {
  const projects = [
    { id: 1, title: "Project 1", description: "Description of Project 1" },
    { id: 2, title: "Project 2", description: "Description of Project 2" },
    { id: 3, title: "Project 3", description: "Description of Project 3" },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
