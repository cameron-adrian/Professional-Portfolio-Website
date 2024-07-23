import React from "react";
// import { faReact } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Drum Pattern Randomizer",
      description:
        "This app is designed to help you learn new patterns outside of the standard rudiments taught to drummers. The app presents you with a random drum pattern, including accented and ghosted notes.\n\nThis project is built with React/Vite and styled with CSS.",
      link: "https://github.com/cameron-adrian/drum-practice-app",
    },
    {
      id: 2,
      title: "Spotify Playlist Assistant",
      description:
        "This app is designed to help you manage your Spotify playlists in a more granular and detailed way than you can within Spotify at the moment. You can view all of your playlists additional information about each one.\n\nThis project is built with a Django backend, styled with CSS, and uses the Spotify API.",
      link: "https://github.com/cameron-adrian/Spotify-Playlist-Assistant",
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View Project on GitHub</a>
          {/* <FontAwesomeIcon className="icon" size="2x" icon={faReact} /> */}
        </div>
      ))}
    </section>
  );
}

export default Projects;
