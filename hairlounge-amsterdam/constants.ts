import { NavItem, SliderItem, ServiceItem, Review } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1600&q=80', // Female Cuts
    title: 'Female Cuts',
    alt: 'Female Haircuts',
    link: '/services/female-cuts'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1600&q=80', // Female Color
    title: 'Female Color',
    alt: 'Female Color Services',
    link: '/services/color'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1600&q=80', // Treatments
    title: 'Treatments',
    alt: 'Hair Treatments',
    link: '/services/treatments'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=80', // Men
    title: 'Men',
    alt: 'Men Services',
    link: '/services/men'
  },
];

export const TEXT_SERVICES = [
  {
    id: 'haircuts',
    title: 'Haircuts',
    description: 'Haircuts for short and long hair, tailored to your face shape, hair type, and daily routine. Finished with a professional blowdry.',
    price: ''
  },
  {
    id: 'color',
    title: 'Color Services',
    description: 'Full color, balayage, highlights and more. We focus on natural-looking results that grow out beautifully.',
    price: ''
  },
  {
    id: 'treatments',
    title: 'Treatments',
    description: 'Hair and scalp treatments to repair, hydrate, and strengthen your hair. We are partnered with Olaplex, the leading industry standard for hair treatment and repair.',
    price: ''
  },
  {
    id: 'barber',
    title: 'Barber',
    description: 'Men’s haircuts, fades, and beard services in a relaxed and friendly setting.',
    price: ''
  },
  {
    id: 'packages',
    title: 'Signature Packages',
    description: 'Carefully combined services for complete results, such as cut and treatment or color with care.',
    price: ''
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80', // Female Hair
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80', // Blonde (Verified)
  'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80', // Interior Detail
  'https://images.unsplash.com/photo-1522337360705-2b1d862294c1?auto=format&fit=crop&w=800&q=80', // Washing
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80', // Styling
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80', // Close up
];

export const REVIEWS = [
  {
    id: 1,
    text: "De beste!",
    author: "Dion Dekkers",
    role: "Regular Client",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    source: 'google',
    date: '4 weken geleden'
  },
  {
    id: 2,
    text: "Een heerlijke, ontspannende plek met David. Al jarenlang altijd erg blij.",
    author: "FRANCO LIGNETTO",
    role: "Local Guide",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    source: 'google',
    date: 'een maand geleden'
  },
  {
    id: 3,
    text: "De kapper werkte secuur en ging voorzichtig met mijn haar om. Ik ben superblij met het resultaat!",
    author: "Nadia",
    role: "Client",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    source: 'google',
    date: '1 day ago'
  },
  {
    id: 4,
    text: "Evgenii is fantastic, couldn't recommend him more!",
    author: "Oliver",
    role: "Client",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 5,
    source: 'google',
    date: '3 days ago'
  },
  {
    id: 5,
    text: "Evgenii was top! Rustig, werkt secuur en voorzichtig. Tevreden en zou zeker terugkomen.",
    author: "Geer",
    role: "Client",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    rating: 5,
    source: 'google',
    date: '6 days ago'
  },
  {
    id: 6,
    text: "Super fijn en goed zoals altijd. Echt een aanrader!",
    author: "myrthe",
    role: "Client",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    source: 'google',
    date: '7 days ago'
  },
  {
    id: 7,
    text: "I think it was good. He understood quickly what i wanted. Did a great job, i loved my experience with him.",
    author: "Lola",
    role: "Client",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 5,
    source: 'google',
    date: '12 days ago'
  },
  {
    id: 8,
    text: "Absoluut een aanrader. Ik werd geholpen door Sasha en zij heeft mijn haar prachtig geknipt. Ook de hoofdmassage tijdens het wassen was heerlijk.",
    author: "Anouk Jansen",
    role: "Local Guide",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5,
    source: 'google',
    date: '4 months ago'
  }
];

export const SERVICE_CAROUSEL_ITEMS = [
  {
    id: 'haircuts',
    title: 'Haircuts',
    description: 'Precision cuts tailored to your unique style and face shape.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'color',
    title: 'Color',
    description: 'Vibrant, natural-looking color services from balayage to full tints.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'treatments',
    title: 'Treatments',
    description: 'Revitalizing care for healthy, shiny, and strong hair.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'barber',
    title: 'Barber',
    description: 'Expert grooming, fades, and beard styling for men.',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'packages',
    title: 'Packages',
    description: 'Complete makeovers and pampering sessions.',
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80'
  }
];