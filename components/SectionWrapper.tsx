
import React from 'react';
import { motion, useAnimation, Variants } from 'framer-motion'; // Added Variants
import { useInView } from 'react-intersection-observer'; // Assuming this would be added or a similar hook used

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string; 
  containerClassName?: string; 
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className = '', 
  id, 
  ariaLabelledBy,
  containerClassName = ''
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1,   // Trigger when 10% of the element is in view
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants: Variants = { // Explicitly typed with Variants
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <motion.section
      ref={ref}
      id={id} 
      aria-labelledby={ariaLabelledBy}
      className={`py-12 sm:py-16 md:py-20 ${className}`}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;