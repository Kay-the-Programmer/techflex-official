
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types.ts';
import Button from './ui/Button.tsx'; // Updated path
import { ArrowRightIcon } from '../constants.tsx';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="bg-white dark:bg-brand-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
      {post.imageUrl && (
        <Link to={post.link} aria-label={`Read more about ${post.title}`}>
          <div className="aspect-[16/9] overflow-hidden"> {/* Ensures consistent image aspect ratio */}
            <img 
              src={post.imageUrl} 
              alt={`Cover image for ${post.title}`}
              className="w-full h-full object-cover group-hover:opacity-90 group-hover:scale-105 transition-all duration-300" 
              loading="lazy"
              width="600" // Example width, adjust as needed
              height="338" // Example height for 16:9, adjust
            />
          </div>
        </Link>
      )}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <header className="mb-2 sm:mb-3">
          {post.tags && post.tags.length > 0 && (
            <div className="mb-1.5 sm:mb-2 flex flex-wrap gap-1.5">
              {post.tags.slice(0, 3).map(tag => ( 
                <span key={tag} className="text-xs text-techflex-orange bg-techflex-orange/10 dark:bg-techflex-orange/20 px-2.5 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h3 className="text-lg lg:text-xl font-semibold text-techflex-blue dark:text-white font-display leading-tight group-hover:text-techflex-orange transition-colors">
            <Link 
              to={post.link} 
              className="focus:outline-none focus:ring-1 focus:ring-techflex-orange rounded-sm"
              aria-label={post.title}
            >
              {post.title}
            </Link>
          </h3>
          <p className="text-xs text-brand-gray-500 dark:text-brand-gray-400 mt-1">
            {post.date} {post.author && `by ${post.author}`}
          </p>
        </header>
        <div className="text-sm sm:text-base text-brand-gray-600 dark:text-brand-gray-300 mb-4 sm:mb-5 flex-grow line-clamp-3 leading-relaxed">
          {post.summary}
        </div>
        <footer className="mt-auto">
          <Button 
            to={post.link} 
            variant="ghost" 
            size="sm" 
            className="text-techflex-orange hover:bg-techflex-orange/10 dark:hover:bg-techflex-orange/20 group font-medium self-start px-0 py-1 !text-sm"
            ariaLabel={`Read more about ${post.title}`}
          >
            Read More <ArrowRightIcon className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </footer>
      </div>
    </article>
  );
};

export default BlogPostCard;
