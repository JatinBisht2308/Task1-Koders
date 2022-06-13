import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import { ImLocation } from "react-icons/im";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import "animate.css";
import AOS from "aos";

function Contact() {
  AOS.init();
  return (
    <div className="Contact">
      <Navbar />
      <div className="Contact_outer_container">
        <div className="Contact_container">
          <div
            className="contact_details"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h1>Contact Us</h1>
            <p>
              Fill up the form and our team will get back to you within 24
              hours.
            </p>
            <div className="contact_desc">
              <p className="phone">
                <AiOutlinePhone
                  style={{
                    color: "#CD9F58",
                    position: "relative",
                    top: "4px",
                    fontSize: "18px",
                    marginRight: "2px",
                  }}
                />{" "}
                +91 9876543210
              </p>
              <p className="email">
                <AiOutlineMail
                  style={{
                    color: "#CD9F58",
                    position: "relative",
                    top: "4px",
                    fontSize: "18px",
                    marginRight: "2px",
                  }}
                />{" "}
                leharevents@gmail.com
              </p>
              <p className="address">
                <ImLocation
                  style={{
                    color: "#CD9F58",
                    position: "relative",
                    top: "4px",
                    fontSize: "18px",
                    marginRight: "2px",
                  }}
                />{" "}
                Kargi Chowk, Dehradun, 248001
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
