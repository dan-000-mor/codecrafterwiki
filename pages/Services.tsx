import React from 'react';
import { SEO } from '../components/SEO';
import { Code, Cloud, Database, Lock, TrendingUp, Settings } from 'lucide-react';

const servicesList = [
  {
    title: 'Custom Python Application Development',
    description: 'We build robust, scalable, and secure web applications using Django, Flask, and Pyramid. Our solutions are tailored to your specific business processes.',
    icon: Code
  },
  {
    title: 'AI & Machine Learning Solutions',
    description: 'Transform your data into actionable insights. We integrate TensorFlow, PyTorch, and Scikit-learn into your business workflows for predictive modeling.',
    icon: TrendingUp
  },
  {
    title: 'Cloud & DevOps Engineering',
    description: 'Seamless deployment on AWS, Google Cloud, or Azure. We utilize Docker and Kubernetes to ensure your Python applications scale effortlessly.',
    icon: Cloud
  },
  {
    title: 'API Development & Integration',
    description: 'We create secure RESTful and GraphQL APIs that serve as the backbone of your mobile apps and third-party integrations.',
    icon: Settings
  },
  {
    title: 'Data Engineering & Big Data',
    description: 'High-performance data pipelines using Apache Airflow, Kafka, and Spark. We handle ETL processes for massive datasets.',
    icon: Database
  },
  {
    title: 'Cybersecurity & Audits',
    description: 'Protect your Python ecosystem. We conduct code audits, penetration testing, and implement best security practices.',
    icon: Lock
  }
];

export const Services: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Python Application Development Services",
    "provider": {
      "@type": "Organization",
      "name": "codecrafter Solutions"
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": servicesList.map(s => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title
        }
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Python Application Development Services" 
        description="Comprehensive Python development services including custom web apps, AI/ML integration, and enterprise APIs."
        schema={schema}
      />
      
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Services
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              As a premier <strong>custom Python development company</strong>, we offer a full spectrum of engineering services.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
            {servicesList.map((service, index) => (
              <div key={index} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
                        <service.icon className="h-6 w-6 text-brand-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                    <span className="text-brand-600 font-medium text-sm flex items-center cursor-pointer hover:underline">
                        Learn more &rarr;
                    </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};