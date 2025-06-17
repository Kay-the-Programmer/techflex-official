import React from 'react';
import PageContainer from '../components/PageContainer.tsx'; // Corrected path
import SectionWrapper from '../components/SectionWrapper.tsx';
import SectionTitle from '../components/ui/SectionTitle.tsx'; // Corrected path
import ProcessPhaseCard from '../components/ProcessPhaseCard.tsx';
import { 
    DEVELOPMENT_PROCESS, 
    CogIcon, 
    COMPANY_NAME, 
    ArrowRightIcon, 
    UsersIcon, 
    RocketLaunchIcon, 
    ShieldCheckIcon,
    LightBulbIcon,
    DEFAULT_OG_IMAGE_URL
} from '../constants.tsx';
import { ProcessPhase } from '../types.ts';
import Button from '../components/ui/Button.tsx'; // Corrected path

const OurApproachPage: React.FC = () => {
  const processBenefits = [
    { title: "Client Collaboration", description: "Your insights are invaluable. We maintain open communication and regular feedback loops to ensure the final product aligns perfectly with your vision.", icon: <UsersIcon className="w-6 h-6 sm:w-7 sm:h-7 text-techflex-orange"/> },
    { title: "Agile Methodology", description: "We embrace flexibility. Our agile approach allows us to adapt to changing requirements and deliver incremental value throughout the project.", icon: <RocketLaunchIcon className="w-6 h-6 sm:w-7 sm:h-7 text-techflex-orange"/> },
    { title: "Quality Assurance", description: "Rigorous testing is integrated into every phase. We are committed to delivering robust, secure, and high-performing software solutions.", icon: <ShieldCheckIcon className="w-6 h-6 sm:w-7 sm:h-7 text-techflex-orange"/> },
    { title: "Focus on Scalability", description: "We build for the future. Our solutions are designed to be scalable, allowing your software to grow seamlessly with your business.", icon: <LightBulbIcon className="w-6 h-6 sm:w-7 sm:h-7 text-techflex-orange"/> } 
  ];

  const pageTitle = `Our Approach - Software Development Process | ${COMPANY_NAME}`;
  const pageDescription = `Discover ${COMPANY_NAME}'s software development process: Discovery, Design, Development, and Deployment. We ensure client collaboration, agile methodology, and quality assurance for your project in Zambia.`;

  return (
    <PageContainer 
      title={pageTitle}
      description={pageDescription}
      ogTitle={pageTitle}
      ogDescription={pageDescription}
      ogImageUrl={DEFAULT_OG_IMAGE_URL} // Generic OG for this page
    >
      <SectionWrapper className="bg-brand-gray-800 dark:bg-brand-gray-950 text-white !py-20 sm:!py-24 md:!py-32">
        <div className="text-center max-w-3xl mx-auto">
          <CogIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-techflex-orange"/>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-3 sm:mb-4">Our Development Process</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-brand-gray-300">
            A transparent, collaborative, and results-driven journey to build software that exceeds expectations.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white dark:bg-brand-gray-900">
        <SectionTitle
            title="How We Work With You"
            subtitle={`At ${COMPANY_NAME}, we believe that a well-defined process is key to successful software development. Our approach is designed to be client-centric, agile, and focused on delivering quality from start to finish. We ensure you're involved, informed, and empowered every step of the way.`}
            className="mb-8 sm:mb-10 md:mb-14"
        />
      </SectionWrapper>

      <SectionWrapper className="bg-brand-gray-50 dark:bg-brand-gray-950">
         <SectionTitle
            title="Our Four Key Phases"
            subtitle="Each stage is meticulously planned and executed to ensure optimal outcomes and alignment with your objectives."
            className="mb-8 sm:mb-10 md:mb-14"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {DEVELOPMENT_PROCESS.map((phase: ProcessPhase) => (
            <ProcessPhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-white dark:bg-brand-gray-900">
        <SectionTitle
            title="Why Our Process Delivers Value"
            subtitle="Our structured yet flexible methodology is designed to maximize efficiency, ensure quality, and foster strong partnerships."
            className="mb-8 sm:mb-10 md:mb-14"
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {processBenefits.map(benefit => (
                <div key={benefit.title} className="bg-brand-gray-50 dark:bg-brand-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-2 sm:mb-3">
                        {benefit.icon}
                        <h3 className="ml-2 sm:ml-3 text-md sm:text-lg font-semibold text-techflex-blue dark:text-white font-display">{benefit.title}</h3>
                    </div>
                    <p className="text-brand-gray-600 dark:text-brand-gray-300 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                </div>
            ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-techflex-orange text-white !py-16 sm:!py-20 md:!py-24">
        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle
            title="Let's Start Your Project Journey"
            subtitle="Understand how our proven process can turn your innovative ideas into tangible reality. Contact us today for a consultation and let's plan your success."
            titleClassName="!text-white !text-2xl sm:!text-3xl md:!text-4xl"
            subtitleClassName="!text-white/90 !text-md sm:!text-lg"
            className="mb-6 sm:mb-8"
          />
          <Button to="/contact" variant="secondary" size="lg" className="bg-white text-techflex-orange hover:bg-brand-gray-100 shadow-xl !text-sm sm:!text-base" fullWidthOnMobile>
            Plan Your Project (Free Call) <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>
      </SectionWrapper>
    </PageContainer>
  );
};

export default OurApproachPage;