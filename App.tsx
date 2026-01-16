import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Testimonials } from './components/Testimonials';
import { HowItWorks } from './components/HowItWorks';
import { Newsletter } from './components/Newsletter';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';

function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Testimonials />
        <HowItWorks />
        <Newsletter />
        <FAQ />
      </main>
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />
      
      <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}

export default App;
