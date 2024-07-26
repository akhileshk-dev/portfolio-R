import React from 'react';
import "./Contact.css";
import  { useRef,useState } from 'react';
import emailjs from "emailjs-com";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Contact = () => {
  const [send,setSend]=useState(false);
  const form=useRef();
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_x9vxqz3', 'template_3nita1q', form.current, '2CJtT0OV9t6vqrQQ4');
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <IoIosMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>akhileshk1610@gmail.com</h5>
            <a href="mailto:akhileshk1610@gmail.com">Send a Message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+919072541210</h5>
            <a href="https://wa.me/qr/QCVPUTHZCXE4M1">Send a Message</a>
          </article>
          <article className='contact__option'>
            <FaInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>ak__hi__le__sh__</h5>
            <a href="https://www.instagram.com/ak__hi__le__sh__?igsh=MWkxMGgzYzA4a2l0OQ">Send a Message</a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required onChange={()=>{setSend(false)}}/>
          <input type="email" name='email' placeholder='Your Email' required onChange={()=>{setSend(false)}}/>
          <textarea name="message" rows="7" placeholder='Your Message' required onChange={()=>{setSend(false)}}></textarea>
          <button type='submit' className='btn btn-primary' onClick={()=>{setSend(true)}}>Send Message</button>
          {send?<h5 className='success'>message was send successfully</h5>:""}
        </form>
      
      </div>

    </section>
  )
}

export default Contact