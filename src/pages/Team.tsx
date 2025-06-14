
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Linkedin, Twitter, Mail, Users, Award, Globe, Star, Briefcase, Target, Crown } from 'lucide-react';
import { teamMembers } from '../data/teamMembers';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Reorder team members: President first, Branch Secretary second, Treasurer third, then others
  const reorderedTeamMembers = [
    ...teamMembers.filter(member => member.role === 'President'),
    ...teamMembers.filter(member => member.role === 'Branch Secretary'),
    ...teamMembers.filter(member => member.role === 'Treasurer'),
    ...teamMembers.filter(member => !['President', 'Branch Secretary', 'Treasurer'].includes(member.role))
  ];

  const stats = [
    { icon: Users, number: '50+', label: 'Team Members' },
    { icon: Award, number: '150+', label: 'Projects Completed' },
    { icon: Globe, number: '15+', label: 'Countries Reached' },
    { icon: Star, number: '98%', label: 'Client Satisfaction' }
  ];

  const achievements = [
    { icon: Briefcase, title: 'Professional Excellence', description: 'Delivering top-tier consulting solutions' },
    { icon: Target, title: 'Strategic Impact', description: 'Creating meaningful change in communities' },
    { icon: Users, title: 'Collaborative Culture', description: 'Building strong partnerships and networks' }
  ];

  const getDesignationColor = (role: string) => {
    switch (role) {
      case 'President':
        return 'from-purple-500 to-indigo-600';
      case 'Director of Operations':
        return 'from-blue-500 to-cyan-600';
      case 'Treasurer':
        return 'from-green-500 to-emerald-600';
      case 'Consulting Director':
        return 'from-orange-500 to-red-600';
      case 'Marketing Director':
        return 'from-pink-500 to-rose-600';
      case 'Branch Secretary':
        return 'from-teal-500 to-cyan-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen-safe">
      <Navigation />
      
      {/* Hero Section - Fixed Mobile Background */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 text-white relative overflow-hidden min-h-[70vh] sm:min-h-[80vh]">
        {/* Mobile-optimized background with proper scaling */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <picture>
              <source 
                media="(max-width: 640px)" 
                srcSet="/lovable-uploads/477173a4-7825-4f0d-bf40-42e6bbcf3296.png"
              />
              <img 
                src="/lovable-uploads/477173a4-7825-4f0d-bf40-42e6bbcf3296.png" 
                alt="MUJ Team Background" 
                className="w-full h-full object-cover object-center"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
          </div>
        </div>
        
        <div className="container-mobile relative z-10 h-full flex items-center">
          <div className="w-full text-center">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <span className="inline-block bg-gradient-to-r from-primary to-accent text-white px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-fade-in">
                Excellence in Consulting
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold mb-4 sm:mb-6 md:mb-8 animate-fade-in leading-tight px-4">
              Meet Our <span className="bg-gradient-to-r from-accent via-white to-primary bg-clip-text text-transparent">Dream Team</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 leading-relaxed animate-fade-in max-w-4xl mx-auto font-medium px-4 mb-6 sm:mb-8 md:mb-12" style={{ animationDelay: '0.2s' }}>
              Passionate innovators, strategic thinkers, and change-makers dedicated to creating 
              <span className="font-bold text-accent"> meaningful impact</span> through collaborative excellence.
            </p>
            
            {/* Achievement Cards - Mobile Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 touch-target">
                  <achievement.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-1 sm:mb-2 mx-auto" />
                  <h3 className="font-bold text-xs sm:text-sm mb-1">{achievement.title}</h3>
                  <p className="text-xs opacity-90 leading-tight">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-mobile relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-gray-800 via-primary to-accent bg-clip-text text-transparent px-4">
              Our Impact in Numbers
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Building excellence through collaboration and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center animate-scale-in ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 group mobile-card">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-black mb-1 sm:mb-2 md:mb-3 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  
                  <div className="text-gray-700 font-bold text-sm sm:text-base md:text-lg group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </div>

                  <div className="mt-2 sm:mt-3 md:mt-4 h-1 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transform origin-left transition-transform duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
                      style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section - Mobile Optimized */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-white via-slate-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-primary to-accent hidden md:block"></div>
          <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-accent to-primary hidden md:block"></div>
        </div>
        
        <div className="container-mobile relative z-10">
          <div className={`mb-12 sm:mb-16 md:mb-24 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Department Header - Mobile Optimized */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="flex justify-center items-center mb-3 sm:mb-4 md:mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg sm:rounded-xl shadow-lg">
                  <Crown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-black mb-3 sm:mb-4 md:mb-6 text-gray-800 px-4">
                Leadership Team
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-3 sm:mb-4 md:mb-6 font-medium leading-relaxed px-4">
                Visionary leaders driving strategic direction and organizational excellence with unwavering commitment to our mission.
              </p>
              
              <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-2 sm:mb-3 md:mb-4"></div>
            </div>
            
            {/* Team Member Grid - Responsive Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
              {reorderedTeamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`group ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 hover:border-primary/20 h-full mobile-card">
                    {/* Profile Image - Mobile Optimized */}
                    <div className="text-center mb-4 sm:mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg sm:rounded-xl object-cover mx-auto transition-all duration-300 group-hover:scale-105 shadow-md"
                      />
                    </div>
                    
                    {/* Member Info - Mobile Optimized */}
                    <div className="text-center mb-4 sm:mb-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      
                      {/* Highlighted Designation - Mobile Friendly */}
                      <div className={`inline-block bg-gradient-to-r ${getDesignationColor(member.role)} text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-3 md:mb-4 shadow-md`}>
                        {member.role}
                      </div>
                      
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                        {member.bio}
                      </p>
                    </div>

                    {/* Contact & Social - Touch Friendly */}
                    <div className="text-center">
                      <div className="mb-3 sm:mb-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-600 hover:text-primary transition-colors duration-300 text-xs sm:text-sm break-all"
                        >
                          {member.email}
                        </a>
                      </div>
                      
                      <div className="flex justify-center space-x-2 sm:space-x-3">
                        {member.social?.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm touch-target"
                          >
                            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                          </a>
                        )}
                        {member.social?.twitter && (
                          <a
                            href={member.social.twitter}
                            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-sky-400 to-sky-500 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm touch-target"
                          >
                            <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                          </a>
                        )}
                        <a
                          href={`mailto:${member.email}`}
                          className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r ${getDesignationColor(member.role)} text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm touch-target`}
                        >
                          <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
        </div>
        
        <div className="container-mobile text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <Star className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-accent mx-auto mb-2 sm:mb-3 md:mb-4 animate-pulse" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-4">
              Ready to Join Our <span className="text-accent italic">Elite Team?</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 md:mb-12 font-medium leading-relaxed px-4">
              Become part of <span className="font-bold underline decoration-accent/50">MUJ's most impactful</span> consulting club and help us reach even 
              <span className="italic font-semibold text-accent"> greater heights</span> in making a difference.
            </p>
            
            {/* Feature Grid - Mobile Responsive */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 text-white/90">
              <div className="flex flex-col items-center p-2 sm:p-3 md:p-4">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-1 sm:mb-2 text-accent" />
                <span className="font-semibold text-xs sm:text-sm text-center">Collaborative Environment</span>
              </div>
              <div className="flex flex-col items-center p-2 sm:p-3 md:p-4">
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-1 sm:mb-2 text-accent" />
                <span className="font-semibold text-xs sm:text-sm text-center">Professional Growth</span>
              </div>
              <div className="flex flex-col items-center p-2 sm:p-3 md:p-4">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-1 sm:mb-2 text-accent" />
                <span className="font-semibold text-xs sm:text-sm text-center">Real Impact</span>
              </div>
              <div className="flex flex-col items-center p-2 sm:p-3 md:p-4">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-1 sm:mb-2 text-accent" />
                <span className="font-semibold text-xs sm:text-sm text-center">Excellence Culture</span>
              </div>
            </div>
            
            {/* CTA Buttons - Mobile Friendly */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <button className="bg-white text-primary px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl touch-target">
                View Open Positions
              </button>
              <button className="border-2 sm:border-3 border-white text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 touch-target">
                Send Your Application
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
