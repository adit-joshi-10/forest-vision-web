
import React from 'react';
import { ArrowRight, Play, Users, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main Background with College Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img 
            src="/lovable-uploads/a69c709c-b07a-462c-93ee-fa38bf19207e.png" 
            alt="MUJ College Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-forest/85"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Additional College Images - Positioned Better */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="college-image college-image-2">
          <div className="w-64 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
            <img 
              src="/lovable-uploads/2bd7e218-ede1-4dd8-a24a-1c37321637b4.png" 
              alt="MUJ Campus View" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent"></div>
          </div>
        </div>
        
        <div className="college-image college-image-3">
          <div className="w-56 h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
            <img 
              src="/lovable-uploads/21ba9072-6c3e-48f2-b8f0-08c0d9cf44e1.png" 
              alt="MUJ Building Complex" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* 180 DC MUJ Branding */}
          <div className="mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
              <Award className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">180 Degrees Consulting | MUJ</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 animate-fade-in">
            <span className="block">Transforming</span>
            <span className="block">Business</span>
            <span className="block italic text-accent">Together</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join MUJ's premier consulting club where students solve real-world business challenges 
            for NGOs and social enterprises. Build skills, make impact, and shape your future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/join"
              className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Join Our Team
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Play className="h-5 w-5" />
              Watch Our Story
            </button>
          </div>

          {/* Call to Action for Freshers */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-3">Ready to Make an Impact?</h3>
              <p className="text-white/90 mb-4">
                Join fellow MUJ students in consulting projects that create real change in communities across India.
              </p>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
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

      {/* Stats Section - Moved to Bottom */}
      <div className="absolute bottom-24 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center group">
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl md:text-3xl font-bold mb-1 group-hover:text-accent transition-colors duration-300 text-white">50+</div>
                <div className="text-sm md:text-base text-white/80">Projects Delivered</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl md:text-3xl font-bold mb-1 group-hover:text-accent transition-colors duration-300 text-white">25+</div>
                <div className="text-sm md:text-base text-white/80">NGO Partners</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl md:text-3xl font-bold mb-1 group-hover:text-accent transition-colors duration-300 text-white">500+</div>
                <div className="text-sm md:text-base text-white/80">Lives Impacted</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl md:text-3xl font-bold mb-1 group-hover:text-accent transition-colors duration-300 text-white">100+</div>
                <div className="text-sm md:text-base text-white/80">Student Consultants</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Info Cards - Repositioned */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-card floating-card-4">
          <div className="w-56 h-32 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 p-4 shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">500+ Members</div>
                <div className="text-white/80 text-xs">Active Community</div>
              </div>
            </div>
            <div className="h-1.5 bg-white/20 rounded-full">
              <div className="h-1.5 bg-accent rounded-full w-4/5"></div>
            </div>
          </div>
        </div>
        
        <div className="floating-card floating-card-5">
          <div className="w-52 h-28 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 p-4 shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">50+ Projects</div>
                <div className="text-white/80 text-xs">Delivered</div>
              </div>
            </div>
            <div className="h-1.5 bg-white/20 rounded-full">
              <div className="h-1.5 bg-primary rounded-full w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
