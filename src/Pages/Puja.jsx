import React, { useState, useEffect } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import pujasData from "../Data/Pujas.json";

const PujaPage = () => {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("*");
  const [filteredPujas, setFilteredPujas] = useState([]);

  // Categories for filtering
  const categories = [
    { id: "*", name: { en: "All Services", hi: "सभी सेवाएँ" } },
    { id: "puja", name: { en: "Puja", hi: "पूजा" } },
    { id: "katha", name: { en: "Katha", hi: "कथा" } },
    { id: "yagna", name: { en: "Yagna", hi: "यज्ञ" } },
    { id: "havan", name: { en: "Havan", hi: "हवन" } },
    { id: "vivah", name: { en: "Vivah", hi: "विवाह" } }
  ];

  // Filter pujas based on search term and category
  useEffect(() => {
    let result = [...pujasData];

    // Filter by category
    if (activeCategory !== "*") {
      result = result.filter((puja) => puja.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (puja) =>
          puja.title.en.toLowerCase().includes(term) ||
          puja.title.hi.includes(term) ||
          puja.desc.en.toLowerCase().includes(term) ||
          puja.desc.hi.includes(term)
      );
    }

    setFilteredPujas(result);
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 font-bebas">
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
                ॐ नमः शिवाय • {lang === 'hi' ? 'दिव्य पूजा' : 'Divine Pujas'}
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {lang === 'hi' ? 'पवित्र पूजा सेवाएं' : 'Sacred Puja Services'}
            </h1>
            <nav className="flex justify-center items-center space-x-2 text-base sm:text-lg">
              <Link to={`/?lang=${lang}`} className="text-amber-200 hover:text-white transition-colors">
                {lang === 'hi' ? 'होम' : 'Home'}
              </Link>
              <span className="text-white">/</span>
              <span className="text-white font-semibold">
                {lang === 'hi' ? 'पूजा सेवाएं' : 'Puja Services'}
              </span>
            </nav>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 relative">
            <div className="relative">
              <input
                type="text"
                placeholder={lang === 'hi' ? 'खोजें...' : 'Search...'}
                className="w-full px-6 py-3 pl-12 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {category.name[lang]}
              </button>
            ))}
          </div>

          {/* Puja Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPujas.map((puja) => (
              <div
                key={puja.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={puja.image}
                    alt={puja.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {puja.title[lang]}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {puja.shortDesc[lang]}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === puja.category)?.name[lang] || puja.category}
                    </span>
                    <Link
                      to={`/puja/${puja.link}?lang=${lang}`}
                      className="text-red-600 hover:text-red-700 font-medium flex items-center"
                    >
                      {lang === 'hi' ? 'और जानें' : 'Learn More'}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPujas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {lang === 'hi'
                  ? 'कोई सेवा नहीं मिली। कृपया खोज शब्द बदलें या कोई अन्य श्रेणी चुनें।'
                  : 'No services found. Please try a different search term or category.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PujaPage;