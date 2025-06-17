import React from 'react';
import { NavLinkItem, ServiceHighlight, FounderProfile, ValuePillar, ProcessPhase, DetailedService, BlogPost, SocialLink, CaseStudy } from './types.ts';

// SVG Icons: Simplified to be more style-agnostic (color via text color, size via w/h classes)

export const CodeBracketSquareIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);

export const BeakerIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

export const HeartIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export const AcademicCapIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  </svg>
);

export const LightBulbIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311V21m-3.75-2.311V21m0 0a3 3 0 110-6m0 6a3 3 0 100-6m6.25-3.375a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

export const UsersIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

export const ShieldCheckIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

export const BuildingOffice2Icon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1M14.25 3l1.5.545M11.25 3l-1.5.545m0 6.205l-3 1m-9 3.75h15M12 12.75h.008v.008H12v-.008zm0 3h.008v.008H12v-.008zm0 3h.008v.008H12v-.008z" />
    </svg>
);

export const MagnifyingGlassIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

export const PencilSquareIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

export const RocketLaunchIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.543A14.926 14.926 0 0010.003 4.63m5.588 9.742a8.962 8.962 0 01-5.84 2.58m5.84-2.58L11.631 8.41m4.038 4.038l2.585-5.84m-2.585 5.84l-5.84-2.58m5.84 2.58L17.25 12A2.25 2.25 0 0015 9.75V9H9.375A2.25 2.25 0 007.125 12v3.375A2.25 2.25 0 009.375 18h1.875M13.5 12h1.875c.621 0 1.125.504 1.125 1.125V15c0 .621-.504 1.125-1.125 1.125h-1.875v-3.75z" />
  </svg>
);

export const CogIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15.002 0h.002M7.5 7.5h.002M7.5 16.5h.002M16.5 7.5h.002M16.5 16.5h.002M12 4.5v.002M12 19.5v.002m0-15a.75.75 0 01.75.75v13.5a.75.75 0 01-1.5 0v-13.5a.75.75 0 01.75-.75zm0 0h.002" />
  </svg>
);

export const MenuIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const XMarkIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const MailIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const PhoneIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

export const MapPinIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const BriefcaseIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.25v2.25c0 .93-.75 1.688-1.688 1.688H5.438c-.93 0-1.688-.758-1.688-1.688V14.25M12 18.75h.008v.008H12v-.008zM12 6.75h.008v.008H12V6.75zm0 3h.008v.008H12V9.75zm-3.75-.75h.008v.008H8.25V9zm0 3h.008v.008H8.25v-.008zm0 3h.008v.008H8.25V15zm2.25-3h.008v.008H10.5v-.008zm2.25 0h.008v.008H12.75v-.008zm2.25 0h.008v.008H15v-.008zm2.25 0h.008v.008H17.25v-.008zM12 3.75c-3.142 0-5.996 1.155-8.25 3V18c0 1.657 1.343 3 3 3h10.5c1.657 0 3-1.343 3-3V6.75c-2.254-1.845-5.108-3-8.25-3zM8.25 9a.75.75 0 100-1.5.75.75 0 000 1.5zm0 3a.75.75 0 100-1.5.75.75 0 000 1.5zm0 3a.75.75 0 100-1.5.75.75 0 000 1.5zm9-6a.75.75 0 100-1.5.75.75 0 000 1.5zm0 3a.75.75 0 100-1.5.75.75 0 000 1.5zm0 3a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  </svg>
);

export const ChevronRightIcon: React.FC<{className?: string}> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

export const PlayCircleIcon: React.FC<{className?: string}> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113A.375.375 0 019.75 15.113V8.887c0-.286.307-.466.557-.332l5.603 3.118z" />
  </svg>
);

// New Minimalist Icons
export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 7.5l1.437-.479a4.5 4.5 0 00-3.092-3.092L16 2.25l-.479 1.437a4.5 4.5 0 00-3.092 3.092L10.75 8.5l1.68.557a4.5 4.5 0 003.092 3.092L16 14.75l.479-1.437a4.5 4.5 0 003.092-3.092L21.75 8.5l-1.68-.557a4.5 4.5 0 00-3.092-3.092z" />
</svg>
);

export const ChatBubbleOvalLeftEllipsisIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.026 3 11.5c0 1.95.736 3.737 1.958 5.126L4.017 19.5l3.245-1.076A9.006 9.006 0 0012 20.25zM12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12 10.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  </svg>
);

export const PaperAirplaneIcon: React.FC<{className?: string}> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);


export const NAV_LINKS: NavLinkItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/work', label: 'Our Work' },
  { path: '/approach', label: 'Our Approach' },
  { path: '/blog', label: 'Insights' },
  { path: '/contact', label: 'Contact Us' },
];

export const SERVICE_HIGHLIGHTS: ServiceHighlight[] = [
  {
    id: 'sme-software',
    icon: <CodeBracketSquareIcon />, // Color and size will be applied by the card
    title: 'Custom Software for SMEs',
    description: 'Tailored software solutions to streamline operations and boost growth for small and medium enterprises.',
    learnMoreLink: '/services#sme-software',
  },
  {
    id: 'agri-tech',
    icon: <BeakerIcon />, 
    title: 'Agri-Tech Solutions',
    description: 'Innovative technology to enhance agricultural productivity, market access, and sustainability in Zambia.',
    learnMoreLink: '/services#agri-tech',
  },
  {
    id: 'health-tech',
    icon: <HeartIcon />,
    title: 'Health-Tech Innovations',
    description: 'Developing digital tools to improve healthcare delivery, accessibility, and patient outcomes.',
    learnMoreLink: '/services#health-tech',
  },
  {
    id: 'edu-tech',
    icon: <AcademicCapIcon />,
    title: 'Edu-Tech Platforms',
    description: 'Creating engaging and effective learning platforms to empower students and educators across Zambia.',
    learnMoreLink: '/services#edu-tech',
  },
];

export const DETAILED_SERVICES: DetailedService[] = [
  {
    id: 'sme-software',
    title: 'Custom Software for Small & Medium Enterprises (SMEs)',
    heroImage: 'https://picsum.photos/seed/sme_minimal_v2/1200/400', 
    ogImageUrl: 'https://picsum.photos/seed/sme_og/1200/630',
    description: 'We empower Zambian SMEs with bespoke software solutions designed to meet their unique operational needs, enhance efficiency, and drive growth. From process automation to customer relationship management, we build tools that give you a competitive edge.',
    problemsSolved: [
      'Manual and inefficient processes',
      'Lack of data-driven insights',
      'Difficulty scaling operations',
      'Poor customer engagement',
    ],
    keyFeatures: [
      'Bespoke CRM & ERP systems',
      'Workflow automation tools',
      'Inventory management solutions',
      'E-commerce platforms',
      'Data analytics dashboards',
    ],
    targetAudience: 'Small to medium-sized businesses across various sectors in Zambia looking to digitize and optimize their operations.',
  },
  {
    id: 'agri-tech',
    title: 'Agri-Tech Solutions for Modern Farming',
    heroImage: 'https://picsum.photos/seed/agritech_minimal_v2/1200/400', 
    ogImageUrl: 'https://picsum.photos/seed/agritech_og/1200/630',
    description: 'Techflex is committed to transforming Zambia\'s agricultural sector through technology. Our Agri-Tech solutions provide farmers with critical information, tools for precision farming, and improved access to markets, contributing to food security and economic empowerment.',
    problemsSolved: [
      'Information gaps on market pricing and weather patterns',
      'Inefficient resource management (water, fertilizer)',
      'Limited access to modern farming techniques',
      'Post-harvest losses',
    ],
    keyFeatures: [
      'Mobile apps for crop management and advisory services',
      'Market linkage platforms',
      'Supply chain optimization tools',
      'Data analytics for farm performance',
    ],
    targetAudience: 'Individual farmers, farmers\' cooperatives, agribusinesses, and agricultural NGOs in Zambia.',
  },
  {
    id: 'health-tech',
    title: 'Health-Tech Innovations for Better Healthcare',
    heroImage: 'https://picsum.photos/seed/healthtech_minimal_v2/1200/400', 
    ogImageUrl: 'https://picsum.photos/seed/healthtech_og/1200/630',
    description: 'We are passionate about leveraging technology to improve health outcomes in Zambia. Our Health-Tech solutions focus on enhancing the efficiency of healthcare providers, increasing access to medical information, and empowering patients.',
    problemsSolved: [
      'Limited access to healthcare services in remote areas',
      'Inefficient patient record management',
      'Challenges in health data collection and analysis',
      'Lack of accessible health information for the public',
    ],
    keyFeatures: [
      'Electronic Health Record (EHR) systems',
      'Telemedicine platforms',
      'Clinic management software',
      'Health information systems for data tracking',
    ],
    targetAudience: 'Clinics, hospitals, healthcare professionals, public health organizations, and patients in Zambia.',
  },
  {
    id: 'edu-tech',
    title: 'Edu-Tech Platforms for Enhanced Learning',
    heroImage: 'https://picsum.photos/seed/edutech_minimal_v2/1200/400', 
    ogImageUrl: 'https://picsum.photos/seed/edutech_og/1200/630',
    description: 'Techflex aims to revolutionize education in Zambia by creating innovative and accessible Edu-Tech platforms. We develop solutions that support interactive learning, skill development, and knowledge sharing for students and educators.',
    problemsSolved: [
      'Shortage of quality educational resources',
      'Limited access to personalized learning',
      'Need for digital literacy and skills development',
      'Challenges in managing educational institutions effectively',
    ],
    keyFeatures: [
      'Learning Management Systems (LMS)',
      'Interactive educational content platforms',
      'School management software',
      'Digital literacy training tools',
    ],
    targetAudience: 'Schools, universities, vocational training centers, students, teachers, and educational policymakers in Zambia.',
  },
];

