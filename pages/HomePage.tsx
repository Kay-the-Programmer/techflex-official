import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageContainer from '../components/PageContainer.tsx'; // Added PageContainer import
import SectionWrapper from '../components/SectionWrapper.tsx';
import Button from '../components/ui/Button.tsx';
import ServiceHighlightCard from '../components/ServiceHighlightCard.tsx';
import SectionTitle from '../components/ui/SectionTitle.tsx';
import ValuePillarCard from '../components/ValuePillarCard.tsx';
import { Typewriter } from 'react-simple-typewriter';
import {
  SERVICE_HIGHLIGHTS,
  COMPANY_NAME,
  COMPANY_FOUNDER_NAME,
  TAGLINE_PRIMARY,
  TAGLINE_SECONDARY,
  LightBulbIcon,
  ChevronRightIcon,
  TECHNOLOGY_STACK,
  CORE_VALUES,
  ArrowRightIcon,
  BeakerIcon,
  HeartIcon,
  AcademicCapIcon,
  DEFAULT_OG_IMAGE_URL
} from '../constants.tsx';
import { ServiceHighlight } from '../types.ts';

const HomePage: React.FC = () => {
  const phrases = [
    "a smarter, connected Zambia",
    "a digitally empowered nation",
    "stronger rural-urban connections",
    "a tech-driven economy",
    "an inclusive digital future",
    "growth through technology",
    "innovation at every level",
    "progress that matters",
    "transformation powered by software",
    "Zambia's digital revolution",
  ];

  const helpCategories = [
    { title: "Grow My SME", link: "/services/sme-software", icon: <LightBulbIcon className="w-7 h-7 sm:w-8 sm:h-8 text-techflex-orange" /> , description: "Scale your business with custom software."},
    { title: "Optimize Agriculture", link: "/services/agri-tech", icon: <BeakerIcon className="w-7 h-7 sm:w-8 sm:h-8 text-techflex-orange" />, description: "Enhance yields and market access."},
    { title: "Enhance Healthcare", link: "/services/health-tech", icon: <HeartIcon className="w-7 h-7 sm:w-8 sm:h-8 text-techflex-orange" />, description: "Improve patient care and delivery."},
    { title: "Modernize Education", link: "/services/edu-tech", icon: <AcademicCapIcon className="w-7 h-7 sm:w-8 sm:h-8 text-techflex-orange" />, description: "Empower students and educators."}
  ];

  const whyChooseUsItems = CORE_VALUES.map(value => ({
    ...value,
    description: value.description
  })).slice(0, 4);

  const pageTitle = `${COMPANY_NAME} - Software Solutions for Zambia`;
  const pageDescription = `${COMPANY_NAME} creates custom, innovative software to empower Zambian businesses (SMEs), uplift communities, and drive national progress in Agri-Tech, Health-Tech, and Edu-Tech. ${TAGLINE_PRIMARY} ${TAGLINE_SECONDARY}`;

  return (
    <PageContainer
      title={pageTitle}
      description={pageDescription}
      ogTitle={pageTitle}
      ogDescription={pageDescription}
      ogImageUrl={DEFAULT_OG_IMAGE_URL} // Use a specific hero image URL if available for home
    >
      {/* Hero Section */}
      <div className="relative bg-brand-gray-50 dark:bg-brand-gray-900 overflow-hidden">
        <video
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0 filter blur-[2px]"
            autoPlay
            loop
            muted
            playsInline
            src="../public/videos/digital-transformation.mp4"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <SectionWrapper className="min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center text-center !py-10 md:!py-0 relative z-20">
          <motion.div 
            className="max-w-4xl mx-auto liquid-bg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-display tracking-tight text-white leading-tight mb-4 sm:mb-6">
              Software&nbsp;Solutions&nbsp;for&nbsp;
              <span className="text-techflex-orange" aria-live="polite">
                <Typewriter
                  words={phrases}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1800}
                />
              </span>
            </h1>
            <p className="text-base md:text-lg text-brand-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              {COMPANY_NAME} creates custom, innovative software to empower businesses, uplift communities, and drive national progress. {TAGLINE_PRIMARY}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button to="/contact" variant="primary" size="lg" fullWidthOnMobile>Book a Free Strategy Call</Button>
              <Button to="/about" variant="outline" size="lg" fullWidthOnMobile className="text-white border-white hover:bg-white hover:text-techflex-blue">Learn About {COMPANY_NAME}</Button>
            </div>
          </motion.div>
        </SectionWrapper>
        <div className="absolute bottom-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-t from-white dark:from-brand-gray-950 to-transparent pointer-events-none z-30"></div>
      </div>


      <SectionWrapper id="who-we-are" ariaLabelledBy="who-we-are-title" className="bg-white dark:bg-brand-gray-900">
        <SectionTitle
          id="who-we-are-title"
          title="We Are Techflex"
          subtitle={`${COMPANY_NAME} is more than just a software company; we are dedicated problem-solvers and innovators. Founded by ${COMPANY_FOUNDER_NAME}, an IT student at Mulungushi University, our mission is to leverage technology to address Zambia's unique challenges and unlock its vast opportunities. ${TAGLINE_SECONDARY}`}
        />
      </SectionWrapper>

      <SectionWrapper id="how-can-we-help" ariaLabelledBy="how-can-we-help-title" className="bg-brand-gray-50 dark:bg-brand-gray-950">
        <SectionTitle
          id="how-can-we-help-title"
          title="How Can We Help You?"
          subtitle="Tell us your challenge, and we'll explore how technology can provide a tailored solution for your needs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {helpCategories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="bg-white dark:bg-brand-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col text-center items-center group transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-techflex-orange focus:ring-offset-2 dark:focus:ring-offset-brand-gray-950"
              aria-label={`Explore solutions for ${category.title}`}
            >
              <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-techflex-orange/10 dark:bg-techflex-orange/20 rounded-full group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-techflex-blue dark:text-white mb-1 sm:mb-2 font-display group-hover:text-techflex-orange transition-colors">{category.title}</h3>
              <p className="text-sm text-brand-gray-600 dark:text-brand-gray-400 mb-2 sm:mb-3 flex-grow leading-relaxed">{category.description}</p>
              <span className="text-techflex-orange font-semibold text-sm group-hover:underline flex items-center mt-auto">
                Explore <ChevronRightIcon className="ml-1 w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="services-overview" ariaLabelledBy="services-overview-title" className="bg-white dark:bg-brand-gray-900">
        <SectionTitle
          id="services-overview-title"
          title="Software That Drives Progress"
          subtitle="We specialize in creating impactful software across key sectors to foster growth and innovation in Zambia."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICE_HIGHLIGHTS.map((service: ServiceHighlight) => (
            <ServiceHighlightCard key={service.id} service={{...service, learnMoreLink: `/services/${service.id}`}} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="why-choose-us" ariaLabelledBy="why-choose-us-title" className="bg-techflex-blue dark:bg-techflex-blue-900 text-white">
          <SectionTitle
              id="why-choose-us-title"
              title="Local Insight, Global Standards"
              subtitle="Partner with a team that truly understands your needs and is committed to delivering excellence with a Zambian focus."
              titleClassName="!text-white"
              subtitleClassName="!text-brand-gray-200"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {whyChooseUsItems.map(item => (
                <ValuePillarCard
                  key={item.id}
                  valuePillar={{...item, name: item.name === "Community Empowerment" ? "Local Impact" : item.name }}
                  layout="vertical"
                />
              ))}
          </div>
          <div className="mt-10 sm:mt-12 md:mt-16 text-center">
             <Button to="/contact" variant="primary" size="lg" className="bg-white text-techflex-blue hover:bg-brand-gray-100 dark:hover:bg-brand-gray-200 shadow-xl">
               Schedule a Free Consultation
             </Button>
           </div>
      </SectionWrapper>

      <SectionWrapper id="tech-stack" ariaLabelledBy="tech-stack-title" className="bg-brand-gray-50 dark:bg-brand-gray-950">
        <SectionTitle
            id="tech-stack-title"
            title="Our Expertise"
            subtitle="We leverage modern technologies and a robust skillset to build high-quality, scalable solutions."
        />
        <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {TECHNOLOGY_STACK.map(tech => (
                    <span key={tech.name} className="bg-white dark:bg-brand-gray-800 text-techflex-blue dark:text-brand-gray-200 px-3.5 py-2 rounded-lg text-sm font-medium shadow-md border border-brand-gray-200 dark:border-brand-gray-700">
                        {tech.name}
                    </span>
                ))}
            </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="testimonials" ariaLabelledBy="testimonials-title" className="bg-white dark:bg-brand-gray-900">
        <SectionTitle
            id="testimonials-title"
            title="Trusted by Innovators"
            subtitle="We're proud of the relationships we're building. Client success stories and partner features coming soon!"
        />
        {/* Placeholder for ClientLogoGrid */}
        <div className="text-center max-w-md sm:max-w-lg mx-auto p-6 sm:p-8 border-2 border-dashed border-brand-gray-300 dark:border-brand-gray-700 rounded-2xl bg-brand-gray-50 dark:bg-brand-gray-800/50">
            <p className="text-brand-gray-500 dark:text-brand-gray-400 text-base leading-relaxed">Client logos and testimonials will be featured here as {COMPANY_NAME} grows.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-techflex-orange text-white !py-16 sm:!py-20 md:!py-24">
        <div className="text-center max-w-2xl sm:max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4 sm:mb-6 tracking-tight">
            Ready to Innovate?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed">
            Whether you're an SME aiming to streamline operations, an organization with a vision for change, or an innovator with a groundbreaking idea, we're here to help you succeed.
          </p>
          <Button to="/contact" variant="secondary" size="lg" className="bg-white text-techflex-orange hover:bg-brand-gray-100 dark:hover:bg-brand-gray-200 shadow-xl" fullWidthOnMobile>
            Let's Build Together <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </SectionWrapper>
    </PageContainer>
  );
};

export default HomePage;
