
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <Hero />
        <Stats />
        <Partners />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
