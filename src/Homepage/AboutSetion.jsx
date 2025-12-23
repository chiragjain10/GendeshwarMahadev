import React from "react";
import { useSearchParams } from "react-router-dom";
import {
  FaArrowRight,
  FaHeart,
  FaHandsHelping,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

const AboutSection = () => {
  const [searchParams] = useSearchParams();
  const lang = (searchParams.get("lang") || "en").toLowerCase() === "hi" ? "hi" : "en";

  const labels = {
    badgeLine: {
      en: "Om Namah Shivaya • Blessings of Lord Shiva",
      hi: "ॐ नमः शिवाय • भगवान शिव की कृपा",
    },
    headingLine1: {
      en: "Dwadash Jyotirlinga",
      hi: "श्री द्वादश ज्योतिर्लिंग",
    },
    headingLine2: {
      en: "and Darshan of Char Dham",
      hi: "एवं चारों धाम के दर्शन",
    },
    desc: {
      en: "Experience the divine grace of Lord Shiva where peace, devotion and service come together. Join us at Shivdham Temple and receive the blessings of all 12 Jyotirlingas and Char Dham together.",
      hi: "भगवान शिव की दिव्य कृपा का अनुभव करें - जहाँ शांति, भक्ति और सेवा एक साथ मिलते हैं। शिवधाम मंदिर में हमसे जुड़ें और सभी 12 ज्योतिर्लिंगों और चार धामों का आशीर्वाद एक साथ प्राप्त करें।",
    },
    features: [
      { en: "Peace and Faith", hi: "शांति और आस्था" },
      { en: "Service and Support", hi: "सेवा और सहयोग" },
      { en: "100% Satisfaction", hi: "100% संतोष" },
      { en: "Trusted Organization", hi: "विश्वसनीय संस्था" },
    ],
    overlayBless: {
      en: "May Lord Shiva's grace always be with you",
      hi: "भगवान शिव की कृपा सदैव आप पर बनी रहे",
    },
    years: {
      en: "25+",
      hi: "२५+",
    },
    yearsCaption: {
      en: "Years of Service",
      hi: "वर्षों की सेवा",
    },
    ctaAbout: {
      en: "Learn About Us",
      hi: "हमारे बारे में जानें",
    },
    ctaContact: {
      en: "Contact Us",
      hi: "संपर्क करें",
    },
    mantraSubtitle: {
      en: "Panchakshari Mantra - the divine five-letter mantra",
      hi: "पंचाक्षरी मंत्र - पांच अक्षरों का दिव्य मंत्र",
    },
    altTemple: {
      en: "Shiva Temple",
      hi: "शिव मंदिर",
    },
  };

  const features = [
    { icon: <FaHeart className="text-xl" />, color: "bg-gradient-to-r from-red-600 to-red-700" },
    { icon: <FaHandsHelping className="text-xl" />, color: "bg-gradient-to-r from-red-600 to-red-700" },
    { icon: <FaShieldAlt className="text-xl" />, color: "bg-gradient-to-r from-red-600 to-red-700" },
    { icon: <FaAward className="text-xl" />, color: "bg-gradient-to-r from-red-600 to-red-700" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ===== Left Image Section ===== */}
          <div className="relative w-full flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-200">
                <img
                  src="/images/shiv2.jpeg"
                  alt={labels.altTemple[lang]}
                  className="w-full object-cover transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = lang === "hi"
                      ? "https://via.placeholder.com/500x400/FFD700/FFFFFF?text=शिव+मंदिर"
                      : "https://via.placeholder.com/500x400/FFD700/FFFFFF?text=Shiva+Temple";
                  }}
                  data-aos="fade-up"
                />
                {/* Sacred Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4" data-aos="fade-up">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold font-devanagari mb-1">ॐ नमः शिवाय</div>
                    <div className="text-sm text-amber-200">{labels.overlayBless[lang]}</div>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-3 rounded-xl shadow-2xl border-2 border-amber-400" data-aos="fade-up">
                <div className="text-center">
                  <div className="text-2xl font-bold font-devanagari">{labels.years[lang]}</div>
                  <div className="text-sm font-semibold uppercase tracking-wide">
                    {labels.yearsCaption[lang]}
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
                  {labels.badgeLine[lang]}
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">
                  {labels.headingLine1[lang]}
                </span>
                <br />
                <span className="text-gray-800">
                  {labels.headingLine2[lang]}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              {labels.desc[lang]}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-amber-200 shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`p-2 ${feature.color} rounded-lg text-white shadow-md`}
                  >
                    {feature.icon}
                  </div>
                  <span className="font-semibold text-gray-800">
                    {labels.features[index][lang]}
                  </span>
                </div>
              ))}
            </div>

            {/* Sacred Mantra Box */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-4 border-2 border-amber-300 shadow-inner" data-aos="fade-up">
              <div className="text-center">
                <div className="text-red-700 text-2xl font-devanagari font-bold mb-2">
                  ॐ नमः शिवाय
                </div>
                <p className="text-gray-600 text-sm">
                  {labels.mantraSubtitle[lang]}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4" data-aos="fade-up">
              <a
                href="/about"
                className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="font-semibold">{labels.ctaAbout[lang]}</span>
                <FaArrowRight className="text-sm" />
              </a>

              <a
                href="/contact"
                className="border-2 border-red-600 text-red-700 hover:bg-red-600 hover:text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 justify-center shadow-md hover:shadow-lg"
              >
                <span className="font-semibold">{labels.ctaContact[lang]}</span>
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