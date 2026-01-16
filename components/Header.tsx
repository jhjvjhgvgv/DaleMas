import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Results', href: '#results' },
    { name: 'How It Works', href: '#how-it-works' },
  ];

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm py-4 shadow-lg border-b border-gray-800' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 group">
          <Dumbbell className="h-8 w-8 text-brand-green group-hover:text-brand-orange transition-colors" />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl leading-none tracking-tighter">DALE MÁS</span>
            <span className="font-heading font-bold text-sm tracking-[0.2em] text-brand-green">FITNESS 808</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href.substring(1))}
              className="text-sm font-bold uppercase tracking-widest hover:text-brand-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#programs"
            onClick={(e) => handleScrollTo(e, 'programs')}
            className="px-6 py-2 bg-brand-green text-black font-bold uppercase text-sm tracking-wider hover:bg-white transition-colors cursor-pointer"
          >
            Start Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-gray border-b border-gray-800 p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href.substring(1))}
              className="text-lg font-bold uppercase tracking-widest text-center py-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#programs"
            onClick={(e) => handleScrollTo(e, 'programs')}
            className="px-6 py-3 bg-brand-green text-black font-bold uppercase text-center tracking-wider"
          >
            Start Now
          </a>
        </div>
      )}
    </header>
  );
};