
import React from "react";
import { Send, CheckCircle } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

const subjects = [
  "General Inquiry",
  "Partnership Opportunity",
  "Volunteer Interest",
  "Consulting Services",
  "Media & Press",
  "Other",
];

const ContactForm = () => {
  const {
    formData,
    isSubmitted,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  return (
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
          {isSubmitting ? "Processing..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
