
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Linkedin, Twitter, Mail, Users, Award, Globe } from 'lucide-react';

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

  const leadership = [
    {
      name: 'Sarah Johnson',
      role: 'Executive Director',
      department: 'Leadership',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c5c0?auto=format&fit=crop&w=400&q=80',
      bio: 'Strategic leader with 8+ years in nonprofit consulting and community development. MBA from Stanford.',
      expertise: ['Strategic Planning', 'Impact Measurement', 'Organizational Development'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@communitycare.org'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Director of Operations',
      department: 'Leadership',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      bio: 'Operations expert with background in consulting and project management. Passionate about sustainable development.',
      expertise: ['Project Management', 'Process Optimization', 'Team Leadership'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@communitycare.org'
      }
    }
  ];

  const consultants = [
    {
      name: 'Dr. Priya Patel',
      role: 'Senior Consultant',
      department: 'Consulting',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
      bio: 'Healthcare policy expert with 10+ years experience in public health consulting and community health programs.',
      expertise: ['Healthcare Strategy', 'Policy Analysis', 'Community Health'],
      social: {
        linkedin: '#',
        email: 'priya@communitycare.org'
      }
    },
    {
      name: 'James Williams',
      role: 'Senior Consultant',
      department: 'Consulting',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Financial strategist specializing in sustainable finance and impact investing for social enterprises.',
      expertise: ['Financial Planning', 'Impact Investing', 'Sustainable Finance'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'james@communitycare.org'
      }
    },
    {
      name: 'Maria Rodriguez',
      role: 'Strategy Consultant',
      department: 'Consulting',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'Digital transformation specialist helping nonprofits leverage technology for greater impact.',
      expertise: ['Digital Strategy', 'Technology Implementation', 'Change Management'],
      social: {
        linkedin: '#',
        email: 'maria@communitycare.org'
      }
    },
    {
      name: 'David Kim',
      role: 'Research Analyst',
      department: 'Consulting',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80',
      bio: 'Data scientist and researcher focused on impact measurement and evaluation methodologies.',
      expertise: ['Data Analysis', 'Impact Evaluation', 'Research Methods'],
      social: {
        linkedin: '#',
        email: 'david@communitycare.org'
      }
    }
  ];

  const associates = [
    {
      name: 'Emily Zhang',
      role: 'Junior Consultant',
      department: 'Associates',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      bio: 'Recent graduate with passion for environmental sustainability and community engagement.',
      expertise: ['Environmental Policy', 'Community Engagement', 'Project Coordination'],
      social: {
        linkedin: '#',
        email: 'emily@communitycare.org'
      }
    },
    {
      name: 'Alex Thompson',
      role: 'Program Coordinator',
      department: 'Associates',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      bio: 'Dedicated to youth development and education initiatives in underserved communities.',
      expertise: ['Youth Development', 'Education Programs', 'Community Outreach'],
      social: {
        linkedin: '#',
        email: 'alex@communitycare.org'
      }
    }
  ];

  const stats = [
    { icon: Users, number: '25+', label: 'Team Members' },
    { icon: Award, number: '150+', label: 'Projects Completed' },
    { icon: Globe, number: '15+', label: 'Countries Reached' }
  ];

  const renderTeamSection = (title: string, members: any[], delay: number = 0) => (
    <div className={`mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${delay}s` }}>
      <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-12 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div
            key={member.name}
            className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: `${delay + index * 0.1}s` }}
          >
            <div className="text-center mb-6">
              <div className="relative inline-block mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-200">
                {member.name}
              </h3>
              <p className="text-primary font-semibold mb-1">{member.role}</p>
              <p className="text-sm text-gray-500 mb-4">{member.department}</p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {member.bio}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-3">Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              <a
                href={`mailto:${member.social.email}`}
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-forest text-white relative overflow-hidden">
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 animate-fade-in">
              Meet Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Passionate professionals dedicated to creating meaningful change through strategic consulting and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center animate-scale-in ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section ref={sectionRef} className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          {renderTeamSection('Leadership Team', leadership, 0)}
          {renderTeamSection('Senior Consultants', consultants, 0.3)}
          {renderTeamSection('Associates & Coordinators', associates, 0.6)}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for passionate individuals who want to make a difference. 
              Explore opportunities to grow your career while creating positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-200">
                Send Your CV
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
