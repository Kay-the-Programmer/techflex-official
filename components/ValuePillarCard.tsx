
import React from 'react';
import { ValuePillar } from '../types.ts';

interface ValuePillarCardProps {
  valuePillar: ValuePillar;
  layout?: 'vertical' | 'horizontal';
}

const ValuePillarCard: React.FC<ValuePillarCardProps> = ({ valuePillar, layout = 'horizontal' }) => {
  if (layout === 'vertical') {
    return (
      <div className="bg-transparent p-2 sm:p-4 flex flex-col items-center text-center group">
        <div className="mb-3 sm:mb-4 text-techflex-orange bg-techflex-orange/10 dark:bg-techflex-blue-950/50 p-3 sm:p-4 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(valuePillar.icon, { className: "w-8 h-8 md:w-10 md:h-10 text-techflex-orange" })}
        </div>
        <h3 className="text-lg lg:text-xl font-semibold text-white mb-1 font-display">{valuePillar.name}</h3>
        <p className="text-brand-gray-200 text-sm sm:text-base leading-relaxed">{valuePillar.description}</p>
      </div>
    );
  }

  // Default horizontal layout
  return (
    <div className="bg-white dark:bg-brand-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group transform hover:scale-105">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="mt-1 flex-shrink-0 text-techflex-orange group-hover:scale-110 transition-transform">
          {React.cloneElement(valuePillar.icon, { className: "w-7 h-7 sm:w-8" })}
        </div>
        <div>
          <h3 className="text-lg lg:text-xl font-semibold text-techflex-blue dark:text-white mb-1 font-display">{valuePillar.name}</h3>
          <p className="text-sm sm:text-base text-brand-gray-600 dark:text-brand-gray-300 leading-relaxed">{valuePillar.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ValuePillarCard;
