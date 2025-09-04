import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Linkedin, Mail, Users, Award, Globe, Star, Briefcase, Target, Crown, MessageSquare, TrendingUp, Search, DollarSign, Share2, Calendar, Code2 } from 'lucide-react';
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
    { icon: Award, number: '20+', label: 'Projects Completed' },
    { icon: Globe, number: '15+', label: 'Countries Reached' },
    { icon: Star, number: '98%', label: 'Client Satisfaction' }
  ];

  const achievements = [
    { icon: Briefcase, title: 'Professional Excellence', description: 'Delivering top-tier consulting solutions' },
    { icon: Target, title: 'Strategic Impact', description: 'Creating meaningful change in communities' },
    { icon: Users, title: 'Collaborative Culture', description: 'Building strong partnerships and networks' }
  ];

  const getCardGradient = (index: number) => {
    const gradients = [
      'from-purple-400 via-pink-400 to-red-400',
      'from-blue-400 via-cyan-400 to-teal-400',
      'from-green-400 via-emerald-400 to-cyan-400',
      'from-orange-400 via-yellow-400 to-red-400',
      'from-indigo-400 via-purple-400 to-pink-400',
      'from-teal-400 via-green-400 to-blue-400'
    ];
    return gradients[index % gradients.length];
  };

  // Animated Chess Background Component
  const ChessBackground = () => {
    return (
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        {/* Chess board pattern */}
        <div className="grid grid-cols-8 h-full w-full animate-pulse" style={{ animationDuration: '4s' }}>
          {Array.from({ length: 64 }).map((_, index) => (
            <div
              key={index}
              className={`${
                (Math.floor(index / 8) + index) % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'
              } transition-all duration-1000`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </div>
        
        {/* Floating chess pieces */}
        <div className="absolute inset-0">
          {/* King */}
          <div className="absolute top-10 left-16 w-8 h-8 text-primary/30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
            ♔
          </div>
          {/* Queen */}
          <div className="absolute top-32 right-20 w-8 h-8 text-accent/30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
            ♕
          </div>
          {/* Bishop */}
          <div className="absolute bottom-40 left-1/4 w-8 h-8 text-purple-500/30 animate-bounce" style={{ animationDelay: '3s', animationDuration: '5s' }}>
            ♗
          </div>
          {/* Knight */}
          <div className="absolute bottom-20 right-1/3 w-8 h-8 text-primary/30 animate-bounce" style={{ animationDelay: '4s', animationDuration: '3.5s' }}>
            ♘
          </div>
          {/* Rook */}
          <div className="absolute top-1/2 left-10 w-8 h-8 text-accent/30 animate-bounce" style={{ animationDelay: '5s', animationDuration: '4.5s' }}>
            ♖
          </div>
          {/* Pawn */}
          <div className="absolute top-2/3 right-16 w-6 h-6 text-primary/30 animate-bounce" style={{ animationDelay: '6s', animationDuration: '3s' }}>
            ♙
          </div>
        </div>
        
        {/* Moving chess pattern overlay */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full opacity-10 animate-pulse"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              animationDuration: '8s'
            }}
          />
        </div>
      </div>
    );
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

      {/* Leadership Team Section with Chess Background */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-white via-slate-50 to-green-50 relative overflow-hidden">
        {/* Animated Chess Background */}
        <ChessBackground />
        
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
            
            {/* Team Member Grid - Colorful Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
              {reorderedTeamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`group ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Colorful Card with Gradient Background */}
                  <div className={`relative bg-gradient-to-br ${getCardGradient(index)} rounded-xl sm:rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full mobile-card group-hover:scale-105`}>
                    {/* Inner white card */}
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 h-full relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="w-full h-full" style={{ 
                          backgroundImage: 'radial-gradient(circle at 20px 20px, #10B981 2px, transparent 0)', 
                          backgroundSize: '40px 40px' 
                        }}></div>
                      </div>
                      
                      {/* Profile Image - Mobile Optimized - REMOVED FLICKERY EFFECTS */}
                      <div className="text-center mb-4 sm:mb-6 relative z-10">
                        <div className="relative inline-block">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover mx-auto transition-transform duration-300 group-hover:scale-110 shadow-lg border-4 border-white"
                          />
                        </div>
                      </div>
                      
                      {/* Member Info - Mobile Optimized */}
                      <div className="text-center mb-4 sm:mb-6 relative z-10">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                          {member.name}
                        </h3>
                        
                        {/* Highlighted Designation with matching gradient */}
                        <div className={`inline-block bg-gradient-to-r ${getCardGradient(index)} text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-3 md:mb-4 shadow-lg transform group-hover:scale-105 transition-all duration-300`}>
                          {member.role}
                        </div>
                        
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                          {member.bio}
                        </p>
                      </div>

                      {/* Contact & Social - Enhanced with colorful icons */}
                      <div className="text-center relative z-10">
                        <div className="mb-3 sm:mb-4">
                          <a
                            href={`mailto:${member.email}`}
                            className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-xs sm:text-sm break-all font-medium"
                          >
                            {member.email}
                          </a>
                        </div>
                        
                        {/* Social Icons - LinkedIn and Gmail only */}
                        <div className="flex justify-center space-x-3 sm:space-x-4">
                          {/* LinkedIn Icon */}
                          <a
                            href={member.social?.linkedin || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/icon relative"
                          >
                            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-xl touch-target relative overflow-hidden">
                              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                              {/* Animated background */}
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 rounded-full"></div>
                            </div>
                          </a>
                          
                          {/* Gmail Icon */}
                          <a
                            href={`mailto:${member.email}`}
                            className="group/icon relative"
                          >
                            <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-r ${getCardGradient(index)} text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-xl touch-target relative overflow-hidden`}>
                              <Mail className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                              {/* Animated background */}
                              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 rounded-full"></div>
                            </div>
                          </a>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teams & Departments Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-mobile relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="flex justify-center items-center mb-3 sm:mb-4 md:mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-primary to-accent rounded-lg sm:rounded-xl shadow-lg">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-black mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-gray-800 via-primary to-accent bg-clip-text text-transparent px-4">
              Our Specialized Teams
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-3 sm:mb-4 md:mb-6 font-medium leading-relaxed px-4">
              Dedicated departments working in synergy to deliver exceptional consulting solutions and drive organizational success.
            </p>
            
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          {/* Teams Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Acquisitions and Outreach Team",
                icon: Target,
                description: "Building strategic partnerships and expanding our network to create meaningful connections with clients and stakeholders.",
                gradient: "from-purple-400 via-pink-400 to-red-400",
                bgColor: "from-purple-500 to-pink-600"
              },
              {
                name: "Marketing Team",
                icon: TrendingUp,
                description: "Crafting compelling brand narratives and driving engagement through innovative digital marketing strategies.",
                gradient: "from-blue-400 via-cyan-400 to-teal-400",
                bgColor: "from-blue-500 to-cyan-600"
              },
              {
                name: "Research and Development Team",
                icon: Search,
                description: "Conducting in-depth analysis and developing innovative solutions to tackle complex business challenges.",
                gradient: "from-green-400 via-emerald-400 to-cyan-400",
                bgColor: "from-green-500 to-emerald-600"
              },
              {
                name: "Finance Team",
                icon: DollarSign,
                description: "Managing financial operations and ensuring sustainable growth through strategic financial planning and analysis.",
                gradient: "from-orange-400 via-yellow-400 to-red-400",
                bgColor: "from-orange-500 to-yellow-600"
              },
              {
                name: "Social Media Team",
                icon: Share2,
                description: "Building our digital presence and fostering community engagement across all social media platforms.",
                gradient: "from-indigo-400 via-purple-400 to-pink-400",
                bgColor: "from-indigo-500 to-purple-600"
              },
              {
                name: "Events and Operations Team",
                icon: Calendar,
                description: "Orchestrating seamless events and optimizing operational efficiency to support all organizational activities.",
                gradient: "from-teal-400 via-green-400 to-blue-400",
                bgColor: "from-teal-500 to-green-600"
              },
              {
                name: "Tech Team",
                icon: Code2,
                description: "Developing innovative digital solutions and maintaining our technological infrastructure to enhance organizational capabilities.",
                gradient: "from-pink-400 via-purple-400 to-indigo-400",
                bgColor: "from-pink-500 to-purple-600"
              }
            ].map((team, index) => (
              <div
                key={team.name}
                className={`group ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Colorful Card with Gradient Background */}
                <div className={`relative bg-gradient-to-br ${team.gradient} rounded-xl sm:rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full mobile-card group-hover:scale-105`}>
                  {/* Inner white card */}
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 h-full relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="w-full h-full" style={{ 
                        backgroundImage: 'radial-gradient(circle at 20px 20px, #10B981 2px, transparent 0)', 
                        backgroundSize: '40px 40px' 
                      }}></div>
                    </div>
                    
                    {/* Team Icon */}
                    <div className="text-center mb-4 sm:mb-6 relative z-10">
                      <div className="relative inline-block">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r ${team.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110 shadow-lg transform group-hover:rotate-12`}>
                          <team.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Team Info */}
                    <div className="text-center mb-4 sm:mb-6 relative z-10">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                        {team.name}
                      </h3>
                      
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {team.description}
                      </p>
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="text-center relative z-10">
                      <div className={`w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r ${team.gradient} mx-auto rounded-full transform group-hover:scale-110 transition-all duration-300`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
