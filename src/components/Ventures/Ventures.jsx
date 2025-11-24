// src/components/Ventures/Ventures.jsx
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../common/Button/Button";
import Card, { CardBody } from "../common/Card/Card";
import "./Ventures.css";

const Ventures = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContactOnPage = () => {
    try {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.focus?.();
        return true;
      }
    } catch (err) {}
    return false;
  };

  const handleContactClick = (e) => {
    e && e.preventDefault?.();

    if (scrollToContactOnPage()) return;

    try {
      sessionStorage.setItem("scrollToContact", "1");
    } catch (err) {}

    navigate("/#contact");
  };

  const ventures = [
    { id: 1, name: "Universal Builders & Developers", description: "Specializing in residential and commercial construction, focusing on high-quality apartments, villas, and plotted site developments.", image: "/images/fenix-builders.jpeg", link: "/ventures#builders" },
    { id: 2, name: "Universal Exports & Imports", description: "Currently exporting premium quality rice to Saudi Arabia, expanding to other international markets and exploring new product categories.", image: "/images/fenix-exports.jpeg", link: "/ventures#exports" },
    { id: 3, name: "Universal Interior Solutions", description: "Complete end-to-end interior design and execution service provider for residential and commercial spaces.", image: "/images/fenix-interior.jpeg", link: "/ventures#interior" },
    { id: 4, name: "Universal Multi Trading", description: "Engaged in TMT Steel Trading, with vision to diversify into various commodities and trading opportunities.", image: "/images/fenix-multitrading.jpeg", link: "/ventures#trading" },
  ];

  return (
    <section id="ventures" className="ventures section">
      <div className="container">
        <div className="ventures-header text-center mb-4">
          <h2 className="ventures-title no-scroll-animate">Our Business Ventures</h2>
          <p className="ventures-subtitle no-scroll-animate">
            Diverse industries, unified excellence - Building a better tomorrow through innovation and quality
          </p>
        </div>

        <div className="ventures-grid">
          {ventures.map((venture) => (
            <Card key={venture.id} hover className="venture-card reveal">
              <div className="venture-image">
                <img src={venture.image} alt={venture.name} onError={(e) => (e.target.src = "/images/multi.jpeg")} />
                <div className="venture-overlay">
                  <div className="venture-number">0{venture.id}</div>
                </div>
              </div>

              <CardBody>
                <h3 className="venture-name">{venture.name}</h3>
                <p className="venture-description">{venture.description}</p>

                <Button variant="secondary" size="small" onClick={handleContactClick}>
                  Contact
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="ventures-cta text-center mt-4 no-scroll-animate">
          <h1>Ready to Colabrate?</h1>
          <p>Join us in our journey of growth and innovation</p>

          <div className="cta-actions">
            {/* Contact / Partner With Us */}
            <Button variant="primary" size="large" onClick={handleContactClick}>
              Partner With Us
            </Button>

            {/* VIEW ALL VENTURES -> now points to the dedicated VenturesPage route */}
            <Link to="/ventures">
              <Button variant="primary" size="large">
                View All Ventures
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
