export interface ProjectItem {
  id: string;
  title: string;
  categories: string[];
  primaryCategory: string;
  imageUrl: string;
  thumbnailUrl: string;
  description: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  count: number;
}

export const PORTFOLIO_CATEGORIES: ProjectCategory[] = [
  { id: 'all', name: 'All Projects', description: 'Complete showcase of custom bespoke joinery and architectural installations.', count: 198 },
  { id: 'kitchens', name: 'Kitchens', description: 'Custom culinary spaces engineered with luxury materials, ergonomic workflows, and timeless finishes.', count: 53 },
  { id: 'bedrooms', name: 'Bedrooms', description: 'Architectural wardrobes, bespoke headboards, and integrated storage crafted for restful elegance.', count: 41 },
  { id: 'bars', name: 'Bars & Cellars', description: 'Sophisticated entertainment spaces, temperature-controlled displays, and custom timber bar joinery.', count: 13 },
  { id: 'bathrooms', name: 'Bathrooms', description: 'Custom vanities, moisture-resistant cabinetry, and refined architectural accents.', count: 28 },
  { id: 'study-office', name: 'Study & Office', description: 'Executive desks, custom shelving systems, and tailored workspaces that cultivate focus.', count: 14 },
  { id: 'tv-units', name: 'TV Units', description: 'Bespoke entertainment consoles, floating media walls, and concealed cable management.', count: 10 },
  { id: 'wall-cladding', name: 'Wall Cladding', description: 'Tactile timber feature walls, acoustic panelling, and geometric architectural textures.', count: 23 },
  { id: 'studio-units', name: 'Studio Units', description: 'Multifunctional bespoke cabinetry engineered for modern compact luxury spaces.', count: 6 },
  { id: 'entrance-unit', name: 'Entrance Units', description: 'Grand foyer statement pieces, bespoke consoles, and welcoming entry joinery.', count: 3 },
  { id: 'coffee-station', name: 'Coffee Stations', description: 'Dedicated barista niches with integrated appliance garages, quartz surfaces, and warm ambient lighting.', count: 4 },
  { id: 'reception-counter', name: 'Reception Counters', description: 'Prestigious corporate reception desks and focal points for commercial environments.', count: 2 },
  { id: 'internal-doors', name: 'Internal Doors', description: 'Floor-to-ceiling pivot doors, concealed-hinge timber passage doors, and acoustic detailing.', count: 6 }
];

