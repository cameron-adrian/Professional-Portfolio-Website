import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function Header() {
  const [isShrunk, setIsShrunk] = useState(false);

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => setIsShrunk(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isShrunk ? "shrink" : ""}>
      <nav>
        <ul className="header-leftside">
          <li className="my-name">
            <a href="#">
              <span className="desktop-only">
                {isShrunk ? "[CA]" : "Cameron Adrian"}
              </span>
              <span className="mobile-only">[CA]</span>
            </a>
          </li>
        </ul>
        <ul className="header-rightside">
          <li className="projects-header">
            <a href="#projects">Projects</a>
          </li>
          <li className="contact-header">
            <a href="#contact">Contact</a>
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
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
