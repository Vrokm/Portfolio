// src/pages/HomePage.tsx
import React from 'react';
//import Hero from '../sections/Hero';
import RippleEffectHero from '../components/RippleEffectHero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import NewsletterSignup from '../sections/NewsletterSignup';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <RippleEffectHero />
      <About />
      <Projects />
      <Skills />
      <NewsletterSignup />
       {/* <-- Add the Newsletter section here */}
      <Contact />
    </div>
  );
};

export default HomePage;