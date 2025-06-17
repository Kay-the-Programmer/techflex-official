
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY_NAME, CodeBracketSquareIcon, MenuIcon, XMarkIcon } from '../constants.tsx';
import { NavLinkItem } from '../types.ts';
import ThemeToggle from './ui/ThemeToggle.tsx'; // Import ThemeToggle

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `sticky top-0 z-50 transition-all duration-300 ${
    isScrolled || isOpen ? 'bg-glass backdrop-blur-25 supports-[backdrop-filter]:bg-white/5 shadow-lg' : 'bg-transparent dark:bg-transparent shadow-none'
  }`;

  const linkBaseClass = "block md:inline-block px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-techflex-orange focus:ring-offset-2 dark:focus:ring-offset-brand-gray-900 transition-colors duration-150 ease-in-out";
  const inactiveLinkClass = "text-brand-gray-600 dark:text-brand-gray-300 hover:text-techflex-orange dark:hover:text-techflex-orange";
  const activeLinkClass = "text-techflex-orange font-semibold";


  return (
    <header className={navClass} aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-1.5 sm:space-x-2 text-techflex-blue dark:text-white hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-techflex-orange focus:ring-offset-2 dark:focus:ring-offset-brand-gray-900 rounded-md"
              aria-label={`${COMPANY_NAME} Homepage`}
            >
              <CodeBracketSquareIcon className="h-7 w-7 sm:h-8 md:h-9 text-techflex-orange" />
              <span className="font-bold font-display text-2xl lg:text-3xl">{COMPANY_NAME}</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <Link
                key={link.label}
                to={link.path}
                className={`${linkBaseClass} ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                    ? activeLinkClass
                    : inactiveLinkClass
                }`}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-brand-gray-500 dark:text-brand-gray-400 hover:text-techflex-orange dark:hover:text-techflex-orange hover:bg-brand-gray-100 dark:hover:bg-brand-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-techflex-orange"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden bg-glass backdrop-blur-25 supports-[backdrop-filter]:bg-white/5 shadow-xl absolute w-full top-16 sm:top-20 left-0`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <Link
                key={link.label}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-techflex-orange focus:ring-offset-2 dark:focus:ring-offset-brand-gray-900 ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                    ? `${activeLinkClass} bg-techflex-orange/10 dark:bg-techflex-orange/20`
                    : inactiveLinkClass
                }`}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
