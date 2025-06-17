import React from 'react';
import { TeamMember } from '../types.ts';

interface TeamMemberCardProps {
  teamMember: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ teamMember }) => {
  return (
    <div className="bg-white dark:bg-brand-gray-800 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group transform hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4 sm:mb-5">
          <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-br from-techflex-orange to-techflex-blue rounded-full opacity-25 blur-lg group-hover:opacity-40 transition-opacity"></div>
          <img 
            src={teamMember.imageUrl} 
            alt={teamMember.name} 
            className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover shadow-md border-2 sm:border-3 border-white dark:border-brand-gray-700 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-techflex-blue dark:text-white mb-1 font-display">{teamMember.name}</h3>
        <p className="text-sm sm:text-md text-techflex-orange font-medium mb-2">{teamMember.title}</p>
        <p className="text-sm text-brand-gray-600 dark:text-brand-gray-300 leading-relaxed mb-3">{teamMember.bio}</p>
        
        {teamMember.socialLinks && teamMember.socialLinks.length > 0 && (
          <div className="flex justify-center space-x-3 mt-1">
            {teamMember.socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-gray-500 hover:text-techflex-blue dark:text-brand-gray-400 dark:hover:text-techflex-blue-300 transition-colors"
                aria-label={`${teamMember.name}'s ${link.name}`}
              >
                {React.cloneElement(link.icon, { className: "w-5 h-5" })}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;