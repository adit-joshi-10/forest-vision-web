
import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Community Volunteer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c5c0?auto=format&fit=crop&w=200&q=80',
      content: 'Working with CommunityCare has been transformative. The impact we create together is incredible, and the support system is amazing.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Program Beneficiary',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      content: 'The skills training program changed my life completely. I now have a sustainable career and can support my family with dignity.',
      rating: 5
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Healthcare Partner',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80',
      content: 'Their healthcare initiatives reach the most vulnerable communities. The dedication and professionalism of the team is outstanding.',
      rating: 5
    },
    {
      name: 'James Williams',
      role: 'Corporate Sponsor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      content: 'Partnering with CommunityCare aligns perfectly with our CSR goals. Their transparency and impact measurement is exemplary.',
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from the voices of our community - volunteers, beneficiaries, and partners 
            who have experienced the impact of our work firsthand.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className={`max-w-4xl mx-auto mb-12 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-forest text-white p-12 rounded-3xl relative overflow-hidden">
            {/* Background Quote */}
            <Quote className="absolute top-8 right-8 h-20 w-20 opacity-20" />
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-4 border-white/20 mr-6"
                />
                <div>
                  <h3 className="text-xl font-poppins font-bold">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-white/80">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-accent" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">5.0</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">250+</div>
            <div className="text-gray-600">Happy Volunteers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">1000+</div>
            <div className="text-gray-600">Lives Changed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
