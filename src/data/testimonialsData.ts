export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  projectType: string;
  location: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'David Van Der Merwe',
    role: 'Corporate Executive',
    projectType: 'Commercial Executive Office & Boardroom',
    location: 'Cape Town',
    rating: 5,
    quote: "Working with NDti was a fantastic experience from start to finish. Their concept design captured my vision for the office space perfectly. The joinery pieces are not only functional but also works of art. I can't express how impressed I am with the level of craftsmanship. If you're looking for top-quality custom joinery, don't hesitate to choose them!"
  },
  {
    id: 't2',
    name: 'Sophia Hendricks',
    role: 'Homeowner & Interior Enthusiast',
    projectType: 'Designer Kitchen & Pantry Renovation',
    location: 'Constantia',
    rating: 5,
    quote: "I couldn't be happier with the custom joinery work by NDti and IanArt! The concept design phase was a breeze, and they really listened to my ideas and preferences. The craftsmanship and attention to detail during manufacturing were outstanding. The installation team was efficient and professional. My kitchen looks stunning, and I've received so many compliments. Highly recommended!"
  },
  {
    id: 't3',
    name: 'Marcus & Linda Joubert',
    role: 'Private Residence',
    projectType: 'Custom Study, Library & Master Bedroom Wardrobes',
    location: 'Stellenbosch',
    rating: 5,
    quote: "I'm thrilled with the custom study joinery by NDti and IanArt. They designed a functional yet stylish workspace for my home office. The attention to detail in the craftsmanship is evident, and I appreciate how they incorporated my specific storage needs. The installation was quick and professional. I highly recommend their services!"
  }
];
