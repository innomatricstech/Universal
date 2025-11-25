import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button/Button'
import Card, { CardBody } from '../common/Card/Card'

import {
  FaShieldAlt,
  FaHandshake,
  FaGlobeAmericas,
  FaStar,
  FaLightbulb
} from "react-icons/fa";

import './About.css'

const About = () => {
  const coreValues = [
    {
      icon: <FaShieldAlt />,
      title: 'Integrity',
      description: 'Conducting business with honesty, fairness, and transparency'
    },
    {
      icon: <FaHandshake />,
      title: 'Trust & Reliability',
      description: 'Building long-term relationships based on mutual respect and dependability'
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Social Responsibility',
      description: 'Giving back to the community by supporting underprivileged individuals'
    },
    {
      icon: <FaStar />,
      title: 'Excellence in Quality',
      description: 'Striving for the highest standards in products and services.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Sustainability & Innovation',
      description: 'Adopting modern, eco-friendly, and efficient business practices.'
    }
  ]

  const stats = [
    { number: '2019', label: 'Founded In' },
    { number: '9+', label: 'Business Ventures' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-header text-center mb-4">
          <h2 className="about-title">About Universal Ventures Inc</h2>
          <p className="about-subtitle">
            A subsidiary of Fenix Group - Innovating for a Better Tomorrow
          </p>
        </div>

        <div className="about-content grid">
          <div className="about-text">
            <h3>Our Journey</h3>
            <p>
              Founded in 2019, Universal Ventures Inc 
              is a rapidly growing conglomerate with a strong presence in multiple industries. 
            </p>
            <p>
              Comprising of Partners namely, Manjunath S Chetty, Ahamed Basha and 
               Universal Ventures Inc has become a trusted 
              name in construction, exports, interior solutions, trading, travel services, 
              healthcare, automobile care, and more.
            </p>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <Card key={index} className="card-stats reveal">
                  <CardBody>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder shimmer">
              <img 
                src="/images/multi.png"
                alt="Universal MultiTrading Team"
                onLoad={(e) => e.target.parentElement.classList.remove('shimmer')}
              />
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3 className="text-center mb-4">Our Core Values</h3>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <Card key={index} hover className="card-primary reveal">
                <CardBody className="text-center">
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
