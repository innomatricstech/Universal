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
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // support “scroll to #contact” from other pages
  useEffect(() => {
    try {
      const flag = sessionStorage.getItem("scrollToContact");
      if (flag && document.getElementById("contact")) {
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth", block: "start" });
        sessionStorage.removeItem("scrollToContact");
      }
    } catch {}
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/ventures", label: "Ventures" },
    { path: "/gallery", label: "Gallery" },
  ];

  const scrollToContactOnPage = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
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
      } catch {}
      navigate("/#contact");
    }
    setIsMenuOpen(false);
  };

  const handleNavHover = (i) => setActiveIndex(i);
  const handleNavLeave = () => setActiveIndex(-1);

  return (
    <header
      className={`header ${isScrolled ? "header-scrolled" : ""} ${
        isHovered ? "header-hovered" : ""
      } ${isMenuOpen ? "header-menu-open" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* subtle decorative bg */}
      <div className="header-background">
        <div className="floating-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
      </div>

      <div className="header-content">
        {/* logo + brand */}
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
          </div>
          <div className="logo-text">
            <span className="logo-main" style={{ color: "orange" }}>
              Universal <span>Ventures</span>
            </span>
            <span className="logo-sub" style={{ color: "green" }}>
              Universal Group
            </span>
          </div>
        </Link>

        {/* navigation */}
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
                <span className="nav-dot" />
              </Link>
              <div className="nav-highlight" />
            </div>
          ))}
        </nav>

        {/* actions */}
        <div className="header-actions">
          <Button
            variant="primary"
            size="small"
            className="cta-button"
            onClick={handleContactClick}
          >
            <span className="btn-text">Contact Us</span>
            <span className="btn-icon">→</span>
            <div className="btn-shine" />
          </Button>

          {/* round mobile hamburger */}
          <button
            className={`menu-toggle ${isMenuOpen ? "menu-toggle-open" : ""}`}
            onClick={() => setIsMenuOpen((s) => !s)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* mobile overlay (click to close) */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu-background">
            <div className="mobile-shapes">
              <div className="mobile-shape m-shape-1" />
              <div className="mobile-shape m-shape-2" />
              <div className="mobile-shape m-shape-3" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
