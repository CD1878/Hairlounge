import { ServiceItem, Review, SliderItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#footer' },
];

export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop',
    alt: 'Modern Salon Interior'
  },
  {
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop',
    alt: 'Stylist working on hair'
  },
  {
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2000&auto=format&fit=crop',
    alt: 'Woman with beautiful hair'
  }
];

// Based on the "Gallery Preview" request but implemented as the "scroller" requested from the reference code
export const SERVICE_SLIDER_ITEMS: SliderItem[] = [
  {
    id: '1',
    title: 'Female Cuts',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop',
    link: '#gallery'
  },
  {
    id: '2',
    title: 'Female Color',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop',
    link: '#gallery'
  },
  {
    id: '3',
    title: 'Treatments',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
    link: '#gallery'
  },
  {
    id: '4',
    title: 'Men',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop',
    link: '#gallery'
  }
];

export const TEXT_SERVICES: ServiceItem[] = [
  {
    id: 'haircuts',
    title: 'Haircuts',
    description: 'Precision cutting tailored to your face shape and lifestyle. Includes wash and our signature blowdry.',
    price: 'from €75'
  },
  {
    id: 'color',
    title: 'Color Services',
    description: 'From root touch-ups to full transformations. We use premium, low-ammonia products for vibrant, healthy results.',
    price: 'from €85'
  },
  {
    id: 'treatments',
    title: 'Treatments',
    description: 'Restore health and shine with our bespoke conditioning masks and scalp therapies.',
    price: 'from €45'
  },
  {
    id: 'barber',
    title: 'Barber',
    description: 'Classic and modern cuts for men, including beard trims and styling advice.',
    price: 'from €55'
  },
  {
    id: 'packages',
    title: 'Signature Packages',
    description: 'Combined services for the ultimate pampering experience. Cut, color, and treatment bundles.',
    price: 'Inquire'
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596459350264-f655dc312eb7?q=80&w=800&auto=format&fit=crop'
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Simone R.",
    rating: 5,
    text: "Not only the most talented hairdressers and stylists, but also the sweetest people you will ever meet. All their work comes straight from the heart."
  },
  {
    id: 2,
    author: "Magdalena Z.",
    rating: 5,
    text: "Hairlounge made my hair so beautiful I can't even believe it myself! The salon is cozy and everyone is super friendly and welcoming."
  },
  {
    id: 3,
    author: "Sabrina K.",
    rating: 5,
    text: "Professionalism, knowledge and skill really shine through. They knew exactly what I wanted and exceeded my expectations."
  }
];