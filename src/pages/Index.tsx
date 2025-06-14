
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Initiatives from '../components/Initiatives';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Mission />
      <Initiatives />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