export const PORTFOLIO_ITEMS: ProjectItem[] = [
  {
    "id": "project-1",
    "title": "Kitchens Design #1",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.53.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.53.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-2",
    "title": "Kitchens Design #2",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.54.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.54.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-3",
    "title": "Kitchens Design #3",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.54-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.54-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-4",
    "title": "Kitchens Design #4",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.55.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.55.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-5",
    "title": "Kitchens Design #5",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.56.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.56.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-6",
    "title": "Kitchens Design #6",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.59.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.59.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-7",
    "title": "Kitchens Design #7",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.58.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.58.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-8",
    "title": "Kitchens Design #8",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.57-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.57-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-9",
    "title": "Kitchens Design #9",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.59-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.59-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-10",
    "title": "Kitchens Design #10",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.00.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.00.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-11",
    "title": "Kitchens Design #11",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.00-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.00-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-12",
    "title": "Kitchens Design #12",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.01.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.01.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-13",
    "title": "Kitchens Design #13",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.02.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.02.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-14",
    "title": "Kitchens Design #14",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.02-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.02-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-15",
    "title": "Kitchens Design #15",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.03.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.03.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-16",
    "title": "Kitchens Design #16",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.03-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.03-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-17",
    "title": "Kitchens Design #17",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.04.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.30.04.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-18",
    "title": "Kitchens Design #18",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.13.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.13.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-19",
    "title": "Kitchens Design #19",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.13-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.13-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-20",
    "title": "Kitchens Design #20",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.14.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.14.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-21",
    "title": "Kitchens Design #21",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.11-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.11-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-22",
    "title": "Kitchens Design #22",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.17.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.17.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-23",
    "title": "Kitchens Design #23",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.17-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.17-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-24",
    "title": "Kitchens Design #24",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.17.35.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.17.35.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-25",
    "title": "Kitchens Design #25",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.17.34.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.17.34.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-26",
    "title": "Kitchens Design #26",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.37.09.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.37.09.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-27",
    "title": "Kitchens Design #27",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.37.08.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.37.08.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-28",
    "title": "Kitchens Design #28",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.28.09.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.28.09.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-29",
    "title": "Kitchens Design #29",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.59.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.59.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-30",
    "title": "Kitchens Design #30",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.23.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.23.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-31",
    "title": "Kitchens Design #31",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.23-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.23-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-32",
    "title": "Kitchens Design #32",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.23-2.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.23-2.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-33",
    "title": "Kitchens Design #33",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.22.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.22.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-34",
    "title": "Kitchens Design #34",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.23-3.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.23-3.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-35",
    "title": "Kitchens Design #35",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.24.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.24.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-36",
    "title": "Kitchens Design #36",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.35.16-2.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.35.16-2.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-37",
    "title": "Kitchens Design #37",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.35.16-3.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.35.16-3.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-38",
    "title": "Kitchens Design #38",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.35.57.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.35.57.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-39",
    "title": "Kitchens Design #39",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.35.17-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.35.17-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-40",
    "title": "Kitchens Design #40",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.35.17.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.35.17.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-41",
    "title": "Kitchens Design #41",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.59-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.59-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-42",
    "title": "Kitchens Design #42",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.59-2.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.59-2.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-43",
    "title": "Kitchens Design #43",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.00-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.00-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-44",
    "title": "Kitchens Design #44",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.59-3.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.59-3.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-45",
    "title": "Kitchens Design #45",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.00.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.34.00.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-46",
    "title": "Kitchens Design #46",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.34-3.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.34-3.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-47",
    "title": "Kitchens Design #47",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.34-2.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.34-2.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-48",
    "title": "Kitchens Design #48",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.34.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.34.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-49",
    "title": "Kitchens Design #49",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.34-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.34-1.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-50",
    "title": "Kitchens Design #50",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.34-4.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.33.34-4.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-51",
    "title": "Kitchens Design #51",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-03-at-20.18.53.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-03-at-20.18.53.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-52",
    "title": "Kitchens Design #52",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-03-at-20.18.52.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-03-at-20.18.52.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-53",
    "title": "Kitchens Design #53",
    "categories": [
      "kitchens"
    ],
    "primaryCategory": "Kitchens",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-03-at-20.13.19.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-03-at-20.13.19.jpeg",
    "description": "Bespoke handcrafted kitchens installation fabricated with precision joinery standards."
  },
  {
    "id": "project-54",
    "title": "Bedrooms Design #54",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.53.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.53.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-55",
    "title": "Bedrooms Design #55",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.53-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.53-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-56",
    "title": "Bedrooms Design #56",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.54.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.54.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-57",
    "title": "Bedrooms Design #57",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.55.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.55.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-58",
    "title": "Bedrooms Design #58",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.55-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.55-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-59",
    "title": "Bedrooms Design #59",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.56.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.56.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-60",
    "title": "Bedrooms Design #60",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.57.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.57.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-61",
    "title": "Bedrooms Design #61",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.57-2.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.57-2.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-62",
    "title": "Bedrooms Design #62",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.58.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.58.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-63",
    "title": "Bedrooms Design #63",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.58-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.58-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-64",
    "title": "Bedrooms Design #64",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.59.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.59.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-65",
    "title": "Bedrooms Design #65",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.00.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.00.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-66",
    "title": "Bedrooms Design #66",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.00-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.00-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-67",
    "title": "Bedrooms Design #67",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.01.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.01.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-68",
    "title": "Bedrooms Design #68",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.01-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.01-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-69",
    "title": "Bedrooms Design #69",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.02.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.02.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-70",
    "title": "Bedrooms Design #70",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.02-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.02-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-71",
    "title": "Bedrooms Design #71",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.03.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.03.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-72",
    "title": "Bedrooms Design #72",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.04.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.04.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-73",
    "title": "Bedrooms Design #73",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.04-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.04-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-74",
    "title": "Bedrooms Design #74",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.05.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.05.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-75",
    "title": "Bedrooms Design #75",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.05-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.05-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-76",
    "title": "Bedrooms Design #76",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.06.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.06.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-77",
    "title": "Bedrooms Design #77",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.07.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.07.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-78",
    "title": "Bedrooms Design #78",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.07-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.07-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-79",
    "title": "Bedrooms Design #79",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.08.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.08.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-80",
    "title": "Bedrooms Design #80",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.08-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.08-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-81",
    "title": "Bedrooms Design #81",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.09.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.09.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-82",
    "title": "Bedrooms Design #82",
    "categories": [
      "bedrooms",
      "wall-cladding"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.12.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.12.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-83",
    "title": "Bedrooms Design #83",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.37.46.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.37.46.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-84",
    "title": "Bedrooms Design #84",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.37.45-3.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.37.45-3.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-85",
    "title": "Bedrooms Design #85",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.37.45-2.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.37.45-2.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-86",
    "title": "Bedrooms Design #86",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.37.45-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.37.45-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-87",
    "title": "Bedrooms Design #87",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.37.45.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.37.45.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-88",
    "title": "Bedrooms Design #88",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.37.44.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.37.44.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-89",
    "title": "Bedrooms Design #89",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.36.53-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.36.53-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-90",
    "title": "Bedrooms Design #90",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.36.53.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.36.53.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-91",
    "title": "Bedrooms Design #91",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.36.52-3.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.36.52-3.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-92",
    "title": "Bedrooms Design #92",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.36.51-2.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.36.51-2.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-93",
    "title": "Bedrooms Design #93",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.36.51-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.36.51-1.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-94",
    "title": "Bedrooms Design #94",
    "categories": [
      "bedrooms"
    ],
    "primaryCategory": "Bedrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.36.51.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.36.51.jpeg",
    "description": "Bespoke handcrafted bedrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-95",
    "title": "Bars & Cellars Design #95",
    "categories": [
      "bars"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.02.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.02.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-96",
    "title": "Bars & Cellars Design #96",
    "categories": [
      "bars"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.18.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.18.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-97",
    "title": "Bars & Cellars Design #97",
    "categories": [
      "bars"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.03.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.03.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-98",
    "title": "Bars & Cellars Design #98",
    "categories": [
      "bars"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.04.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.04.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-99",
    "title": "Bars & Cellars Design #99",
    "categories": [
      "bars"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.04-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.04-1.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-100",
    "title": "Bars & Cellars Design #100",
    "categories": [
      "bars"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.07-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.07-1.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-101",
    "title": "Bars & Cellars Design #101",
    "categories": [
      "bars"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.07.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.07.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-102",
    "title": "Bars & Cellars Design #102",
    "categories": [
      "bars",
      "wall-cladding"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.43.26.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.43.26.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-103",
    "title": "Bars & Cellars Design #103",
    "categories": [
      "bars",
      "wall-cladding"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.43.27.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.43.27.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-104",
    "title": "Bars & Cellars Design #104",
    "categories": [
      "bars",
      "wall-cladding"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.43.28.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.43.28.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-105",
    "title": "Bars & Cellars Design #105",
    "categories": [
      "bars"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.38.48-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.38.48-1.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-106",
    "title": "Bars & Cellars Design #106",
    "categories": [
      "bars"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.38.48.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.38.48.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-107",
    "title": "Bars & Cellars Design #107",
    "categories": [
      "bars"
    ],
    "primaryCategory": "Bars & Cellars",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.38.47.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-03-at-19.38.47.jpeg",
    "description": "Bespoke handcrafted bars & cellars installation fabricated with precision joinery standards."
  },
  {
    "id": "project-108",
    "title": "Bathrooms Design #108",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.54.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.54.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-109",
    "title": "Bathrooms Design #109",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.54-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.54-1.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-110",
    "title": "Bathrooms Design #110",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.55.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.55.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-111",
    "title": "Bathrooms Design #111",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.55-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.55-1.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-112",
    "title": "Bathrooms Design #112",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.56.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.56.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-113",
    "title": "Bathrooms Design #113",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.56-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.56-1.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-114",
    "title": "Bathrooms Design #114",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.57.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.57.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-115",
    "title": "Bathrooms Design #115",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.57-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.57-1.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-116",
    "title": "Bathrooms Design #116",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.58.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.58.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-117",
    "title": "Bathrooms Design #117",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.58-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.58-1.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-118",
    "title": "Bathrooms Design #118",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.59.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.42.59.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-119",
    "title": "Bathrooms Design #119",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.00.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.00.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-120",
    "title": "Bathrooms Design #120",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.01.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.01.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-121",
    "title": "Bathrooms Design #121",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.01-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.01-1.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-122",
    "title": "Bathrooms Design #122",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.01-2.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.01-2.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-123",
    "title": "Bathrooms Design #123",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.02.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.02.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-124",
    "title": "Bathrooms Design #124",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.02-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.02-1.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-125",
    "title": "Bathrooms Design #125",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.03.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.03.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-126",
    "title": "Bathrooms Design #126",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.04.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.04.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-127",
    "title": "Bathrooms Design #127",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.04-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.04-1.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-128",
    "title": "Bathrooms Design #128",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.05.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.05.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-129",
    "title": "Bathrooms Design #129",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.05-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.05-1.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-130",
    "title": "Bathrooms Design #130",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.06.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.43.06.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-131",
    "title": "Bathrooms Design #131",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.04.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.04.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-132",
    "title": "Bathrooms Design #132",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.05.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.05.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-133",
    "title": "Bathrooms Design #133",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.06.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.06.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-134",
    "title": "Bathrooms Design #134",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.06-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.06-1.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-135",
    "title": "Bathrooms Design #135",
    "categories": [
      "bathrooms"
    ],
    "primaryCategory": "Bathrooms",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.10.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.10.jpeg",
    "description": "Bespoke handcrafted bathrooms installation fabricated with precision joinery standards."
  },
  {
    "id": "project-136",
    "title": "Study & Office Design #136",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.53.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.53.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-137",
    "title": "Study & Office Design #137",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.54.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.54.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-138",
    "title": "Study & Office Design #138",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.54-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.54-1.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-139",
    "title": "Study & Office Design #139",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.55.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.55.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-140",
    "title": "Study & Office Design #140",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.56.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.56.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-141",
    "title": "Study & Office Design #141",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.57.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.57.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-142",
    "title": "Study & Office Design #142",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.58.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.58.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-143",
    "title": "Study & Office Design #143",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.58-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.58-1.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-144",
    "title": "Study & Office Design #144",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.56-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.56-1.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-145",
    "title": "Study & Office Design #145",
    "categories": [
      "study-office",
      "tv-units"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.57-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.57-1.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-146",
    "title": "Study & Office Design #146",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.59.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.59.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-147",
    "title": "Study & Office Design #147",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.48.00.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.48.00.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-148",
    "title": "Study & Office Design #148",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.48.00-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.48.00-1.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-149",
    "title": "Study & Office Design #149",
    "categories": [
      "study-office"
    ],
    "primaryCategory": "Study & Office",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.17.35-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.17.35-1.jpeg",
    "description": "Bespoke handcrafted study & office installation fabricated with precision joinery standards."
  },
  {
    "id": "project-150",
    "title": "TV Units Design #150",
    "categories": [
      "tv-units"
    ],
    "primaryCategory": "TV Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.58.21.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.58.21.jpeg",
    "description": "Bespoke handcrafted tv units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-151",
    "title": "TV Units Design #151",
    "categories": [
      "tv-units"
    ],
    "primaryCategory": "TV Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.58.24.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.58.24.jpeg",
    "description": "Bespoke handcrafted tv units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-152",
    "title": "TV Units Design #152",
    "categories": [
      "tv-units"
    ],
    "primaryCategory": "TV Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.58.23.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.58.23.jpeg",
    "description": "Bespoke handcrafted tv units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-153",
    "title": "TV Units Design #153",
    "categories": [
      "tv-units"
    ],
    "primaryCategory": "TV Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.58.21-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.58.21-1.jpeg",
    "description": "Bespoke handcrafted tv units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-154",
    "title": "TV Units Design #154",
    "categories": [
      "tv-units"
    ],
    "primaryCategory": "TV Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.36.01-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.36.01-1.jpeg",
    "description": "Bespoke handcrafted tv units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-155",
    "title": "TV Units Design #155",
    "categories": [
      "tv-units"
    ],
    "primaryCategory": "TV Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.36.01.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.36.01.jpeg",
    "description": "Bespoke handcrafted tv units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-156",
    "title": "TV Units Design #156",
    "categories": [
      "tv-units"
    ],
    "primaryCategory": "TV Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.36.00-2.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.36.00-2.jpeg",
    "description": "Bespoke handcrafted tv units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-157",
    "title": "TV Units Design #157",
    "categories": [
      "tv-units"
    ],
    "primaryCategory": "TV Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.36.00-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.36.00-1.jpeg",
    "description": "Bespoke handcrafted tv units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-158",
    "title": "TV Units Design #158",
    "categories": [
      "tv-units"
    ],
    "primaryCategory": "TV Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.35.59.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.35.59.jpeg",
    "description": "Bespoke handcrafted tv units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-159",
    "title": "Wall Cladding Design #159",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.17.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.17.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-160",
    "title": "Wall Cladding Design #160",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.19.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.19.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-161",
    "title": "Wall Cladding Design #161",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.20.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.20.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-162",
    "title": "Wall Cladding Design #162",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.20-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.20-1.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-163",
    "title": "Wall Cladding Design #163",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.21.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.21.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-164",
    "title": "Wall Cladding Design #164",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.22.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.51.22.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-165",
    "title": "Wall Cladding Design #165",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.05.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.05.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-166",
    "title": "Wall Cladding Design #166",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.06.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.06.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-167",
    "title": "Wall Cladding Design #167",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.06-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.06-1.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-168",
    "title": "Wall Cladding Design #168",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-11-at-19.29.07.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-11-at-19.29.07.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-169",
    "title": "Wall Cladding Design #169",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-11-at-19.33.20-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-11-at-19.33.20-1.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-170",
    "title": "Wall Cladding Design #170",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-11-at-19.33.20.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-11-at-19.33.20.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-171",
    "title": "Wall Cladding Design #171",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.11.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.11.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-172",
    "title": "Wall Cladding Design #172",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.43.18.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.43.18.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-173",
    "title": "Wall Cladding Design #173",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.02.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.42.02.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-174",
    "title": "Wall Cladding Design #174",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.07-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.07-1.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-175",
    "title": "Wall Cladding Design #175",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.07.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.07.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-176",
    "title": "Wall Cladding Design #176",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.08.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.08.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-177",
    "title": "Wall Cladding Design #177",
    "categories": [
      "wall-cladding"
    ],
    "primaryCategory": "Wall Cladding",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.08-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.08-1.jpeg",
    "description": "Bespoke handcrafted wall cladding installation fabricated with precision joinery standards."
  },
  {
    "id": "project-178",
    "title": "Studio Units Design #178",
    "categories": [
      "studio-units"
    ],
    "primaryCategory": "Studio Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-18.42.47.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-18.42.47.jpeg",
    "description": "Bespoke handcrafted studio units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-179",
    "title": "Studio Units Design #179",
    "categories": [
      "studio-units"
    ],
    "primaryCategory": "Studio Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-18.42.46-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-18.42.46-1.jpeg",
    "description": "Bespoke handcrafted studio units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-180",
    "title": "Studio Units Design #180",
    "categories": [
      "studio-units"
    ],
    "primaryCategory": "Studio Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-18.42.46.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-18.42.46.jpeg",
    "description": "Bespoke handcrafted studio units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-181",
    "title": "Studio Units Design #181",
    "categories": [
      "studio-units"
    ],
    "primaryCategory": "Studio Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.45.50.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.45.50.jpeg",
    "description": "Bespoke handcrafted studio units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-182",
    "title": "Studio Units Design #182",
    "categories": [
      "studio-units"
    ],
    "primaryCategory": "Studio Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.45.46.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.45.46.jpeg",
    "description": "Bespoke handcrafted studio units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-183",
    "title": "Studio Units Design #183",
    "categories": [
      "studio-units"
    ],
    "primaryCategory": "Studio Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.45.43.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-14-at-17.45.43.jpeg",
    "description": "Bespoke handcrafted studio units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-184",
    "title": "Entrance Units Design #184",
    "categories": [
      "entrance-unit"
    ],
    "primaryCategory": "Entrance Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.35.13.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.35.13.jpeg",
    "description": "Bespoke handcrafted entrance units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-185",
    "title": "Entrance Units Design #185",
    "categories": [
      "entrance-unit"
    ],
    "primaryCategory": "Entrance Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.34.29-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.34.29-1.jpeg",
    "description": "Bespoke handcrafted entrance units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-186",
    "title": "Entrance Units Design #186",
    "categories": [
      "entrance-unit"
    ],
    "primaryCategory": "Entrance Units",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.34.29.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.34.29.jpeg",
    "description": "Bespoke handcrafted entrance units installation fabricated with precision joinery standards."
  },
  {
    "id": "project-187",
    "title": "Coffee Stations Design #187",
    "categories": [
      "coffee-station"
    ],
    "primaryCategory": "Coffee Stations",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.32.22.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.32.22.jpeg",
    "description": "Bespoke handcrafted coffee stations installation fabricated with precision joinery standards."
  },
  {
    "id": "project-188",
    "title": "Coffee Stations Design #188",
    "categories": [
      "coffee-station"
    ],
    "primaryCategory": "Coffee Stations",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.32.21-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.32.21-1.jpeg",
    "description": "Bespoke handcrafted coffee stations installation fabricated with precision joinery standards."
  },
  {
    "id": "project-189",
    "title": "Coffee Stations Design #189",
    "categories": [
      "coffee-station"
    ],
    "primaryCategory": "Coffee Stations",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.32.21.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.32.21.jpeg",
    "description": "Bespoke handcrafted coffee stations installation fabricated with precision joinery standards."
  },
  {
    "id": "project-190",
    "title": "Coffee Stations Design #190",
    "categories": [
      "coffee-station"
    ],
    "primaryCategory": "Coffee Stations",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.32.20.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.32.20.jpeg",
    "description": "Bespoke handcrafted coffee stations installation fabricated with precision joinery standards."
  },
  {
    "id": "project-191",
    "title": "Reception Counters Design #191",
    "categories": [
      "reception-counter"
    ],
    "primaryCategory": "Reception Counters",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.50.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.50.jpeg",
    "description": "Bespoke handcrafted reception counters installation fabricated with precision joinery standards."
  },
  {
    "id": "project-192",
    "title": "Reception Counters Design #192",
    "categories": [
      "reception-counter"
    ],
    "primaryCategory": "Reception Counters",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.51.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.20.51.jpeg",
    "description": "Bespoke handcrafted reception counters installation fabricated with precision joinery standards."
  },
  {
    "id": "project-193",
    "title": "Internal Doors Design #193",
    "categories": [
      "internal-doors"
    ],
    "primaryCategory": "Internal Doors",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.26.19-2.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.26.19-2.jpeg",
    "description": "Bespoke handcrafted internal doors installation fabricated with precision joinery standards."
  },
  {
    "id": "project-194",
    "title": "Internal Doors Design #194",
    "categories": [
      "internal-doors"
    ],
    "primaryCategory": "Internal Doors",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.26.19-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.26.19-1.jpeg",
    "description": "Bespoke handcrafted internal doors installation fabricated with precision joinery standards."
  },
  {
    "id": "project-195",
    "title": "Internal Doors Design #195",
    "categories": [
      "internal-doors"
    ],
    "primaryCategory": "Internal Doors",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.26.18.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.26.18.jpeg",
    "description": "Bespoke handcrafted internal doors installation fabricated with precision joinery standards."
  },
  {
    "id": "project-196",
    "title": "Internal Doors Design #196",
    "categories": [
      "internal-doors"
    ],
    "primaryCategory": "Internal Doors",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.26.18-1.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.26.18-1.jpeg",
    "description": "Bespoke handcrafted internal doors installation fabricated with precision joinery standards."
  },
  {
    "id": "project-197",
    "title": "Internal Doors Design #197",
    "categories": [
      "internal-doors"
    ],
    "primaryCategory": "Internal Doors",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.26.19.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.26.19.jpeg",
    "description": "Bespoke handcrafted internal doors installation fabricated with precision joinery standards."
  },
  {
    "id": "project-198",
    "title": "Internal Doors Design #198",
    "categories": [
      "internal-doors"
    ],
    "primaryCategory": "Internal Doors",
    "imageUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.26.18-2.jpeg",
    "thumbnailUrl": "https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.26.18-2.jpeg",
    "description": "Bespoke handcrafted internal doors installation fabricated with precision joinery standards."
  }
];
