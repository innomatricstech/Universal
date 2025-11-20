import React, { useEffect, useState, useRef } from 'react'
import Button from '../../components/common/Button/Button'
import Modal from '../../components/common/Modal/Modal'
import { initRevealAnimations } from '../../utils/helpers'
import { FiChevronLeft, FiChevronRight, FiDownload, FiShare2, FiX } from 'react-icons/fi'
import './Gallery.css'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loaded, setLoaded] = useState({})
  const modalRef = useRef(null)

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'construction', name: 'Construction' },
    { id: 'interior', name: 'Interior Design' },
    { id: 'projects', name: 'Projects' },
    { id: 'events', name: 'Events' }
  ]

  const galleryItems = [
    { id: 1, category: 'construction', image: '/images/projects/construction1.jpeg', title: 'Residential Complex', description: 'Modern apartment complex with sustainable design' },
    { id: 2, category: 'construction', image: '/images/projects/construction2.jpeg', title: 'Commercial Building', description: 'State-of-the-art commercial space development' },
    { id: 3, category: 'interior', image: '/images/projects/interior1.jpeg', title: 'Luxury Villa Interior', description: 'Premium interior design for residential villa' },
    { id: 4, category: 'interior', image: '/images/projects/interior2.jpeg', title: 'Office Space Design', description: 'Modern workspace interior design' },
    { id: 5, category: 'projects', image: '/images/projects/project1.jpeg', title: 'Project Alpha', description: 'Large-scale infrastructure development' },
    { id: 6, category: 'projects', image: '/images/projects/project2.jpeg', title: 'Project Beta', description: 'Innovative construction technology implementation' },
    { id: 7, category: 'projects', image: '/images/projects/project3.jpeg', title: 'Project Gamma', description: 'Sustainable building practices showcase' },
    { id: 8, category: 'events', image: '/images/projects/project4.jpeg', title: 'Corporate Event', description: 'Premium transportation for corporate gathering' },
    { id: 9, category: 'events', image: '/images/projects/project5.jpeg', title: 'VIP Movement', description: 'Luxury travel solutions for VIP clients' }
  ]

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  useEffect(() => {
    initRevealAnimations()
    window.scrollTo(0, 0)
  }, [])

  const handleImgLoad = (id) => {
    setLoaded(prev => ({ ...prev, [id]: true }))
  }

  const openModal = (item) => {
    setSelectedImage(item)
    setIsModalOpen(true)
    preloadNeighborImages(item.id)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  const findIndex = (id) => galleryItems.findIndex(i => i.id === id)

  const navigateImage = (direction) => {
    if (!selectedImage) return
    const idx = findIndex(selectedImage.id)
    let newIndex = idx

    if (direction === 'next') newIndex = (idx + 1) % galleryItems.length
    else newIndex = (idx - 1 + galleryItems.length) % galleryItems.length

    const newItem = galleryItems[newIndex]
    setSelectedImage(newItem)
    preloadNeighborImages(newItem.id)
  }

  const preloadNeighborImages = (id) => {
    const idx = findIndex(id)
    const prev = galleryItems[(idx - 1 + galleryItems.length) % galleryItems.length]
    const next = galleryItems[(idx + 1) % galleryItems.length]

    ;[prev, next].forEach(item => {
      const img = new Image()
      img.src = item.image
    })
  }

  useEffect(() => {
    if (!isModalOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') navigateImage('prev')
      if (e.key === 'ArrowRight') navigateImage('next')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isModalOpen, selectedImage])

  const handleShare = async () => {
    if (!selectedImage) return
    const shareData = {
      title: selectedImage.title,
      text: selectedImage.description,
      url: window.location.origin + selectedImage.image
    }
    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(shareData.url)
        alert('Image link copied to clipboard')
      }
    } catch (err) {
      console.warn('Share failed', err)
    }
  }

  const handleDownload = () => {
    if (!selectedImage) return
    const a = document.createElement('a')
    a.href = selectedImage.image
    a.download = selectedImage.title.replace(/\s+/g, '_') + '.jpg'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  const revealDelay = (index) => ({ style: { animationDelay: `${index * 60}ms` } })

  return (
    <div className="gallery-page">

      {/* HERO SECTION */}
      <section className="gallery-hero">
        <div className="container">
          <div className="gallery-hero-content">
            <h1 className="gallery-hero-title">Project Gallery</h1>
            <p className="gallery-hero-subtitle">
              Explore our portfolio of successful projects and innovative solutions
            </p>

            {/* ONLY ONE BUTTON */}
            <div className="gallery-hero-actions">
              <Button
                variant="primary"
                size="large"
                onClick={() =>
                  document.getElementById('gallery-grid').scrollIntoView({ behavior: 'smooth' })
                }
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
        <div className="gallery-hero-overlay" />
      </section>

      {/* FILTER SECTION */}
      <section className="gallery-filter-section section">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Our Work Showcase</h2>
            <p>Browse through our diverse portfolio of completed projects</p>
          </div>

          <div className="filter-controls">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div id="gallery-grid" className="gallery-grid">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className={`gallery-item reveal ${item.category}`}
                onClick={() => openModal(item)}
                {...revealDelay(idx)}
              >
                <div className="gallery-image">
                  {!loaded[item.id] && <div className="img-shimmer" />}

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onLoad={() => handleImgLoad(item.id)}
                    onError={(e) => {
                      e.target.src = '/images/multi.jpeg'
                      handleImgLoad(item.id)
                    }}
                  />

                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3 className="gallery-title">{item.title}</h3>
                      <p className="gallery-description">{item.description}</p>
                      <span className="view-btn">View Details</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="no-results text-center">
              <h3>No projects found in this category</h3>
              <p>Please select a different category.</p>
              <Button variant="primary" onClick={() => setSelectedCategory('all')}>
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* STATS */}
      <section className="gallery-stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item reveal"><div className="stat-number">50+</div><div className="stat-label">Projects Completed</div></div>
            <div className="stat-item reveal"><div className="stat-number">25+</div><div className="stat-label">Happy Clients</div></div>
            <div className="stat-item reveal"><div className="stat-number">5+</div><div className="stat-label">Years Experience</div></div>
            <div className="stat-item reveal"><div className="stat-number">100%</div><div className="stat-label">Quality Assurance</div></div>
          </div>
        </div>
      </section>

       

      {/* MODAL */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedImage?.title}>
        {selectedImage && (
          <div className="image-modal-content" ref={modalRef}>
            <div className="modal-image-row">
              <button className="modal-nav modal-prev" onClick={() => navigateImage('prev')}>
                <FiChevronLeft />
              </button>

              <div className="modal-image-wrapper">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  onError={(e) => (e.target.src = '/images/multi.jpeg')}
                />
              </div>

              <button className="modal-nav modal-next" onClick={() => navigateImage('next')}>
                <FiChevronRight />
              </button>
            </div>

            <div className="modal-details">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>

              <div className="modal-actions">
                <button className="modal-action" onClick={handleDownload}><FiDownload /> Download</button>
                <button className="modal-action" onClick={handleShare}><FiShare2 /> Share</button>
                <button className="modal-close" onClick={closeModal}><FiX /></button>
              </div>

              <div className="modal-tags">
                <span className="modal-tag">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Gallery
