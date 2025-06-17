
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS, COMPANY_NAME, CURRENT_YEAR, COMPANY_EMAIL, COMPANY_PHONE_PLACEHOLDER, COMPANY_LOCATION, CodeBracketSquareIcon, TAGLINE_PRIMARY } from '../constants.tsx';
import { NavLinkItem, SocialLink } from '../types.ts';
import Button from './ui/Button.tsx'; // Updated path

const Footer: React.FC = () => {
  // Placeholder for newsletter form submission
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
    if (emailInput && emailInput.value) {
        alert(`Thank you for subscribing with ${emailInput.value}! This feature is coming soon.`);
        // In a real scenario, you'd use react-hook-form here and call Mailchimp.
        // For now, reset the form if needed or clear input.
        e.currentTarget.reset();
    } else {
        alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="bg-brand-gray-50 dark:bg-brand-gray-950 text-brand-gray-600 dark:text-brand-gray-400 border-t border-brand-gray-200 dark:border-brand-gray-800" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        
        {/* Newsletter Signup Mini-Form */}
        <div className="bg-white dark:bg-brand-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg mb-10 sm:mb-12 md:mb-16">
          <div className="md:flex md:items-center md:justify-between gap-4 md:gap-6">
            <div className="mb-4 md:mb-0 flex-1">
              <h3 className="text-xl lg:text-2xl font-semibold text-techflex-blue dark:text-white mb-1 font-display">Stay Ahead with Tech Insights</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Get our "10-Point Tech Checklist for Zambian SMEs" and occasional updates.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch w-full sm:w-auto md:max-w-md">
              <label htmlFor="newsletter-email" className="sr-only">Email for newsletter and checklist</label>
              <input 
                type="email" 
                name="email"
                id="newsletter-email"
                placeholder="your.email@example.com" 
                aria-label="Email for free checklist and newsletter"
                required
                className="flex-grow px-3 sm:px-4 py-2.5 rounded-lg text-brand-gray-800 dark:text-brand-gray-200 bg-brand-gray-100 dark:bg-brand-gray-700 border border-brand-gray-300 dark:border-brand-gray-600 focus:outline-none focus:ring-2 focus:ring-techflex-orange focus:border-techflex-orange text-sm sm:text-base" 
              />
              <Button type="submit" variant="primary" size="md" className="whitespace-nowrap shadow-none hover:shadow-md !text-sm sm:!text-base">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 md:mb-12">
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-techflex-blue dark:text-white mb-3 sm:mb-4 group focus:outline-none focus:ring-2 focus:ring-techflex-orange focus:ring-offset-2 dark:focus:ring-offset-brand-gray-950 rounded-md"
              aria-label={`${COMPANY_NAME} Homepage`}
            >
              <CodeBracketSquareIcon className="h-7 w-7 sm:h-8 text-techflex-orange group-hover:opacity-80 transition-opacity" />
              <span className="font-bold text-2xl font-display group-hover:opacity-80 transition-opacity">{COMPANY_NAME}</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              {TAGLINE_PRIMARY} We craft innovative software to solve Zambia's unique challenges.
            </p>
          </div>

          <div className="lg:col-start-2">
            <h4 className="text-sm font-semibold text-brand-gray-800 dark:text-white uppercase tracking-wider mb-3 sm:mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {NAV_LINKS.slice(0, 5).map((link: NavLinkItem) => ( 
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-techflex-orange transition-colors text-sm focus:outline-none focus:ring-1 focus:ring-techflex-orange rounded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           <div>
            <h4 className="text-sm font-semibold text-brand-gray-800 dark:text-white uppercase tracking-wider mb-3 sm:mb-4 font-display">Resources</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {NAV_LINKS.slice(5).map((link: NavLinkItem) => ( 
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-techflex-orange transition-colors text-sm focus:outline-none focus:ring-1 focus:ring-techflex-orange rounded">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li>
                  <Link to="/privacy-policy" className="hover:text-techflex-orange transition-colors text-sm focus:outline-none focus:ring-1 focus:ring-techflex-orange rounded"> 
                    Privacy Policy
                  </Link>
                </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-brand-gray-800 dark:text-white uppercase tracking-wider mb-3 sm:mb-4 font-display">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm">
              <li><a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-techflex-orange transition-colors break-all focus:outline-none focus:ring-1 focus:ring-techflex-orange rounded">{COMPANY_EMAIL}</a></li>
              <li>{COMPANY_PHONE_PLACEHOLDER}</li>
              <li>{COMPANY_LOCATION}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gray-200 dark:border-brand-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="mb-4 sm:mb-0 text-center sm:text-left">&copy; {CURRENT_YEAR} {COMPANY_NAME}. All Rights Reserved.</p>
          <div className="flex space-x-4 sm:space-x-5">
            {SOCIAL_LINKS.map((social: SocialLink) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray-500 dark:text-brand-gray-400 hover:text-techflex-orange dark:hover:text-techflex-orange transition-colors focus:outline-none focus:ring-2 focus:ring-techflex-orange rounded-sm"
                aria-label={`Follow ${COMPANY_NAME} on ${social.name}`}
              >
                {React.cloneElement(social.icon, { className: "w-5 h-5" })} 
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
