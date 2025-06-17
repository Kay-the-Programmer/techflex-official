import React from 'react';
import PageContainer from '../components/PageContainer.tsx'; // Corrected path
import SectionWrapper from '../components/SectionWrapper.tsx';
import SectionTitle from '../components/ui/SectionTitle.tsx'; // Corrected path
import { FOUNDER_PROFILE, CORE_VALUES, COMPANY_NAME, TAGLINE_PRIMARY, AcademicCapIcon, PlayCircleIcon, WEBSITE_URL, TEAM_MEMBERS } from '../constants.tsx';
import { ValuePillar } from '../types.ts';
import ValuePillarCard from '../components/ValuePillarCard.tsx';
import TeamMemberCard from '../components/TeamMemberCard.tsx';
import StructuredData from '../components/StructuredData.tsx';

const AboutUsPage: React.FC = () => {
  const pageTitle = `About ${COMPANY_NAME} - Our Story, Mission, and Values`;
  const pageDescription = `Learn about ${COMPANY_NAME}, founded by ${FOUNDER_PROFILE.name} of Mulungushi University. Discover our mission to solve Zambia's challenges through tech, our vision for digital transformation, and our core values.`;
  const founderImageAbsoluteUrl = FOUNDER_PROFILE.imageUrl.startsWith('http') ? FOUNDER_PROFILE.imageUrl : `${WEBSITE_URL}${FOUNDER_PROFILE.imageUrl}`; // Assuming imageUrl might be relative

  const personSchema = {
    '@type': 'Person',
    name: FOUNDER_PROFILE.name,
    jobTitle: FOUNDER_PROFILE.title,
    image: founderImageAbsoluteUrl,
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: FOUNDER_PROFILE.university,
    },
    description: FOUNDER_PROFILE.bio.join(' '),
    url: `${WEBSITE_URL}/about#meet-founder`, // Link to founder section
    worksFor: {
        '@type': 'Organization',
        name: COMPANY_NAME,
        url: WEBSITE_URL,
    }
  };


  return (
    <PageContainer 
      title={pageTitle}
      description={pageDescription}
      ogTitle={pageTitle}
      ogDescription={pageDescription}
      ogImageUrl={founderImageAbsoluteUrl} // Use founder image for OG
      ogType="profile" 
    >
      <StructuredData type="Person" data={personSchema} />
      {/* Hero Section for About Page */}
      <SectionWrapper className="bg-techflex-blue dark:bg-techflex-blue-900 text-white !py-20 sm:!py-24 md:!py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-3 sm:mb-4">About {COMPANY_NAME}</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-brand-gray-200">{TAGLINE_PRIMARY}</p>
        </div>
      </SectionWrapper>

      {/* Our Story Section */}
      <SectionWrapper id="our-story" ariaLabelledBy="our-story-title">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            id="our-story-title"
            title="Our Story: Sparking Innovation in Zambia"
            className="mb-8 md:mb-12 text-center md:text-left"
            titleClassName="!text-2xl sm:!text-3xl md:!text-4xl"
          />
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-5 text-brand-gray-700 dark:text-brand-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                {COMPANY_NAME} was born from a simple yet powerful idea: that technology holds the key to unlocking Zambia's vast potential. 
                Our founder, {FOUNDER_PROFILE.name}, envisioned a company that wouldn't just build software, but would build bridges – connecting local needs with global technological advancements.
              </p>
              <p>
                The journey began with a deep-seated passion for problem-solving and a recognition of the specific challenges faced by Zambian businesses and communities. 
                From the halls of {FOUNDER_PROFILE.university}, where {FOUNDER_PROFILE.name} honed his skills in Information Technology, emerged a commitment to create solutions that are not only innovative but also accessible and impactful.
              </p>
            </div>
            <div className="relative group order-first md:order-last">
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-techflex-orange to-techflex-blue rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
              <img 
                src="https://picsum.photos/seed/zambiainnovation_minimal/600/450" 
                alt="Techflex Team working on innovative solutions in Zambia" 
                className="relative rounded-xl sm:rounded-2xl shadow-xl w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision Section */}
      <SectionWrapper id="mission-vision" ariaLabelledBy="mission-vision-title" className="bg-brand-gray-50 dark:bg-brand-gray-950">
         <SectionTitle 
            id="mission-vision-title"
            title="Our Guiding Principles"
            subtitle="Defining our purpose and our aspirations for Zambia's technological future."
          />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white dark:bg-brand-gray-800 p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-techflex-orange mb-2 sm:mb-3 font-display">Our Mission</h3>
            <p className="text-brand-gray-700 dark:text-brand-gray-300 leading-relaxed text-sm sm:text-base">
              To develop innovative and accessible software solutions that solve key challenges and create tangible value for businesses and communities across Zambia.
            </p>
          </div>
          <div className="bg-white dark:bg-brand-gray-800 p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-techflex-blue dark:text-techflex-blue-300 mb-2 sm:mb-3 font-display">Our Vision</h3>
            <p className="text-brand-gray-700 dark:text-brand-gray-300 leading-relaxed text-sm sm:text-base">
              To be a leading catalyst for digital transformation and technological empowerment in Zambia, fostering a future where technology drives sustainable growth and improves lives.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Meet the Founder Section */}
      <SectionWrapper id="meet-founder" ariaLabelledBy="meet-founder-title">
         <SectionTitle 
            id="meet-founder-title"
            title="Meet the Founder"
          />
        <div className="bg-white dark:bg-brand-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            <div className="relative flex-shrink-0">
               <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-br from-techflex-orange to-techflex-blue rounded-full opacity-25 blur-xl"></div>
              <img 
                src={FOUNDER_PROFILE.imageUrl} 
                alt={FOUNDER_PROFILE.name} 
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-2 sm:border-4 border-white dark:border-brand-gray-700"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-techflex-blue dark:text-white font-display">{FOUNDER_PROFILE.name}</h3>
              <p className="text-md sm:text-lg text-techflex-orange font-semibold mb-1 sm:mb-2">{FOUNDER_PROFILE.title}</p>
              <div className="flex items-center justify-center md:justify-start text-brand-gray-600 dark:text-brand-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm">
                <AcademicCapIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-techflex-blue dark:text-techflex-blue-300" />
                <span>Information Technology Student at {FOUNDER_PROFILE.university}</span>
              </div>
              <div className="space-y-2 sm:space-y-3 text-brand-gray-700 dark:text-brand-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                {FOUNDER_PROFILE.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Founder's Welcome Video Placeholder */}
      <SectionWrapper id="founder-video" ariaLabelledBy="founder-video-title" className="bg-brand-gray-50 dark:bg-brand-gray-950">
        <SectionTitle 
            id="founder-video-title"
            title="A Message From Our Founder"
            subtitle={`Hear directly from ${FOUNDER_PROFILE.name} about his vision for ${COMPANY_NAME} and the future of technology in Zambia.`}
          />
        <div className="max-w-2xl mx-auto">
          <div className="bg-brand-gray-200 dark:bg-brand-gray-800 aspect-video rounded-xl sm:rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 sm:p-8 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
             <img 
                src="https://picsum.photos/seed/founder-video-bg_minimal/800/450" 
                alt="Abstract background for video placeholder" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="relative z-10 text-center">
                <PlayCircleIcon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-techflex-orange opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 mb-2 sm:mb-3" />
                <p className="text-md sm:text-lg font-semibold text-techflex-blue dark:text-white">Founder's Welcome Video</p>
                <p className="text-brand-gray-600 dark:text-brand-gray-400 text-xs sm:text-sm">(Coming Soon)</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Values Section */}
      <SectionWrapper id="our-values" ariaLabelledBy="our-values-title" className="bg-white dark:bg-brand-gray-900">
        <SectionTitle 
            id="our-values-title"
            title="Our Core Values"
            subtitle="The principles that guide our work, our collaborations, and our commitment to Zambia."
          />
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {CORE_VALUES.map((value: ValuePillar) => (
            <ValuePillarCard key={value.id} valuePillar={value} layout="horizontal" /> 
          ))}
        </div>
      </SectionWrapper>

      {/* Our Team Section */}
      <SectionWrapper id="our-team" ariaLabelledBy="our-team-title" className="bg-brand-gray-50 dark:bg-brand-gray-950">
        <SectionTitle 
          id="our-team-title"
          title="Meet Our Team"
          subtitle="The talented individuals behind our innovative solutions, working together to drive technological advancement in Zambia."
        />
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-brand-gray-700 dark:text-brand-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto">
            Our diverse team combines technical expertise, creative thinking, and deep understanding of local challenges to deliver solutions that make a real difference. Each member brings unique skills and perspectives to our projects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.id} teamMember={member} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </PageContainer>
  );
};

export default AboutUsPage;
