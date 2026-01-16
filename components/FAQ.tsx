import React, { useState } from 'react';
import { Section } from './Section';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-2">Common Questions</h2>
          <h3 className="text-4xl font-heading font-bold uppercase mb-6">FAQ</h3>
          <p className="text-gray-400 mb-8">
            Got questions? We've got answers. If you don't see your question here, reach out to us directly.
          </p>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" 
              alt="Gym Equipment" 
              className="w-full h-64 object-cover grayscale opacity-50 rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-gray-800 bg-black">
              <button 
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-900 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg pr-8">{faq.question}</span>
                {openIndex === index ? <Minus className="text-brand-green shrink-0" /> : <Plus className="text-brand-orange shrink-0" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-gray-900">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};