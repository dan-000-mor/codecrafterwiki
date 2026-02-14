import React from 'react';
import { SEO } from '../components/SEO';

export const Privacy: React.FC = () => {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy Policy for codecrafter Solutions" />
      
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-indigo text-gray-600">
            <p className="mb-4">Last updated: October 2023</p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-4">1. Introduction</h2>
            <p>
              Welcome to codecrafter Solutions. As a responsible <strong>Python development services company</strong>, we are committed to protecting your personal information and your right to privacy.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-4">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services (specifically <strong>custom Python development</strong>), when you participate in activities on the website, or otherwise when you contact us.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-4">3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-4">4. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at privacy@codecrafter.wiki.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};