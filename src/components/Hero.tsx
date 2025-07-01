
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main Background with College Image - Mobile Optimized */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <picture>
            <source 
              media="(max-width: 640px)" 
              srcSet="/lovable-uploads/a69c709c-b07a-462c-93ee-fa38bf19207e.png"
            />
            <img 
              src="/lovable-uploads/a69c709c-b07a-462c-93ee-fa38bf19207e.png" 
              alt="MUJ College Campus" 
              className="w-full h-full object-cover object-center"
            />
          </picture>
          {/* Simplified overlay for better mobile visibility */}
          <div className="absolute inset-0 bg-black/60 sm:bg-black/50 md:bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/30 to-accent/20"></div>
        </div>
      </div>

      {/* Remove floating card images on mobile, show only on larger screens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {/* Left side image - Only on large screens */}
        <div className="absolute top-32 left-8 w-72 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm transform -rotate-6 hover:rotate-0 transition-transform duration-500">
          <img 
            src="/lovable-uploads/2bd7e218-ede1-4dd8-a24a-1c37321637b4.png" 
            alt="MUJ Campus View" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-sm font-semibold">Campus Life</div>
            <div className="text-xs opacity-80">Experience Excellence</div>
          </div>
        </div>
        
        {/* Right side image - Only on large screens */}
        <div className="absolute top-44 right-8 w-64 h-44 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm transform rotate-6 hover:rotate-0 transition-transform duration-500">
          <img 
            src="/lovable-uploads/21ba9072-6c3e-48f2-b8f0-08c0d9cf44e1.png" 
            alt="MUJ Building Complex" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
          <div className="absolute bottom-4 right-4 text-white text-right">
            <div className="text-sm font-semibold">Modern Infrastructure</div>
            <div className="text-xs opacity-80">World-Class Facilities</div>
          </div>
        </div>
      </div>

      {/* Main Content - Mobile Optimized */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Main Heading - Cleaner Mobile Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 animate-fade-in leading-tight">
            <span className="block">Transforming</span>
            <span className="block">Business</span>
            <span className="block italic text-accent drop-shadow-lg">Together</span>
          </h1>

          {/* Subtitle - More readable on mobile */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto opacity-95 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Join India's most <span className="font-bold text-accent">prestigious student-led consulting network</span> at MUJ. 
            Work with <span className="italic font-semibold">leading NGOs</span>, 
            tackle <span className="font-bold underline decoration-accent/50">business challenges</span>, 
            and create <span className="text-accent font-bold">meaningful impact</span>.
          </p>

          {/* CTA Buttons - Better mobile spacing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in mb-12" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/join"
              className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl touch-target"
            >
              Join Our Team
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Call to Action Card - Simplified for mobile */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
              <p className="text-white/95 mb-6 text-sm sm:text-base leading-relaxed">
                Join fellow MUJ students in consulting projects that create real change.
              </p>
              <Link
                to="/join"
                className="inline-flex items-center justify-center gap-3 bg-accent text-white px-6 py-3 rounded-full font-bold text-base hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg touch-target w-full sm:w-auto"
              >
                Apply Now - Recruitments Open!
                <ArrowRight className="h-4 w-4" />
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
