import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Award, Building, BarChart3, PieChart, FileText, Handshake, Target, Lightbulb } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      number: "20+",
      label: "Projects Delivered",
      color: "text-primary",
      bgColor: "bg-primary/10",
      delay: "0s"
    },
    {
      icon: Building,
      number: "25+",
      label: "NGO Partners",
      color: "text-accent",
      bgColor: "bg-accent/10",
      delay: "0.1s"
    },
    {
      icon: Users,
      number: "500+",
      label: "Lives Impacted",
      color: "text-primary",
      bgColor: "bg-primary/10",
      delay: "0.2s"
    },
    {
      icon: Award,
      number: "100+",
      label: "Student Consultants",
      color: "text-accent",
      bgColor: "bg-accent/10",
      delay: "0.3s"
    }
  ];

  const consultingIcons = [
    { Icon: BarChart3, delay: '0s', position: 'top-20 left-10', color: 'text-primary/20' },
    { Icon: PieChart, delay: '2s', position: 'top-32 right-16', color: 'text-accent/20' },
    { Icon: FileText, delay: '4s', position: 'bottom-40 left-20', color: 'text-primary/15' },
    { Icon: Handshake, delay: '1s', position: 'top-40 left-1/3', color: 'text-accent/15' },
    { Icon: Target, delay: '3s', position: 'bottom-32 right-20', color: 'text-primary/20' },
    { Icon: Lightbulb, delay: '5s', position: 'top-16 right-1/3', color: 'text-accent/20' },
    { Icon: TrendingUp, delay: '2.5s', position: 'bottom-20 left-1/2', color: 'text-primary/15' },
    { Icon: Users, delay: '4.5s', position: 'top-60 right-8', color: 'text-accent/15' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
      {/* Consulting Background Animation */}
      <div className="absolute inset-0 opacity-100">
        {/* Floating Consulting Icons */}
        {consultingIcons.map((item, index) => {
          const IconComponent = item.Icon;
          return (
            <div
              key={index}
              className={`absolute ${item.position} animate-float-delayed ${item.color}`}
              style={{ 
                animationDelay: item.delay,
                animationDuration: `${8 + (index % 3) * 2}s`
              }}
            >
              <IconComponent className="w-8 h-8 md:w-12 md:h-12" />
            </div>
          );
        })}

        {/* Animated Lines/Connections */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M 100 200 Q 300 100 500 200 T 900 200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse-slow"
          />
          <path
            d="M 200 400 Q 400 300 600 400 T 1000 400"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse-slow"
            style={{ animationDelay: '1s' }}
          />
        </svg>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full animate-pulse-slow opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full animate-pulse-slow opacity-5" style={{ animationDelay: '3s' }}></div>
        
        {/* Consulting Process Flow */}
        <div className="absolute top-1/4 left-8 opacity-10">
          <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <div className="w-16 h-0.5 bg-primary/30"></div>
            <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <div className="w-16 h-0.5 bg-accent/30"></div>
            <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 bg-gradient-to-r from-gray-800 via-primary to-accent bg-clip-text text-transparent leading-tight">
            Our <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-slow">Impact</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            See how <span className="font-bold text-primary">180 DC MUJ</span> is making a difference in the consulting world and creating 
            <span className="italic font-semibold text-accent"> meaningful impact</span> across communities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: stat.delay }}
              >
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  
                  {/* Number */}
                  <div className={`text-4xl md:text-5xl lg:text-6xl font-poppins font-black mb-3 bg-gradient-to-br ${stat.color === 'text-primary' ? 'from-primary to-primary/70' : 'from-accent to-accent/70'} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 drop-shadow-sm`}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-700 font-bold text-lg md:text-xl group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                    {stat.label}
                  </div>

                  {/* Animated Bar */}
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transform origin-left transition-transform duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
                      style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Impact Message */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Gradient overlay for text enhancement */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold mb-4 text-shadow-lg">
                Join the <span className="italic">Movement</span>
              </h3>
              <p className="text-lg md:text-xl opacity-95 mb-6 font-medium leading-relaxed">
                Be part of <span className="font-bold underline decoration-white/50">MUJ's most impactful</span> consulting club and help us reach even 
                <span className="italic font-semibold"> greater heights</span> in making a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base opacity-90 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚀</span> 
                  <span className="font-semibold">Fast-track your career</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🤝</span> 
                  <span className="font-semibold">Network with industry leaders</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">💡</span> 
                  <span className="font-semibold">Solve real-world problems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌟</span> 
                  <span className="font-semibold">Make meaningful impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
