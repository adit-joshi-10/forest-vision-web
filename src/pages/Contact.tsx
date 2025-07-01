
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Instagram, Linkedin } from 'lucide-react';
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactMapAndFaq from "@/components/contact/ContactMapAndFaq";

const Contact = () => (
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
          <p
            className="text-lg md:text-xl opacity-90 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to make a difference? Contact 180 Degrees Consulting MUJ to learn how we can work together to create positive change in your community.
          </p>
        </div>
      </div>
    </section>

    {/* Contact Info Cards */}
    <ContactInfoCards />

    {/* Contact Form & Map */}
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ContactForm />
          {/* Map & FAQ */}
          <ContactMapAndFaq />
        </div>
      </div>
    </section>

    {/* Social Media Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
            Follow Us
          </h2>
          <p className="text-lg text-gray-600">
            Stay connected with our latest updates and initiatives
          </p>
        </div>

        <div className="flex justify-center gap-8 max-w-md mx-auto">
          <a
            href="https://www.instagram.com/180dc.muj?igsh=YTF2NHg0Y2VxdWhz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Instagram className="h-10 w-10 text-white" />
            </div>
            <span className="text-gray-700 font-semibold group-hover:text-primary transition-colors duration-200">
              Instagram
            </span>
          </a>

          <a
            href="https://www.linkedin.com/company/180dc-muj/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Linkedin className="h-10 w-10 text-white" />
            </div>
            <span className="text-gray-700 font-semibold group-hover:text-primary transition-colors duration-200">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;
