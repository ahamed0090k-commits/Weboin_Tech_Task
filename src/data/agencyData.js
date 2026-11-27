import portfolioEcommerce from '../assets/portfolio-ecommerce.jpg';
import portfolioFitness from '../assets/portfolio-fitness.jpg';
import portfolioRestaurant from '../assets/portfolio-restaurant.jpg';
import portfolioBusiness from '../assets/portfolio-business.jpg';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS = [
  { id: 'projects', target: 50, suffix: '+', label: 'Projects Completed' },
  { id: 'clients', target: 30, suffix: '+', label: 'Happy Clients' },
  { id: 'years', target: 5, suffix: '+', label: 'Years of Creativity' },
];

export const SERVICES = [
  {
    id: 'ui-ux',
    number: '01',
    title: 'UI/UX DESIGN',
    description:
      'We design beautiful, intuitive, and user-friendly interfaces that create meaningful digital experiences.',
    icon: 'Layers',
    highlights: ['Design Systems', 'Interactive Prototyping', 'User Research'],
  },
  {
    id: 'web-dev',
    number: '02',
    title: 'WEB DEVELOPMENT',
    description:
      'We develop fast, modern, and responsive websites using the latest web technologies.',
    icon: 'Code2',
    highlights: ['React & Modern JS', 'Performance First', 'Clean Architecture'],
  },
  {
    id: 'brand-identity',
    number: '03',
    title: 'BRAND IDENTITY',
    description:
      'We build memorable brand identities that communicate your business values and personality.',
    icon: 'Sparkles',
    highlights: ['Visual Language', 'Typography & Color', 'Brand Guidelines'],
  },
  {
    id: 'digital-marketing',
    number: '04',
    title: 'DIGITAL MARKETING',
    description:
      'We help businesses increase their online visibility and reach their target audience.',
    icon: 'TrendingUp',
    highlights: ['Growth Strategy', 'SEO & Content', 'Conversion Audits'],
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 'ecommerce-experience',
    title: 'E-Commerce Experience',
    category: 'Web Development',
    year: '2026',
    client: 'Kinetik Studio',
    image: portfolioEcommerce,
    summary:
      'A high-conversion dark-mode storefront built with fluid product filtering, instant cart drawers, and responsive editorial layouts.',
    deliverables: ['React Architecture', 'Custom Checkout Flow', 'Motion System'],
  },
  {
    id: 'fitness-club-website',
    title: 'Fitness Club Website',
    category: 'UI/UX Design',
    year: '2026',
    client: 'Apex Performance Lab',
    image: portfolioFitness,
    summary:
      'An athletic digital flagship combining bold typography, class scheduling flows, and live performance telemetry dashboards.',
    deliverables: ['UX Strategy', 'Component Library', 'Interactive Booking'],
  },
  {
    id: 'restaurant-experience',
    title: 'Restaurant Experience',
    category: 'Web Design',
    year: '2025',
    client: 'Aethel Dining',
    image: portfolioRestaurant,
    summary:
      'An atmospheric hospitality showcase pairing seasonal storytelling with a frictionless table reservation interface.',
    deliverables: ['Art Direction', 'Responsive UI', 'Reservation Experience'],
  },
  {
    id: 'business-landing-page',
    title: 'Business Landing Page',
    category: 'Branding & Development',
    year: '2025',
    client: 'Verve Enterprise',
    image: portfolioBusiness,
    summary:
      'A cohesive B2B brand system and modular SaaS landing experience engineered for clarity, trust, and enterprise conversion.',
    deliverables: ['Brand Identity', 'Modular Bento UI', 'Frontend Engineering'],
  },
];
