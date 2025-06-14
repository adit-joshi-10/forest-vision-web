import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Linkedin, Twitter, Mail, Users, Award, Globe, Star, Briefcase, Target, Crown, Cog, Calculator, TrendingUp } from 'lucide-react';
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

  const getDepartmentIcon = (departmentName: string) => {
    switch (departmentName) {
      case 'Leadership':
        return Crown;
      case 'Operations':
        return Cog;
      case 'Finance':
        return Calculator;
      case 'Consulting':
        return TrendingUp;
      case 'Marketing':
        return Star;
      default:
        return Users;
    }
  };

  const getDepartmentColor = (departmentName: string) => {
    switch (departmentName) {
      case 'Leadership':
        return 'from-purple-500 to-indigo-600';
      case 'Operations':
        return 'from-blue-500 to-cyan-600';
      case 'Finance':
        return 'from-green-500 to-emerald-600';
      case 'Consulting':
        return 'from-orange-500 to-red-600';
      case 'Marketing':
        return 'from-pink-500 to-rose-600';
      default:
        return 'from-primary to-accent';
    }
  };

  const renderTeamSection = (title: string, members: any[], delay: number = 0, description: string = '') => {
    const DepartmentIcon = getDepartmentIcon(title);
    const colorClasses = getDepartmentColor(title);
    
    return (
      <div className={`mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${delay}s` }}>
        {/* Department Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorClasses} rounded-xl shadow-lg`}>
              <DepartmentIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-poppins font-black mb-4 bg-gradient-to-r from-gray-800 via-primary to-accent bg-clip-text text-transparent">
            {title}
          </h2>
          
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4 font-medium">
              {description}
            </p>
          )}
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          
          <div className="mt-4 inline-block bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg border border-gray-100">
            <span className="text-lg font-bold text-gray-800">{members.length}</span>
            <span className="text-gray-600 ml-1 font-medium">
              {members.length === 1 ? 'Member' : 'Members'}
            </span>
          </div>
        </div>
        
        {/* Horizontal Team Member Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {members.map((member, index) => (
            <div
              key={member.name}
              className={`group relative w-80 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${delay + index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group relative overflow-hidden border border-gray-100 hover:border-primary/20">
                {/* Decorative Elements */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${colorClasses} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-700`}></div>
                
                {/* Profile Section */}
                <div className="text-center mb-6 relative z-10">
                  <div className="relative inline-block mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto transition-all duration-500 group-hover:scale-110 shadow-lg"
                    />
                    <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${colorClasses} text-white px-3 py-1 rounded-full text-xs font-bold shadow-md`}>
                      {member.department}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-poppins font-black text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-bold mb-3 text-base tracking-wide">{member.role}</p>
                </div>

                {/* Bio Section */}
                <div className="mb-4 relative z-10">
                  <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise Section */}
                <div className="mb-4 relative z-10">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise?.slice(0, 3).map((skill: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold border hover:border-primary/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 relative z-10">
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 bg-gradient-to-r from-sky-400 to-sky-500 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.social?.email}`}
                    className={`w-8 h-8 bg-gradient-to-r ${colorClasses} text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
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

      {/* Stats Section */}
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
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
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

      {/* Team Sections */}
      <section ref={sectionRef} className="py-24 bg-gradient-to-br from-white via-slate-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
          <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-accent to-primary"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          {renderTeamSection(
            'Leadership', 
            teamMembersByDepartment.Leadership || [], 
            0,
            'Visionary leaders driving strategic direction and organizational excellence with unwavering commitment to our mission.'
          )}
          
          {renderTeamSection(
            'Operations', 
            teamMembersByDepartment.Operations || [], 
            0.2,
            'Operational excellence specialists ensuring seamless project execution and organizational efficiency.'
          )}
          
          {renderTeamSection(
            'Finance', 
            teamMembersByDepartment.Finance || [], 
            0.4,
            'Financial strategists managing resources and ensuring sustainable growth through transparent financial stewardship.'
          )}
          
          {renderTeamSection(
            'Consulting', 
            teamMembersByDepartment.Consulting || [], 
            0.6,
            'Expert consultants delivering innovative solutions and strategic insights to drive meaningful impact.'
          )}
          
          {renderTeamSection(
            'Marketing', 
            teamMembersByDepartment.Marketing || [], 
            0.8,
            'Creative marketing professionals building brand awareness and driving engagement through innovative campaigns.'
          )}
          
          {renderTeamSection(
            'Administration', 
            teamMembersByDepartment.Administration || [], 
            1.0,
            'Administrative excellence ensuring smooth operations and effective communication across all organizational activities.'
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
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
