import React, { useEffect } from 'react';
import { SEOProps } from '../types';

export const SEO: React.FC<SEOProps> = ({ title, description, schema }) => {
  useEffect(() => {
    document.title = `${title} | codecrafter Solutions`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Schema.org Injection
    const scriptId = 'json-ld-schema';
    let scriptTag = document.getElementById(scriptId);
    
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }

  }, [title, description, schema]);

  return null;
};