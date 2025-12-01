import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaOm } from "react-icons/fa";

import pujaData from '../Data/Pujas.json';

const categories = [
  { label: { en: "All Services", hi: "सभी सेवाएँ" }, value: "*" },
  { label: { en: "Puja", hi: "पूजा" }, value: "puja" },
  { label: { en: "Katha", hi: "कथा" }, value: "katha" },
  { label: { en: "Yagna", hi: "यज्ञ" }, value: "yagna" },
  { label: { en: "Havan", hi: "हवन" }, value: "havan" },
  { label: { en: "Vivah", hi: "विवाह" }, value: "vivah" }
];

const PujaSection = () => {
  const [pujas, setPujas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("*");
  const [searchParams] = useSearchParams();
  const lang = (searchParams.get("lang") || "en").toLowerCase() === "hi" ? "hi" : "en";
  const [showAllPujas, setShowAllPujas] = useState(false);

  useEffect(() => {
    // The data is imported directly from the JSON file
    if (pujaData && Array.isArray(pujaData)) {
      setPujas(pujaData);
    }
    setLoading(false);
  }, [pujaData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  const filteredData = (activeCategory === "*"
    ? pujas
    : pujas.filter((item) => item.category.includes(activeCategory))).slice(0, showAllPujas ? pujas.length : 6);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden font-bebas" style={{ background: "url(/images/spritualBG.jpg)", backgroundSize: "100% 100%", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }}>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5" data-aos="fade-up">
        <div className="absolute top-10 left-10 text-6xl">🕉️</div>
        <div className="absolute bottom-10 right-10 text-6xl">🙏</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">🔱</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <p className="text-red-700 font-semibold text-sm tracking-wide">
              {lang === "hi" ? "ॐ नमः शिवाय • दिव्य अनुष्ठान" : "Om Namah Shivaya • Divine Rituals"}
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {lang === "hi" ? "पवित्र " : "Sacred "}
            <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">
              {lang === "hi" ? "पूजा एवं अनुष्ठान" : "Pujas & Rituals"}
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {lang === "hi"
              ? "भगवान शिव की दिव्य कृपा का अनुभव करें—हमारे प्रामाणिक वैदिक अनुष्ठानों और अनुभवी पुजारियों द्वारा कराई जाने वाली पारंपरिक पूजा विधियों के माध्यम से।"
              : "Experience the divine grace of Lord Shiva through our authentic Vedic rituals and traditional worship ceremonies conducted by experienced priests."}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {categories.map((cat, idx) => (
            <motion.button
              key={idx}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${activeCategory === cat.value
                  ? "bg-gradient-to-r from-red-700 to-red-800 text-white shadow-xl"
                  : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-700 border border-amber-200"
                }`}
              onClick={() => setActiveCategory(cat.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label[lang]}
            </motion.button>
          ))}
        </div>

        {/* Puja Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8" data-aos="fade-up">
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border-2 border-amber-100 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >

              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-64 object-top transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {item.category ? (lang === "hi" ?
                    (item.category === "marriage" ? "विवाह" :
                      item.category === "shradh" ? "श्राद्ध" :
                        item.category === "vastu" ? "वास्तु" :
                          item.category === "samskara" ? "संस्कार" :
                            item.category === "vrat" ? "व्रत" : item.category) :
                    (item.category.charAt(0).toUpperCase() + item.category.slice(1))) : ''}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <a
                    href={`/puja/${item.link}?lang=${lang}`}
                    className="inline-flex items-center bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <span>{lang === "hi" ? "विवरण देखें" : "View Details"}</span>
                    <FaArrowRight className="text-sm" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6" data-aos="fade-up">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                  {item.title[lang]}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.shortDesc?.[lang] || item.desc?.[lang] || ''}
                </p>

                {/* Quick Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaOm className="text-red-600" />
                    <span>{lang === "hi" ? "वैदिक अनुष्ठान" : "Vedic Ritual"}</span>
                  </div>
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {lang === "hi" ? "अभी बुक करें" : "Book Now"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Pujas Button */}
        {!showAllPujas && pujas.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllPujas(true)}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {lang === "hi" ? "और पूजा देखें" : "View More Pujas"}
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-8 text-white shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {lang === "hi" ? "किसी विशेष पूजा की आवश्यकता है?" : "Need a Special Puja?"}
            </h3>
            <p className="text-red-100 mb-6 text-lg">
              {lang === "hi" ? "व्यक्तिगत पूजा और अनुष्ठान हेतु हमसे संपर्क करें" : "Contact us for personalized pujas and rituals for your specific needs"}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-red-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {lang === "hi" ? "पूजा बुक करें" : "Book a Puja"}
            </a>
          </div>
        </div>

        {/* Sacred Mantra */}
        <div className="text-center mt-12" data-aos="fade-up">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-amber-200 shadow-lg">
            <div className="text-red-700 text-2xl font-devanagari font-bold">
              ॐ नमः शिवाय
            </div>
            <p className="text-gray-600 text-sm mt-1">
              {lang === "hi" ? "भगवान शिव आपको आध्यात्मिक उन्नति प्रदान करें" : "May Lord Shiva bless you with spiritual growth"}
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

export default PujaSection;