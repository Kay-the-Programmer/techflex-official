import React from 'react';
import PageContainer from '../components/PageContainer.tsx'; // Corrected path
import SectionWrapper from '../components/SectionWrapper.tsx';
import SectionTitle from '../components/ui/SectionTitle.tsx'; // Corrected path
import CaseStudyCard from '../components/CaseStudyCard.tsx';
import { CASE_STUDIES, BriefcaseIcon, COMPANY_NAME, ArrowRightIcon, DEFAULT_OG_IMAGE_URL } from '../constants.tsx';
import { CaseStudy } from '../types.ts';
import Button from '../components/ui/Button.tsx'; // Corrected path

const OurWorkPage: React.FC = () => {
  const pageTitle = `Our Work - Case Studies | ${COMPANY_NAME}`;
  const pageDescription = `Explore case studies and project examples from ${COMPANY_NAME}. See how we've applied innovative software solutions to address challenges in agriculture, SMEs, and more in Zambia.`;
  const firstCaseStudyImage = CASE_STUDIES.length > 0 && (CASE_STUDIES[0].ogImageUrl || CASE_STUDIES[0].imageUrl) ? (CASE_STUDIES[0].ogImageUrl || CASE_STUDIES[0].imageUrl) : DEFAULT_OG_IMAGE_URL;


  return (
    <PageContainer 
      title={pageTitle}
      description={pageDescription}
      ogTitle={pageTitle}
      ogDescription={pageDescription}
      ogImageUrl={firstCaseStudyImage}
    >
      <SectionWrapper className="bg-techflex-blue dark:bg-techflex-blue-900 text-white !py-20 sm:!py-24 md:!py-32">
        <div className="text-center max-w-3xl mx-auto">
          <BriefcaseIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-techflex-orange" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-3 sm:mb-4">Our Work & Case Studies</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-brand-gray-200">
            Demonstrating our commitment to solving real-world problems in Zambia through technology.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-gray-50 dark:bg-brand-gray-950">
        <SectionTitle
            title="Proof of Concept & Vision"
            subtitle={`While ${COMPANY_NAME} is emerging, our approach is rooted in practical application and innovative thinking. These conceptual case studies showcase our problem-solving capabilities and the types of impactful solutions we aim to deliver.`}
            className="mb-8 sm:mb-10 md:mb-14"
        />
        {CASE_STUDIES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {CASE_STUDIES.map((study: CaseStudy) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-white dark:bg-brand-gray-800 rounded-2xl shadow-lg max-w-md sm:max-w-lg mx-auto">
            <BriefcaseIcon className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-brand-gray-400 dark:text-brand-gray-500 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-medium text-techflex-blue dark:text-white font-display">Showcasing Our Journey</h3>
            <p className="mt-1 text-xs sm:text-sm text-brand-gray-600 dark:text-brand-gray-400">
              We are actively working on projects and will feature detailed case studies here soon. Stay tuned!
            </p>
          </div>
        )}
      </SectionWrapper>
      
      <SectionWrapper className="bg-techflex-orange text-white !py-16 sm:!py-20 md:!py-24">
        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle
            title="Have a Challenge We Can Solve?"
            subtitle={`If you're inspired by our approach or have a specific project in mind, let's discuss how ${COMPANY_NAME} can become your technology partner for innovation and growth in Zambia.`}
            titleClassName="!text-white !text-2xl sm:!text-3xl md:!text-4xl"
            subtitleClassName="!text-white/90 !text-md sm:!text-lg"
            className="mb-6 sm:mb-8"
          />
          <Button to="/contact" variant="secondary" size="lg" className="bg-white text-techflex-orange hover:bg-brand-gray-100 shadow-xl !text-sm sm:!text-base" fullWidthOnMobile>
            Discuss Your Project <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>
      </SectionWrapper>
    </PageContainer>
  );
};

export default OurWorkPage;