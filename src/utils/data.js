import { 
  VENTURES, 
  CORE_VALUES, 
  COMPANY_INFO, 
  CONTACT_INFO, 
  FUTURE_PLANS 
} from './constants.js'

export const getVentures = () => VENTURES

export const getVentureById = (id) => {
  return VENTURES.find(venture => venture.id === parseInt(id))
}

export const getVenturesByCategory = (category) => {
  return VENTURES.filter(venture => venture.category === category)
}

export const getCoreValues = () => CORE_VALUES

export const getCompanyInfo = () => COMPANY_INFO

export const getContactInfo = () => CONTACT_INFO

export const getFuturePlans = () => FUTURE_PLANS

export const getLeadership = () => [
  {
    name: 'Manjunath S Chetty',
    role: 'Partner',
    image: '/images/leadership/manjunath-chetty.jpg',
    description: 'Visionary leader with extensive experience in business development and strategic planning. Drives the company\'s growth across diverse verticals.',
    expertise: ['Business Strategy', 'Growth Planning', 'Leadership']
  },
  {
    name: 'Ahamed Basha',
    role: 'Partner',
    image: '/images/leadership/ahamed-basha.jpg',
    description: 'Expert in operations management with proven track record of scaling businesses. Focuses on operational excellence and process optimization.',
    expertise: ['Operations', 'Process Management', 'Business Scaling']
  },
  {
    name: 'Col Chennakeshava Rao',
    role: 'Partner', 
    image: '/images/leadership/chennakeshava-rao.jpg',
    description: 'Seasoned professional with strong leadership background. Brings discipline and strategic thinking to project execution and management.',
    expertise: ['Project Management', 'Strategic Planning', 'Team Leadership']
  }
]

export const getStats = () => [
  { number: '2019', label: 'Founded In', icon: '📅' },
  { number: '9+', label: 'Business Ventures', icon: '🏢' },
  { number: '50+', label: 'Projects Completed', icon: '✅' },
  { number: '100%', label: 'Client Satisfaction', icon: '⭐' }
]

export const getServices = () => [
  {
    title: 'Construction & Development',
    description: 'End-to-end construction services for residential and commercial projects',
    icon: '🏗️',
    ventures: ['Universel Builders & Developers']
  },
  {
    title: 'International Trade',
    description: 'Export-import services with global market reach',
    icon: '🌐',
    ventures: ['Universel Exports & Imports', 'Universel Multi Trading']
  },
  {
    title: 'Design & Interiors',
    description: 'Complete interior design and execution solutions',
    icon: '🎨',
    ventures: ['Universel Interior Solutions']
  },
  {
    title: 'Premium Services',
    description: 'Luxury transportation and concierge services',
    icon: '🚗',
    ventures: ['Universel Travel Solutions']
  }

]