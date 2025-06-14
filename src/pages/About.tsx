
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

      {/* Our Journey Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600">
                Key milestones in our mission to create positive impact
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                {/* 2020 - Organization Founded */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="mission-card">
                      <div className="text-2xl font-bold text-primary mb-2">2020</div>
                      <h3 className="text-xl font-poppins font-bold text-gray-800 mb-3">Organization Founded</h3>
                      <p className="text-gray-600">
                        Started with a vision to create positive community impact through collaborative action and sustainable initiatives.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* 2021 - First Major Initiative */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8">
                    <div className="mission-card">
                      <div className="text-2xl font-bold text-primary mb-2">2021</div>
                      <h3 className="text-xl font-poppins font-bold text-gray-800 mb-3">First Major Initiative</h3>
                      <p className="text-gray-600">
                        Launched our Education for All program in 5 communities, providing tutoring and educational resources to underserved students.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2022 - Community Expansion */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="mission-card">
                      <div className="text-2xl font-bold text-primary mb-2">2022</div>
                      <h3 className="text-xl font-poppins font-bold text-gray-800 mb-3">Community Expansion</h3>
                      <p className="text-gray-600">
                        Expanded to 15 communities and launched our Environmental Conservation program, planting over 1,000 trees.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* 2023 - Healthcare Initiative */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8">
                    <div className="mission-card">
                      <div className="text-2xl font-bold text-primary mb-2">2023</div>
                      <h3 className="text-xl font-poppins font-bold text-gray-800 mb-3">Healthcare Initiative</h3>
                      <p className="text-gray-600">
                        Launched mobile health clinics and wellness programs, providing healthcare access to 500+ families.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2024 - Digital Platform Launch */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="mission-card">
                      <div className="text-2xl font-bold text-primary mb-2">2024</div>
                      <h3 className="text-xl font-poppins font-bold text-gray-800 mb-3">Digital Platform Launch</h3>
                      <p className="text-gray-600">
                        Launched our comprehensive digital platform connecting volunteers, donors, and beneficiaries across all programs.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>
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
                to thrive when people come together with shared purpose and dedication. Founded in 2020 
                by a group of passionate volunteers, we started with a single initiative to support 
                local education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                What began as weekend tutoring sessions has grown into a comprehensive platform 
                connecting volunteers, donors, and beneficiaries across multiple impact areas. 
                Today, we're proud to have touched over 1,000 lives through our various programs.
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