export const FOUNDER_PROFILE: FounderProfile = {
  name: 'Kanyanta Pythias',
  title: 'Founder & Lead Innovator',
  imageUrl: 'https://picsum.photos/seed/founder_profile_v2/400/400', 
  bio: [
    "Kanyanta Pythias is a passionate Information Technology student at Mulungushi University with a vision to transform Zambia through technology.",
    "Driven by a desire to solve real-world problems, Kanyanta founded Techflex to create innovative and accessible software solutions tailored to the unique needs of Zambian businesses and communities.",
    "His academic background provides a strong foundation in modern software development practices, while his entrepreneurial spirit fuels the company's commitment to local impact and global standards."
  ],
  university: 'Mulungushi University',
};

export const CORE_VALUES: ValuePillar[] = [
  {
    id: 'innovation',
    icon: <SparklesIcon />, // Using new SparklesIcon, color applied by card
    name: 'Innovation',
    description: 'We constantly seek creative and cutting-edge solutions to solve complex problems and drive progress.',
  },
  {
    id: 'collaboration',
    icon: <UsersIcon />,
    name: 'Collaboration',
    description: 'We believe in working closely with our clients and partners to co-create solutions that deliver real value.',
  },
  {
    id: 'integrity',
    icon: <ShieldCheckIcon />,
    name: 'Integrity',
    description: 'We operate with transparency, honesty, and a strong ethical compass in all our engagements.',
  },
  {
    id: 'community',
    icon: <BuildingOffice2Icon />,
    name: 'Community Empowerment',
    description: 'We are committed to building local capacity and contributing to the technological advancement of Zambia.',
  },
];

export const DEVELOPMENT_PROCESS: ProcessPhase[] = [
  {
    id: 'discovery',
    phaseNumber: '01',
    title: 'Discovery & Strategy',
    description: "We start by listening. We hold in-depth consultations to understand your goals, challenges, and vision. This phase is crucial for defining a clear project roadmap and success metrics.",
    icon: <MagnifyingGlassIcon />,
  },
  {
    id: 'design',
    phaseNumber: '02',
    title: 'Design & Prototyping',
    description: "Our team designs intuitive, user-friendly interfaces focused on excellent user experience. We provide you with prototypes and mockups for feedback, ensuring the solution aligns with your expectations.",
    icon: <PencilSquareIcon />,
  },
  {
    id: 'development',
    phaseNumber: '03',
    title: 'Development & Testing',
    description: "Our skilled developers write clean, efficient, and scalable code using modern technologies. We conduct rigorous testing throughout the development lifecycle to ensure your software is secure, reliable, and bug-free.",
    icon: <CodeBracketSquareIcon />,
  },
  {
    id: 'deployment',
    phaseNumber: '04',
    title: 'Deployment & Support',
    description: "We manage the deployment process to ensure a smooth launch. Post-launch, Techflex provides ongoing support and maintenance to ensure your software continues to perform optimally and evolve with your needs.",
    icon: <RocketLaunchIcon />,
  },
];

