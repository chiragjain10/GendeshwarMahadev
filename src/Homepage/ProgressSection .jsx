import React from "react";
import { motion } from "framer-motion";
import { GiTempleGate } from "react-icons/gi";

const ProgressSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden font-bebas">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🕉️</div>
        <div className="absolute bottom-10 right-10 text-6xl">🙏</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">🔱</div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-200">
              <img
                src="https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=400&h=300&fit=crop"
                alt="Temple Donation"
                className="rounded-2xl shadow-lg w-full max-w-sm object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x300/FFD700/FFFFFF?text=Temple+Donation";
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Center Progress Box */}
          <div className="relative bg-gradient-to-br from-white to-amber-50 shadow-2xl rounded-3xl p-8 text-center border-2 border-amber-200">
            
            {/* Sacred Header */}
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <p className="text-red-700 font-semibold text-sm tracking-wide">
                ॐ नमः शिवाय
              </p>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-lg">
                <GiTempleGate className="text-white text-5xl" />
              </div>
            </div>

            {/* Circular Progress */}
            <div className="relative inline-block mb-6">
              <svg
                className="w-40 h-40 transform -rotate-90"
                viewBox="0 0 197 197"
              >
                <circle
                  cx="98.5"
                  cy="98.5"
                  r="90"
                  stroke="#fed7aa"
                  strokeWidth="14"
                  fill="none"
                />
                <motion.circle
                  cx="98.5"
                  cy="98.5"
                  r="90"
                  stroke="#dc2626"
                  strokeWidth="14"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="565.48"
                  strokeDashoffset="141.37"
                  initial={{ strokeDashoffset: 565.48 }}
                  animate={{ strokeDashoffset: 141.37 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-800">
                  75<span className="text-red-600">%</span>
                </span>
              </div>
            </div>

            {/* Text Content */}
            <h6 className="text-2xl font-bold text-gray-800 mb-3">
              Donation Progress
            </h6>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your generous donations help us maintain the temple, conduct daily rituals, 
              and spread the divine blessings of Lord Shiva to all devotees.
            </p>

            {/* Progress Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-700">₹2,50,000</div>
                <div className="text-sm text-gray-600">Raised</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">₹3,50,000</div>
                <div className="text-sm text-gray-600">Goal</div>
              </div>
            </div>

            {/* Button */}
            <motion.a
              href="/donate"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GiTempleGate className="text-xl" />
              Donate Now
            </motion.a>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-200">
              <img
                src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop"
                alt="Temple Service"
                className="rounded-2xl shadow-lg w-full max-w-sm object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Divine+Service";
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Sacred Mantra Footer */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-amber-200 shadow-lg">
            <div className="text-red-700 text-xl font-devanagari font-bold">
              ॐ नमः शिवाय
            </div>
            <p className="text-gray-600 text-sm mt-1">
              Your donations help preserve our sacred traditions
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-red-500 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
    </section>
  );
};

export default ProgressSection;