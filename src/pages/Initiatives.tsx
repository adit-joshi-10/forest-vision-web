
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Users, Target, Lightbulb, TrendingUp, CheckCircle, Trophy, Hexagon, Sparkles, Zap } from 'lucide-react';

const Initiatives = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  const initiatives = [
    {
      id: 1,
      title: 'Pro Bono Consulting',
      category: 'Core Service',
      description: 'We provide free strategic consulting services to NGOs, social enterprises, and community organizations to maximize their impact.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      status: 'Active',
      features: ['Strategic Planning', 'Market Research', 'Financial Modeling', 'Digital Transformation']
    },
    {
      id: 2,
      title: 'Community Workshops',
      category: 'Education',
      description: 'Interactive workshops teaching essential business skills to local entrepreneurs and community leaders.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      status: 'Expanding',
      features: ['Business Planning', 'Financial Literacy', 'Marketing Fundamentals', 'Leadership Skills']
    },
    {
      id: 3,
      title: 'Innovation Lab',
      category: 'Research',
      description: 'Collaborative space for developing innovative solutions to complex social and environmental challenges.',
      image: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?auto=format&fit=crop&w=800&q=80',
      status: 'Active',
      features: ['Design Thinking', 'Prototype Development', 'Impact Measurement', 'Scaling Strategies']
    },
    {
      id: 4,
      title: 'Mentorship Program',
      category: 'Development',
      description: 'Connecting experienced professionals with emerging social entrepreneurs and community changemakers.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
      status: 'Growing',
      features: ['1-on-1 Mentoring', 'Group Sessions', 'Industry Connections', 'Skill Development']
    },
    {
      id: 5,
      title: 'Impact Analytics',
      category: 'Technology',
      description: 'Data-driven insights and measurement frameworks to help organizations track and improve their social impact.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      status: 'Active',
      features: ['Data Collection', 'Impact Metrics', 'Dashboard Creation', 'Reporting Tools']
    },
    {
      id: 6,
      title: 'ONEIROS',
      category: 'Annual Event',
      description: 'The flagship annual event of Manipal University Jaipur featuring inspiring talk shows, engaging panel discussions, and exciting fun events that bring together students, industry experts, and thought leaders.',
      image: '/lovable-uploads/1a7d7645-586c-4145-b08f-fe8cdb5ae4f5.png',
      status: 'Annual Event',
      features: ['Talk Shows', 'Panel Discussions', 'Fun Events', 'Industry Networking'],
      isCollage: true,
      collageImages: [
        '/lovable-uploads/1a7d7645-586c-4145-b08f-fe8cdb5ae4f5.png',
        '/lovable-uploads/62b7b3ad-211e-4f47-93da-d20d4570b83b.png',
        '/lovable-uploads/ef0a016d-f3a0-4ad0-b365-4aa5a32e153c.png',
        '/lovable-uploads/46ec30cf-5b74-44f2-a624-5173f678924f.png',
        '/lovable-uploads/1e021c6e-c5a7-4ddd-88e2-6ad8625a9cdf.png'
      ]
    },
    {
      id: 7,
      title: 'Consultathon Competition',
      category: 'Competition',
      description: 'An annual consulting competition where students tackle real-world business challenges through strategic thinking and innovative solutions.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
      status: 'Annual Event',
      features: ['Case Studies', 'Team Competition', 'Industry Mentors', 'Prize Distribution']
    }
  ];

  const stats = [
    { number: '50+', label: 'Organizations Served', icon: Users },
    { number: '200+', label: 'Projects Completed', icon: Target },
    { number: '15+', label: 'Innovative Solutions', icon: Lightbulb },
    { number: '1000+', label: 'Lives Impacted', icon: TrendingUp }
  ];

  // Floating animation elements
  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Sparkles className="h-8 w-8 text-accent" />
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed opacity-30" style={{ animationDelay: '2s' }}>
        <Zap className="h-6 w-6 text-primary" />
      </div>
      <div className="absolute bottom-40 left-1/4 animate-float opacity-25" style={{ animationDelay: '4s' }}>
        <Trophy className="h-10 w-10 text-accent" />
      </div>
      <div className="absolute top-60 right-1/3 animate-float-delayed opacity-20" style={{ animationDelay: '1s' }}>
        <Target className="h-7 w-7 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-30" style={{ animationDelay: '3s' }}>
        <Lightbulb className="h-9 w-9 text-accent" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Image Collage */}
      <section className="pt-24 pb-16 bg-gradient-forest text-white relative overflow-hidden">
        {/* Image Collage Background */}
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-3 h-full opacity-20">
            <div className="relative overflow-hidden">
              <img
                src="/lovable-uploads/dcd76019-0f8f-4397-bd06-1bc9d6af920f.png"
                alt="Team collaboration"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/lovable-uploads/b47d1fb7-bed6-4528-9279-23cc846dc963.png"
                alt="Students working"
                className="w-full h-full object-cover animate-fade-in"
                style={{ animationDelay: '0.5s' }}
              />
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/lovable-uploads/a00875f4-c990-4a31-ac3b-dac0f91e1600.png"
                alt="Consulting session"
                className="w-full h-full object-cover animate-fade-in"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-forest/80"></div>
        </div>

        <div className="floating-shapes">
          <div className="floating-shape animate-float"></div>
          <div className="floating-shape animate-float-delayed" style={{ animationDelay: '2s' }}></div>
          <div className="floating-shape animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 animate-fade-in tracking-tight">
              Our <span className="text-accent animate-pulse-slow bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">Initiatives</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-fade-in font-medium tracking-wide" style={{ animationDelay: '0.2s' }}>
              Driving positive change through strategic consulting, innovation, and community empowerment programs.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics with Enhanced Animations */}
      <section ref={statsRef} className="py-16 bg-white relative overflow-hidden">
        <FloatingElements />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transform transition-all duration-700 ${
                  isStatsVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 relative overflow-hidden group">
                  <stat.icon className="h-8 w-8 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </div>
                <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2 relative">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                  {isStatsVisible && (
                    <div className="absolute -top-2 -right-2">
                      <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                    </div>
                  )}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                
                {/* Animated progress bar */}
                <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transform origin-left transition-transform duration-1000 ${
                      isStatsVisible ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Grid with Enhanced Animations */}
      <section ref={sectionRef} className="py-20 bg-gradient-subtle relative overflow-hidden">
        <FloatingElements />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header with Enhanced Typography */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-gray-800 via-primary to-accent bg-clip-text text-transparent font-extrabold">
                Our
              </span>{' '}
              <span className="text-primary font-black italic transform inline-block hover:rotate-2 transition-transform duration-300">
                Initiatives
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Discover the various ways we're making a difference in communities through 
              <span className="text-primary font-semibold"> targeted programs</span> and 
              <span className="text-accent font-semibold"> collaborative efforts</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={initiative.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 group relative ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-64 overflow-hidden">
                  {initiative.isCollage ? (
                    // ONEIROS Collage - Enhanced layout with all 5 images
                    <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-1 p-1">
                      {/* Main large image (speaker at podium) */}
                      <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg">
                        <img
                          src={initiative.collageImages[0]}
                          alt="ONEIROS speaker"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Audience image */}
                      <div className="col-span-2 relative overflow-hidden rounded-lg">
                        <img
                          src={initiative.collageImages[1]}
                          alt="ONEIROS audience"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                          style={{ animationDelay: '0.1s' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Stand-up performer */}
                      <div className="col-span-1 relative overflow-hidden rounded-lg">
                        <img
                          src={initiative.collageImages[2]}
                          alt="ONEIROS performer"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                          style={{ animationDelay: '0.2s' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Auditorium view from back */}
                      <div className="col-span-1 relative overflow-hidden rounded-lg">
                        <img
                          src={initiative.collageImages[3]}
                          alt="ONEIROS auditorium"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                          style={{ animationDelay: '0.3s' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Celebration/crowd shot */}
                      <div className="col-span-2 relative overflow-hidden rounded-lg">
                        <img
                          src={initiative.collageImages[4]}
                          alt="ONEIROS celebration"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                          style={{ animationDelay: '0.4s' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  ) : (
                    // Regular single image
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                  )}
                  <div className="absolute top-4 left-4 animate-fade-in">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                      {initiative.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow-lg transform group-hover:scale-105 transition-transform duration-300 ${
                      initiative.status === 'Active' ? 'bg-green-500 text-white' :
                      initiative.status === 'Growing' ? 'bg-blue-500 text-white' :
                      initiative.status === 'Annual Event' ? 'bg-orange-500 text-white' :
                      'bg-accent text-white'
                    }`}>
                      {initiative.status}
                    </span>
                  </div>
                  
                  {/* Floating sparkles on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="absolute top-8 right-8 h-4 w-4 text-white animate-pulse" />
                    <Sparkles className="absolute bottom-8 left-8 h-3 w-3 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
                
                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
                    <span className="bg-gradient-to-r from-gray-800 to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent">
                      {initiative.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 font-medium text-base">
                    {initiative.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2 tracking-wide uppercase">
                      <Zap className="h-4 w-4 text-primary" />
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {initiative.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 transform hover:scale-105 transition-transform duration-200 font-medium">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enhanced logo-inspired design element */}
                  <div className="flex items-center justify-center pt-4 border-t border-gray-100">
                    <div className="flex space-x-2">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Hexagon 
                          key={i}
                          className={`h-6 w-6 transition-all duration-500 group-hover:scale-110 ${
                            i === 2 ? 'text-primary animate-pulse-slow' :
                            i === 1 || i === 3 ? 'text-primary/60' :
                            'text-primary/30'
                          }`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animations */}
      <section className="py-20 bg-white relative overflow-hidden">
        <FloatingElements />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in tracking-tight">
              Ready to Make an <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-black animate-pulse-slow">Impact</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in font-medium leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Join our initiatives and help create meaningful change in communities worldwide. 
              Together, we can build a better future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-glow relative overflow-hidden group text-lg">
                <span className="relative z-10">Get Involved</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden group text-lg">
                <span className="relative z-10">Contact Us</span>
                <ArrowRight className="inline-block ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Initiatives;
