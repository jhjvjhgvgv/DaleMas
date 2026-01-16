import React from 'react';
import { Section } from './Section';
import { Target, Shield, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" darker>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-2">The Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 uppercase">
            Stop Starting Over.<br />Start Finishing.
          </h3>
          <p className="text-gray-400 mb-6 text-lg leading-relaxed">
            Most people fail because they lack structure and accountability. They rely on motivation, which is fleeting.
          </p>
          <p className="text-white text-lg font-semibold mb-8">
            Dale Más Fitness 808 gives you the plan, discipline, and push you need to build a lifestyle, not just a 30-day fix.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-green/10 rounded-full text-brand-green">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Clear Structure</h4>
                <p className="text-gray-400">No guesswork. You open the app, you see the work, you do the work.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-orange/10 rounded-full text-brand-orange">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Real Accountability</h4>
                <p className="text-gray-400">We don't let you slip through the cracks. We check in, we push, we support.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-full text-white">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Island Energy</h4>
                <p className="text-gray-400">Raw, authentic, and community-driven. We rise together.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 border-2 border-brand-green opacity-20 transform translate-x-4 translate-y-4"></div>
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
            alt="Trainer" 
            className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
          />
        </div>
      </div>
    </Section>
  );
};
