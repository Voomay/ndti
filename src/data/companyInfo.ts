export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  subtagline: string;
  phone: string;
  displayPhone: string;
  whatsappPhone: string;
  email: string;
  address: {
    line1: string;
    suburb: string;
    area: string;
    full: string;
    googleMapsUrl: string;
  };
  workingHours: string;
  socials: {
    facebook: string;
    instagram: string;
  };
  stats: Array<{
    value: string;
    label: string;
    subtext: string;
  }>;
  pillars: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export const COMPANY_INFO: CompanyInfo = {
  name: 'NDti',
  legalName: 'NDti in Collaboration with IanArt Pty Ltd',
  tagline: 'The Place Where Joinery & Art Meet',
  subtagline: 'Inspire your space through art and design.',
  phone: '+27838008834',
  displayPhone: '083 800 8834',
  whatsappPhone: '+27838008834',
  email: 'info@ianartndti.co.za',
  address: {
    line1: 'Unit 2, 15 Muscat Road',
    suburb: 'Saxenburg Park 1',
    area: 'Blackheath, Cape Town, 7580',
    full: 'Unit 2, 15 Muscat road, Saxenburg Park 1, Blackheath',
    googleMapsUrl: 'https://maps.google.com/?q=Unit+2,+15+Muscat+road,+Saxenburg+Park+1,+Blackheath'
  },
  workingHours: 'Mon - Fri: 08:00 - 17:00',
  socials: {
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com'
  },
  stats: [
    { value: '15+', label: 'Years Experience', subtext: 'Mastery in architectural joinery' },
    { value: '500+', label: 'Projects Completed', subtext: 'Delivered to elite residential & corporate clients' },
    { value: '100%', label: 'Happy Clients', subtext: 'Uncompromising dedication to perfection' },
    { value: '25+', label: 'Artisan Craftsmen', subtext: 'Dedicated in-house joiners & fabricators' }
  ],
  pillars: [
    {
      title: 'Expertise and Experience',
      description: 'We have a team of skilled professionals with extensive expertise and years of experience in the field of custom bespoke joinery.',
      icon: 'Award'
    },
    {
      title: 'Attention to Detail',
      description: 'We pay careful attention to every detail of our joinery pieces. From precise measurements and flawless finishes to seamless joints and exquisite aesthetics.',
      icon: 'CheckCircle2'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We strive to exceed your expectations and ensure your complete happiness with our services.',
      icon: 'HeartHandshake'
    }
  ]
};
