// src/components/Header/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../common/Button/Button";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu on route change
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
      // Already on home → just scroll
      scrollToContactOnPage();
    } else {
      // Not on home → navigate to home and set a flag so Home can scroll on mount.
      // Use sessionStorage so it's cleared on tab close / next session.
      try {
        sessionStorage.setItem("scrollToContact", "1");
      } catch (e) {
        // storage may fail in some strict privacy modes — ignore
      }
      // Use react-router navigate to avoid full reload (works with hash too).
      // Using a hash helps if you prefer native anchor behavior; we still set the sessionStorage as fallback.
      navigate("/#contact");
    }
    // close mobile menu after click (mobile ux)
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" aria-label="Go to homepage">
            <img src="/images/multi.jpeg" alt="Universal MultiTrading Inc" />
            <div className="logo-text">
              <span className="logo-main">Universal MultiTrading</span>
              <span className="logo-sub">Fenix Group</span>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "nav-link-active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            {/* Scroll or navigate+scroll to Contact Section */}
            <Button
              variant="primary"
              size="small"
              className="cta-button"
              onClick={handleContactClick}
            >
              Contact Us
            </Button>

            <button
              className={`menu-toggle ${isMenuOpen ? "menu-toggle-open" : ""}`}
              onClick={() => setIsMenuOpen((s) => !s)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
