import React from 'react';
import { Section } from './Section';
import { PROGRAMS } from '../constants';
import { Button } from './Button';
import { Check } from 'lucide-react';

export const Programs: React.FC = () => {
  return (
    <Section id="programs">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-brand-green font-bold tracking-widest uppercase mb-2">Choose Your Path</h2>
        <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-6">Built for Results</h3>
        <p className="text-gray-400 text-lg">Whether you need a simple plan or hands-on coaching, we have a level for you.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PROGRAMS.map((program) => (
          <div 
            key={program.id}
            id={program.id === 'challenge' ? 'challenge' : ''}
            className={`relative p-8 flex flex-col ${
              program.popular 
                ? 'bg-brand-gray border-2 border-brand-orange transform md:-translate-y-4' 
                : 'bg-black border border-gray-800'
            }`}
          >
            {program.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 text-sm font-bold uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
            )}
            
            <h4 className="text-2xl font-bold font-heading uppercase mb-2">{program.title}</h4>
            <div className="text-3xl font-bold text-brand-green mb-4">{program.price}</div>
            <p className="text-gray-400 mb-8 min-h-[50px]">{program.description}</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {program.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={program.popular ? 'primary' : 'outline'} 
              fullWidth
              onClick={() => alert(`Redirecting to Stripe payment for ${program.title}...`)}
            >
              {program.cta}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};
