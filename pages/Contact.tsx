import React from 'react';
import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with codecrafter Solutions for your Python development needs."
      />
      
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
            <p className="mt-4 text-lg text-gray-500">
              Ready to start your project? Contact the leading <strong>python development services company</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="bg-brand-900 rounded-2xl p-10 text-white shadow-xl">
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-400 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-brand-200">Email</p>
                    <p className="text-lg">hello@codecrafter.wiki</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-400 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-brand-200">Phone</p>
                    <p className="text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-400 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-brand-200">Office</p>
                    <p className="text-lg">123 Innovation Drive,<br/>Tech Valley, CA 94043</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-brand-800 rounded-xl border border-brand-700">
                 <p className="text-brand-100 italic">"The team at codecrafter was incredibly responsive. They understood our requirements immediately."</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-10 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 p-3" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 p-3" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 p-3" placeholder="john@company.com" />
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700">Service Interest</label>
                   <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 p-3">
                      <option>Custom Python Development</option>
                      <option>Staff Augmentation</option>
                      <option>AI/ML Integration</option>
                      <option>Code Audit</option>
                   </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 p-3" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-600 text-white py-3 px-6 rounded-md font-bold hover:bg-brand-700 transition-colors shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};