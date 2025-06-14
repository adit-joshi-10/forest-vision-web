
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, BookOpen, Leaf, Users2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Initiatives = () => {
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

  const initiatives = [
    {
      icon: BookOpen,
      title: 'Education for All',
      description: 'Bridging the educational gap by providing resources, mentorship, and learning opportunities to underserved communities.',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80',
      impact: '200+ Students Supported',
      color: 'bg-blue-500'
    },
    {
      icon: Leaf,
      title: 'Green Communities',
      description: 'Promoting environmental sustainability through tree planting, waste management, and clean energy initiatives.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      impact: '1000+ Trees Planted',
      color: 'bg-green-500'
    },
    {
      icon: Users2,
      title: 'Skills Development',
      description: 'Empowering individuals with practical skills and vocational training to improve their livelihood opportunities.',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80',
      impact: '150+ Skills Trained',
      color: 'bg-purple-500'
    },
    {
      icon: Heart,
      title: 'Healthcare Access',
      description: 'Improving healthcare accessibility through mobile clinics, health camps, and awareness programs.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80',
      impact: '500+ Lives Touched',
      color: 'bg-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Our <span className="text-gradient">Initiatives</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the various ways we're making a difference in communities through 
            targeted programs and collaborative efforts.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.title}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className={`${initiative.color} p-3 rounded-full`}>
                    <initiative.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  {initiative.impact}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {initiative.description}
                </p>
                <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200">
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">
              Want to Make a Difference?
            </h3>
            <p className="text-gray-600 mb-6">
              Join us in our mission to create positive change. Every contribution, 
              big or small, helps us build stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/initiatives"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                View All Initiatives
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
