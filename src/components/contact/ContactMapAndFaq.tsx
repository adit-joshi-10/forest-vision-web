
import React from "react";
import { MapPin } from "lucide-react";

const ContactMapAndFaq = () => (
  <div className="space-y-8 animate-slide-in-right">
    {/* Map */}
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
);

export default ContactMapAndFaq;
