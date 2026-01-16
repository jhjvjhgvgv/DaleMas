import React from 'react';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Fitness Training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-1 border border-brand-green text-brand-green font-bold uppercase tracking-[0.2em] text-xs">
            Island Mindset • No Excuses
          </div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6 uppercase italic">
            Train Harder.<br />
            <span className="text-brand-green">Live Stronger.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-body mb-10 max-w-2xl leading-relaxed">
            Simple, structured fitness programs and challenges built for real people who want real results — without confusion or excuses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => document.getElementById('programs')?.scrollIntoView({behavior: 'smooth'})}>
              Start Your Journey
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('challenge')?.scrollIntoView({behavior: 'smooth'})}>
              View Challenge <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
