import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Processing contact form submission:', formData);
      
      // Step 1: Store the form data in the database
      const { data: submissionData, error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            organization: formData.organization || null,
            subject: formData.subject,
            message: formData.message,
            status: 'new'
          }
        ])
        .select()
        .single();

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to save submission to database');
      }

      console.log('Contact submission saved to database:', submissionData);

      // Step 2: Send the email notification via edge function
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          submissionId: submissionData.id // Include the submission ID for reference
        }
      });

      if (emailError) {
        console.error('Email sending error:', emailError);
        // Even if email fails, we still saved to database
        toast({
          title: "Submission Received",
          description: "Your message has been saved. We may have trouble sending confirmation emails, but we'll still respond to you.",
          variant: "default",
        });
      } else {
        console.log('Email sent successfully:', emailData);
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. Your submission has been recorded and we'll get back to you soon.",
        });
      }

      // Reset form and show success state
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {
      console.error('Error processing contact form:', error);
      toast({
        title: "Submission Error",
        description: "Failed to process your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Jaipur-Ajmer Express Highway', 'Dehmi Kalan, Near GVK Toll Plaza', 'Jaipur, Rajasthan 303007'],
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 141 999 4000', '+91 141 999 4001'],
      link: 'tel:+911419994000'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['180dc@jaipur.manipal.edu', 'admissions@jaipur.manipal.edu'],
      link: 'mailto:180dc@jaipur.manipal.edu'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM', 'Sun: Closed'],
      link: null
    }
  ];

  const subjects = [
    'General Inquiry',
    'Partnership Opportunity',
    'Volunteer Interest',
    'Consulting Services',
    'Media & Press',
    'Other'
  ];

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
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/lovable-uploads/27da0fca-893d-47a1-8309-fb95c3cbee81.png" 
                alt="Manipal University Jaipur" 
                className="h-16 w-auto mr-4"
              />
              <h1 className="text-4xl md:text-6xl font-poppins font-bold animate-fade-in">
                Get in <span className="text-accent">Touch</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ready to make a difference? Contact 180 Degrees Consulting MUJ to learn how we can work together to create positive change in your community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="bg-gradient-subtle p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.link && (
                  <a
                    href={info.link}
                    className="inline-block mt-3 text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
                  >
                    {info.title === 'Visit Us' ? 'View Map' : 
                     info.title === 'Call Us' ? 'Call Now' : 'Send Email'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg animate-slide-in-left">
              <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <span className="text-green-700 font-medium">Thank you! Your message has been submitted successfully.</span>
                    <p className="text-green-600 text-sm mt-1">We've saved your inquiry and will respond within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors duration-200 disabled:opacity-50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors duration-200 disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors duration-200 disabled:opacity-50"
                    placeholder="Your organization (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors duration-200 disabled:opacity-50"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors duration-200 resize-none disabled:opacity-50"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting ? 'Processing...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Map Placeholder */}
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6">
                  Visit Our Campus
                </h3>
                <div className="bg-gradient-subtle rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/27da0fca-893d-47a1-8309-fb95c3cbee81.png" 
                      alt="Manipal University Jaipur" 
                      className="h-12 w-auto mx-auto mb-4"
                    />
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-gray-600">Interactive map would be embedded here</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-200">
                    Get Directions
                  </button>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6">
                  Quick Answers
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">How can I join 180DC MUJ?</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Fill out our application form or contact us directly to learn about current recruitment opportunities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Do you offer consulting services?</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Yes, we provide pro bono consulting to qualifying nonprofits and social enterprises.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">How do partnerships work?</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      We work with organizations aligned with our mission. Contact us to discuss potential collaborations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
