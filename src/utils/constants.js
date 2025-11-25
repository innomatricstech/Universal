
export const COMPANY_INFO = {
  name: "Universal Ventures Inc",
  parent: "Fenix Group",
  founded: 2019,
  tagline: "Innovating for a Better Tomorrow",
  vision:
    "Universal Ventures Inc (a subsidiary of Fenix Group) aspires to be a leader in diverse industries, delivering excellence through innovation, ethical business practices, and customer satisfaction.",
  mission: [
    "To build and sustain industry-leading businesses that prioritize quality, customer trust, and long-term value.",
    "To contribute to the well-being of society by ensuring access to fundamental human needs such as food, healthcare, shelter, and education.",
    "To promote ethical business practices based on Islamic principles, ensuring fairness and transparency.",
    "To foster entrepreneurship and employment opportunities through our diverse ventures.",
    "To expand our reach across national and international markets while maintaining our commitment to quality and integrity.",
  ],
};

export const CORE_VALUES = [
  { title: "Integrity", description: "Conducting business with honesty, fairness, and transparency.", icon: "⚖️" },
  { title: "Trust & Reliability", description: "Building long-term relationships based on mutual respect and dependability.", icon: "🤝" },
  { title: "Social Responsibility", description: "Giving back to the community by supporting underprivileged individuals.", icon: "🌍" },
  { title: "Excellence in Quality", description: "Striving for the highest standards in products and services.", icon: "⭐" },
  { title: "Sustainability & Innovation", description: "Adopting modern, eco-friendly, and efficient business practices.", icon: "💡" },
];

export const VENTURES = [
  { id: 1, name: "Universal & Developers", description: "Specializing in residential and commercial construction...", image: "/images/fenix-builders.jpeg", category: "construction" },
  { id: 2, name: "Universal Exports & Imports", description: "Currently exporting premium quality rice to Saudi Arabia...", image: "/images/fenix-exports.jpeg", category: "trade" },
  { id: 3, name: "Universal Interior Solutions", description: "A complete end-to-end interior design and execution service provider...", image: "/images/fenix-interior.jpeg", category: "design" },
  { id: 4, name: "Universal Multi Trading", description: "Engaged in TMT Steel Trading...", image: "/images/fenix-multitrading.jpeg", category: "trade" },
];

export const CONTACT_INFO = {
  phones: ["+91 96631 07119", "9972437119"],
  emails: ["multiuniversalinc@gmail.com", "universalventuresglobal@gmail.com"],
  address: {
    line1: "World Trade Centre",
    line2: "Brigade Gateway campus,",
    line3: "Rajajinagar Extn, Bangalore 560055",
  },
  social: {
    website: "https://fenixgroupindia.com",
  },
};
export const FUTURE_PLANS = [
  { category: "Education", description: "Launching Institutions (schools and colleges) and a skill-based learning university" },
  { category: "Hospitality", description: "Establishing chain of Hotels" },
  { category: "Natural Resources", description: "Entering the quarry and granite industry" },
  { category: "Renewable Energy", description: "Investing in solar and wind power generation" },
];

export const getCompanyInfo = () => COMPANY_INFO;
export const getCoreValues = () => CORE_VALUES;
export const getVentures = () => VENTURES;
export const getContactInfo = () => CONTACT_INFO;
export const getFuturePlans = () => FUTURE_PLANS;
