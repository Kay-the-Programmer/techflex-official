
import React from 'react';
import { CaseStudy } from '../types.ts';
import Button from './ui/Button.tsx'; // Updated path
import { ArrowRightIcon } from '../constants.tsx';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  return (
    <article className="bg-white dark:bg-brand-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full group hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
      {study.imageUrl && (
        <div className="aspect-[16/9] overflow-hidden"> {/* Consistent aspect ratio */}
          <img 
            src={study.imageUrl} 
            alt={`Visual representation for ${study.title}`} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            loading="lazy"
            width="600" // Example width
            height="338" // Example height
          />
        </div>
      )}
      <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow">
        <header className="mb-3 sm:mb-4">
          <p className="text-sm text-techflex-orange font-semibold mb-0.5 sm:mb-1">{study.industry}</p>
          <h3 className="text-lg lg:text-xl font-semibold text-techflex-blue dark:text-white font-display leading-tight group-hover:text-techflex-orange transition-colors">
            {study.title}
          </h3>
          <p className="text-xs text-brand-gray-500 dark:text-brand-gray-400 mt-1">Client: {study.clientName}</p>
        </header>
        
        <div className="space-y-2 sm:space-y-3 text-sm text-brand-gray-600 dark:text-brand-gray-300 mb-4 sm:mb-5 flex-grow leading-relaxed">
            <div>
                <h4 className="font-semibold text-brand-gray-700 dark:text-brand-gray-200 text-sm">The Challenge:</h4>
                <p className="line-clamp-2 sm:line-clamp-3">{study.problem}</p>
            </div>
            <div>
                <h4 className="font-semibold text-brand-gray-700 dark:text-brand-gray-200 text-sm">Our Solution:</h4>
                <p className="line-clamp-2 sm:line-clamp-3">{study.solution}</p>
            </div>
        </div>

        {study.technologiesUsed && study.technologiesUsed.length > 0 && (
          <div className="mb-4 sm:mb-5">
            <h4 className="text-xs font-semibold text-brand-gray-500 dark:text-brand-gray-400 mb-1 sm:mb-1.5 uppercase tracking-wider">Technologies:</h4>
            <div className="flex flex-wrap gap-1.5">
              {study.technologiesUsed.slice(0, 4).map(tech => ( 
                <span key={tech} className="bg-brand-gray-100 dark:bg-brand-gray-700 text-brand-gray-700 dark:text-brand-gray-300 px-2.5 py-1 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <footer className="mt-auto pt-3 sm:pt-4">
          {study.link ? (
             <Button 
                to={study.link} 
                variant="ghost" 
                size="sm" 
                className="text-techflex-orange group font-medium self-start px-0 py-1 hover:bg-techflex-orange/10 dark:hover:bg-techflex-orange/20 !text-sm"
                ariaLabel={`View details for case study ${study.title}`}
              >
                View Details (Soon) <ArrowRightIcon className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
             </Button>
          ) : (
            <Button 
                onClick={() => alert("More details for this case study will be available soon!")} 
                variant="ghost" 
                size="sm" 
                className="text-techflex-orange group font-medium self-start px-0 py-1 hover:bg-techflex-orange/10 dark:hover:bg-techflex-orange/20 !text-sm"
                ariaLabel={`Learn more about ${study.title}`}
            >
                Learn More <ArrowRightIcon className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default CaseStudyCard;
