import React from "react";
// import { faReact } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Drum Pattern Randomizer",
      description:
        "This app is designed to help you learn new patterns outside of the standard rudiments taught to drummers. The app presents you with a random drum pattern, including accented and ghosted notes. It also offers a playback option so you can hear the pattern at your chosen tempo.\n\nThis project is built with React/Vite and styled with CSS.",
      link: "https://drum-pattern-randomizer.netlify.app/",
      githubLink:
        "https://github.com/cameron-adrian/Spotify-Playlist-Assistant",
      img: "/drum-pattern-randomizer.png",
      alt: "Drum Pattern Randomizer",
    },
    {
      id: 2,
      title: "Spotify Playlist Assistant [WIP]",
      description:
        "This app is designed to help you manage your Spotify playlists in a more granular and detailed way than you can within Spotify at the moment. You can view all of your playlists with additional information about each one such as average song length. This is a project I'll be coming back to as I learn more about deploying and maintaining production-level databases with user authentication.\n\nThis project is built with a Django backend, styled with CSS, and uses the Spotify API.",
      link: "https://spotify.com",
      githubLink:
        "https://github.com/cameron-adrian/Spotify-Playlist-Assistant",
      img: "/spotify-playlist-assistant.png",
      alt: "Drum Pattern Randomizer",
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a className="project-github-link" href={project.githubLink}>
              View Project on GitHub
            </a>
          </div>
          <div className="project-image">
            <a className="project-image-link" href={project.link}>
              <img src={project.img} alt={project.alt} />
            </a>
          </div>
          {/* <FontAwesomeIcon className="icon" size="2x" icon={faReact} /> */}
        </div>
      ))}
    </section>
  );
}

export default Projects;
