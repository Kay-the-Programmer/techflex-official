
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  id?: string; // For aria-labelledby in SectionWrapper
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  className = 'text-center mb-8 sm:mb-12 md:mb-16', 
  titleClassName = '',
  subtitleClassName = '',
  id 
}) => {
  return (
    <div className={className} id={id}>
      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-techflex-blue dark:text-white ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-brand-gray-600 dark:text-brand-gray-400 max-w-2xl mx-auto leading-relaxed ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
