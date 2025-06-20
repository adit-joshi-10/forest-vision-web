import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);

    try {
      const { data, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { email }
      });

      if (error) {
        throw error;
      }

      if (data.success) {
        toast({
          title: "Success!",
          description: data.message,
        });
        setEmail(''); // Clear the form
      } else {
        toast({
          title: "Subscription Failed",
          description: data.error,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Initiatives', path: '/initiatives' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' }
  ];

  const supportLinks = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Volunteer', path: '/contact' },
    { name: 'Partner With Us', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
              Stay Connected with Our Mission
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest updates on our initiatives, success stories, and ways you can make a difference in your community.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                disabled={isSubscribing}
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-semibold hover:from-primary/90 hover:to-accent/90 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/27da0fca-893d-47a1-8309-fb95c3cbee81.png" 
                alt="Manipal University Jaipur" 
                className="h-12 w-auto"
              />
            </div>
            <div className="mb-4">
              <span className="text-xl font-poppins font-bold">
                180 Degrees Consulting
              </span>
              <br />
              <span className="text-lg font-poppins font-semibold text-primary">
                Manipal University Jaipur
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering communities through strategic consulting, sustainable development, and meaningful partnerships that create lasting positive change.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary hover:translate-x-2 transition-all duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6 text-primary">Get Involved</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary hover:translate-x-2 transition-all duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6 text-primary">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform duration-200" />
                <div className="text-gray-300">
                  <p>Jaipur-Ajmer Express Highway</p>
                  <p>Dehmi Kalan, Near GVK Toll Plaza</p>
                  <p>Jaipur, Rajasthan 303007</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                <a href="tel:+911419994000" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  +91 141 999 4000
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                <a href="mailto:180dc@jaipur.manipal.edu" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  180dc@jaipur.manipal.edu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 180 Degrees Consulting MUJ. All rights reserved. Made with ❤️ for positive change.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
