import React from "react";
import {
  FaArrowRight,
  FaHeart,
  FaHandsHelping,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

const AboutSection = () => {
  const features = [
    { 
      icon: <FaHeart className="text-xl" />, 
      text: "शांति और आस्था", 
      color: "bg-gradient-to-r from-red-600 to-red-700" 
    },
    { 
      icon: <FaHandsHelping className="text-xl" />, 
      text: "सेवा और सहयोग", 
      color: "bg-gradient-to-r from-red-600 to-red-700" 
    },
    { 
      icon: <FaShieldAlt className="text-xl" />, 
      text: "100% संतोष", 
      color: "bg-gradient-to-r from-red-600 to-red-700" 
    },
    { 
      icon: <FaAward className="text-xl" />, 
      text: "विश्वसनीय संस्था", 
      color: "bg-gradient-to-r from-red-600 to-red-700" 
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 font-bebas">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🕉️</div>
        <div className="absolute bottom-10 right-10 text-6xl">🙏</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">🔱</div>
        <div className="absolute bottom-1/3 right-1/3 text-5xl">☸️</div>
      </div>

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ===== Left Image Section ===== */}
          <div className="relative w-full flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-200">
                <img
                  src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=500&h=400&fit=crop"
                  alt="शिव मंदिर"
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/500x400/FFD700/FFFFFF?text=शिव+मंदिर";
                  }}
                />
                {/* Sacred Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold font-devanagari mb-1">ॐ नमः शिवाय</div>
                    <div className="text-sm text-amber-200">भगवान शिव की कृपा सदैव आप पर बनी रहे</div>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-3 rounded-xl shadow-2xl border-2 border-amber-400">
                <div className="text-center">
                  <div className="text-2xl font-bold font-devanagari">५+</div>
                  <div className="text-sm font-semibold uppercase tracking-wide">
                    वर्षों की सेवा
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
          </div>

          {/* ===== Right Content ===== */}
          <div className="space-y-6">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                <p className="text-red-700 font-semibold text-sm tracking-wide">
                  ॐ नमः शिवाय • भगवान शिव की कृपा
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">
                  श्री द्वादश ज्योतिर्लिंग
                </span>
                <br />
                <span className="text-gray-800">
                  एवं चारों धाम के दर्शन
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              <span className="text-red-600 font-bold">भगवान शिव</span> की दिव्य कृपा का अनुभव करें - 
              जहाँ शांति, भक्ति और सेवा एक साथ मिलते हैं। 
              <span className="text-red-700 font-semibold"> शिवधाम मंदिर</span> में हमसे जुड़ें और 
              सभी 12 ज्योतिर्लिंगों और चार धामों का आशीर्वाद एक साथ प्राप्त करें।
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-amber-200 shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`p-2 ${feature.color} rounded-lg text-white shadow-md`}
                  >
                    {feature.icon}
                  </div>
                  <span className="font-semibold text-gray-800">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Sacred Mantra Box */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-4 border-2 border-amber-300 shadow-inner">
              <div className="text-center">
                <div className="text-red-700 text-2xl font-devanagari font-bold mb-2">
                  ॐ नमः शिवाय
                </div>
                <p className="text-gray-600 text-sm">
                  पंचाक्षरी मंत्र - पांच अक्षरों का दिव्य मंत्र
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/about"
                className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="font-semibold">हमारे बारे में जानें</span>
                <FaArrowRight className="text-sm" />
              </a>

              <a
                href="/contact"
                className="border-2 border-red-600 text-red-700 hover:bg-red-600 hover:text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 justify-center shadow-md hover:shadow-lg"
              >
                <span className="font-semibold">संपर्क करें</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
      <div className="absolute top-1/3 right-40 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
    </section>
  );
};

export default AboutSection;