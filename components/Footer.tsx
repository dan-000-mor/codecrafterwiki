import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Py<span className="text-brand-500">Elite</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A premier Python development services company helping enterprises build scalable, secure, and high-performance applications.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-500">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white">Custom Python Development</Link></li>
              <li><Link to="/services" className="hover:text-white">Web Application Development</Link></li>
              <li><Link to="/services" className="hover:text-white">AI & Machine Learning</Link></li>
              <li><Link to="/services" className="hover:text-white">API Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-500">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white">Tech Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-500">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Innovation Drive</li>
              <li>Tech Valley, CA 94043</li>
              <li>hello@codecrafter.wiki</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} codecrafter Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};