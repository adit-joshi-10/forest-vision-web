
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16 lg:pt-20">
        <Hero />
        <Stats />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
