import React from 'react';
import PageContainer from '../components/PageContainer.tsx'; // Corrected path
import SectionWrapper from '../components/SectionWrapper.tsx';
import Button from '../components/ui/Button.tsx'; // Corrected path
import { COMPANY_NAME, DEFAULT_OG_IMAGE_URL } from '../constants.tsx';

const NotFoundPage: React.FC = () => {
  const pageTitle = `404 - Page Not Found | ${COMPANY_NAME}`;
  const pageDescription = `Oops! The page you're looking for could not be found on ${COMPANY_NAME}'s website. Please check the URL or navigate back home.`;

  return (
    <PageContainer 
        title={pageTitle}
        description={pageDescription}
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        ogImageUrl={DEFAULT_OG_IMAGE_URL} // Generic OG for 404
    >
      <SectionWrapper className="flex items-center justify-center min-h-[calc(100vh-160px)] sm:min-h-[calc(100vh-200px)] !py-10"> {/* Adjust min-h based on nav/footer height */}
        <div className="text-center bg-white dark:bg-brand-gray-800 p-6 sm:p-10 md:p-16 rounded-xl shadow-2xl max-w-md sm:max-w-lg mx-auto">
          <svg className="mx-auto h-16 w-16 sm:h-20 sm:w-20 text-red-500 dark:text-red-400 mb-4 sm:mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-slate-800 dark:text-white mb-3 sm:mb-4">404</h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-4 sm:mb-6">Page Not Found</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base">
            We're sorry, but the page you are looking for doesn't exist or has been moved. 
            You can return to the homepage or try searching.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Button to="/" variant="primary" size="lg" className="w-full sm:w-auto !text-sm sm:!text-base">
              Go to Homepage
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="w-full sm:w-auto !text-sm sm:!text-base">
              Contact Us
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </PageContainer>
  );
};

export default NotFoundPage;