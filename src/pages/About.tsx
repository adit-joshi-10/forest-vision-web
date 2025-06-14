
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Target, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-forest text-white">
        <div className="container mx-auto px-4">
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
                to thrive when people come together with shared purpose and dedication. Founded in 2019 
                by a group of passionate volunteers, we started with a single initiative to support 
                local education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                What began as weekend tutoring sessions has grown into a comprehensive platform 
                connecting volunteers, donors, and beneficiaries across multiple impact areas. 
                Today, we're proud to have touched over 1,000 lives through our various programs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-subtle rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-gray-600">Years of Impact</div>
                </div>
                <div className="text-center p-4 bg-gradient-subtle rounded-lg">
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
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create positive, sustainable change in communities by connecting passionate 
                individuals with meaningful opportunities to serve, learn, and grow together 
                while addressing critical social, educational, and environmental challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
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
