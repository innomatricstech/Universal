// Scroll to element with offset for fixed header
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Format phone number for display
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{2})(\d{4})(\d{5})$/)
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]}`
  }
  return phone
}

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Check if element is in viewport for animations
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  )
}

// Add reveal animation to elements when they come into viewport
export const initRevealAnimations = () => {
  const revealElements = document.querySelectorAll('.reveal')
  
  const revealOnScroll = () => {
    revealElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('active')
      }
    })
  }

  // Initial check
  revealOnScroll()

  // Add scroll event listener
  window.addEventListener('scroll', debounce(revealOnScroll, 10))
}

// Export data to CSV
export const exportToCSV = (data, filename) => {
  const headers = Object.keys(data[0])
  const csvContent = [
    headers.join(','),
    ...data.map(row => headers.map(header => JSON.stringify(row[header])).join(','))
  ].join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', `${filename}.csv`)
  link.click()
}

// Capitalize first letter of each word
export const capitalizeWords = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

// Generate random ID
export const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9)
}

// Validate email format
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Validate phone number (Indian format)
export const validatePhone = (phone) => {
  const re = /^[6-9]\d{9}$/
  return re.test(phone.replace(/\D/g, ''))
}

// Format currency (Indian Rupees)
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount)
}

// Get current year for copyright
export const getCurrentYear = () => {
  return new Date().getFullYear()
}