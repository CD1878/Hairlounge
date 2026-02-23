import { NavItem, SliderItem, ServiceItem, DetailedServiceItem, Review } from './types';

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

export const TEXT_SERVICES: DetailedServiceItem[] = [
  {
    id: 'signature-packages',
    title: 'Signature Packages',
    overview: 'Our Signature Packages are designed for guests who want a complete result in one appointment. Instead of choosing individual services, you select a curated combination that balances tone, shape, and hair health for a polished finish.\nIdeal when you are aiming for transformative results in one setting.',
    options: [
      {
        name: 'Signature',
        description: 'A focused colour or lightening appointment designed to refresh tone, shine, and hair condition in one visit.',
        included: ['Colour or Lightening of your choice', 'Toner', 'Olaplex Treatment'],
        idealFor: [
          'Introducing colour or lightness to your hair without cutting length',
          'Guests who want a structured and efficient appointment',
          'Visitors to Amsterdam looking for a seamless all-in-one experience'
        ]
      },
      {
        name: 'Signature+',
        description: 'A full transformation combining colour and shape. Your haircut is adjusted to support the new colour placement and movement.',
        included: ['Haircut', 'Colour or Lightening of your choice', 'Toner', 'Olaplex Treatment'],
        idealFor: [
          'A complete change in one appointment',
          'Updating both colour and shape together',
          'Guests wanting a balanced, finished result'
        ]
      },
      {
        name: 'Signature Refresh',
        description: 'A maintenance-focused visit designed to restore tone, shine, and neatness between major appointments.',
        included: ['Fringe or Bang Trim', 'Regrowth Colour (optional)', 'Toner', 'Olaplex Treatment'],
        idealFor: [
          'Between major appointments',
          'Refreshing roots or fringe without a full haircut',
          'Maintaining shine and condition'
        ]
      }
    ]
  },
  {
    id: 'haircut-styling',
    title: 'Haircut & Styling',
    overview: 'A haircut shapes how your hair moves every day. We focus on balance, natural fall, and easy maintenance so your hair works both inside and outside the salon.',
    options: [
      {
        name: 'Haircut',
        description: 'A personalised haircut adapted to your texture, density, and styling routine.',
        idealFor: [
          'Maintaining your current style',
          'Improving shape and movement',
          'Starting a new look with confidence'
        ]
      },
      {
        name: 'Blowdry',
        description: 'Professional styling that enhances movement and shine while helping your look last longer.',
        idealFor: [
          'Events or special occasions',
          'Feeling polished without cutting or colouring',
          'Refreshing your style during the week'
        ]
      },
      {
        name: 'Fringe or Bang Trim',
        description: 'A quick refresh that keeps your haircut looking intentional between appointments.',
        idealFor: [
          'Maintaining shape between haircuts',
          'Soft adjustments without a full service'
        ]
      }
    ]
  },
  {
    id: 'colour',
    title: 'Colour',
    overview: 'Our colour services focus on shine, depth, and results that grow out naturally. Every appointment begins with a discussion about tone, maintenance level, and long-term hair health.',
    options: [
      {
        name: 'Full Colour',
        description: 'Colour applied throughout the hair to create consistent tone, vibrancy, and uniform depth.',
        idealFor: [
          'Covering previous colour',
          'Enhancing richness and shine',
          'Guests wanting an even, polished finish'
        ]
      },
      {
        name: 'Regrowth Colour',
        description: 'Targets new growth at the roots while blending seamlessly into existing colour.',
        idealFor: [
          'Maintaining colour between full applications',
          'Covering regrowth or grey hair'
        ]
      },
      {
        name: 'Creative Colour',
        description: 'Tailored colour placement or tone combinations designed around your vision.',
        idealFor: [
          'Personalised multi-colour results',
          'Fashion tones or creative looks',
          'Guests seeking something unique'
        ]
      },
      {
        name: 'Toner',
        description: 'Refines or refreshes tone without lightening the hair.',
        idealFor: [
          'Blonde maintenance',
          'Removing warmth or dullness',
          'Restoring shine between colour visits'
        ]
      }
    ]
  },
  {
    id: 'lightening',
    title: 'Lightening',
    overview: 'Lightening services are designed to add brightness, dimension, and contrast while respecting the natural movement and health of your hair. Each technique creates a different type of result, from visible brightness throughout the hair to softer, blended transitions that grow out naturally.\n\nDuring your appointment, we discuss your expectations, maintenance preferences, and hair condition to recommend the most suitable technique.\nA short consultation is included. Extended consultation time can be added during booking if you are planning a significant change.',
    options: [
      {
        name: 'Highlights (Full or Partial)',
        description: 'Highlights add brightness by placing lighter tones throughout selected sections of your hair. Depending on your preference, they can be applied across the entire head or focused only where brightness is needed.\nFull highlights create an overall lighter appearance, while partial highlights target areas such as the top, front, or face frame for a softer refresh.',
        idealFor: [
          'Adding visible brightness',
          'First-time lightening',
          'Refreshing dimension without fully changing your colour',
          'Guests who want structured brightness with clear placement'
        ]
      },
      {
        name: 'Balayage',
        description: 'Balayage is a hand-painted lightening technique designed to create defined brightness through the mid-lengths and ends while keeping your natural roots softer. Lightness is applied evenly across the hair in a controlled pattern, creating dimension and contrast without strong regrowth lines.\n\nThe result is a noticeable yet natural-looking lift that allows longer time between maintenance appointments.',
        idealFor: [
          'Brightness with visible dimension and movement',
          'A sun-lit effect that grows out softly',
          'Guests who prefer fewer root touch-ups',
          'Medium to long hair seeking shape and contrast'
        ]
      },
      {
        name: 'AirTouch',
        description: 'AirTouch is an advanced lightening technique focused on precision blending. Air is used to separate shorter strands before application, resulting in exceptionally softer transitions between tones.\nUnlike balayage, which emphasises visible dimension, AirTouch focuses on smoothness and refinement, producing a seamless result that blends naturally as your hair grows.',
        idealFor: [
          'Ultra-soft blonding results without visible lines',
          'Guests seeking a refined and high-detail finish',
          'Long-lasting colour with minimal regrowth contrast',
          'Corrective work or complex colour transitions'
        ]
      },
      {
        name: 'Unsure which Lightening Service?',
        description: 'Lightening techniques vary not only in appearance but also in maintenance and appointment time. If you are unsure which option suits you best, we recommend adding consultation time during booking so we can guide you toward the most suitable approach.',
        idealFor: []
      }
    ]
  },
  {
    id: 'treatments',
    title: 'Treatments',
    overview: 'Healthy hair supports every cut and colour result. Our treatments focus on repairing damage, improving texture, and keeping your hair easier to manage between visits.',
    options: [
      {
        name: 'Olaplex Treatment',
        description: 'A strengthening treatment that helps repair internal damage caused by colouring and heat styling while improving shine and manageability.',
        idealFor: [
          'Supporting colour or lightening services',
          'Hair that feels dry or weakened'
        ]
      },
      {
        name: 'Protein Straightening',
        description: 'A smoothing treatment that reduces frizz and improves texture while maintaining natural movement for easier everyday styling.',
        idealFor: [
          'Frizz control',
          'Easier styling and smoother hair',
          'Long-term smoothing results'
        ]
      }
    ]
  },
  {
    id: 'barber',
    title: 'Barber',
    overview: 'Our barber services focus on clean structure, balance, and easy upkeep. Precision and comfort remain the priority.',
    options: [
      {
        name: 'Men’s Haircut',
        description: 'A structured haircut adapted to your growth pattern and styling habits.',
        idealFor: [
          'Maintaining sharp shape',
          'Everyday manageability'
        ]
      },
      {
        name: 'Beard Trim and Shape',
        description: 'Controlled trimming designed to improve balance and symmetry.',
        idealFor: [
          'Keeping beard lines clean',
          'Maintaining a defined look'
        ]
      },
      {
        name: 'Beard Shave',
        description: 'Close shave for a smooth, refreshed finish.',
        idealFor: [
          'Clean appearance',
          'Special occasions or regular grooming'
        ]
      },
      {
        name: 'Hair & Beard Contouring',
        description: 'A maintenance service focused on cleaning edges and refining existing shape without a full haircut.',
        idealFor: [
          'Between haircut appointments',
          'Quick refreshes'
        ]
      },
      {
        name: 'Men’s Care Package',
        description: 'A complete grooming appointment designed for balance and convenience.',
        included: ['Men’s Haircut', 'Beard Trim or Beard Shave'],
        idealFor: [
          'Maintaining both hair and beard together',
          'Guests wanting a polished finish in one visit'
        ]
      }
    ]
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80', // Female Hair
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80', // Blonde (Verified)
  'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80', // Interior Detail
  'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80', // Color
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80', // Treatments
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80', // Men
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
    id: 'signature-packages',
    title: 'Signature Packages',
    description: 'Curated combinations that give your hair a complete transformation in a single visit.',
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'haircut-styling',
    title: 'Haircut & Styling',
    description: 'Cuts and styling designed around your hair’s texture, shape, and daily routine.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'colour',
    title: 'Colour',
    description: 'Your choice of colour, applied throughout your hair to add vibrancy, shine, and uniform depth.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lightening',
    title: 'Lightening',
    description: 'Add brightness and dimension to your hair through highlights, balayage, or AirTouch, tailored to create anything from visible contrast to soft, seamless blends that grow out naturally.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'treatments',
    title: 'Treatments',
    description: 'An application of industry-standard products designed to repair, hydrate, and restore the long-term strength and shine of your hair.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'barber',
    title: 'Barber',
    description: 'Grooming services tailored to your natural style, creating clean lines and a balanced structure for your hair and beard.',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80'
  }
];