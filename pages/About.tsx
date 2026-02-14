import React from 'react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us - Custom Python Development Company" 
        description="Learn about codecrafter Solutions, the team of expert engineers behind top-tier Python applications."
      />
      
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
                We are codecrafter Solutions
              </h1>
              <div className="prose prose-lg text-gray-500">
                <p>
                  Founded in 2015, codecrafter Solutions started with a simple mission: to provide the highest quality <strong>Python development services company</strong> experience in the market. We saw a gap between freelance chaos and overpriced big-firm consultancy.
                </p>
                <p>
                  We specialize in <strong>custom Python development</strong> for industries ranging from Fintech and Healthcare to EdTech and Logistics. Our team consists of 50+ Senior Python Engineers, Data Scientists, and DevOps experts.
                </p>
                <p>
                  Our philosophy is simple: Write clean code, test everything, and communicate clearly. This approach has earned us a 98% client retention rate.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-brand-600">50+</div>
                  <div className="text-gray-500 mt-1">Experts</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-600">200+</div>
                  <div className="text-gray-500 mt-1">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-600">98%</div>
                  <div className="text-gray-500 mt-1">Client Retention</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-600">8</div>
                  <div className="text-gray-500 mt-1">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 relative">
               <div className="absolute inset-0 bg-brand-200 transform translate-x-4 translate-y-4 rounded-2xl"></div>
               <img 
                 className="relative rounded-2xl shadow-xl w-full object-cover h-[600px]" 
                 src="https://picsum.photos/seed/teamwork/600/800" 
                 alt="Our Team" 
               />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};