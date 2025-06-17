import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import Layout from './components/layouts/Layout.tsx'; // New Layout component

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage.tsx'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage.tsx'));
const ServicesOverviewPage = lazy(() => import('./pages/services/ServicesOverviewPage.tsx')); // Renamed/Refactored
const ServiceDetailPage = lazy(() => import('./pages/services/ServiceDetailPage.tsx')); // New Detail Page
const OurWorkPage = lazy(() => import('./pages/OurWorkPage.tsx'));
const OurApproachPage = lazy(() => import('./pages/OurApproachPage.tsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.tsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx'));

// Fallback component for Suspense
const LoadingFallback: React.FC = () => (
  <div className="flex flex-col justify-center items-center min-h-screen bg-slate-100 dark:bg-brand-gray-950 text-center p-4">
    <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-4 border-b-4 border-techflex-orange mb-3 sm:mb-4"></div>
    <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-semibold">Loading Page...</p>
    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Please wait a moment.</p>
  </div>
);

// Component to scroll to top and handle NProgress
const RouteChangeHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.done(); // Ensure NProgress finishes if it was started
    window.scrollTo(0, 0);
    NProgress.start(); // Start NProgress on path change attempt

    // This effect should run on every location change
    // A slight delay before done, or use a router event if available
    const timer = setTimeout(() => NProgress.done(), 300); // Adjust delay as needed
    return () => {
      clearTimeout(timer);
      NProgress.done(); // Ensure it's done on unmount / quick changes
    };
  }, [location.pathname]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // Configure NProgress
    NProgress.configure({ showSpinner: false }); // Example configuration
  }, []);

  return (
    <HashRouter>
      <RouteChangeHandler />
      <Layout> {/* Main layout wraps all routes */}
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesOverviewPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} /> {/* Nested service route */}
            <Route path="/work" element={<OurWorkPage />} />
            <Route path="/approach" element={<OurApproachPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </HashRouter>
  );
};

export default App;