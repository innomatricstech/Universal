import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button/Button'
import Card, { CardBody } from '../../components/common/Card/Card'

import {
  getCompanyInfo,
  getCoreValues,
  getFuturePlans,
  // Removed getLeadership 
} from '../../utils/data.js'

import { initRevealAnimations } from '../../utils/helpers.js'
import './AboutPage.css'

/* ⭐ Icons */
import {
  FiAward,
  FiUsers,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiTarget
} from "react-icons/fi"

const AboutPage = () => {
  const companyInfo = getCompanyInfo()
  const coreValues = getCoreValues()
  const futurePlans = getFuturePlans()
  // Removed const leaders = getLeadership()

  useEffect(() => {
    initRevealAnimations()
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">

      {/* ================================
          HERO SECTION
      ================================= */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">

            <h1 className="about-hero-title no-scroll-animate">
              About Universal Ventures
            </h1>

            <p className="about-hero-subtitle no-scroll-animate">
              A subsidiary of Universell Ventures Group - Innovating for a Better Tomorrow
            </p>

            {/* ⭐ ONLY ONE BUTTON (EXPLORE OUR VENTURES) */}
            <div className="about-hero-actions no-scroll-animate">
              <Link to="/ventures">
                <Button variant="secondary" size="large">
                  Explore Our Ventures
                </Button>
              </Link>
            </div>

          </div>
        </div>

        <div className="about-hero-overlay"></div>
      </section>

      ---

      {/* ================================
          COMPANY OVERVIEW
      ================================= */}
      <section className="company-overview section">
        <div className="container">
          <div className="overview-content grid">

            <div className="overview-text">
              <h2>Our Journey</h2>

              <p>
                Founded in {companyInfo.founded}, Universal Ventures Inc
                is a rapidly growing conglomerate with a strong presence in multiple industries.
              </p>

              <p>
                Comprising of partners Manjunath S Chetty, Ahamed Basha and Col Chennakeshava Rao,
                Universal MultiTrading Inc has become a trusted name across construction, exports,
                trading, interiors, travel, healthcare, and more.
              </p>

              <div className="mission-vision">

                <Card className="mission-card reveal">
                  <CardBody>
                    <h3>Our Vision</h3>
                    <p>{companyInfo.vision}</p>
                  </CardBody>
                </Card>

                <Card className="mission-card reveal">
                  <CardBody>
                    <h3>Our Mission</h3>
                    <ul className="mission-list">
                      {companyInfo.mission.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>

              </div>
            </div>

            <div className="overview-image reveal">
              <div className="image-container">
                <img
                  src="/images/fenix-multitrading.jpeg"
                  alt="Universal MultiTrading Inc Office"
                  onError={(e) => e.target.src = '/images/fenix-multitrading.jpeg'}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      ---

      {/* ================================
          CORE VALUES
      ================================= */}
      <section className="core-values-section section">
        <div className="container">

          <div className="section-header text-center mb-4">
            <h2>Our Core Values</h2>
            <p>The principles that guide our business decisions and operations</p>
          </div>

          <div className="values-grid">
            {coreValues.map((value, index) => (
              <Card key={index} hover className="value-card reveal">
                <CardBody className="text-center">

                  {index === 0 && <div className="value-icon"><FiAward /></div>}
                  {index === 1 && <div className="value-icon"><FiShield /></div>}
                  {index === 2 && <div className="value-icon"><FiUsers /></div>}
                  {index === 3 && <div className="value-icon"><FiStar /></div>}

                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>

                </CardBody>
              </Card>
            ))}
          </div>

        </div>
      </section>

      ---

      {/* ================================
          FUTURE PLANS
      ================================= */}
      <section className="future-plans-section section">
        <div className="container">

          <div className="section-header text-center mb-4">
            <h2>Future Expansion Plans</h2>
            <p>Our vision for growth and diversification</p>

          </div>

          <div className="plans-grid">
            {futurePlans.map((plan, index) => (
              <Card key={index} hover className="plan-card reveal">

                <CardBody>
                  <div className="plan-header">
                    <div className="plan-icon">
                      <FiTrendingUp />
                    </div>

                    <h3 className="plan-category">{plan.category}</h3>
                  </div>

                  <p className="plan-description">{plan.description}</p>

                </CardBody>

              </Card>
            ))}
          </div>

        </div>
      </section>

      ---

      {/* ================================
          CTA
      ================================= */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-content text-center">

            <h2>Ready to Grow With Us?</h2>
            <p>Join our journey of innovation and excellence</p>


          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutPage