
import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Award, Building } from 'lucide-react';

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
      number: "50+",
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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Our <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how 180 DC MUJ is making a difference in the consulting world and creating meaningful impact across communities.
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
                  <div className={`text-4xl md:text-5xl font-poppins font-bold mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-700 font-semibold text-lg group-hover:text-gray-900 transition-colors duration-300">
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
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
              Join the Movement
            </h3>
            <p className="text-lg opacity-95 mb-6">
              Be part of MUJ's most impactful consulting club and help us reach even greater heights in making a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90">
              <div>🚀 Fast-track your career</div>
              <div>🤝 Network with industry leaders</div>
              <div>💡 Solve real-world problems</div>
              <div>🌟 Make meaningful impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
