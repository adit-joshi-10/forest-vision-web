import React from 'react';
import { Sparkles } from 'lucide-react';

const Partners = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-tight leading-tight">
            Our <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Collaborating with innovative startups and organizations to drive meaningful change and create sustainable impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-500/20"></div>
                <div className="flex items-center justify-center h-full p-8">
                  <img
                    src="/lovable-uploads/85f4a901-9b1b-4ab2-8864-79b22a466665.png"
                    alt="VASSIR - Fashion Platform"
                    className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Startup Partner
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                  <span className="bg-gradient-to-r from-gray-800 to-emerald-600 bg-clip-text text-transparent">
                    VASSIR
                  </span>
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                  A dynamic Hyderabad-based online fashion platform startup that's revolutionizing the fashion e-commerce landscape. 
                  Through our partnership, we're providing strategic consulting and business development support to help them scale their operations and maximize market impact.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Fashion Tech</span>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">E-commerce</span>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Hyderabad</span>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Startup</span>
                </div>
                
                <div className="flex items-center gap-3 text-emerald-600">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-semibold">Strategic Partnership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;