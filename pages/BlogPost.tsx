import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { SEO } from '../components/SEO';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  const navigate = useNavigate();

  // Scroll to top on load or ID change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Post not found</h2>
          <Link to="/blog" className="text-brand-600 hover:underline mt-4 block">Return to Blog</Link>
        </div>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "description": post.excerpt
  };

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        schema={schema}
      />

      <article className="bg-white py-16">
         {/* Banner Image */}
         <div className="w-full h-[400px] relative mb-12">
            <div className="absolute inset-0 bg-gray-900/50"></div>
            <img 
               src={`https://picsum.photos/seed/${post.id}/1200/600`} 
               alt={post.title} 
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
               <div className="max-w-4xl text-center text-white">
                  <div className="flex justify-center gap-2 mb-6">
                     {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-brand-500/80 text-sm font-semibold backdrop-blur-sm">
                           {tag}
                        </span>
                     ))}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">{post.title}</h1>
                  <div className="flex justify-center items-center gap-6 text-brand-100 font-medium">
                     <span className="flex items-center gap-2"><User size={18} /> {post.author}</span>
                     <span className="flex items-center gap-2"><Calendar size={18} /> {post.date}</span>
                  </div>
               </div>
            </div>
         </div>

         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center text-brand-600 hover:text-brand-800 mb-8 transition-colors">
               <ArrowLeft size={20} className="mr-2" /> Back to Blog
            </Link>

            {/* Content Injection - Safe because we own the data/blogPosts.ts */}
            <div 
               className="prose prose-lg prose-indigo max-w-none text-gray-700"
               dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Box */}
            <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-100 flex items-center gap-6">
               <div className="h-16 w-16 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 text-2xl font-bold flex-shrink-0">
                  {post.author.charAt(0)}
               </div>
               <div>
                  <h3 className="text-lg font-bold text-gray-900">About {post.author}</h3>
                  <p className="text-gray-600">Senior Engineer at codecrafter Solutions. Specialist in high-performance architecture and secure <strong>Python application development services</strong>.</p>
               </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-brand-900 rounded-2xl text-center text-white">
               <h3 className="text-2xl font-bold mb-4">Need help with your Python project?</h3>
               <p className="mb-6 text-brand-100">Our custom Python development company is ready to assist.</p>
               <Link to="/contact" className="inline-block bg-white text-brand-900 px-6 py-3 rounded-md font-bold hover:bg-brand-50 transition-colors">
                  Contact Us
               </Link>
            </div>
         </div>
      </article>
    </>
  );
};