export const PLACEHOLDER_BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: '5 Manual Tasks Every Zambian SME Can Automate in 2025',
        summary: 'Discover key areas where automation can save time, reduce costs, and boost efficiency for your small or medium enterprise in Zambia.',
        date: 'November 20, 2024',
        imageUrl: 'https://picsum.photos/seed/blogauto_minimal_v2/600/400',
        ogImageUrl: 'https://picsum.photos/seed/blogauto_og/1200/630',
        author: 'Techflex Insights Team',
        link: '/blog/sme-automation-zambia', // Placeholder link, actual routing to be handled by app
        tags: ['SME', 'Automation', 'Efficiency', 'Zambia']
    },
    {
        id: '2',
        title: 'The Future of FinTech: Mobile Money APIs in Zambia',
        summary: 'Exploring how leveraging Mobile Money APIs can unlock new financial service opportunities and streamline payments for businesses in Zambia.',
        date: 'November 10, 2024',
        imageUrl: 'https://picsum.photos/seed/blogfintech_minimal_v2/600/400',
        ogImageUrl: 'https://picsum.photos/seed/blogfintech_og/1200/630',
        author: 'Kanyanta Pythias',
        link: '/blog/fintech-mobile-money-zambia',
        tags: ['FinTech', 'Mobile Money', 'API', 'Innovation']
    },
    {
        id: '3',
        title: 'Our Journey: Building Our First App at Mulungushi University',
        summary: 'A behind-the-scenes look at the challenges, learnings, and triumphs of developing a software project as students, and how it shaped Techflex.',
        date: 'October 30, 2024',
        imageUrl: 'https://picsum.photos/seed/blogjourney_minimal_v2/600/400',
        ogImageUrl: 'https://picsum.photos/seed/blogjourney_og/1200/630',
        author: 'Kanyanta Pythias',
        link: '/blog/building-first-app-mulungushi',
        tags: ['Student Project', 'Software Development', 'Mulungushi University', 'Inspiration']
    }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-study-agri',
    title: 'Empowering Farmers with Real-Time Market Data',
    clientName: 'Conceptual Project: AgriConnect Zambia',
    industry: 'Agriculture',
    problem: 'Zambian small-scale farmers often lack access to transparent, real-time market pricing for their produce, leading to unfair negotiations and reduced income.',
    solution: 'Developed a prototype USSD and basic mobile application that aggregates market prices from various local sources. The app provides farmers with up-to-date pricing information, weather alerts, and best practice farming tips.',
    outcome: 'Conceptual outcome: Increased farmers\' negotiation power by an estimated 15-30%. Improved access to information could lead to better crop planning and reduced post-harvest losses.',
    imageUrl: 'https://picsum.photos/seed/casestudyagri_minimal_v2/600/400',
    ogImageUrl: 'https://picsum.photos/seed/casestudyagri_og/1200/630',
    technologiesUsed: ['USSD', 'Android (Java/Kotlin)', 'Firebase'],
    link: '/work#case-study-agri' 
  },
  {
    id: 'case-study-sme',
    title: 'Streamlining Operations for a Local Retailer',
    clientName: 'Conceptual Project: Lusaka General Store',
    industry: 'Retail SME',
    problem: 'A local retail business struggled with manual inventory tracking, leading to stockouts of popular items and overstocking of slow-moving products, impacting cash flow and customer satisfaction.',
    solution: 'Designed a simple, cloud-based inventory management system with barcode scanning capabilities, sales tracking, and automated low-stock alerts. The system also provided basic sales analytics.',
    outcome: 'Conceptual outcome: Reduced stockouts by 40%, decreased holding costs for overstocked items by 25%, and provided valuable insights into product performance, enabling better purchasing decisions.',
    imageUrl: 'https://picsum.photos/seed/casestudysme_minimal_v2/600/400',
    ogImageUrl: 'https://picsum.photos/seed/casestudysme_og/1200/630',
    technologiesUsed: ['React', 'Node.js', 'PostgreSQL', 'Cloud Hosting'],
    link: '/work#case-study-sme'
  }
];

