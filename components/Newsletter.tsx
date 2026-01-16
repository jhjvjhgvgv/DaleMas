import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Mail } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log(`Subscribing email: ${email}`);
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <Section darker className="border-y border-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <Mail className="w-12 h-12 text-brand-orange mx-auto mb-6" />
        <h3 className="text-3xl font-heading font-bold uppercase mb-4">
          Get the Free "Island Strength" Starter Guide
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join the newsletter and get a free 3-day workout split plus nutrition cheat sheet delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-grow px-6 py-4 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-brand-green"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="secondary">
            {status === 'success' ? 'Sent!' : 'Get Free Guide'}
          </Button>
        </form>
      </div>
    </Section>
  );
};
