// components/Contact.js
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PopupButton } from "react-calendly";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p className="contact-copy">
          I'm always looking for new opportunities to collaborate on projects,
          learn new technologies, and meet new people. If you're interested in
          working together, feel free to reach out to me by email or by booking
          a meeting with me using Calendly!
        </p>
        <div className="contact-block">
          <a className="contact-email" href="mailto:camerontadrian@gmail.com">
            <FontAwesomeIcon className="icon" icon={faEnvelope} size="xl" />
            <span>camerontadrian@gmail.com</span>
          </a>
          <PopupButton
            className="calendly-button"
            url="https://calendly.com/cameronadrian/lets-chat"
            rootElement={document.getElementById("root")}
            text="Book Meeting"
            pageSettings={{
              backgroundColor: "3e4a61",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "c24d2c",
              textColor: "d9dad7",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
