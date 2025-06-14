
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Users, Target, Lightbulb, TrendingUp, CheckCircle, Trophy, Hexagon } from 'lucide-react';

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
      image: '/lovable-uploads/46ac63dd-0808-4c50-85bd-963a6abb16a7.png',
      status: 'Annual Event',
      features: ['Talk Shows', 'Panel Discussions', 'Fun Events', 'Industry Networking'],
      isCollage: true,
      collageImages: [
        '/lovable-uploads/46ac63dd-0808-4c50-85bd-963a6abb16a7.png',
        '/lovable-uploads/a6cb54d0-83f0-4307-9c4a-ca378383adcc.png',
        '/lovable-uploads/060d7ad8-e053-4565-86f3-18e11a91c53c.png',
        '/lovable-uploads/c897dcc9-8b8f-4f12-af22-aead71af7bcd.png',
        '/lovable-uploads/9bbf9f37-51c8-4375-bc77-3dd200831115.png'
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
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/lovable-uploads/b47d1fb7-bed6-4528-9279-23cc846dc963.png"
                alt="Students working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/lovable-uploads/a00875f4-c990-4a31-ac3b-dac0f91e1600.png"
                alt="Consulting session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-forest/80"></div>
        </div>

        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 animate-fade-in">
              Our <span className="text-accent">Initiatives</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Driving positive change through strategic consulting, innovation, and community empowerment programs.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* Initiatives Grid */}
      <section ref={sectionRef} className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={initiative.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  {initiative.isCollage ? (
                    // ONEIROS Collage - Modified for 5 images
                    <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-1">
                      {initiative.collageImages?.slice(0, 5).map((img, idx) => (
                        <div 
                          key={idx} 
                          className={`relative overflow-hidden ${
                            idx === 0 ? 'col-span-2' : // First image takes 2 columns
                            idx === 4 ? 'col-span-3' : '' // Last image takes full width
                          }`}
                        >
                          <img
                            src={img}
                            alt={`ONEIROS event ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Regular single image
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {initiative.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      initiative.status === 'Active' ? 'bg-green-500 text-white' :
                      initiative.status === 'Growing' ? 'bg-blue-500 text-white' :
                      initiative.status === 'Annual Event' ? 'bg-orange-500 text-white' :
                      'bg-accent text-white'
                    }`}>
                      {initiative.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-poppins font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-200">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {initiative.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {initiative.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Logo-inspired design element */}
                  <div className="flex items-center justify-center pt-4 border-t border-gray-100">
                    <div className="flex space-x-2">
                      <Hexagon className="h-6 w-6 text-primary/30" />
                      <Hexagon className="h-6 w-6 text-primary/60" />
                      <Hexagon className="h-6 w-6 text-primary" />
                      <Hexagon className="h-6 w-6 text-primary/60" />
                      <Hexagon className="h-6 w-6 text-primary/30" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-6">
              Ready to Make an <span className="text-gradient">Impact</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our initiatives and help create meaningful change in communities worldwide. 
              Together, we can build a better future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105">
                Get Involved
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-200">
                Contact Us
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
