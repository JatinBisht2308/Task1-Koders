import React from "react";
import "./ContactForm.css";
import "animate.css";
import AOS from "aos";
function ContactForm() {
  AOS.init();
  return (
    <div className="ContactForm">
      <div
        className="ContactForm_container"
        data-aos="fade-right"
        data-aos-delay="150"
      >
        <input
          type="text"
          placeholder="Your Name"
          data-aos="fade-left"
          data-aos-delay="500"
        />
        <input
          type="email"
          placeholder="E-mail"
          data-aos="fade-right"
          data-aos-delay="650"
        />
        <textarea
          placeholder="Message"
          rows="5"
          data-aos="fade-left"
          data-aos-delay="700"
        />
        <button
          className="contact_btn"
          type="submit"
          data-aos="fade-right"
          data-aos-delay="750"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
