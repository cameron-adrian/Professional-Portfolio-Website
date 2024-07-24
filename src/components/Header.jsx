import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [namePlate, setNamePlate] = useState("Cameron Adrian");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50 || window.innerWidth < 1000) {
        header.classList.add("shrink");
        setNamePlate("CA");
      } else {
        header.classList.remove("shrink");
        setNamePlate("Cameron Adrian");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav>
        <ul className="header-leftside">
          <li className="my-name">
            <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              {namePlate}
            </a>
          </li>
        </ul>
        <ul className="header-rightside">
          <li className="projects-header">
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li className="contact-header">
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
          <div className="vertical-divider"></div>
          <li className="header-icons">
            <a
              href="https://www.linkedin.com/in/cameronadrian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" size="xl" icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/cameron-adrian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" size="xl" icon={faGithub} />
              {/* TODO: Find out how to inverse the colors on hover*/}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
