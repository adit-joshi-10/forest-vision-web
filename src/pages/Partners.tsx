import React from 'react';
import Navigation from '../components/Navigation';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const PartnersPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <Partners />
      </div>
      <Footer />
    </div>
  );
};

export default PartnersPage;