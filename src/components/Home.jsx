import React, { useEffect, useState } from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import AboutMe from "./AboutMe";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.body.offsetHeight - 100
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="home">
      <section id="about-me">
        <AboutMe />
      </section>
      <div className="divider"></div>
      <section id="projects">
        <Projects />
      </section>
      <div className="divider"></div>
      <section id="contact">
        <Contact />
      </section>
      <button
        className={`back-to-top-button ${isVisible ? "" : "hidden"}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to Top
      </button>
    </div>
  );
}

export default Home;
