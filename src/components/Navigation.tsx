
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Join Us', path: '/join' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group z-[10000]">
            <div className="w-10 h-10 sm:w-12 sm:h-12">
              <img 
                src="/lovable-uploads/834a651d-c4d0-4278-9cf4-fb183066989a.png" 
                alt="180 Degrees Consulting MUJ" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-poppins font-bold transition-colors duration-300 leading-tight text-gray-800 group-hover:text-primary">
                MUJ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-all duration-300 hover:text-primary group ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
            <Link
              to="/join"
              className="bg-gradient-to-r from-accent to-accent/80 text-white px-6 py-2 rounded-full font-medium hover:from-accent/90 hover:to-accent/70 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 z-[10000] relative"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg transition-all duration-300 z-[9998] ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
        }`}>
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 font-medium transition-all duration-200 hover:text-primary hover:bg-gray-50 rounded-lg ${
                  location.pathname === item.path ? 'text-primary bg-primary/5' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 mt-4 border-t border-gray-200">
              <Link
                to="/join"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-gradient-to-r from-accent to-accent/80 text-white px-6 py-3 rounded-full font-medium hover:from-accent/90 hover:to-accent/70 transition-all duration-200 text-center transform hover:scale-105 mx-4"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[9997]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;
