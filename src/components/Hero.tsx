
import React from 'react';
import { ArrowRight, Play, Users, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Main Background with College Image - Improved Quality */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img 
            src="/lovable-uploads/a69c709c-b07a-462c-93ee-fa38bf19207e.png" 
            alt="MUJ College Campus" 
            className="w-full h-full object-cover object-center filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-accent/50"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* College Images - Better Positioned */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side image */}
        <div className="absolute top-32 left-8 w-72 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm transform -rotate-6 hover:rotate-0 transition-transform duration-500">
          <img 
            src="/lovable-uploads/2bd7e218-ede1-4dd8-a24a-1c37321637b4.png" 
            alt="MUJ Campus View" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-sm font-semibold">Campus Life</div>
            <div className="text-xs opacity-80">Experience Excellence</div>
          </div>
        </div>
        
        {/* Right side image */}
        <div className="absolute top-44 right-8 w-64 h-44 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm transform rotate-6 hover:rotate-0 transition-transform duration-500">
          <img 
            src="/lovable-uploads/21ba9072-6c3e-48f2-b8f0-08c0d9cf44e1.png" 
            alt="MUJ Building Complex" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
          <div className="absolute bottom-4 right-4 text-white text-right">
            <div className="text-sm font-semibold">Modern Infrastructure</div>
            <div className="text-xs opacity-80">World-Class Facilities</div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold mb-8 animate-fade-in leading-tight">
            <span className="block">Transforming</span>
            <span className="block">Business</span>
            <span className="block italic text-accent drop-shadow-lg">Together</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-5xl mx-auto opacity-95 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Join India's most <span className="font-bold text-accent">prestigious student-led consulting network</span> at MUJ. 
            Work directly with <span className="italic font-semibold">leading NGOs and social enterprises</span>, 
            tackle <span className="font-bold underline decoration-accent/50">game-changing business challenges</span>, 
            and fast-track your career while creating <span className="text-accent font-bold">meaningful social impact</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in mb-16" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/join"
              className="bg-accent text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-xl hover:shadow-2xl"
            >
              Join Our Team
              <ArrowRight className="h-6 w-6" />
            </Link>
            
            <button className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-xl">
              <Play className="h-6 w-6" />
              Watch Our Story
            </button>
          </div>

          {/* Call to Action for Freshers */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/40 max-w-3xl mx-auto shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h3>
              <p className="text-white/95 mb-6 text-lg">
                Join fellow MUJ students in consulting projects that create real change in communities across India.
              </p>
              <Link
                to="/join"
                className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Apply Now - Recruitments Open!
                <ArrowRight className="h-5 w-5" />
              </Link>
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
