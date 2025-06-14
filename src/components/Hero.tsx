
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-forest">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 animate-fade-in">
            Empowering Change
            <br />
            <span className="text-accent">Together</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building stronger communities through collaborative initiatives, 
            sustainable development, and meaningful connections that create lasting impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/about"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              Join Our Mission
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Play className="h-5 w-5" />
              Watch Our Story
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base opacity-80">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-sm md:text-base opacity-80">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-sm md:text-base opacity-80">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-sm md:text-base opacity-80">Years Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
