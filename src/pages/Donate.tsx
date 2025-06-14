import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Heart, Shield, Target, Users, CheckCircle, CreditCard, Smartphone } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [donationType, setDonationType] = useState('monthly');
  const [customAmount, setCustomAmount] = useState('');

  const donationAmounts = [25, 50, 100, 250, 500];
  
  const impactData = [
    { amount: 25, impact: 'Provides school supplies for 2 children' },
    { amount: 50, impact: 'Funds a healthcare consultation for a family' },
    { amount: 100, impact: 'Supports a small business training workshop' },
    { amount: 250, impact: 'Enables a month of educational programs' },
    { amount: 500, impact: 'Funds a complete community project' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Donations',
      description: 'Your donation is protected with bank-level security'
    },
    {
      icon: Target,
      title: '100% Impact',
      description: 'Every dollar goes directly to our programs'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of donors making a difference'
    }
  ];

  const getCurrentImpact = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    const impact = impactData.find(item => item.amount <= amount);
    return impact ? impact.impact : 'Makes a significant impact in our community';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-forest text-white relative overflow-hidden">
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 animate-fade-in">
              Make a <span className="text-accent">Difference</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Your donation helps us create lasting change in communities worldwide. Every contribution, no matter the size, makes a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Direct Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Form */}
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-8">
                    Choose Your Donation
                  </h2>

                  {/* Donation Type */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Donation Frequency
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setDonationType('monthly')}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                          donationType === 'monthly'
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold">Monthly</div>
                        <div className="text-sm opacity-75">Ongoing Impact</div>
                      </button>
                      <button
                        onClick={() => setDonationType('once')}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                          donationType === 'once'
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold">One-time</div>
                        <div className="text-sm opacity-75">Immediate Help</div>
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Donation Amount
                    </label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount('');
                          }}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                            selectedAmount === amount && !customAmount
                              ? 'border-primary bg-primary text-white'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(0);
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Impact Message */}
                  <div className="mb-8 p-4 bg-primary/5 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-800 mb-1">Your Impact</div>
                        <div className="text-sm text-gray-600">{getCurrentImpact()}</div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="flex items-center justify-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-primary transition-all duration-200">
                        <CreditCard className="h-5 w-5" />
                        Card
                      </button>
                      <button className="flex items-center justify-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-primary transition-all duration-200">
                        <Smartphone className="h-5 w-5" />
                        Digital Wallet
                      </button>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                    <Heart className="h-5 w-5" />
                    Donate ${customAmount || selectedAmount} {donationType === 'monthly' ? '/month' : ''}
                  </button>
                </div>

                {/* Info Panel */}
                <div className="bg-gradient-forest text-white p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-poppins font-bold mb-6">
                    Why Your Donation Matters
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    {features.map((feature, index) => (
                      <div key={feature.title} className="flex items-start gap-4">
                        <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{feature.title}</h4>
                          <p className="text-white/80 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/20 pt-6">
                    <h4 className="font-semibold mb-4">Recent Impact</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>50 families received clean water access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>200 children enrolled in education programs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>15 small businesses received training</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-6">
              Other Ways to <span className="text-gradient">Help</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Can't donate right now? There are many other ways you can support our mission and make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-subtle rounded-3xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Users className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-poppins font-bold text-gray-800 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Join our team of dedicated volunteers and contribute your skills and time to make a direct impact.
              </p>
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200">
                Learn More →
              </button>
            </div>

            <div className="text-center p-8 bg-gradient-subtle rounded-3xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Target className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-poppins font-bold text-gray-800 mb-4">Spread the Word</h3>
              <p className="text-gray-600 mb-6">
                Help us reach more people by sharing our mission with your friends, family, and social networks.
              </p>
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200">
                Share Now →
              </button>
            </div>

            <div className="text-center p-8 bg-gradient-subtle rounded-3xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-poppins font-bold text-gray-800 mb-4">Corporate Partnership</h3>
              <p className="text-gray-600 mb-6">
                Partner with us to create meaningful corporate social responsibility programs that benefit everyone.
              </p>
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200">
                Contact Us →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
