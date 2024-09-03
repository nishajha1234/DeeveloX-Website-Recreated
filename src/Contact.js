import React, { useState } from 'react';
import './Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    question: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend, show success message)
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      subject: '',
      question: ''
    });
    // Optionally, show success message to user
    alert('Form submitted successfully!');
  };

  return (
    <div className="contact-us">
      <main>
        <section className="contact-info">
          <h1>Contact Us</h1>
          <p>Contact us about anything related to our company or services. We'll do our best to get back to you as soon as possible.</p>
        </section>
        <section className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required  // HTML5 attribute for required field
            />

            <label htmlFor="phone">Phone Number</label>
            <div className="phone-input">
              <span>+91</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required  // HTML5 attribute for required field
            />

            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />

            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required  // HTML5 attribute for required field
            />

            <label htmlFor="question">Question *</label>
            <textarea
              id="question"
              name="question"
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              required  // HTML5 attribute for required field
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>
        <section className="company-info">
          <p>Trivion Technologies Private Limited</p>
          <p><a href="https://maps.google.com/?q=G-03,%20Capital%20High%20Street,%20Mahal%20Road,%20Jaipur" target="_blank" rel="noopener noreferrer"><FaLocationDot /> G-03, Capital High Street, Mahal Road, Jaipur</a></p>
          <p><a href="tel:+918005642075"><IoMdCall /> +91 80056 42075</a></p>
          <p><a href="mailto:hello@deevelox.com"><IoMdMail /> hello@deevelox.com</a></p>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
