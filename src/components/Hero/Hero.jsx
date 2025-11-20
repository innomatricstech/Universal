import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button/Button'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/images/fenix-interior.jpeg',
      title: 'Innovating for a Better Tomorrow',
      subtitle:
        'Leading diverse industries with excellence, innovation, and ethical business practices',
      buttonText: 'Explore Our Ventures',
      buttonLink: '/ventures'
    },
    {
      image: '/images/fenix-builders.jpeg',
      title: 'Building Sustainable Futures',
      subtitle:
        'Quality construction and modern infrastructure for residential and commercial spaces',
      buttonText: 'View Projects',
      buttonLink: '/gallery'
    },
    {
      image: '/images/fenix-exports.jpeg',
      title: 'Universal Exports & Imports',
      subtitle:
        'Currently exporting premium quality rice to Saudi Arabia',
      buttonText: 'Learn More',
      buttonLink: '/ventures'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="hero">

      {/* Wrapper: LEFT (Slider) + RIGHT (Text) */}
      <div className="hero-wrapper">

        {/* LEFT – IMAGE SLIDER */}
        <div className="hero-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
            </div>
          ))}

          <button className="hero-control hero-prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="hero-control hero-next" onClick={nextSlide}>
            ›
          </button>
        </div>

        {/* RIGHT – TEXT CONTENT */}
        <div className="hero-text-block">
          <h1 className="hero-title">{slides[currentSlide].title}</h1>
          <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>

          {/* ⭐ ONLY ONE BUTTON NOW */}
          <div className="hero-actions">
            <Link to="/about">
                <Button variant="secondary" size="large">
                  Learn More About Us
                </Button>
              </Link>
          </div>
        </div>

      </div>

      {/* DOT INDICATORS */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${
              index === currentSlide ? 'active' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
