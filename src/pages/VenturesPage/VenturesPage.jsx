// src/pages/VenturesPage/VenturesPage.jsx

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button/Button'
import Card, { CardBody } from '../../components/common/Card/Card'
import { getVentures, getServices } from '../../utils/data.js'
import { initRevealAnimations } from '../../utils/helpers.js'
import './VenturesPage.css'

const VenturesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const ventures = getVentures()
  const services = getServices()

  const categories = [
    { id: 'all', name: 'All Ventures' },
    { id: 'construction', name: 'Construction' },
    { id: 'trade', name: 'Trade' },
    { id: 'design', name: 'Design' },
    { id: 'services', name: 'Services' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'consumer-goods', name: 'Consumer Goods' },
    { id: 'non-profit', name: 'Non-Profit' }
  ]

  const filteredVentures =
    activeCategory === 'all'
      ? ventures
      : ventures.filter((venture) => venture.category === activeCategory)

  useEffect(() => {
    initRevealAnimations()
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="ventures-page">

      {/* HERO SECTION */}
      <section className="ventures-hero">
        <div className="container">
          <div className="ventures-hero-content">
            <h1 className="ventures-hero-title fade-in-up">Our Business Ventures</h1>
            <p className="ventures-hero-subtitle fade-in-up">
              Diverse industries, unified excellence – Building a better tomorrow through innovation and quality
            </p>

            <div className="ventures-hero-actions fade-in-up">
              <Link to="/gallery">
                <Button variant="secondary" size="large">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="ventures-hero-overlay"></div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="services-overview section">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Our Service Categories</h2>
            <p>Comprehensive solutions across multiple industries</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <Card key={index} hover className="service-card reveal">
                <CardBody className="text-center">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>

                  <div className="service-ventures">
                    <strong>Ventures:</strong>
                    <div className="venture-tags">
                      {service.ventures.map((venture, idx) => (
                        <span key={idx} className="venture-tag">
                          {venture}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VENTURE FILTER */}
      <section className="ventures-filter-section section">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Explore Our Ventures</h2>
            <p>Discover our diverse portfolio of businesses</p>
          </div>

          <div className="filter-controls">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="ventures-grid">
            {filteredVentures.map((venture) => (
              <Card key={venture.id} hover className="venture-card reveal">

                <div className="venture-image">
                  <img
                    src={venture.image}
                    alt={venture.name}
                    onError={(e) => (e.target.src = '/images/multi.jpeg')}
                  />

                  <div className="venture-overlay">
                    <div className="venture-number">0{venture.id}</div>
                    <span className="venture-category">{venture.category}</span>
                  </div>
                </div>

                <CardBody>
                  <h3 className="venture-name">{venture.name}</h3>
                  <p className="venture-description">{venture.description}</p>

                  {/* UPDATED BUTTONS */}
                  <div className="venture-actions">
                    <Link to={`/ventures#${venture.category}`}>
                      <Button variant="primary" size="small">
                        Learn More
                      </Button>
                    </Link>

                    <Link to="/contact">
                      <Button variant="secondary" size="small">
                        Contact
                      </Button>
                    </Link>
                  </div>
                </CardBody>

              </Card>
            ))}
          </div>

          {filteredVentures.length === 0 && (
            <div className="no-results text-center">
              <h3>No ventures found in this category</h3>
              <p>Please select a different category to view our ventures.</p>

              <Button variant="primary" onClick={() => setActiveCategory('all')}>
                View All Ventures
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* STATS */}
      <section className="ventures-stats section">
        <div className="container">
          <div className="stats-grid">

            <div className="stat-item reveal">
              <div className="stat-number">9+</div>
              <div className="stat-label">Business Ventures</div>
            </div>

            <div className="stat-item reveal">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>

            <div className="stat-item reveal">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>

            <div className="stat-item reveal">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="ventures-cta section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Interested in Our Ventures?</h2>
            <p>Let's discuss how we can work together to achieve mutual success</p>

            <div className="cta-actions">
              <Link to="/contact">
                <Button variant="primary" size="large">
                  Start Partnership
                </Button>
              </Link>

              <Link to="/about">
                <Button variant="secondary" size="large">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default VenturesPage
