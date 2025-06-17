
import React from 'react';
import { ProcessPhase } from '../types.ts';

interface ProcessPhaseCardProps {
  phase: ProcessPhase;
}

const ProcessPhaseCard: React.FC<ProcessPhaseCardProps> = ({ phase }) => {
  return (
    <div className="bg-white dark:bg-brand-gray-800 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col group transform hover:scale-105">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <span className="text-4xl sm:text-5xl font-extrabold text-techflex-orange/20 dark:text-techflex-orange/30 group-hover:text-techflex-orange/30 dark:group-hover:text-techflex-orange/40 transition-colors">
          {phase.phaseNumber}
        </span>
        <div className="text-techflex-orange">
          {React.cloneElement(phase.icon, { className: "w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" })}
        </div>
      </div>
      <h3 className="text-lg lg:text-xl font-semibold text-techflex-blue dark:text-white mb-2 font-display">{phase.title}</h3>
      <p className="text-sm sm:text-base text-brand-gray-600 dark:text-brand-gray-300 leading-relaxed flex-grow">{phase.description}</p>
    </div>
  );
};

export default ProcessPhaseCard;
