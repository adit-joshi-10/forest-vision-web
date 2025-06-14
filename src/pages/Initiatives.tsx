
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Users, Target, Lightbulb, TrendingUp, CheckCircle, Trophy, Hexagon, Sparkles, Zap } from 'lucide-react';

const Initiatives = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    }
  ];

  const stats = [
    { number: '50+', label: 'Organizations Served', icon: Users },
    { number: '200+', label: 'Projects Completed', icon: Target },
    { number: '15+', label: 'Innovative Solutions', icon: Lightbulb },
    { number: '1000+', label: 'Lives Impacted', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full opacity-20">
            <div className="relative overflow-hidden hidden lg:block">
              <img
                src="/lovable-uploads/dcd76019-0f8f-4397-bd06-1bc9d6af920f.png"
                alt="Team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/lovable-uploads/b47d1fb7-bed6-4528-9279-23cc846dc963.png"
                alt="Students working"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden hidden sm:block">
              <img
                src="/lovable-uploads/a00875f4-c990-4a31-ac3b-dac0f91e1600.png"
                alt="Consulting session"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/80"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
              Our <span className="text-orange-300">Initiatives</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed font-medium px-2">
              Driving positive change through strategic consulting, innovation, and community empowerment programs.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section - Mobile Optimized */}
      <section ref={statsRef} className="py-8 sm:py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transform transition-all duration-700 ${
                  isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4 relative overflow-hidden group">
                  <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 relative">
                  <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
                
                <div className="mt-2 sm:mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-primary to-orange-500 rounded-full transform origin-left transition-transform duration-1000 ${
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

      {/* Initiatives Grid - Mobile Optimized */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-gray-800 via-primary to-orange-500 bg-clip-text text-transparent font-extrabold">
                Our
              </span>{' '}
              <span className="text-primary font-black italic">
                Initiatives
              </span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-4 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium px-4">
              Discover the various ways we're making a difference in communities through 
              <span className="text-primary font-semibold"> targeted programs</span> and 
              <span className="text-orange-500 font-semibold"> collaborative efforts</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={initiative.id}
                className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-1 sm:hover:-translate-y-3 group relative ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  {initiative.isCollage ? (
                    <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-0.5 sm:gap-1 p-0.5 sm:p-1">
                      <div className="col-span-2 row-span-2 relative overflow-hidden rounded-sm sm:rounded-lg">
                        <img
                          src={initiative.collageImages![0]}
                          alt="ONEIROS speaker"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="col-span-2 relative overflow-hidden rounded-sm sm:rounded-lg">
                        <img
                          src={initiative.collageImages![1]}
                          alt="ONEIROS audience"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="col-span-1 relative overflow-hidden rounded-sm sm:rounded-lg">
                        <img
                          src={initiative.collageImages![2]}
                          alt="ONEIROS performer"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="col-span-1 relative overflow-hidden rounded-sm sm:rounded-lg">
                        <img
                          src={initiative.collageImages![3]}
                          alt="ONEIROS auditorium"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="col-span-2 relative overflow-hidden rounded-sm sm:rounded-lg">
                        <img
                          src={initiative.collageImages![4]}
                          alt="ONEIROS celebration"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      {initiative.category}
                    </span>
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg ${
                      initiative.status === 'Active' ? 'bg-green-500 text-white' :
                      initiative.status === 'Growing' ? 'bg-blue-500 text-white' :
                      initiative.status === 'Annual Event' ? 'bg-orange-500 text-white' :
                      'bg-orange-500 text-white'
                    }`}>
                      {initiative.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 md:p-8 relative z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight leading-tight">
                    <span className="bg-gradient-to-r from-gray-800 to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-orange-500">
                      {initiative.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base">
                    {initiative.description}
                  </p>
                  
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2 tracking-wide uppercase">
                      <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                      {initiative.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-600 font-medium">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-1 sm:mr-2 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center pt-3 sm:pt-4 border-t border-gray-100">
                    <div className="flex space-x-1 sm:space-x-2">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Hexagon 
                          key={i}
                          className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-all duration-500 group-hover:scale-110 ${
                            i === 2 ? 'text-primary' :
                            i === 1 || i === 3 ? 'text-primary/60' :
                            'text-primary/30'
                          }`}
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

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-tight leading-tight">
              Ready to Make an <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent font-black">Impact</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 font-medium leading-relaxed px-4">
              Join our initiatives and help create meaningful change in communities worldwide. 
              Together, we can build a better future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg">
                Get Involved
              </button>
              <button className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 text-base sm:text-lg group">
                Contact Us
                <ArrowRight className="inline-block ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
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
