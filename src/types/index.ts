export interface Service {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
  features: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  location?: string;
  content: string;
  rating: number;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}