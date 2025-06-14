
import React from 'react';
import { ArrowRight, Play, Users, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      {/* Main Background with College Image - Mobile Optimized */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <picture>
            <source 
              media="(max-width: 640px)" 
              srcSet="/lovable-uploads/a69c709c-b07a-462c-93ee-fa38bf19207e.png"
            />
            <source 
              media="(max-width: 1024px)" 
              srcSet="/lovable-uploads/a69c709c-b07a-462c-93ee-fa38bf19207e.png"
            />
            <img 
              src="/lovable-uploads/a69c709c-b07a-462c-93ee-fa38bf19207e.png" 
              alt="MUJ College Campus" 
              className="w-full h-full object-cover object-center filter brightness-50 sm:brightness-60 md:brightness-75"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/30 to-accent/40 sm:from-primary/50 sm:via-primary/35 sm:to-accent/45 md:from-primary/60 md:via-primary/40 md:to-accent/50"></div>
          <div className="absolute inset-0 bg-black/20 sm:bg-black/25 md:bg-black/30"></div>
        </div>
      </div>

      {/* Floating Background Shapes - Mobile Safe */}
      <div className="floating-shapes hidden md:block">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* College Images - Responsive Positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side image - Hidden on mobile, adjusted for tablet */}
        <div className="absolute top-20 sm:top-24 md:top-32 left-2 sm:left-4 md:left-8 w-48 sm:w-56 md:w-72 h-32 sm:h-36 md:h-48 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl border-2 sm:border-3 md:border-4 border-white/20 sm:border-white/25 md:border-white/30 backdrop-blur-sm transform -rotate-3 sm:-rotate-4 md:-rotate-6 hover:rotate-0 transition-transform duration-500 hidden sm:block">
          <picture>
            <source 
              media="(max-width: 768px)" 
              srcSet="/lovable-uploads/2bd7e218-ede1-4dd8-a24a-1c37321637b4.png"
            />
            <img 
              src="/lovable-uploads/2bd7e218-ede1-4dd8-a24a-1c37321637b4.png" 
              alt="MUJ Campus View" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/15 sm:from-primary/20 to-transparent"></div>
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 text-white">
            <div className="text-xs sm:text-sm font-semibold">Campus Life</div>
            <div className="text-xs opacity-80 hidden sm:block">Experience Excellence</div>
          </div>
        </div>
        
        {/* Right side image - Responsive sizing */}
        <div className="absolute top-24 sm:top-32 md:top-44 right-2 sm:right-4 md:right-8 w-40 sm:w-48 md:w-64 h-28 sm:h-32 md:h-44 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl border-2 sm:border-3 md:border-4 border-white/20 sm:border-white/25 md:border-white/30 backdrop-blur-sm transform rotate-3 sm:rotate-4 md:rotate-6 hover:rotate-0 transition-transform duration-500">
          <picture>
            <source 
              media="(max-width: 768px)" 
              srcSet="/lovable-uploads/21ba9072-6c3e-48f2-b8f0-08c0d9cf44e1.png"
            />
            <img 
              src="/lovable-uploads/21ba9072-6c3e-48f2-b8f0-08c0d9cf44e1.png" 
              alt="MUJ Building Complex" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-accent/15 sm:from-accent/20 to-transparent"></div>
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 text-white text-right">
            <div className="text-xs sm:text-sm font-semibold">Modern Infrastructure</div>
            <div className="text-xs opacity-80 hidden sm:block">World-Class Facilities</div>
          </div>
        </div>
      </div>

      {/* Background Pattern - Mobile Optimized */}
      <div className="absolute inset-0 opacity-5 sm:opacity-8 md:opacity-10 hidden md:block">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-white/10 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Main Heading - Mobile Responsive */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-poppins font-bold mb-6 sm:mb-8 animate-fade-in leading-tight px-2">
            <span className="block">Transforming</span>
            <span className="block">Business</span>
            <span className="block italic text-accent drop-shadow-lg">Together</span>
          </h1>

          {/* Subtitle - Mobile Optimized */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto opacity-95 animate-fade-in leading-relaxed px-4" style={{ animationDelay: '0.2s' }}>
            Join India's most <span className="font-bold text-accent">prestigious student-led consulting network</span> at MUJ. 
            Work directly with <span className="italic font-semibold">leading NGOs and social enterprises</span>, 
            tackle <span className="font-bold underline decoration-accent/50">game-changing business challenges</span>, 
            and fast-track your career while creating <span className="text-accent font-bold">meaningful social impact</span>.
          </p>

          {/* CTA Buttons - Mobile Friendly */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in mb-8 sm:mb-12 md:mb-16 px-4" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/join"
              className="w-full sm:w-auto bg-accent text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl touch-target"
            >
              Join Our Team
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </Link>
            
            <button className="w-full sm:w-auto bg-transparent border-2 sm:border-3 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 shadow-xl touch-target">
              <Play className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              Watch Our Story
            </button>
          </div>

          {/* Call to Action for Freshers - Mobile Optimized */}
          <div className="animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/15 sm:bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/30 sm:border-white/40 max-w-3xl mx-auto shadow-2xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to Make an Impact?</h3>
              <p className="text-white/95 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                Join fellow MUJ students in consulting projects that create real change in communities across India.
              </p>
              <Link
                to="/join"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-accent text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg touch-target w-full sm:w-auto"
              >
                Apply Now - Recruitments Open!
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Mobile Safe */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
