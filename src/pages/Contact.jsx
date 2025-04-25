import React, { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (no backend specified)
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-us-container">
      <section className="hero-section">
        <h1 className="hero-title">Contact Us</h1>
        <p className="hero-subtitle">
          Have questions about our hotels or menus? Reach out to us!
        </p>
      </section>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h2 className="section-title">Get in Touch</h2>
          <div className="info-item">
            <PhoneIcon className="icon w-6 h-6 text-gray-600" />
            <p>+254 123 456 789</p>
          </div>
          <div className="info-item">
            <EnvelopeIcon className="icon w-6 h-6 text-gray-600" />
            <p>support@hotelmenus.app</p>
          </div>
          <div className="info-item">
            <MapPinIcon className="icon w-6 h-6 text-gray-600" />
            <p>Nairobi, Kenya</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          {isSubmitted ? (
            <div className="success-message">
              <p>Thank you for your message! We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="section-title">Send Us a Message</h2>
              <div className="form-group">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-input"
                  required
                  aria-label="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="form-input"
                  required
                  aria-label="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="form-input"
                  required
                  aria-label="Subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="form-textarea"
                  rows="5"
                  required
                  aria-label="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
