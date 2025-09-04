import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        <a href="mailto:thomas@example.com" className="contact-link">📧 Email</a>
        <a href="tel:+1234567890" className="contact-link">📞 Phone</a>
        <a href="https://www.linkedin.com/in/thomasbentivoglio" target="_blank" rel="noopener noreferrer" className="contact-link">🔗 LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;