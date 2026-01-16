import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 mb-6 group">
              <Dumbbell className="h-8 w-8 text-brand-green" />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl leading-none text-white">DALE MÁS</span>
                <span className="font-heading font-bold text-sm tracking-[0.2em] text-brand-green">FITNESS 808</span>
              </div>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Train Harder. Live Stronger.<br />
              Island Mindset.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Programs</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#programs" onClick={(e) => handleScrollTo(e, 'programs')} className="hover:text-brand-orange transition-colors">Online Training</a></li>
              <li><a href="#challenge" onClick={(e) => handleScrollTo(e, 'challenge')} className="hover:text-brand-orange transition-colors">30-Day Challenge</a></li>
              <li><a href="#programs" onClick={(e) => handleScrollTo(e, 'programs')} className="hover:text-brand-orange transition-colors">1-on-1 Coaching</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Support</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')} className="hover:text-brand-orange transition-colors">FAQ</a></li>
              <li><a href="mailto:hello@dalemas808.com" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-orange transition-colors cursor-not-allowed opacity-50">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Social</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-full hover:bg-brand-green hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-full hover:bg-brand-green hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-full hover:bg-brand-green hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Dale Más Fitness 808. All rights reserved.
          </p>
          <button 
            onClick={onOpenAdmin}
            className="text-gray-800 hover:text-gray-600 text-xs uppercase tracking-widest font-bold"
          >
            Business Owner Resources
          </button>
        </div>
      </div>
    </footer>
  );
};