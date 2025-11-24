import React from 'react'
import Card, { CardBody } from '../common/Card/Card'
import './Leadership.css'

/* ⭐ Import Premium Icons */
import { 
  FaLinkedinIn, 
  FaTwitter, 
  FaEnvelope 
} from "react-icons/fa"

import { 
  FiTarget,
  FiTrendingUp,
  FiStar
} from "react-icons/fi"

const Leadership = () => {
  const leaders = [
  ]

  return (
    <section id="leadership" className="leadership section">
      <div className="container">

        <div className="leadership-header text-center mb-4">
          <h2 className="leadership-title">Our Leadership</h2>
          <p className="leadership-subtitle">
            Meet the visionary partners driving Universal Ventures Inc towards excellence
          </p>
        </div>

        {/* LEADERS GRID */}
        <div className="leaders-grid">
          {leaders.map((leader, index) => (
            <Card key={index} hover className="leader-card reveal">
              
              <div className="leader-image">
                <img 
                  src={leader.image}
                  alt={leader.name}
                  onError={(e) => { e.target.src = '/images/multi.jpeg' }}
                />

                {/* SOCIAL ICONS OVERLAY */}
                <div className="leader-overlay">
                  <div className="social-links">

                    <a href="#" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </a>

                    <a href="#" aria-label="Twitter / X">
                      <FaTwitter />
                    </a>

                    <a href="#" aria-label="Email">
                      <FaEnvelope />
                    </a>

                  </div>
                </div>
              </div>

              <CardBody className="text-center">
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
                <p className="leader-description">{leader.description}</p>
              </CardBody>

            </Card>
          ))}
        </div>

        {/* STATS */}
        <div className="leadership-stats">

          <div className="stat-item reveal">
            <div className="stat-icon">
              <FiTarget />
            </div>
            <h4>Vision Driven</h4>
            <p>Clear vision for sustainable growth and social impact</p>
          </div>

          <div className="stat-item reveal">
            <div className="stat-icon">
              <FiTrendingUp />
            </div>
            <h4>Experience</h4>
            <p>Combined decades of industry expertise</p>
          </div>

          <div className="stat-item reveal">
            <div className="stat-icon">
              <FiStar />
            </div>
            <h4>Innovation</h4>
            <p>Pioneering new approaches in multiple industries</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Leadership
