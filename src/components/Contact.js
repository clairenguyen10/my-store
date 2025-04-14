import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <div className="contact-wrapper">
    <div className="contact-page">
      <h2>Contact me!</h2>
      <p>Send me an email for questions about the items (sizing, condition, etc.) shipping, or any other concerns! 💌</p>

      <br></br>

      <form action="https://formsubmit.co/clairenguyen10502@gmail.com" method="POST">
      <p><strong>Name</strong></p>

      <input type="text" name="name" className="name-input" placeholder="Your name" required />
      <p><strong>Email</strong></p>

      <input type="email" name="email" className="email-input" placeholder="Your email" required />
      <p><strong>Message</strong></p>

      <textarea name="message" className="message-input" placeholder="Your message..." required></textarea>

      <br></br>

      <button type="submit" className="submit-button">Send!</button>
      </form>

    </div>
    </div>
  )
}

export default Contact;