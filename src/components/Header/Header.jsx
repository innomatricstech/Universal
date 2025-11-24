// src/components/Header/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../common/Button/Button";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/ventures", label: "Ventures" },
    { path: "/gallery", label: "Gallery" },
  ];

  const scrollToContactOnPage = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    }
    return false;
  };

  const handleContactClick = () => {
    if (location.pathname === "/") {
      scrollToContactOnPage();
    } else {
      try {
        sessionStorage.setItem("scrollToContact", "1");
      } catch (e) {
        console.error("Session storage error:", e);
      }
      navigate("/#contact");
    }
    
    setIsMenuOpen(false);
  };

  const handleNavHover = (index) => {
    setActiveIndex(index);
  };

  const handleNavLeave = () => {
    setActiveIndex(-1);
  };

  return (
    <header 
      className={`header ${isScrolled ? "header-scrolled" : ""} ${isHovered ? "header-hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Elements */}
      <div className="header-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="glow-effect"></div>
      </div>

      <div className="container">
        <div className="header-content">
          {/* Enhanced Logo with Animation */}
          <Link 
            to="/" 
            className="logo" 
            aria-label="Go to homepage"
            onMouseEnter={() => setIsHovered(true)}
          >
            <div className="logo-container">
              <img 
                src="/images/multi.png" 
                alt="Universal MultiTrading Inc" 
                className="logo-image"
              />
              <div className="logo-glow"></div>
            </div>
            <div className="logo-text">
              <span className="logo-main">Universal Multi-Trading</span>
              <span className="logo-sub">Universal Group</span>
            </div>
          </Link>

          {/* Enhanced Navigation with Hover Effects */}
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            {navItems.map((item, index) => (
              <div 
                key={item.path}
                className="nav-item-wrapper"
                onMouseEnter={() => handleNavHover(index)}
                onMouseLeave={handleNavLeave}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "nav-link-active" : ""
                  } ${activeIndex === index ? "nav-link-hover" : ""}`}
                >
                  <span className="nav-text">{item.label}</span>
                  <span className="nav-dot"></span>
                </Link>
                <div className="nav-highlight"></div>
              </div>
            ))}
            
            {/* Animated Cursor Trail for Desktop */}
            <div className="nav-cursor-trail"></div>
          </nav>

          {/* Enhanced Header Actions */}
          <div className="header-actions">
            <Button
              variant="primary"
              size="small"
              className="cta-button"
              onClick={handleContactClick}
            >
              <span className="btn-text">Contact Us</span>
              <span className="btn-icon">→</span>
              <div className="btn-shine"></div>
            </Button>

            {/* Enhanced Mobile Menu Toggle */}
            <button
              className={`menu-toggle ${isMenuOpen ? "menu-toggle-open" : ""}`}
              onClick={() => setIsMenuOpen((s) => !s)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <div className="menu-circle"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="mobile-menu-background">
            <div className="mobile-shapes">
              <div className="mobile-shape m-shape-1"></div>
              <div className="mobile-shape m-shape-2"></div>
              <div className="mobile-shape m-shape-3"></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;