import React from 'react';
import PageContainer from '../components/PageContainer.tsx'; // Corrected path
import SectionWrapper from '../components/SectionWrapper.tsx';
import ContactForm from '../components/ContactForm.tsx';
import { COMPANY_EMAIL, COMPANY_PHONE_PLACEHOLDER, COMPANY_LOCATION, SOCIAL_LINKS, MailIcon, COMPANY_NAME, MapPinIcon, DEFAULT_OG_IMAGE_URL } from '../constants.tsx'; 
import { SocialLink } from '../types.ts';
import SectionTitle from '../components/ui/SectionTitle.tsx'; // Corrected path

const ContactPage: React.FC = () => {
  const pageTitle = `Contact ${COMPANY_NAME} - Let's Talk Innovation`;
  const pageDescription = `Get in touch with ${COMPANY_NAME} in Lusaka, Zambia. Contact us to discuss your software project, book a free strategy call, or learn how we can help your business innovate. Email: ${COMPANY_EMAIL}.`;

  return (
    <PageContainer 
      title={pageTitle}
      description={pageDescription}
      ogTitle={pageTitle}
      ogDescription={pageDescription}
      ogImageUrl={DEFAULT_OG_IMAGE_URL} // Generic OG for contact
    >
      {/* Hero Section for Contact Page */}
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <SectionWrapper className="!py-0">
          <div className="text-center max-w-3xl mx-auto">
             <MailIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6"/>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-3 sm:mb-4">Get in Touch</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 dark:text-emerald-200">
              We're excited to hear about your ideas and challenges. Let's discuss how {COMPANY_NAME} can partner with you to build innovative solutions for Zambia.
            </p>
          </div>
        </SectionWrapper>
      </div>

      {/* Contact Form and Details Section */}
      <SectionWrapper className="bg-slate-50 dark:bg-brand-gray-950">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 dark:text-white mb-1.5 sm:mb-2 font-display">Send Us a Message</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">Fill out the form below, and our team will get back to you as soon as possible. For urgent inquiries, please use the contact details provided.</p>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-brand-gray-800 p-5 sm:p-6 md:p-8 rounded-xl shadow-xl h-full md:sticky md:top-24">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 dark:text-white mb-4 sm:mb-6 font-display">Contact Information</h2>
              <div className="space-y-4 sm:space-y-5 text-slate-700 dark:text-slate-300">
                <div>
                  <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 text-md sm:text-lg">Email Us:</h4>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors break-all text-sm sm:text-base">{COMPANY_EMAIL}</a>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Best for detailed inquiries.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 text-md sm:text-lg">Call Us:</h4>
                  <p className="text-sm sm:text-base">{COMPANY_PHONE_PLACEHOLDER}</p>
                   <p className="text-xs text-slate-500 dark:text-slate-400">(Mon-Fri, 9am-5pm CAT)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 text-md sm:text-lg">Our Location:</h4>
                  <p className="text-sm sm:text-base">{COMPANY_LOCATION}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Meetings by appointment.</p>
                </div>
                <div className="pt-2 sm:pt-4">
                  <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 text-md sm:text-lg mb-1.5 sm:mb-2">Connect With Us:</h4>
                  <div className="flex space-x-3 sm:space-x-4">
                    {SOCIAL_LINKS.map((social: SocialLink) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors"
                        aria-label={social.name}
                      >
                        {React.cloneElement(social.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 sm:w-7 sm:h-7" })}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      
      {/* Map Placeholder Section */}
      <SectionWrapper>
        <SectionTitle
            title="Find Us in Lusaka"
            subtitle="Our operations are based in the heart of Zambia, ready to serve local needs with global tech standards."
        />
        <div className="bg-slate-200 dark:bg-brand-gray-700 h-64 sm:h-80 md:h-96 rounded-lg shadow-md flex items-center justify-center relative overflow-hidden"> 
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123026.34088012629!2d28.20443399726563!3d-15.391108400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f4ea10b06477%3A0x5075dfa59f592655!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border:0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Lusaka, Zambia"
            className="absolute inset-0 w-full h-full"
            ></iframe>
            <div className="absolute bottom-2 left-2 bg-white/80 dark:bg-black/70 p-1.5 sm:p-2 rounded text-xs text-slate-700 dark:text-slate-200 backdrop-blur-sm">
                <MapPinIcon className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1 align-middle" />
                Lusaka, Zambia (General Area)
            </div>
        </div>
      </SectionWrapper>
    </PageContainer>
  );
};

export default ContactPage;