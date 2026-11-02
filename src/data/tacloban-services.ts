export type ServiceCategory = 'residents' | 'business' | 'visitors';
export type ServiceIcon =
  | 'document'
  | 'store'
  | 'home'
  | 'heart'
  | 'users'
  | 'map'
  | 'briefcase'
  | 'building'
  | 'shield'
  | 'book'
  | 'utensils'
  | 'bed';

export interface TaclobanService {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  icon: ServiceIcon;
  office: string;
  url: string;
  linkLabel: string;
  keywords: string[];
  steps: [string, string, string];
  sourceLabel: string;
}

export const services: TaclobanService[] = [
  {
    id: 'birth-certificate',
    title: 'Birth certificates',
    description:
      'Find the city’s guidance for birth registration and local birth records.',
    category: 'residents',
    icon: 'document',
    office: 'City Civil Registrar’s Office',
    url: 'https://tacloban.gov.ph/citizens-charter/',
    linkLabel: 'Read the Citizen’s Charter',
    keywords: [
      'birth',
      'certificate',
      'registration',
      'civil registry',
      'anak',
      'kapanganakan',
    ],
    steps: [
      'Open the city’s Citizen’s Charter.',
      'Find the City Civil Registrar’s Office section and the service you need.',
      'Review the listed requirements and contact the office before your visit.',
    ],
    sourceLabel: 'Tacloban City Citizen’s Charter',
  },
  {
    id: 'marriage-license',
    title: 'Marriage licenses',
    description:
      'Look up the official guidance before applying for a marriage license.',
    category: 'residents',
    icon: 'heart',
    office: 'City Civil Registrar’s Office',
    url: 'https://tacloban.gov.ph/citizens-charter/',
    linkLabel: 'Read the Citizen’s Charter',
    keywords: ['marriage', 'license', 'wedding', 'kasal', 'civil registrar'],
    steps: [
      'Open the city’s Citizen’s Charter.',
      'Find the marriage license service under the City Civil Registrar’s Office.',
      'Check the current requirements with the office before preparing your application.',
    ],
    sourceLabel: 'Tacloban City Citizen’s Charter',
  },
  {
    id: 'civil-records',
    title: 'Civil records & corrections',
    description:
      'Find the right process for other civil registry requests and record concerns.',
    category: 'residents',
    icon: 'book',
    office: 'City Civil Registrar’s Office',
    url: 'https://tacloban.gov.ph/citizens-charter/',
    linkLabel: 'Find the official process',
    keywords: [
      'civil',
      'records',
      'death',
      'correction',
      'registry',
      'certificate',
      'dokumento',
    ],
    steps: [
      'Open the city’s Citizen’s Charter.',
      'Browse the civil registrar services for your type of record or request.',
      'Confirm the applicable process and documents with the office.',
    ],
    sourceLabel: 'Tacloban City Citizen’s Charter',
  },
  {
    id: 'business-permit',
    title: 'Business permits',
    description:
      'Start a new application or renewal through Tacloban’s official eBOSS portal.',
    category: 'business',
    icon: 'store',
    office: 'Business Permits & Licensing Division',
    url: 'https://eboss.tacloban.gov.ph/Business',
    linkLabel: 'Open eBOSS Business',
    keywords: [
      'business',
      'permit',
      'renewal',
      'mayor',
      'eboss',
      'negosyo',
      'tindahan',
    ],
    steps: [
      'Open the official eBOSS Business page.',
      'Sign in or use the portal’s registration option.',
      'Choose your transaction and follow the requirements shown in the portal.',
    ],
    sourceLabel: 'Official eBOSS Tacloban portal',
  },
  {
    id: 'property-tax',
    title: 'Real property tax',
    description:
      'Access the city’s online property tax assessment and payment pathway.',
    category: 'residents',
    icon: 'home',
    office: 'City Treasurer’s Office / City Assessor’s Office',
    url: 'https://eboss.tacloban.gov.ph/RPT',
    linkLabel: 'Open eBOSS Property Tax',
    keywords: [
      'property',
      'tax',
      'rpt',
      'land',
      'house',
      'amilyar',
      'lupa',
      'bahay',
    ],
    steps: [
      'Open the official eBOSS Real Property Tax page.',
      'Sign in or register through the portal.',
      'Follow the portal’s instructions for assessment and available payment options.',
    ],
    sourceLabel: 'Official eBOSS Tacloban portal',
  },
  {
    id: 'health-certificate',
    title: 'Health certificates',
    description:
      'Access the official application pathway for food and non-food health certificates.',
    category: 'residents',
    icon: 'heart',
    office: 'City Health Office',
    url: 'https://eboss.tacloban.gov.ph/Healthcard',
    linkLabel: 'Open eBOSS Health Certificate',
    keywords: ['health', 'certificate', 'card', 'food', 'medical', 'kalusugan'],
    steps: [
      'Open the official eBOSS Health Certificate page.',
      'Sign in or register through the portal.',
      'Review the application instructions and any required next steps.',
    ],
    sourceLabel: 'Official eBOSS Tacloban portal',
  },
  {
    id: 'sanitary-permit',
    title: 'Sanitary permits',
    description:
      'Find the city’s sanitary permit application pathway for your business.',
    category: 'business',
    icon: 'shield',
    office: 'City Health Office',
    url: 'https://eboss.tacloban.gov.ph/Sanitary',
    linkLabel: 'Open eBOSS Sanitary Permit',
    keywords: [
      'sanitary',
      'permit',
      'sanitation',
      'health',
      'business',
      'negosyo',
    ],
    steps: [
      'Open the official eBOSS Sanitary Permit page.',
      'Sign in or register through the portal.',
      'Review the listed requirements and follow the application instructions.',
    ],
    sourceLabel: 'Official eBOSS Tacloban portal',
  },
  {
    id: 'construction-permits',
    title: 'Building & construction permits',
    description:
      'Access building permit, occupancy permit, and locational clearance services.',
    category: 'business',
    icon: 'building',
    office: 'City construction permit services',
    url: 'https://eboss.tacloban.gov.ph/ConstructionPermit',
    linkLabel: 'Open eBOSS Construction',
    keywords: [
      'construction',
      'building',
      'occupancy',
      'locational',
      'clearance',
      'permit',
      'zoning',
    ],
    steps: [
      'Open the official eBOSS Construction Permit page.',
      'Sign in or register through the portal.',
      'Select the relevant service and review its requirements before applying.',
    ],
    sourceLabel: 'Official eBOSS Tacloban portal',
  },
  {
    id: 'social-welfare',
    title: 'Social welfare & assistance',
    description:
      'Find the city office for social welfare concerns and assistance inquiries.',
    category: 'residents',
    icon: 'users',
    office: 'City Social Welfare & Development Office',
    url: 'https://tacloban.gov.ph/departments/',
    linkLabel: 'Find the city office',
    keywords: [
      'social',
      'welfare',
      'assistance',
      'aid',
      'family',
      'cswdo',
      'tulong',
      'ayuda',
    ],
    steps: [
      'Open the city’s official departments directory.',
      'Find the City Social Welfare and Development Office under Social Services.',
      'Contact the office to ask which service and requirements apply to your concern.',
    ],
    sourceLabel: 'Tacloban City departments directory',
  },
  {
    id: 'culture-events',
    title: 'Festivals & city traditions',
    description:
      'Learn about Sangyaw and the commemorations that bring Tacloban together.',
    category: 'visitors',
    icon: 'map',
    office: 'City Tourism Operations Office',
    url: 'https://tacloban.gov.ph/festivities-and-observances/',
    linkLabel: 'Explore city traditions',
    keywords: [
      'tourism',
      'festival',
      'sangyaw',
      'events',
      'fiesta',
      'yolanda',
      'culture',
      'visit',
    ],
    steps: [
      'Open the city’s festivities and observances page.',
      'Read about the tradition or commemoration you are interested in.',
      'Check current city announcements before making plans for an event.',
    ],
    sourceLabel: 'Tacloban City tourism pages',
  },
  {
    id: 'where-to-eat',
    title: 'Where to eat',
    description:
      'Explore local dining places featured in the city’s tourism guide.',
    category: 'visitors',
    icon: 'utensils',
    office: 'City Tourism Operations Office',
    url: 'https://tacloban.gov.ph/where-to-dine/',
    linkLabel: 'Explore the dining guide',
    keywords: [
      'eat',
      'food',
      'restaurant',
      'dine',
      'dining',
      'seafood',
      'kain',
      'pagkain',
    ],
    steps: [
      'Open the city’s official dining guide.',
      'Browse the featured places and their location details.',
      'Confirm current opening hours and availability directly with your chosen place.',
    ],
    sourceLabel: 'Tacloban City tourism pages',
  },
  {
    id: 'where-to-stay',
    title: 'Where to stay',
    description:
      'Browse accommodation information from the city’s tourism pages.',
    category: 'visitors',
    icon: 'bed',
    office: 'City Tourism Operations Office',
    url: 'https://tacloban.gov.ph/where-to-stay/',
    linkLabel: 'Explore places to stay',
    keywords: [
      'stay',
      'hotel',
      'accommodation',
      'travel',
      'rooms',
      'tourism',
      'tuluyan',
    ],
    steps: [
      'Open the city’s official accommodation guide.',
      'Browse places that suit your visit.',
      'Contact the accommodation directly to confirm availability and booking details.',
    ],
    sourceLabel: 'Tacloban City tourism pages',
  },
];
