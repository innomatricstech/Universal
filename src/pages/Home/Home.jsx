// src/pages/Home/Home.jsx
import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Ventures from '../../components/Ventures/Ventures';
import Leadership from '../../components/Leadership/Leadership';
import Contact from '../../components/Contact/Contact';
import { initRevealAnimations } from '../../utils/helpers';
import { useLocation } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const location = useLocation();

  // 🟦 Animate elements
  useEffect(() => {
    initRevealAnimations();
  }, []);

  // 🟩 Auto-scroll to contact when coming from Contact button in Header
  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      }
      return;
    }

    try {
      const shouldScroll = sessionStorage.getItem("scrollToContact");
      if (shouldScroll === "1") {
        sessionStorage.removeItem("scrollToContact");
        const el = document.getElementById("contact");
        if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      }
    } catch (e) {
      /* ignore errors */
    }
  }, [location]);

  return (
    <div className="home-page">
      <Hero />
      <About />
      <Ventures />
      <Leadership />
      {/* IMPORTANT: contact section must keep id="contact" */}
      <Contact />

      {/* ================================
          ATTRACTIVE FLOATING ICON-ONLY PANEL
          (WhatsApp + Call) on the right side
         ================================ */}
      <div className="floating-contact-icons" aria-hidden={false}>
        <a
          href="https://wa.me/919972437119"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <i className="bi bi-whatsapp" aria-hidden="true"></i>
        </a>

        <a
          href="tel:9663107119"
          className="floating-btn floating-call"
          aria-label="Call us"
        >
          <i className="bi bi-telephone-fill" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
  