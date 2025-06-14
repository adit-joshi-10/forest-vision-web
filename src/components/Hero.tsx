
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

      {/* Floating Cards Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-card floating-card-1">
          <div className="w-64 h-40 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4">
            <div className="h-24 bg-white/20 rounded-lg mb-2"></div>
            <div className="h-2 bg-white/30 rounded mb-1"></div>
            <div className="h-2 bg-white/20 rounded w-3/4"></div>
          </div>
        </div>
        
        <div className="floating-card floating-card-2">
          <div className="w-48 h-32 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-3">
            <div className="h-16 bg-white/20 rounded-lg mb-2"></div>
            <div className="h-2 bg-white/30 rounded mb-1"></div>
            <div className="h-2 bg-white/20 rounded w-2/3"></div>
          </div>
        </div>
        
        <div className="floating-card floating-card-3">
          <div className="w-56 h-36 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4">
            <div className="h-20 bg-white/20 rounded-lg mb-2"></div>
            <div className="h-2 bg-white/30 rounded mb-1"></div>
            <div className="h-2 bg-white/20 rounded w-4/5"></div>
          </div>
        </div>
        
        <div className="floating-card floating-card-4">
          <div className="w-52 h-34 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-3">
            <div className="h-18 bg-white/20 rounded-lg mb-2"></div>
            <div className="h-2 bg-white/30 rounded mb-1"></div>
            <div className="h-2 bg-white/20 rounded w-3/5"></div>
          </div>
        </div>
        
        <div className="floating-card floating-card-5">
          <div className="w-60 h-38 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4">
            <div className="h-22 bg-white/20 rounded-lg mb-2"></div>
            <div className="h-2 bg-white/30 rounded mb-1"></div>
            <div className="h-2 bg-white/20 rounded w-4/6"></div>
          </div>
        </div>
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
            <span className="block">6 weeks to ship</span>
            <span className="block">something</span>
            <span className="block italic text-accent">amazing</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join a community of builders creating and launching projects together. 
            Get support, accountability, and showcase your work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/about"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base opacity-80">Builders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">250+</div>
              <div className="text-sm md:text-base opacity-80">Projects Shipped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">$2M+</div>
              <div className="text-sm md:text-base opacity-80">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-sm md:text-base opacity-80">Success Rate</div>
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
