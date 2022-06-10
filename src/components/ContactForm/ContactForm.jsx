import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className='ContactForm'>
        <div className="ContactForm_container">
            <input type="text" placeholder='Your Name'/>
            <input type="email" placeholder='E-mail' />
            <textarea placeholder='Message' rows="5" />
            <button className='contact_btn' type="submit">Send Message</button>
        </div>
    </div>
  )
}

export default ContactForm