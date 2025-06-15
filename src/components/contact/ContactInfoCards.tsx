
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "Jaipur-Ajmer Express Highway",
      "Dehmi Kalan, Near GVK Toll Plaza",
      "Jaipur, Rajasthan 303007",
    ],
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 141 999 4000", "+91 141 999 4001"],
    link: "tel:+911419994000",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["180dc@jaipur.manipal.edu", "admissions@jaipur.manipal.edu"],
    link: "mailto:180dc@jaipur.manipal.edu",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Mon - Fri: 9:00 AM - 6:00 PM",
      "Sat: 10:00 AM - 4:00 PM",
      "Sun: Closed",
    ],
    link: null,
  },
];

const ContactInfoCards = () => (
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
                {info.title === "Visit Us"
                  ? "View Map"
                  : info.title === "Call Us"
                  ? "Call Now"
                  : "Send Email"}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactInfoCards;
