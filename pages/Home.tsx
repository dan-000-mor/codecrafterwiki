import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Database, Server, Smartphone, Cpu } from 'lucide-react';
import { SEO } from '../components/SEO';

const features = [
  { name: 'Custom Python Development', description: 'Tailored solutions built on Django, Flask, and FastAPI.', icon: Server },
  { name: 'AI & Data Science', description: 'Leveraging Python for predictive analytics and machine learning models.', icon: Cpu },
  { name: 'Enterprise Integrations', description: 'Seamless API development connecting your business systems.', icon: Database },
  { name: 'Mobile Backends', description: 'Robust Python backends powering native and cross-platform mobile apps.', icon: Smartphone },
];

const testimonials = [
  {
    content: "codecrafter transformed our legacy system into a high-performance cloud application. The best Python development services company we've worked with.",
    author: "James Wilson",
    role: "CTO, FinTech Global",
    image: "https://picsum.photos/seed/james/100/100"
  },
  {
    content: "Their expertise in custom Python development helped us launch our AI startup 3 months ahead of schedule.",
    author: "Elena Rodriguez",
    role: "Founder, DataFlow AI",
    image: "https://picsum.photos/seed/elena/100/100"
  }
];

export const Home: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "codecrafter Solutions",
    "image": "https://codecrafter.wiki/logo.png",
    "description": "Top-rated Python development services company specializing in custom software and AI.",
    "priceRange": "$$$"
  };

  return (
    <>
      <SEO 
        title="Top Python Development Services Company" 
        description="We are a leading custom Python development company offering enterprise-grade application development services, AI integration, and cloud solutions."
        schema={schema}
      />
      
      {/* Hero Section */}
      <div className="relative bg-brand-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Your Trusted <span className="text-brand-500">Python Development Services Company</span>
            </h1>
            <p className="mt-4 text-xl text-brand-100 max-w-2xl">
              We deliver scalable, secure, and high-performance custom Python development services for startups and Fortune 500 enterprises.
            </p>
            <div className="mt-10 flex gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-900 bg-brand-500 hover:bg-brand-400 md:text-lg transition-all shadow-lg shadow-brand-500/50">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center px-8 py-3 border border-gray-500 text-base font-medium rounded-md text-white hover:bg-white/10 md:text-lg transition-all">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide mb-6">Trusted by innovation leaders</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos */}
             {['Acme Corp', 'GlobalTech', 'Nebula AI', 'Quant Finance', 'HealthSync'].map((brand, i) => (
                <div key={i} className="col-span-1 flex justify-center items-center">
                   <span className="text-xl font-bold font-serif text-gray-800">{brand}</span>
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* Services Snippet */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">What We Do</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Python Application Development Services
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              From MVP to Enterprise, our custom Python development solutions are designed to grow with your business.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-2xl px-6 pb-8 h-full hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-brand-600 rounded-xl shadow-lg">
                        <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-brand-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-brand-800 rounded-2xl p-8 shadow-xl border border-brand-700">
                <p className="text-lg text-brand-100 italic mb-6">"{t.content}"</p>
                <div className="flex items-center">
                  <img className="h-12 w-12 rounded-full object-cover border-2 border-brand-500" src={t.image} alt={t.author} />
                  <div className="ml-4">
                    <div className="text-white font-bold">{t.author}</div>
                    <div className="text-brand-400 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-600 rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to scale?</span>
                  <span className="block">Hire the best Python team today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-brand-100">
                  Let's discuss how our custom Python development company can bring your vision to life.
                </p>
                <Link to="/contact" className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-brand-600 hover:bg-brand-50">
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="relative -mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
               <img className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://picsum.photos/seed/code/800/600" alt="App dashboard" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};