export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML string to support internal linking
  date: string;
  author: string;
  tags: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: any;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}