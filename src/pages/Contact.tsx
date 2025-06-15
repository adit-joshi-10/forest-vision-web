import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin } from 'lucide-react';
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
    <Footer />
  </div>
);

export default Contact;
