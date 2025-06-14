
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

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Join Us', path: '/join' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:scale-105 transition-all duration-300 border border-gray-100">
              <img 
                src="/lovable-uploads/2e9306a4-96bb-485f-93b0-3f1d1704b289.png" 
                alt="180 Degrees Consulting MUJ" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-poppins font-bold transition-colors duration-300 leading-tight ${
                isScrolled ? 'text-gray-800 group-hover:text-primary' : 'text-white group-hover:text-primary'
              }`}>
                180 Degrees Consulting
              </span>
              <span className="text-sm font-medium text-primary leading-tight">
                Manipal University Jaipur
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
                    : isScrolled ? 'text-gray-700' : 'text-white'
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
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-2xl shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-medium transition-all duration-200 hover:text-primary hover:translate-x-2 ${
                    location.pathname === item.path ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/join"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-gradient-to-r from-accent to-accent/80 text-white px-6 py-2 rounded-full font-medium hover:from-accent/90 hover:to-accent/70 transition-all duration-200 text-center transform hover:scale-105"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
