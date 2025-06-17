import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/PageContainer.tsx'; // Added PageContainer
import SectionWrapper from '../../components/SectionWrapper.tsx';
import SectionTitle from '../../components/ui/SectionTitle.tsx';
import Button from '../../components/ui/Button.tsx';
import { DETAILED_SERVICES, CodeBracketSquareIcon, COMPANY_NAME, ArrowRightIcon, DEFAULT_OG_IMAGE_URL } from '../../constants.tsx';
import { DetailedService } from '../../types.ts';

const ServiceCard: React.FC<{ service: DetailedService }> = ({ service }) => {
  return (
    <Link 
        to={`/services/${service.id}`} 
        className="block bg-glass backdrop-blur-10 border border-white/20 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out group transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-techflex-orange focus:ring-offset-2 dark:focus:ring-offset-brand-gray-950"
        aria-label={`Learn more about ${service.title}`}
    >
      {/* You can add an icon here if DetailedService gets an icon property */}
      {/* <div className="mb-4 text-techflex-orange">{React.cloneElement(service.icon, {className: "w-10 h-10"})}</div> */}
      <h3 className="text-lg lg:text-xl font-semibold text-techflex-blue dark:text-white mb-2 font-display group-hover:text-techflex-orange transition-colors">{service.title}</h3>
      <p className="text-sm text-brand-gray-600 dark:text-brand-gray-300 mb-4 line-clamp-3 leading-relaxed">
        {service.description.substring(0, 100)}...
      </p>
      <span className="text-sm font-semibold text-techflex-orange group-hover:underline flex items-center">
        View Details <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
};

const ServicesOverviewPage: React.FC = () => {
  const serviceTitles = DETAILED_SERVICES.map(s => s.title.split(" for")[0]).join(', '); // e.g., Custom Software, Agri-Tech Solutions
  const pageTitle = `Our Services - ${serviceTitles} | ${COMPANY_NAME}`;
  const pageDescription = `Explore ${COMPANY_NAME}'s services: ${serviceTitles}. We offer tailored software solutions for SMEs, Agri-Tech, Health-Tech, and Edu-Tech in Zambia to drive innovation and growth.`;

  return (
    <PageContainer
      title={pageTitle}
      description={pageDescription}
      ogTitle={pageTitle}
      ogDescription={pageDescription}
      ogImageUrl={DEFAULT_OG_IMAGE_URL} // Could be a generic services OG image
    >
      <SectionWrapper className="bg-techflex-orange text-white !py-20 sm:!py-24 md:!py-32">
        <div className="text-center max-w-3xl mx-auto">
          <CodeBracketSquareIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />
          <h1 className="text-3xl lg:text-4xl font-bold font-display mb-3 sm:mb-4 tracking-tight">Our Solutions</h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            Tailored software to address Zambia's unique challenges and unlock new opportunities across critical sectors.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-gray-50 dark:bg-brand-gray-950">
        <div className="max-w-5xl mx-auto">
            <SectionTitle
                title="Explore Our Services"
                subtitle="Select a category below to learn more about how we can help you achieve your goals with our specialized software solutions."
                className="mb-8 sm:mb-10 md:mb-12"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {DETAILED_SERVICES.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-techflex-blue dark:bg-techflex-blue-900 text-white !py-16 sm:!py-20 md:!py-24">
        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle
            title="Ready to Innovate?"
            subtitle={`If you have a specific challenge, an idea for a software solution, or want to explore digital transformation for your organization, ${COMPANY_NAME} is here to help you bring it to life.`}
            titleClassName="!text-white !text-3xl lg:!text-4xl"
            subtitleClassName="!text-brand-gray-200 !text-base md:!text-lg"
            className="mb-6 sm:mb-8"
          />
          <Button to="/contact" variant="primary" size="lg" className="bg-white text-techflex-blue hover:bg-brand-gray-100 dark:hover:bg-brand-gray-200 shadow-xl" fullWidthOnMobile>
            Book a Free Strategy Call <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </SectionWrapper>
    </PageContainer>
  );
};

export default ServicesOverviewPage;
