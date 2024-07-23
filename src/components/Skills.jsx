import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// TODO: move this out of the header into the main page maybe? Or make it a dropdown or button?
// TODO: Add icons for each skill
function Skills() {
  const skills = ["JavaScript", "React", "Node.js", "Python", "SQL", "Git"];

  return (
    <div className="skills">
      <h2>My Skills</h2>
      <FontAwesomeIcon className="icon" size="2x" icon={faGithub} />
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill} </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
