// src/components/Contact/Contact.jsx
import React, { useState, useEffect } from "react";
import Button from "../common/Button/Button";

import { FiMapPin, FiPhoneCall, FiMail, FiMap } from "react-icons/fi";
// EmailJS
import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // === Simple built-in reveal animation using IntersectionObserver ===
  useEffect(() => {
    const revealSelector = ".reveal";
    const revealElements = Array.from(document.querySelectorAll(revealSelector));

    if ("IntersectionObserver" in window && revealElements.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal--active");
              // animate once then unobserve
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.12,
        }
      );

      revealElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    } else {
      // Fallback: simply add active class to all reveals
      revealElements.forEach((el) => el.classList.add("reveal--active"));
    }
  }, []);
  // =================================================================

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const SERVICE_ID = "service_iz40ben";
      const TEMPLATE_ID = "template_fcb7s4u";
      const PUBLIC_KEY = "7nUEqtIS6zt-0J7X8";

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "N/A",
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // a nicer UI could use a toast instead of alert
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Failed to send message. Try again later!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" aria-label="Contact section" tabIndex={-1}>
      <div className="contact-wrapper">
        <div className="contact-container">
          {/* LEFT SIDE */}
          <div className="left-box reveal">
            <h2 className="left-title">UNIVERSAL VENTURES</h2>

            {/* OFFICE INFO */}
            <div className="info-row">
              <span className="icon" aria-hidden>
                <FiMapPin />
              </span>
              <div>
                <h4>OUR OFFICE</h4>
                <p>Prestige Trade Tower</p>
                <p>Level 11, The Executive Centre</p>
                <p>High Grounds, Palace Road</p>
                <p>Bangalore 560001</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="info-row">
              <span className="icon" aria-hidden>
                <FiPhoneCall />
              </span>
              <div>
                <h4>CONTACT</h4>
                <p>+91-99724 37119</p>
                <p>+91-96631 07119</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="info-row">
              <span className="icon" aria-hidden>
                <FiMail />
              </span>
              <div>
                <h4>EMAIL US</h4>
                <p>universalventuresglobal@gmail.com</p>
              </div>
            </div>

            <hr className="divider" />

            {/* MAP TITLE */}
            <h4 className="map-title">
              <FiMap style={{ marginRight: "6px" }} />
              FIND US ON THE MAP
            </h4>

            {/* MAP */}
            <div className="map-box" role="region" aria-label="Company location map">
              <iframe
                title="office-map"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "12px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.256242912509!2d77.58003617602823!3d12.9976582147737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae163ef1eba8b1%3A0xd67660d29f4a9585!2sPrestige%20Trade%20Tower!5e0!3m2!1sen!2sin!4v1705617777000!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="right-box reveal">
            <h2 className="right-title">Send Your Enquiry</h2>

            <form
              className="right-form"
              onSubmit={handleSubmit}
              aria-busy={isSubmitting}
              noValidate
            >
              <label htmlFor="contact-name" className="sr-only">
                Full Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
              />

              <label htmlFor="contact-email" className="sr-only">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />

              <label htmlFor="contact-phone" className="sr-only">
                Phone (optional)
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder="Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
              />

              <label htmlFor="contact-subject" className="sr-only">
                Service Required
              </label>
              <select
                id="contact-subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">-- Service Required --</option>
                <option value="business">Business Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="partnership">Partnership</option>
              </select>

              <label htmlFor="contact-message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <Button
                type="submit"
                variant="primary"
                size="large"
                className="submit-btn"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
