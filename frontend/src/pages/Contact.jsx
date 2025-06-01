import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm('service_3ehb1fi', 'template_o79br1n', form.current, {
        publicKey: 'xhgMt49JGQnHw5fnx', 
      })
      .then(
        () => {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
            });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="contact">
      <div className='extra'>
        <h3>Let's Chat.
          <br></br>
          Write the queries you are facing. I'll help resolve them.
        </h3>
        <br></br>
        <div className='con'>Contact - +91 70157-14507</div>
      </div>
      <form ref={form} onSubmit={sendEmail}> 
        <h2>Reach Out To Us</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            name="from_name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email"
            name="from_email"
            required
          />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter Your Message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;