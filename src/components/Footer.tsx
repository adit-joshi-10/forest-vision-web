
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-forest rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-poppins font-bold">
                Community<span className="text-primary">Care</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building stronger communities through collaborative initiatives, 
              sustainable development, and meaningful connections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">Get Involved</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Donate Now
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Volunteer With Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Corporate Partnership
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Sponsor an Event
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Community Street<br />
                  Cityville, ST 12345<br />
                  United States
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">info@communitycare.org</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary text-white"
                />
                <button className="bg-primary px-6 py-2 rounded-r-full hover:bg-primary/90 transition-colors duration-200">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CommunityCare. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>for communities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