export const TECHNOLOGY_STACK: {name: string, category: string, icon?: React.ReactElement }[] = [
    { name: "React", category: "Frontend" },
    { name: "JavaScript / TypeScript", category: "Core" },
    { name: "Node.js", category: "Backend" },
    { name: "Python (Django/Flask)", category: "Backend" },
    { name: "Java", category: "Backend/Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "PostgreSQL / MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS / Google Cloud", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
];

export const PARTNERS_PLACEHOLDER: string[] = [
    "Local Tech Hub Collaboration (Example)",
    "Mulungushi University IT Department (Example Academic Partner)",
    "Zambian Business Development Agency (Example)"
];

// Minimalist Social Icons (inline SVG)
const LinkedInIcon: React.FC<{className?: string}> = ({className = "w-5 h-5"}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
  </svg>
);

const TwitterIcon: React.FC<{className?: string}> = ({className = "w-5 h-5"}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
  </svg>
);


export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/techflex-zambia', icon: <LinkedInIcon /> },
    { name: 'Twitter', url: 'https://twitter.com/techflexzm', icon: <TwitterIcon /> }
];

export const TEAM_MEMBERS = [
  {
    id: 'team-member-1',
    name: 'Jane Mwanza',
    title: 'Lead Developer',
    imageUrl: 'https://picsum.photos/seed/team_member_1/400/400',
    bio: 'Jane is a talented software engineer with expertise in React and Node.js. She leads our development team with a focus on creating elegant, efficient solutions.',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/jane-mwanza', icon: <LinkedInIcon /> },
      { name: 'Twitter', url: 'https://twitter.com/janemwanza', icon: <TwitterIcon /> }
    ]
  },
  {
    id: 'team-member-2',
    name: 'David Banda',
    title: 'UX/UI Designer',
    imageUrl: 'https://picsum.photos/seed/team_member_2/400/400',
    bio: 'David brings creative vision to our projects, ensuring that our solutions are not only functional but also intuitive and visually appealing for users.',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/david-banda', icon: <LinkedInIcon /> }
    ]
  },
  {
    id: 'team-member-3',
    name: 'Mercy Chanda',
    title: 'Business Analyst',
    imageUrl: 'https://picsum.photos/seed/team_member_3/400/400',
    bio: 'Mercy bridges the gap between business needs and technical solutions, ensuring our projects deliver real value to clients across Zambia.',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/mercy-chanda', icon: <LinkedInIcon /> },
      { name: 'Twitter', url: 'https://twitter.com/mercychanda', icon: <TwitterIcon /> }
    ]
  },
  {
    id: 'team-member-4',
    name: 'Michael Tembo',
    title: 'Mobile Developer',
    imageUrl: 'https://picsum.photos/seed/team_member_4/400/400',
    bio: 'Michael specializes in creating responsive mobile applications that work seamlessly across devices, focusing on performance and user experience.',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/michael-tembo', icon: <LinkedInIcon /> }
    ]
  }
];

export const COMPANY_EMAIL = "contact@techflex.co.zm";
export const COMPANY_PHONE_PLACEHOLDER = "+260 97 912 4278";
export const COMPANY_LOCATION = "Based in Lusaka, Zambia";
export const COMPANY_FOUNDER_NAME = "Kanyanta Pythias";
export const COMPANY_NAME = "Techflex";
export const CURRENT_YEAR = new Date().getFullYear();
export const TAGLINE_PRIMARY = "Progress Through Innovation.";
export const TAGLINE_SECONDARY = "Local Solutions, Global Standards.";
export const WEBSITE_URL = "https://YOUR_ACTUAL_WEBSITE_URL_HERE"; // Replace it with actual URL
export const DEFAULT_OG_IMAGE_URL = `${WEBSITE_URL}/icons/icon-512x512.png`; // Default OG image path
export const HERO_VIDEO_URL = `${WEBSITE_URL}/videos/digital-transformation.mp4`; // Default OG image path
// export const HERO_VIDEO_URL = '/videos/digital-transformation.mp4';
