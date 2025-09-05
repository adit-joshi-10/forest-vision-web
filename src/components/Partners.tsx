import React from 'react';
import { Sparkles } from 'lucide-react';

const Partners = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 tracking-tight leading-tight">
            Our <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium px-2 sm:px-4">
            Collaborating with innovative startups and organizations to drive meaningful change and create sustainable impact.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-2 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* VASSIR Partner Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 animate-fade-in">
              <div className="grid grid-cols-1 gap-0">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-500/20"></div>
                  <div className="flex items-center justify-center h-full p-4 sm:p-6 md:p-8">
                    <img
                      src="/lovable-uploads/85f4a901-9b1b-4ab2-8864-79b22a466665.png"
                      alt="VASSIR - Fashion Platform"
                      className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105 sm:hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="mb-3 sm:mb-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      Startup Partner
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-tight">
                    <span className="bg-gradient-to-r from-gray-800 to-emerald-600 bg-clip-text text-transparent">
                      VASSIR
                    </span>
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 font-medium">
                    A dynamic Hyderabad-based online fashion platform startup that's revolutionizing the fashion e-commerce landscape. 
                    Through our partnership, we're providing strategic consulting and business development support to help them scale their operations and maximize market impact.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    <span className="bg-emerald-100 text-emerald-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Fashion Tech</span>
                    <span className="bg-emerald-100 text-emerald-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">E-commerce</span>
                    <span className="bg-emerald-100 text-emerald-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Hyderabad</span>
                    <span className="bg-emerald-100 text-emerald-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Startup</span>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 text-emerald-600">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base font-semibold">Strategic Partnership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Making The Difference Partner Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 animate-fade-in">
              <div className="grid grid-cols-1 gap-0">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20"></div>
                  <div className="flex items-center justify-center h-full p-4 sm:p-6 md:p-8">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-white font-bold text-2xl sm:text-3xl tracking-wider">MTD</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="mb-3 sm:mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      Non-profit Partner
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-tight">
                    <span className="bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                      Making The Difference
                    </span>
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 font-medium">
                    A Mumbai-based non-profit organization dedicated to creating positive social impact through strategic fundraising initiatives. 
                    We collaborate with them to optimize their fundraising strategies and expand their reach for maximum community benefit.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Non-profit</span>
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Fundraising</span>
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Mumbai</span>
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Social Impact</span>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 text-blue-600">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base font-semibold">Strategic Partnership</span>
                  </div>
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