import React, { useState } from "react";
import { FaPlus, FaOm } from "react-icons/fa";
import { Link } from "react-router-dom";

const PujaPage = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  // Shiva-focused Puja data
  const pujas = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
      title: "Maha Shivratri Puja",
      description: "Special night worship of Lord Shiva with Rudrabhishek and all-night vigil",
      categories: ["shiva", "festivals"],
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=400&h=300&fit=crop",
      title: "Rudrabhishek",
      description: "Sacred bathing of Shiva Linga with milk, honey and holy water",
      categories: ["shiva", "daily"],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=400&h=300&fit=crop",
      title: "Pradosh Vrat Puja",
      description: "Evening worship dedicated to Lord Shiva on Trayodashi tithi",
      categories: ["shiva", "vrat"],
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      title: "Shravan Somvar Puja",
      description: "Monday worship during holy Shravan month with bilva patra",
      categories: ["shiva", "monthly"],
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      title: "Lingashtakam Path",
      description: "Chanting of eight verses in praise of Lord Shiva's Linga form",
      categories: ["chanting", "daily"],
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=400&h=300&fit=crop",
      title: "Shiva Sahasranama",
      description: "Recitation of thousand names of Lord Shiva for divine blessings",
      categories: ["chanting", "special"],
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
      title: "Maha Mrityunjay Jaap",
      description: "Chanting of powerful mantra for health and protection",
      categories: ["mantra", "special"],
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&h=300&fit=crop",
      title: "Laghu Rudra",
      description: "Eleven repetitions of Sri Rudram for specific desires",
      categories: ["vedic", "special"],
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      title: "Shiva Aarti",
      description: "Daily evening aarti with lamps and devotional songs",
      categories: ["daily", "aarti"],
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
      title: "Panchakshari Jaap",
      description: "Chanting of sacred five-letter mantra - ॐ नमः शिवाय",
      categories: ["mantra", "daily"],
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=400&h=300&fit=crop",
      title: "Shiva Purana Path",
      description: "Reading of Shiva Purana for spiritual knowledge",
      categories: ["scripture", "special"],
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=400&h=300&fit=crop",
      title: "Shiva Ashtottara",
      description: "Chanting of 108 names of Lord Shiva",
      categories: ["chanting", "daily"],
    }
  ];

  // Filter categories - Shiva themed
  const categories = [
    { id: "*", name: "All Pujas" },
    { id: "shiva", name: "Lord Shiva" },
    { id: "daily", name: "Daily Pujas" },
    { id: "chanting", name: "Chanting" },
    { id: "mantra", name: "Mantra Jaap" },
    { id: "special", name: "Special Pujas" }
  ];

  // Filter pujas based on active filter
  const filteredPujas = activeFilter === "*" 
    ? pujas 
    : pujas.filter(puja => puja.categories.includes(activeFilter));

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50  font-bebas">
      {/* Subheader Section */}
      <div className="relative py-20 md:py-24 bg-gradient-to-r from-red-800 via-red-700 to-red-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=1200&h=400&fit=crop)" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-amber-300 font-semibold text-sm tracking-wide">
                ॐ नमः शिवाय • Divine Pujas
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Sacred Shiva Pujas</h1>
            <nav className="flex justify-center items-center space-x-2 text-base sm:text-lg">
              <Link to="/" className="text-amber-200 hover:text-white transition-colors">Home</Link>
              <span className="text-white">/</span>
              <span className="text-white font-semibold">Shiva Pujas</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-red-700 to-red-800 text-white shadow-lg shadow-red-600/30"
                      : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-700 border border-amber-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Puja Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {filteredPujas.map((puja) => (
              <div 
                key={puja.id}
                className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-amber-100 hover:border-amber-200"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={puja.image} 
                    alt={puja.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Shiva+Puja";
                    }}
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                      <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                        {puja.description}
                      </p>
                      <Link
                        to={`/pujaDetail/${puja.id}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold transition-all duration-300 text-sm"
                      >
                        <FaPlus className="text-xs" />
                        View Details
                      </Link>
                    </div>
                  </div>

                  {/* Category Badges */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-1 sm:gap-2">
                    {puja.categories.map((category, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-white/90 backdrop-blur-sm text-red-700 text-xs font-semibold rounded-full border border-red-200"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h5 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors duration-300 line-clamp-1">
                    {puja.title}
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {puja.description}
                  </p>
                  
                  {/* Mobile View Button */}
                  <div className="mt-3 sm:mt-4 md:hidden">
                    <Link
                      to={`/pujaDetail/${puja.id}`}
                      className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm hover:text-red-800 transition-colors"
                    >
                      <FaPlus className="text-xs" />
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPujas.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                No pujas found for the selected category.
              </div>
              <button
                onClick={() => setActiveFilter("*")}
                className="bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Show All Pujas
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <p className="text-red-700 font-semibold text-sm tracking-wide">
                ॐ नमः शिवाय • Divine Blessings
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Experience <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">Shiva's Grace</span> Through Puja
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 md:mb-8">
              Puja is the sacred act of worship that connects devotees with Lord Shiva. Each Shiva puja has unique 
              significance and blessings, helping you find inner peace, spiritual growth, and divine protection. 
              Our experienced priests perform authentic Vedic rituals to bring Shiva's blessings into your life.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/bloggrid"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>View Spiritual Articles</span>
                <FaOm className="text-lg" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Book a Puja</span>
                <FaPlus className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Mantra Footer */}
      <div className="bg-gradient-to-r from-red-700 to-red-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-amber-300 text-4xl font-devanagari font-bold mb-4">
            ॐ नमः शिवाय
          </div>
          <p className="text-amber-200 text-lg">
            May Lord Shiva bless you with peace, prosperity, and spiritual enlightenment
          </p>
        </div>
      </div>
    </div>
  );
};

export default PujaPage;