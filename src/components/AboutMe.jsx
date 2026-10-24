function AboutMe() {
  const aboutMeParagraph =
    "I'm an aspiring software engineer currently based in Brooklyn. I'm self taught in all things tech and I love working with smart people to solve tough problems. Outside of my professional pursuits, I'm a passionate musician who loves playing the drums and seeing any kind of live performance that I can. I also enjoy staying active, playing soccer and riding my bike all over New York City.\n\nThanks for visiting my portfolio. I look forward to connecting with you!";

  return (
    <div>
      <div className="profile-photo">
        <img src="/profile-photo-1.jpg" alt="Me on a Kennesaw Mountain hike" />
      </div>
      <div className="about-me">
        <div className="about-me-headers">
          <h1>Hi, I&apos;m Cameron.</h1>
          <div className="easter-egg">
            <p>(future)</p>
          </div>
        </div>
        <h2>Software Engineer</h2>
        <p className="about-me-paragraph">{aboutMeParagraph}</p>
      </div>
    </div>
  );
}

export default AboutMe;
