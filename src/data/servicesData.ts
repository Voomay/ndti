export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconSrc: string;
  featuredImage: string;
  features: string[];
  specs: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'kitchens',
    slug: 'designer-kitchens',
    title: 'Designer Kitchens',
    shortDesc: 'Custom kitchen joinery incorporating functionality, ergonomics, and personalized luxury touches.',
    fullDesc: 'We design and build custom kitchen joinery, incorporating functionality, style, and personalized touches. Our team works closely with clients and architects to create beautiful and practical kitchen spaces that meet their specific culinary requirements, from integrated quartz islands to silent soft-close cabinetry and bespoke pantry larder units.',
    iconSrc: '/assets/icons/sink.png',
    featuredImage: 'https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.53.jpeg',
    features: [
      'Ergonomic layout & workflow engineering',
      'Solid hardwood, veneer, and matte lacquer finishes',
      'Concealed Blum hardware and integrated LED lighting',
      'Custom spice pull-outs, breakfast nooks & appliance garages'
    ],
    specs: ['Custom Dimensions', 'Moisture-Resistant HMR Core', 'Precision Laser Edge-banding']
  },
  {
    id: 'bedrooms',
    slug: 'luxury-bedrooms',
    title: 'Luxury Bedroom Cupboards',
    shortDesc: 'Customized bedroom cupboards that optimize storage space and enhance the room’s architectural aesthetic.',
    fullDesc: 'We offer customized bedroom cupboards that optimize storage space and enhance the overall design of the room. Our joinery solutions are crafted with precision to create functional and aesthetically pleasing storage solutions, including floor-to-ceiling walk-in dressing rooms, smoked glass displays, and integrated dressing tables.',
    iconSrc: '/assets/icons/cupboard.png',
    featuredImage: 'https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.53.jpeg',
    features: [
      'Tailored floor-to-ceiling wardrobe configurations',
      'Integrated sensor illumination & velvet jewel organizers',
      'Fluted wood accents & custom minimalist handles',
      'Walk-in closet dressing islands & full-length mirrors'
    ],
    specs: ['Bespoke Interior Compartments', 'Soft-Closing Sliding / Hinged Doors', 'Modular Shelf Systems']
  },
  {
    id: 'bathrooms',
    slug: 'bathroom-vanities',
    title: 'Bathroom Vanities',
    shortDesc: 'Custom bathroom vanities combining high moisture resistance, sleek modern lines, and timeless style.',
    fullDesc: 'We create custom bathroom vanities that combine functionality and style. Whether it’s a sleek modern floating design or a timeless classic look, we design and manufacture bespoke vanities that enhance your bathroom’s aesthetics while providing organized, discreet storage solutions.',
    iconSrc: '/assets/icons/cabinet.png',
    featuredImage: 'https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.54.jpeg',
    features: [
      'Waterproof Marine-grade core substrates',
      'Floating wall-hung vanities with under-glow LEDs',
      'Seamless basin cutouts & concealed plumbing conduits',
      'Matching framed mirrors and medicine cabinets'
    ],
    specs: ['Anti-Bacterial Finishes', 'Heavy-Duty Concealed Brackets', 'Quartz & Solid Surface Integration']
  },
  {
    id: 'studies',
    slug: 'studies-and-libraries',
    title: 'Studies & Home Offices',
    shortDesc: 'Customized joinery solutions providing efficient storage, seamless organization, and productive focus.',
    fullDesc: 'Our joinery services extend to studies and home offices. We design and build customized joinery solutions that provide efficient storage, organization, and a conducive environment for deep work or study. Every shelf, cable channel, and drawer is tailored to your workflow.',
    iconSrc: '/assets/icons/study-room.png',
    featuredImage: 'https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.53.jpeg',
    features: [
      'Ergonomic floating & executive desk surfaces',
      'Full-height architectural bookcases with library ladders',
      'Integrated wire management and discreet device charging',
      'Acoustic timber slat wall backdrops'
    ],
    specs: ['Cable Access Grommets', 'Load-Bearing Heavy Shelf Supports', 'Sound Dampening Integration']
  },
  {
    id: 'commercial',
    slug: 'commercial-offices',
    title: 'Commercial & Corporate Offices',
    shortDesc: 'Executive furniture, reception desks, and collaborative workstations promoting productivity.',
    fullDesc: 'We offer bespoke joinery solutions for corporate and commercial spaces. Our team designs and creates custom office furniture, boardroom credenzas, reception counters, and acoustic meeting pods that elevate your company’s brand image and foster executive performance.',
    iconSrc: '/assets/icons/office-1.png',
    featuredImage: 'https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.50.jpeg',
    features: [
      'High-impact reception desks with back-lit corporate branding',
      'Executive boardroom tables with integrated AV ports',
      'Durable high-traffic laminate & veneer craftsmanship',
      'Modular breakout seating and presentation wall cladding'
    ],
    specs: ['High-Impact Commercial Edges', 'Fire-Rated Panel Options', 'AV & Power Channeling']
  },
  {
    id: 'bars',
    slug: 'wine-cellars-bars',
    title: 'Wine Cellars & Bars',
    shortDesc: 'Luxury entertainment joinery, custom climate-controlled cellars, and cocktail bars for entertaining.',
    fullDesc: 'Curated entertainment spaces crafted for connoisseurs. We fabricate custom residential bars, wine display walls with precision temperature zoning, backlit onyx accents, and bespoke glassware storage that transform entertaining at home into a 5-star experience.',
    iconSrc: '/assets/icons/carpenter.png',
    featuredImage: 'https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.02.jpeg',
    features: [
      'Custom timber wine pegs, cradles & angled display shelves',
      'Thermal insulated glass doors & refrigeration framing',
      'Integrated brass footrails, mirror backsplashes & LED lighting',
      'Concealed prep sinks, ice makers & liquor display cabinets'
    ],
    specs: ['Climate-Stable Hardwoods', 'Low-Heat High-CRI LED Arrays', 'Secure Locking Storage']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Concept & Consultation',
    description: 'In the concept design phase, we carefully listen to your ideas and preferences. Working closely with you and your interior designers, we formulate functional briefs, spatial layouts, and aesthetic directions.',
    details: [
      'On-site measurements & spatial analysis',
      'Material palette selection & moodboards',
      '3D conceptual renders & client review iterations'
    ]
  },
  {
    step: '02',
    title: 'Design & Craftsmanship',
    description: 'Our skilled craftsmen use high-quality materials to bring the concept to life. Meticulous attention to detail is our priority as we craft each joinery component with precision in our state-of-the-art Blackheath workshop.',
    details: [
      'Computer-aided precision CNC cutting & joinery engineering',
      'Hand-finished veneers, edges, and durable lacquer coatings',
      'Stringent quality control inspections prior to dispatch'
    ]
  },
  {
    step: '03',
    title: 'Flawless Installation',
    description: 'Our experienced installation team takes over to ensure a seamless and timely fitting process. We coordinate with your project timeline, ensuring a flawless installation that meets your expectations.',
    details: [
      'Professional on-site fitting by master joiners',
      'Clean, dust-controlled and respectful installation protocols',
      'Final hardware adjustment, clean-down & client sign-off'
    ]
  }
];
