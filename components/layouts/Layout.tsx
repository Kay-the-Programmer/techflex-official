import React from 'react';
import Navbar from '../Navbar.tsx';
import Footer from '../Footer.tsx';
import StickyCTA from '../StickyCTA.tsx';
import Chatbot from '../chatbot/Chatbot.tsx';
import ExitIntentModal from '../modals/ExitIntentModal.tsx';
import StructuredData from '../StructuredData.tsx';
import { COMPANY_NAME, COMPANY_EMAIL, WEBSITE_URL, TAGLINE_PRIMARY, SOCIAL_LINKS, COMPANY_PHONE_PLACEHOLDER } from '../../constants.tsx';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const organizationSchema = {
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: WEBSITE_URL,
    logo: `${WEBSITE_URL}/icons/icon-512x512.png`, // Assuming your main logo is accessible here
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_PHONE_PLACEHOLDER, // Add actual phone if available
      contactType: 'Customer Service', // Or 'Sales', 'Technical Support'
      email: COMPANY_EMAIL,
      areaServed: 'ZM', // Zambia
      availableLanguage: ['en-US', 'en-GB'],
    },
    sameAs: SOCIAL_LINKS.map(link => link.url),
    description: TAGLINE_PRIMARY,
  };

  const webSiteSchema = {
    '@type': 'WebSite',
    name: COMPANY_NAME,
    url: WEBSITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${WEBSITE_URL}/search?q={search_term_string}`, // Example search URL
      'query-input': 'required name=search_term_string',
    },
    description: TAGLINE_PRIMARY,
  };


  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-gray-950 text-brand-gray-700 dark:text-brand-gray-300">
      <StructuredData type="Organization" data={organizationSchema} />
      <StructuredData type="WebSite" data={webSiteSchema} />
      <Navbar />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <Footer />
      <StickyCTA />
      <Chatbot />
      <ExitIntentModal />
    </div>
  );
};

export default Layout;