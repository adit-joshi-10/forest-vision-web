
import React, { useEffect, useRef, useState } from 'react';
import { Heart, Users, Target, Globe } from 'lucide-react';

const Mission = () => {
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

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We lead with empathy and understanding, ensuring every action is driven by genuine care for our community.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Together we achieve more. We believe in the power of unity and collective action to create meaningful change.'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Every initiative is designed with measurable outcomes that create lasting positive change in people\'s lives.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We focus on long-term solutions that protect our environment and ensure a better future for generations.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To create positive, sustainable change in communities by connecting passionate individuals 
            with meaningful opportunities to serve, learn, and grow together.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`text-center p-8 rounded-2xl bg-gradient-subtle hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className={`mt-20 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="bg-gradient-forest text-white p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-6">
              Building Tomorrow, Today
            </h3>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              We envision a world where every community thrives through the collective action of 
              passionate individuals committed to creating positive change. Our work spans education, 
              environmental sustainability, social justice, and economic empowerment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
