import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button/Button'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const slides = [
    {
      image: '/images/fenix-interior.jpeg',
      title: 'Innovating for a Better Tomorrow',
      subtitle: 'Leading diverse industries with excellence, innovation, and ethical business practices',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      image: '/images/fenix-builders.jpeg',
      title: 'Building Sustainable Futures',
      subtitle: 'Quality construction and modern infrastructure for residential and commercial spaces',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      image: '/images/fenix-exports.jpeg',
      title: 'Universal Exports & Imports',
      subtitle: 'Currently exporting premium quality rice to Saudi Arabia',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsVisible(true)
      }, 600)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setIsVisible(false)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsVisible(true)
    }, 600)
  }

  const prevSlide = () => {
    setIsVisible(false)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsVisible(true)
    }, 600)
  }

  const goToSlide = (index) => {
    if (index === currentSlide) return
    setIsVisible(false)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsVisible(true)
    }, 600)
  }

  return (
    <section className="hero" id="home">
      {/* Compact Slider Container */}
      <div className="hero-container">
        
        {/* Smaller Slider */}
        <div className="hero-slider-section">
          <div className="hero-slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div 
                  className="hero-gradient-overlay"
                  style={{ background: slide.gradient }}
                ></div>
                <div className="hero-overlay"></div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button className="hero-control hero-prev" onClick={prevSlide} aria-label="Previous slide">
            <div className="control-inner">
              <span>‹</span>
            </div>
          </button>
          
          <button className="hero-control hero-next" onClick={nextSlide} aria-label="Next slide">
            <div className="control-inner">
              <span>›</span>
            </div>
          </button>

          {/* Indicators */}
          <div className="hero-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="indicator-progress"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="hero-content-section">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>

            <h1 className="hero-title">
              <span className="title-line">{slides[currentSlide].title}</span>
            </h1>
            
            <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
            
            {/* Action Buttons */}
            <div className="hero-actions">
              <Link to="/about" className="btn-magnetic">
                <Button variant="primary" size="large" className="btn-glow">
                  <span className="btn-content">
                    Learn More About Us
                    <span className="btn-arrow">→</span>
                  </span>
                </Button>
              </Link>
              
              <Link to="/gallery" className="btn-magnetic">
                <Button variant="secondary" size="large">
                  <span className="btn-content">
                    View Our Projects
                    <span className="btn-icon">🏗️</span>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow">
          <div className="arrow-line"></div>
          <div className="arrow-line"></div>
          <div className="arrow-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero