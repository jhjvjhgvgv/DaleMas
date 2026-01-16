import React from 'react';
import { Section } from './Section';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <Section id="results" darker>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-2">Real People. Real Results.</h2>
          <h3 className="text-4xl font-heading font-bold uppercase">The Tribe Speaks</h3>
        </div>
        <div className="md:text-right">
          <p className="text-gray-400">Join hundreds of others who have transformed their bodies and minds with the island mindset.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-brand-gray p-8 border-t-4 border-brand-green relative">
            <Quote className="absolute top-4 right-4 text-gray-700 w-12 h-12 opacity-50" />
            <div className="flex items-center gap-4 mb-6">
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover grayscale" />
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <span className="text-brand-green text-sm font-bold uppercase">{t.result}</span>
              </div>
            </div>
            <p className="text-gray-300 italic leading-relaxed">"{t.quote}"</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
