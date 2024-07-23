import React, { useEffect, useState } from "react";
import Projects from "./Projects";
import Contact from "./Contact";

// import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp"; TODO: figure out how to use this icon without a BLANK SCREEN EVERY TIME LOL WTF

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
      {/* TODO: write better copy lol */}
      <h1>Hi, I'm Cameron.</h1>

      <p>
        I'm on a journey to transition into a software engineering role. While I
        haven't yet worked professionally as a software engineer, my current
        position in a highly technical support role at Calendly has equipped me
        with a robust foundation in problem-solving and software systems. My
        experience has deepened my passion for coding and continuous learning,
        and I'm eager to bring this enthusiasm to a software engineering team
        where I can contribute to innovative projects. Outside of my
        professional pursuits, I'm a passionate musician who loves playing the
        drums and attending live shows. I also enjoy staying active, whether
        through sports or riding my bike all over New York City. Thanks for
        visiting my portfolio. I look forward to connecting with you!
      </p>
      <div className="intro-images">
        <img
          src="src/assets/profile-photo-1.jpg"
          alt="Me on a Kennesaw Mountain hike"
        />
        <img src="src/assets/cheeky-photo-1.jpg" alt="Me conducting business" />
        <img src="src/assets/cheeky-photo-1.jpg" alt="Description of image 3" />
      </div>

      <section id="projects">
        <Projects />
      </section>

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

// {/* Calendly inline widget begin */}
// <div class="calendly-inline-widget" data-url="https://calendly.com/cameronadrian/apartment-tour?background_color=d9dad7&text_color=3e4a61&primary_color=c24d2c" style="min-width:320px;height:700px;"></div>
// <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
// {/* Calendly inline widget end */}
