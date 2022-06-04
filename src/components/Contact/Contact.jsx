import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import { ImLocation } from 'react-icons/im';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

function Contact() {
  return (
    <div className='Contact'>
        <Navbar />
        <div className="Contact_outer_container">
        <div className="Contact_container">
        <div className="contact_details">
            <h1>Contact Us</h1>
            <p>Fill up the for and our team will get back to you within 24 hours.</p>
            <div className="contact_desc">
            <p className="phone"><AiOutlinePhone style={{ color: '#CD9F58', position: 'relative', top: '4px', fontSize: '20px', marginRight: '10px' }} /> +91 9876543210</p>
            <p className="email"><AiOutlineMail style={{ color: '#CD9F58', position: 'relative', top: '4px', fontSize: '20px', marginRight: '10px' }} /> loremipsum@gmail.com</p>
            <p className="address"><ImLocation style={{ color: '#CD9F58', position: 'relative', top: '4px', fontSize: '20px', marginRight: '10px' }} /> Kargi Chowk, Dehradun, 248001</p>
            </div>
        </div>
        <ContactForm />
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact