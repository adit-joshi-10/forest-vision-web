
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Linkedin, Twitter, Mail, Users, Award, Globe, Star, Briefcase, Target } from 'lucide-react';
import { teamMembers, teamMembersByDepartment } from '../data/teamMembers';

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const renderTeamSection = (title: string, members: any[], delay: number = 0) => (
    <div className={`mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${delay}s` }}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {members.map((member, index) => (
          <div
            key={member.name}
            className={`group relative ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: `${delay + index * 0.15}s` }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 group relative overflow-hidden themed-border-gradient">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-6">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-28 h-28 rounded-full object-cover mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-white text-xs font-bold transform group-hover:scale-125 transition-transform duration-300">
                      <Star className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-bold mb-1 text-lg">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4 font-medium">{member.department}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {member.bio}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise?.map((skill: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-3 py-2 rounded-full text-xs font-semibold border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-gray-100 hover:bg-primary text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-gray-100 hover:bg-accent text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.social?.email}`}
                    className="w-10 h-10 bg-gray-100 hover:bg-primary text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/lovable-uploads/477173a4-7825-4f0d-bf40-42e6bbcf3296.png')` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
        </div>
        
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
                Excellence in Consulting
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-8 animate-fade-in leading-tight">
              Meet Our <span className="bg-gradient-to-r from-accent via-white to-primary bg-clip-text text-transparent">Dream Team</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed animate-fade-in max-w-4xl mx-auto font-medium" style={{ animationDelay: '0.2s' }}>
              Passionate innovators, strategic thinkers, and change-makers dedicated to creating 
              <span className="font-bold text-accent"> meaningful impact</span> through collaborative excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <achievement.icon className="w-8 h-8 text-accent mb-2 mx-auto" />
                  <h3 className="font-bold text-sm mb-1">{achievement.title}</h3>
                  <p className="text-xs opacity-90">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 bg-gradient-to-r from-gray-800 via-primary to-accent bg-clip-text text-transparent">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building excellence through collaboration and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center animate-scale-in ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 themed-border-glow group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-poppins font-black mb-3 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  
                  <div className="text-gray-700 font-bold text-lg group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </div>

                  <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
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

      <section ref={sectionRef} className="py-24 bg-gradient-to-br from-white via-slate-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
          <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-accent to-primary"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {renderTeamSection('Leadership Team', teamMembersByDepartment.Leadership || [], 0)}
          {renderTeamSection('Operations & Finance', [...(teamMembersByDepartment.Operations || []), ...(teamMembersByDepartment.Finance || [])], 0.3)}
          {renderTeamSection('Consulting & Marketing', [...(teamMembersByDepartment.Consulting || []), ...(teamMembersByDepartment.Marketing || [])], 0.6)}
          {renderTeamSection('Administration', teamMembersByDepartment.Administration || [], 0.9)}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Star className="w-16 h-16 text-accent mx-auto mb-4 animate-pulse" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-8 leading-tight">
              Ready to Join Our <span className="text-accent italic">Elite Team?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 mb-12 font-medium leading-relaxed">
              Become part of <span className="font-bold underline decoration-accent/50">MUJ's most impactful</span> consulting club and help us reach even 
              <span className="italic font-semibold text-accent"> greater heights</span> in making a difference.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 text-white/90">
              <div className="flex flex-col items-center p-4">
                <Users className="w-8 h-8 mb-2 text-accent" />
                <span className="font-semibold">Collaborative Environment</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <Briefcase className="w-8 h-8 mb-2 text-accent" />
                <span className="font-semibold">Professional Growth</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <Target className="w-8 h-8 mb-2 text-accent" />
                <span className="font-semibold">Real Impact</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <Star className="w-8 h-8 mb-2 text-accent" />
                <span className="font-semibold">Excellence Culture</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl">
                View Open Positions
              </button>
              <button className="border-3 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
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
