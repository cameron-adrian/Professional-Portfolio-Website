import React from "react";

function AboutMe() {
  const aboutMeParagraph =
    "I'm an aspiring software engineer currently based in Brooklyn. While I haven't yet worked professionally as a software engineer, my current position in a highly technical support role at Calendly has equipped me with a robust foundation in problem-solving and software systems. My experience has deepened my passion for coding and continuous learning, and I'm eager to bring this enthusiasm to a software engineering team where I can contribute to innovative projects. Outside of my professional pursuits, I'm a passionate musician who loves playing the drums and attending live shows. I also enjoy staying active, whether through sports or riding my bike all over New York City.\n\nThanks for visiting my portfolio. I look forward to connecting with you!";

  return (
    <div>
      <div className="profile-photo">
        <img
          src="src/assets/profile-photo-1.jpg"
          alt="Me on a Kennesaw Mountain hike"
        />
      </div>
      <div className="about-me">
        <h1>Hi, I'm Cameron.</h1>
        <div className="easter-egg">
          <p>(future)</p>
        </div>
        <h2>Software Engineer</h2>
        <p className="about-me-paragraph">{aboutMeParagraph}</p>
      </div>
      <div className="intro-images">
        <img
          src="src/assets/profile-photo-1.jpg"
          alt="Me on a Kennesaw Mountain hike"
        />
        <img src="src/assets/cheeky-photo-1.jpg" alt="Me conducting business" />
        <img src="src/assets/cheeky-photo-1.jpg" alt="Description of image 3" />
      </div>
    </div>
  );
}

export default AboutMe;
