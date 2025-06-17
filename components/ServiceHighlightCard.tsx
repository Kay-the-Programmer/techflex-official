
import React from 'react';
import { ServiceHighlight } from '../types.ts';
import Button from './ui/Button.tsx'; // Updated path

interface ServiceHighlightCardProps {
  service: ServiceHighlight;
}

const ServiceHighlightCard: React.FC<ServiceHighlightCardProps> = ({ service }) => {
  return (
    <div className="bg-glass backdrop-blur-10 border border-white/20 p-5 sm:p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col text-left h-full group transform hover:scale-105">
      <div className="mb-4 sm:mb-5 text-techflex-orange">
        {React.cloneElement(service.icon, { className: "w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" })}
      </div>
      <h3 className="text-lg lg:text-xl font-semibold text-techflex-blue dark:text-white mb-2 font-display">{service.title}</h3>
      <p className="text-sm sm:text-base text-brand-gray-600 dark:text-brand-gray-400 mb-4 sm:mb-5 flex-grow leading-relaxed">{service.description}</p>
      <Button 
        to={service.learnMoreLink} 
        variant="outline" 
        size="sm" 
        className="mt-auto self-start group-hover:bg-techflex-orange/5 dark:group-hover:bg-techflex-orange/10 !px-3 !py-1.5 sm:!px-4 sm:!py-2 !text-xs sm:!text-sm"
        ariaLabel={`Learn more about ${service.title}`}
        >
        Learn More
      </Button>
    </div>
  );
};

export default ServiceHighlightCard;
