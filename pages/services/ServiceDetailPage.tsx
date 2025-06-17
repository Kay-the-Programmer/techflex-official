import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageContainer from '../../components/PageContainer.tsx';
import SectionWrapper from '../../components/SectionWrapper.tsx';
import SectionTitle from '../../components/ui/SectionTitle.tsx';
import Button from '../../components/ui/Button.tsx';
import { DETAILED_SERVICES, COMPANY_NAME, ArrowRightIcon, ChevronRightIcon, WEBSITE_URL, DEFAULT_OG_IMAGE_URL } from '../../constants.tsx';
import StructuredData from '../../components/StructuredData.tsx';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = DETAILED_SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }
  
  const pageTitle = `${service.title.split(" for")[0]} Solutions | ${COMPANY_NAME}`;
  const pageDescription = `Learn about ${COMPANY_NAME}'s ${service.title.toLowerCase()}, including problems solved like '${service.problemsSolved[0]}' and key features like '${service.keyFeatures[0]}'. Targeted for ${service.targetAudience.toLowerCase().substring(0,80)}...`;
  const ogImage = service.ogImageUrl || service.heroImage || DEFAULT_OG_IMAGE_URL;
  const currentUrl = `${WEBSITE_URL}/#/services/${service.id}`;


  const serviceSchema = {
    '@type': 'Service',
    serviceType: service.title.split(" for")[0], // e.g., "Custom Software"
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: WEBSITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Zambia',
    },
    image: service.heroImage, // URL to an image of the service
    url: currentUrl,
    // potentialAction: { // Example if there's a direct action
    //   '@type': 'ReserveAction', // Or OrderAction, etc.
    //   target: `${WEBSITE_URL}/contact?service=${service.id}`
    // }
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Services',
        item: `${WEBSITE_URL}/#/services`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: service.title.split(" for")[0], // Short title
        item: currentUrl,
      },
    ],
  };

  return (
    <PageContainer 
      title={pageTitle} 
      description={pageDescription}
      ogTitle={pageTitle}
      ogDescription={pageDescription}
      ogImageUrl={ogImage.startsWith('http') ? ogImage : `${WEBSITE_URL}${ogImage}`}
      ogType="product" // Using 'product' schema type which is common for services too
    >
      <StructuredData type="Service" data={serviceSchema} />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      <SectionWrapper className="bg-brand-gray-50 dark:bg-brand-gray-950 !pt-8 !pb-12 sm:!pt-10 sm:!pb-16">
        <div className="max-w-5xl mx-auto">
            <nav className="text-sm mb-4 sm:mb-6" aria-label="Breadcrumb">
              <ol className="list-none p-0 inline-flex space-x-1 items-center text-brand-gray-500 dark:text-brand-gray-400">
                <li>
                  <Link to="/services" className="hover:text-techflex-orange focus:outline-none focus:ring-1 focus:ring-techflex-orange rounded-sm">Services</Link>
                </li>
                <li><ChevronRightIcon className="w-4 h-4" /></li>
                <li className="text-brand-gray-700 dark:text-brand-gray-200" aria-current="page">{service.title.split(" for")[0]}</li>
              </ol>
            </nav>

          {service.heroImage && (
            <div className="aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden mb-6 sm:mb-8 md:mb-10 shadow-lg">
                <img 
                    src={service.heroImage} 
                    alt={`${service.title} visual representation`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="1200"
                    height="514" // for 21:9 aspect ratio
                />
            </div>
          )}
          <h1 className="text-3xl lg:text-4xl font-bold text-techflex-blue dark:text-white mb-4 sm:mb-6 font-display tracking-tight">{service.title}</h1>
          <p className="text-base md:text-lg text-brand-gray-700 dark:text-brand-gray-300 leading-relaxed mb-6 sm:mb-8 md:mb-10">{service.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8 md:mb-10">
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-techflex-orange mb-3 sm:mb-4 font-display">Problems We Solve:</h2>
              <ul className="space-y-1.5 text-base text-brand-gray-600 dark:text-brand-gray-300 list-disc list-outside ml-5 leading-relaxed">
                {service.problemsSolved.map((problem, index) => <li key={index}>{problem}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-techflex-orange mb-3 sm:mb-4 font-display">Key Features:</h2>
              <ul className="space-y-1.5 text-base text-brand-gray-600 dark:text-brand-gray-300 list-disc list-outside ml-5 leading-relaxed">
                {service.keyFeatures.map((feature, index) => <li key={index}>{feature}</li>)}
              </ul>
            </div>
          </div>
          
          <div className="mb-8 sm:mb-10 p-4 sm:p-6 bg-techflex-blue/5 dark:bg-techflex-blue-950/30 rounded-lg border border-techflex-blue/20 dark:border-techflex-blue-800">
            <h3 className="text-lg font-semibold text-techflex-blue dark:text-techflex-blue-200 mb-2 font-display">Ideal For:</h3>
            <p className="text-base text-brand-gray-600 dark:text-brand-gray-300 leading-relaxed">{service.targetAudience}</p>
          </div>
          <div className="text-left">
              <Button to="/contact" variant="primary" size="lg" fullWidthOnMobile>
                Schedule a Free Consultation
              </Button>
          </div>
        </div>
      </SectionWrapper>

       <SectionWrapper className="bg-techflex-blue dark:bg-techflex-blue-900 text-white !py-16 sm:!py-20 md:!py-24">
        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle
            title="Explore Other Services"
            subtitle={`Discover how ${COMPANY_NAME} can help in other critical areas. We are committed to providing comprehensive technology solutions.`}
            titleClassName="!text-white !text-3xl lg:!text-4xl"
            subtitleClassName="!text-brand-gray-200 !text-base md:!text-lg"
            className="mb-6 sm:mb-8"
          />
          <Button to="/services" variant="primary" size="lg" className="bg-white text-techflex-blue hover:bg-brand-gray-100 dark:hover:bg-brand-gray-200 shadow-xl" fullWidthOnMobile>
            Back to Services Overview <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </SectionWrapper>
    </PageContainer>
  );
};

export default ServiceDetailPage;