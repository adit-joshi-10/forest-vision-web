
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Target, Award, Clock, Star, Milestone, Globe, Briefcase } from 'lucide-react';

const About = () => {
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

  const milestones = [
    {
      year: '2021',
      title: 'Foundation',
      description: 'Started as a small consulting group with passionate members dedicated to community impact',
      icon: Star,
      color: 'from-primary to-accent'
    },
    {
      year: '2022',
      title: 'First Major Project',
      description: 'Successfully completed our first large-scale community impact project',
      icon: Award,
      color: 'from-accent to-primary'
    },
    {
      year: '2023',
      title: 'Team Expansion',
      description: 'Grew significantly and established multiple departments for better service delivery',
      icon: Users,
      color: 'from-primary to-accent'
    },
    {
      year: '2024',
      title: 'Global Recognition',
      description: 'Received recognition for outstanding consulting work and community development',
      icon: Globe,
      color: 'from-accent to-primary'
    },
    {
      year: '2025',
      title: 'Excellence Era',
      description: 'Continuing to expand our impact and reach across multiple communities',
      icon: Milestone,
      color: 'from-primary to-accent'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with New Background Image */}
      <section className="pt-24 pb-16 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/739c137a-3f27-4e01-bcf3-b64feb215e58.png"
            alt="About Us Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              About <span className="text-accent">Us</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Learn about our journey, mission, and the passionate team working 
              to create positive change in communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Section - Enhanced with Milestone Theme */}
      <section ref={sectionRef} className="py-24 bg-gradient-to-br from-white via-green-50 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
              From humble beginnings to <span className="font-bold text-primary">extraordinary impact</span> - 
              charting our path of <span className="italic text-accent">growth and excellence</span>
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-32 h-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full"></div>
            </div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full hidden lg:block"></div>
            
            <div className="space-y-20">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative ${
                    index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:text-left'
                  } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 hidden lg:block">
                    <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform duration-300`}>
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full animate-pulse-slow"></div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'lg:mr-16' : 'lg:ml-16'}`}>
                    <div className="group">
                      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100/50">
                        <div className="flex items-center gap-4 mb-6 lg:hidden">
                          <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center`}>
                            <milestone.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className={`text-3xl font-poppins font-black bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                            {milestone.year}
                          </div>
                        </div>

                        <div className="hidden lg:block mb-6">
                          <div className={`text-4xl font-poppins font-black bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block`}>
                            {milestone.year}
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-poppins font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        
                        <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {milestone.description}
                        </p>

                        <div className={`mt-6 h-2 bg-gray-200 rounded-full overflow-hidden`}>
                          <div 
                            className={`h-full bg-gradient-to-r ${milestone.color} rounded-full transform origin-left transition-transform duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
                            style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">4 Years</h4>
              <p className="text-gray-600">Of Continuous Growth</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">100+</h4>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">500+</h4>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                CommunityCare was born from a simple belief: that every community has the potential 
                to thrive when people come together with shared purpose and dedication. Founded in 2021 
                by a group of passionate volunteers, we started with a single initiative to support 
                local education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                What began as weekend tutoring sessions has grown into a comprehensive platform 
                connecting volunteers, donors, and beneficiaries across multiple impact areas. 
                Today, we're proud to have touched over 500 lives through our various programs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="stats-card text-center">
                  <div className="text-2xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-gray-600">Years of Impact</div>
                </div>
                <div className="stats-card text-center">
                  <div className="text-2xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-gray-600">Active Programs</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d2a?auto=format&fit=crop&w=800&q=80"
                alt="Our team in action"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="mission-card">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create positive, sustainable change in communities by connecting passionate 
                individuals with meaningful opportunities to serve, learn, and grow together 
                while addressing critical social, educational, and environmental challenges.
              </p>
            </div>
            <div className="mission-card">
              <Award className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every community thrives through the collective action of 
                empowered individuals, where sustainable solutions address root causes, 
                and where everyone has access to opportunities for growth and prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
