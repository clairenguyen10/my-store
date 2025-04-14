import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us!</h2>
      <p>email: clairenguyen10502@gmail.com 💌</p>

      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message..." />
        <button type="submit">Send</button>
      </form>

    </div>
  )
}

export default Contact;