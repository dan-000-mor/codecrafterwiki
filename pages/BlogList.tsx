import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { SEO } from '../components/SEO';
import { Calendar, User } from 'lucide-react';

export const BlogList: React.FC = () => {
  return (
    <>
      <SEO 
        title="Blog - Python Development Insights" 
        description="Expert insights on custom Python development, software architecture, and industry trends."
      />
      
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Tech Insights</h1>
            <p className="text-xl text-gray-500">Latest thoughts from our <strong>Python application development services</strong> team.</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex flex-col rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex-shrink-0 h-48 w-full bg-gray-200 relative">
                   {/* Generating a deterministic pseudo-random image based on ID length */}
                   <img 
                      className="h-full w-full object-cover" 
                      src={`https://picsum.photos/seed/${post.id}/600/400`} 
                      alt={post.title} 
                   />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                       {post.tags.map(tag => (
                          <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-800">
                             {tag}
                          </span>
                       ))}
                    </div>
                    <Link to={`/blog/${post.id}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900 hover:text-brand-600 transition-colors">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500 line-clamp-3">{post.excerpt}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{post.author}</span>
                      <div className="h-10 w-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-bold">
                         {post.author.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};