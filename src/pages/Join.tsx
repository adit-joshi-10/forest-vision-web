
import React from 'react';
import { ArrowRight, Users, Target, Lightbulb, Trophy, Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Join = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-forest text-white overflow-hidden">
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 animate-fade-in">
              Join <span className="text-accent">180 DC MUJ</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ready to transform businesses and create social impact? Become part of MUJ's premier consulting community.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Why Join 180 DC MUJ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the opportunities that await you as a member of our consulting community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Impact</h3>
              <p className="text-gray-600">Work on genuine projects that create meaningful change in communities</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
              <p className="text-gray-600">Build consulting, analytical, and leadership skills through hands-on experience</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Network</h3>
              <p className="text-gray-600">Connect with like-minded students and industry professionals</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Recognition</h3>
              <p className="text-gray-600">Gain recognition for your contributions and build a strong portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Application Process
            </h2>
            <p className="text-lg text-gray-600">
              Join us in 4 simple steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
                  <p className="text-gray-600">Fill out the application form with your details and motivation</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Screening</h3>
                  <p className="text-gray-600">Our team will review your application and shortlist candidates</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interview Round</h3>
                  <p className="text-gray-600">Personal interview to assess your fit and commitment</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Welcome Aboard!</h3>
                  <p className="text-gray-600">Join orientation and start your journey with 180 DC MUJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Drive Announcement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-accent to-primary text-white rounded-3xl p-12 shadow-2xl">
              <Clock className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
                Recruitment Drive Opening Soon!
              </h2>
              <p className="text-xl mb-8 opacity-95">
                Get ready to join the most impactful consulting community at MUJ. Our recruitment drive is scheduled to open in September 2025.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Recruitment Timeline</h3>
                </div>
                <p className="text-lg">
                  <strong>Opening Date:</strong> September 2025
                </p>
                <p className="text-sm opacity-90 mt-2">
                  Stay tuned for the exact date announcement on our social media channels
                </p>
              </div>
              <p className="text-lg mb-6">
                Follow us on social media to stay updated about the recruitment process and important announcements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Questions?
            </h2>
            <p className="text-lg text-gray-600">
              Get in touch with our recruitment team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">180dc@jaipur.manipal.edu</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <div className="text-gray-600">
                <p>+91 93152 74704</p>
                <p>+91 73031 99599</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">MUJ Campus, Jaipur</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
