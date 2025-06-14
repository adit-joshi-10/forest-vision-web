
import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Mission from './Mission';
import Initiatives from './Initiatives';
import Testimonials from './Testimonials';

const PageContent = () => {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case '/':
        return <Hero />;
      case '/mission':
        return <Mission />;
      case '/initiatives':
        return <Initiatives />;
      case '/testimonials':
        return <Testimonials />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderContent()}
    </div>
  );
};

export default PageContent;
