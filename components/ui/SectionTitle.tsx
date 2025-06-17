import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  id?: string; 
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  className = 'text-center mb-10 sm:mb-14 md:mb-16', // Adjusted bottom margin
  titleClassName = '',
  subtitleClassName = '',
  id 
}) => {
  return (
    <div className={className} id={id}>
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-techflex-blue dark:text-white ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-brand-gray-600 dark:text-brand-gray-400 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;