import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaOm } from "react-icons/fa";

const pujaData = [
  {
    title: "Maha Shivratri",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
    category: "shiva",
    description: "The great night of Lord Shiva with special abhishekam and all-night vigil",
    link: "/pujaDetail/1"
  },
  {
    title: "Shravan Somvar",
    image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=400&h=300&fit=crop",
    category: "shiva",
    description: "Monday worship during holy Shravan month with bilva patra offerings",
    link: "/pujaDetail/2"
  },
  {
    title: "Pradosh Vrat",
    image: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=400&h=300&fit=crop",
    category: "shiva",
    description: "Evening worship dedicated to Lord Shiva on Trayodashi tithi",
    link: "/pujaDetail/3"
  },
  {
    title: "Rudrabhishek",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    category: "abhishek",
    description: "Sacred bathing of Shiva Linga with milk, honey, and holy water",
    link: "/pujaDetail/4"
  },
  {
    title: "Lingashtakam Path",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    category: "chanting",
    description: "Chanting of eight verses in praise of Lord Shiva's Linga form",
    link: "/pujaDetail/5"
  },
  {
    title: "Shiva Sahasranama",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
    category: "chanting",
    description: "Recitation of thousand names of Lord Shiva for divine blessings",
    link: "/pujaDetail/6"
  },
];

const categories = [
  { label: "All Pujas", value: "*" },
  { label: "Lord Shiva", value: "shiva" },
  { label: "Abhishekam", value: "abhishek" },
  { label: "Chanting", value: "chanting" },
  { label: "Festivals", value: "festivals" },
];

const PujaSection = () => {
  const [activeCategory, setActiveCategory] = useState("*");

  const filteredData =
    activeCategory === "*"
      ? pujaData
      : pujaData.filter((item) => item.category.includes(activeCategory));

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden font-bebas">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🕉️</div>
        <div className="absolute bottom-10 right-10 text-6xl">🙏</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">🔱</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <p className="text-red-700 font-semibold text-sm tracking-wide">
              ॐ नमः शिवाय • Divine Rituals
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sacred <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">Pujas & Rituals</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the divine grace of Lord Shiva through our authentic Vedic rituals 
            and traditional worship ceremonies conducted by experienced priests.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <motion.button
              key={idx}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                activeCategory === cat.value
                  ? "bg-gradient-to-r from-red-700 to-red-800 text-white shadow-xl"
                  : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-700 border border-amber-200"
              }`}
              onClick={() => setActiveCategory(cat.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Puja Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
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
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Shiva+Puja";
                  }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <motion.a
                    href={item.link}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>View Details</span>
                    <FaArrowRight className="text-sm" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                
                {/* Quick Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaOm className="text-red-600" />
                    <span>Vedic Ritual</span>
                  </div>
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Book Now
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-8 text-white shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Special Puja?
            </h3>
            <p className="text-red-100 mb-6 text-lg">
              Contact us for personalized pujas and rituals for your specific needs
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-white text-red-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Book a Puja
            </a>
          </div>
        </div>

        {/* Sacred Mantra */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-amber-200 shadow-lg">
            <div className="text-red-700 text-2xl font-devanagari font-bold">
              ॐ नमः शिवाय
            </div>
            <p className="text-gray-600 text-sm mt-1">
              May Lord Shiva bless you with spiritual growth
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