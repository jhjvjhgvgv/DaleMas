import React from 'react';
import { Section } from './Section';
import { STEPS } from '../constants';

export const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works">
      <div className="text-center mb-16">
        <h2 className="text-brand-green font-bold tracking-widest uppercase mb-2">The Process</h2>
        <h3 className="text-4xl font-heading font-bold uppercase">How It Works</h3>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {STEPS.map((step, index) => (
          <div key={index} className="relative group">
            <div className="text-8xl font-black text-gray-800 opacity-20 absolute -top-8 -left-4 z-0 group-hover:text-brand-green/20 transition-colors">
              {step.number}
            </div>
            <div className="relative z-10 pt-8">
              <h4 className="text-xl font-bold uppercase mb-4 border-l-4 border-brand-orange pl-4">
                {step.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
