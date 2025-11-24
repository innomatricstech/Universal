import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiArrowUp } from "react-icons/fi"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/ventures', label: 'Our Ventures' },
    { path: '/gallery', label: 'Gallery' }
  ]

  const ventures = [
    'Universel Builders & Developers',
    'Universel Exports & Imports',
    'Universel Interior Solutions',
    'Universel Multi Trading'
  ]

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF />, url: '#' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: '#' },
    { name: 'Instagram', icon: <FaInstagram />, url: '#' }
  ]

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* LOGO SECTION */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/multi.png" alt="Universal Ventures" />
              <div className="logo-text">
                <span className="logo-main">Universal Ventures</span>
                <span className="logo-sub">Universal Group</span>
              </div>
            </div>

            <p className="footer-description">
              Innovating for a Better Tomorrow. Leading diverse industries with 
              excellence, innovation, and ethical business practices.
            </p>

            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* VENTURES */}
          <div className="footer-section">
            <h4>Our Ventures</h4>
            <ul className="footer-links">
              {ventures.map((venture) => (
                <li key={venture}>
                  <a href="/ventures">{venture}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">

              <div className="contact-item">
                <span className="contact-icon"><FiPhone /></span>
                <div>
                  <div>+91 96631 07119</div>
                  <div>+91 9972437119</div>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon"><FiMail /></span>
                <div>multiuniversalinc@gmail.com</div>
              </div>

              <div className="contact-item">
                <span className="contact-icon"><FiMapPin /></span>
                <div>
                  World Trade Centre, Brigade Gateway campus,
                  Rajajinagar Extn, Bangalore 560055
                </div>
                <div>
                  Prestige Trade Tower, Level 11, The Executive Centre,
                  High Grounds, Palace Road, Bangalore 560001
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Universal Ventures Inc. All rights reserved. </p>
             <p>Developed by Innomatrics Technologies</p>
            <div className="footer-legal">
            </div>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button - Inside Footer */}
      {showScrollTop && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FiArrowUp />
        </button>
      )}
    </footer>
  )
}

export default Footer