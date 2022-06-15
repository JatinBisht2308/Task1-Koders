import React, { useState } from "react";
import "./ContactForm.css";
import "animate.css";
import AOS from "aos";
function ContactForm() {
  AOS.init();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

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
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        
        <textarea
          placeholder="Message"
          rows="5"
          data-aos="fade-left"
          data-aos-delay="700"
          onChange={(e) => {
            setText(e.target.value);
          }}
          style={{resize: 'none'}}
        />
        <button
          className="contact_btn"
          type="submit"
          data-aos="fade-right"
          data-aos-delay="750"
          onClick={() => {
            window.open(`http://api.whatsapp.com/send?phone=919720058865&text=${`Hi, I am ${name}, I want to ask ${text}`}`, "_blank")
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
