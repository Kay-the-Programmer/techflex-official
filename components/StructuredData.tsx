import React, { useEffect } from 'react';
import { JsonLdProps } from '../types.ts'; // Assuming types.ts is in the parent directory

const StructuredData: React.FC<JsonLdProps> = ({ type, data }) => {
  useEffect(() => {
    let script = document.querySelector(`script[data-schema-type="${type}"]`);
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-schema-type', type); // For easier querying/updating if needed
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    });

    // Cleanup function to remove the script when the component unmounts or data changes
    return () => {
      if (script && script.parentNode) {
        // script.parentNode.removeChild(script); // Can cause issues with HMR or fast navigation
      }
    };
  }, [type, data]); // Re-run effect if type or data changes

  return null; // This component doesn't render anything visible
};

export default StructuredData;