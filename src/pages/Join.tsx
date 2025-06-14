
import React, { useState } from 'react';
import { ArrowRight, Users, Target, Lightbulb, Trophy, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
    branch: '',
    experience: '',
    motivation: '',
    skills: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                  <p className="text-gray-600">Fill out the application form below with your details and motivation</p>
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

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
                Apply Now
              </h2>
              <p className="text-lg text-gray-600">
                Take the first step towards making an impact
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label">Academic Year *</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="1st">1st Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="4th">4th Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Branch/Department *</label>
                  <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., Computer Science, Business Administration"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Previous Experience (if any)</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="form-input h-24 resize-none"
                    placeholder="Mention any relevant experience in consulting, leadership, or social work"
                  />
                </div>

                <div>
                  <label className="form-label">Why do you want to join 180 DC MUJ? *</label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    className="form-input h-32 resize-none"
                    placeholder="Tell us about your motivation and what you hope to contribute"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Skills & Interests</label>
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    className="form-input h-24 resize-none"
                    placeholder="List your skills, interests, and areas of expertise"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Submit Application
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
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
              <p className="text-gray-600">recruitment@180dcmuj.org</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">MUJ Campus, Jaipur</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-accent/10 rounded-2xl p-6 max-w-2xl mx-auto border border-accent/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Calendar className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold text-gray-800">Recruitment Timeline</h3>
              </div>
              <p className="text-gray-600">
                Applications are open year-round. Next recruitment drive: <strong>January 2025</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
