import React from 'react';
import PageContainer from '../components/PageContainer.tsx'; // Corrected path
import SectionWrapper from '../components/SectionWrapper.tsx';
import BlogPostCard from '../components/BlogPostCard.tsx';
import { PLACEHOLDER_BLOG_POSTS, LightBulbIcon, COMPANY_NAME, DEFAULT_OG_IMAGE_URL, WEBSITE_URL } from '../constants.tsx';
import { BlogPost } from '../types.ts';
import Button from '../components/ui/Button.tsx'; // Corrected path
import SectionTitle from '../components/ui/SectionTitle.tsx';
import StructuredData from '../components/StructuredData.tsx';

const BlogPage: React.FC = () => {
  const pageTitle = `Insights Blog - ${COMPANY_NAME} Zambia`;
  const pageDescription = `Read the latest insights from ${COMPANY_NAME} on technology trends, software development, SME automation, FinTech, and innovation in Zambia. Stay informed with our expert articles.`;
  const firstPostImage = PLACEHOLDER_BLOG_POSTS.length > 0 && (PLACEHOLDER_BLOG_POSTS[0].ogImageUrl || PLACEHOLDER_BLOG_POSTS[0].imageUrl) ? (PLACEHOLDER_BLOG_POSTS[0].ogImageUrl || PLACEHOLDER_BLOG_POSTS[0].imageUrl) : DEFAULT_OG_IMAGE_URL;

  const blogSchema = {
    '@type': 'Blog',
    name: `${COMPANY_NAME} Insights Blog`,
    description: pageDescription,
    url: `${WEBSITE_URL}/#/blog`,
    publisher: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${WEBSITE_URL}/icons/icon-512x512.png`,
      },
    },
    blogPost: PLACEHOLDER_BLOG_POSTS.map(post => ({ // Add individual posts if available
        '@type': 'BlogPosting',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${WEBSITE_URL}/#${post.link}` // Assuming post.link is relative like /blog/my-post
        },
        headline: post.title,
        description: post.summary,
        image: post.imageUrl.startsWith('http') ? post.imageUrl : `${WEBSITE_URL}${post.imageUrl}`,
        author: {
            '@type': 'Person', // Or Organization if by "Techflex Insights Team"
            name: post.author,
        },
        publisher: { // Duplicate publisher info for each post as per schema.org examples
            '@type': 'Organization',
            name: COMPANY_NAME,
            logo: {
                '@type': 'ImageObject',
                url: `${WEBSITE_URL}/icons/icon-512x512.png`,
            }
        },
        datePublished: new Date(post.date).toISOString(), // Format date to ISO
        // dateModified: new Date(post.date).toISOString(), // If applicable
    }))
  };


  return (
    <PageContainer 
      title={pageTitle}
      description={pageDescription}
      ogTitle={pageTitle}
      ogDescription={pageDescription}
      ogImageUrl={firstPostImage}
      ogType="website" // Or "blog" if your CMS distinguishes
    >
      <StructuredData type="Blog" data={blogSchema} />
      {/* Hero Section for Blog Page */}
      <div className="bg-sky-700 dark:bg-sky-800 text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <SectionWrapper className="!py-0"> {/* SectionWrapper controls padding, so remove from div */}
          <div className="text-center max-w-3xl mx-auto">
            <LightBulbIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-3 sm:mb-4">{COMPANY_NAME} Insights</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-sky-100 dark:text-sky-200">
              Exploring technology, innovation in Zambia, and sharing our expertise.
            </p>
          </div>
        </SectionWrapper>
      </div>

      {/* Blog Posts Section */}
      <SectionWrapper>
        <SectionTitle
          title="Latest Articles & Thoughts"
          subtitle="Stay informed with our perspectives on the evolving tech landscape, its impact on Zambia, and practical advice for businesses and innovators."
          className="mb-10 sm:mb-12 md:mb-16"
        />

        {PLACEHOLDER_BLOG_POSTS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PLACEHOLDER_BLOG_POSTS.map((post: BlogPost) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-white dark:bg-brand-gray-800 rounded-lg shadow-md max-w-lg mx-auto">
            <svg className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg sm:text-xl font-medium text-slate-900 dark:text-white font-display">No posts yet</h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Our blog is actively being developed. Check back soon for insightful articles!
            </p>
          </div>
        )}
         <div className="mt-12 sm:mt-16 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 text-sm sm:text-base">Want to see more of our work or discuss specific topics?</p>
            <Button to="/contact" variant="primary" size="lg" className="!text-sm sm:!text-base" fullWidthOnMobile>Suggest a Topic or Get in Touch</Button>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-slate-100 dark:bg-brand-gray-950 !py-12 sm:!py-16">
          <div className="text-center max-w-md sm:max-w-xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white mb-2 sm:mb-3 font-display">Stay Tuned!</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">
                  We're constantly exploring new ideas and preparing valuable content. Follow us on social media for the latest updates from {COMPANY_NAME}.
              </p>
               <Button to="/contact" variant="outline" size="md" className="!text-sm" fullWidthOnMobile>Follow Our Journey</Button> 
          </div>
      </SectionWrapper>
    </PageContainer>
  );
};

export default BlogPage;