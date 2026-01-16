export interface Program {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  result: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}
