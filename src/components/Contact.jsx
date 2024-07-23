// components/Contact.js
import React from "react";
import { PopupButton, InlineWidget } from "react-calendly";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-block">
        <p className="contact-copy">
          I'm always looking for new opportunities to collaborate on projects,
          learn new technologies, and meet new people. If you're interested in
          working together, feel free to reach out to me by email or by
          scheduling a meeting with me using the Calendly from below!
        </p>
      </div>
      <div className="calendly-inline-widget-container">
        <InlineWidget
          url="https://calendly.com/cameronadrian/lets-chat"
          pageSettings={{
            backgroundColor: "3e4a61",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "c24d2c",
            textColor: "d9dad7",
            dataResize: true,
          }}
        />
      </div>
    </section>
  );
}

export default Contact;
{
  /* <PopupButton
className="calendly-button"
url="https://calendly.com/cameronadrian/lets-chat"
rootElement={document.getElementById("root")}
text="Book time with me using Calendly"
pageSettings={{
  backgroundColor: "3e4a61",
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: "c24d2c",
  textColor: "d9dad7",
}}
/> */
}

// <form className="contact-form">
// <input type="email" placeholder="Email" required />
// <input type="text" placeholder="Name" required />
// <textarea placeholder="Message" required></textarea>
// <button type="submit">Send</button>
// </form>
