import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { FaSearch, FaFilter, FaTimes, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Sample gallery images (replace with your actual images)
const galleryImages = [
  { id: 1, src: '/images/Gallery/g1.jpg', category: 'puja' },
  { id: 2, src: '/images/Gallery/g2.jpg', category: 'temple' },
  { id: 3, src: '/images/Gallery/g3.jpg', category: 'festival' },
  { id: 4, src: '/images/Gallery/g4.jpg', category: 'puja' },
  { id: 5, src: '/images/Gallery/g5.jpg', category: 'temple' },
  { id: 6, src: '/images/Gallery/g6.jpg', category: 'festival' },
  { id: 7, src: '/images/Gallery/g7.jpg', category: 'puja' },
  { id: 8, src: '/images/Gallery/g8.jpg', category: 'temple' },
  { id: 9, src: '/images/Gallery/g9.jpg', category: 'festival' },
  { id: 10, src: '/images/Gallery/g10.jpg', category: 'puja' },
  { id: 11, src: '/images/Gallery/g11.jpg', category: 'temple' },
  { id: 12, src: '/images/Gallery/g06.jpeg', category: 'others', name:"परम पूज्य भिक्षु जी महाराज" },
  { id: 13, src: '/images/Gallery/g08.jpeg', category: 'others', name:"योग गुरु रामदेव बाबा" },
  { id: 14, src: '/images/Gallery/g01.jpeg', category: 'others', name:"सुधांशु जी महाराज" },
  { id: 15, src: '/images/Gallery/g02.jpeg', category: 'others', name:"परम पूज्य जंगलीदास जी महाराज" },
  { id: 16, src: '/images/Gallery/g03.jpeg', category: 'others', name:"श्री श्री रविशंकर जी" },
  { id: 17, src: '/images/Gallery/g04.jpeg', category: 'others', name:"श्री श्री रविशंकर जी" },
  { id: 18, src: '/images/Gallery/g07.jpeg', category: 'others', name:"अखाड़ा परिषद के अध्यक्ष रघुमुनि जी" },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'puja', name: 'Puja Ceremonies' },
  { id: 'temple', name: 'Temple' },
  { id: 'festival', name: 'Festivals' },
  { id: 'others', name: 'Others' },
];

const Gallery = () => {
  const [searchParams] = useSearchParams();
  const lang = (searchParams.get('lang') || 'en').toLowerCase() === 'hi' ? 'hi' : 'en';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = galleryImages.filter((image) => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const translations = {
    title: {
      en: 'Our Gallery',
      hi: 'हमारी गैलरी',
    },
    searchPlaceholder: {
      en: 'Search images...',
      hi: 'छवियां खोजें...',
    },
    viewAll: {
      en: 'View All',
      hi: 'सभी देखें',
    },
    noImages: {
      en: 'No images found',
      hi: 'कोई छवि नहीं मिली',
    },
    close: {
      en: 'Close',
      hi: 'बंद करें',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">
            {translations.title[lang]}
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {lang === 'hi'
            ? 'हमारे मंदिर और पूजा समारोहों की यादें'
            : 'Memories from our temple and puja ceremonies'}
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {/* <FaSearch className="h-5 w-5 text-gray-400" /> */}
            </div>
            <input
              type="text"
              placeholder={translations.searchPlaceholder[lang]}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="relative w-full md:w-auto">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full md:w-auto flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              {/* <FaFilter className="h-5 w-5 text-gray-500 mr-2" /> */}
              <span>{lang === 'hi' ? 'फ़िल्टर' : 'Filter'}</span>
            </button>

            {/* Filter Dropdown */}
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsFilterOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        selectedCategory === category.id
                          ? 'bg-red-100 text-red-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredImages.length > 0 ? (
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs (Mobile) */}
          <div className="md:hidden flex overflow-x-auto pb-4 mb-6 hide-scrollbar">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs (Desktop) */}
          <div className="hidden md:flex justify-center mb-12">
            <div className="inline-flex rounded-xl p-1 bg-gray-100">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium ${
                    selectedCategory === category.id
                      ? 'bg-white text-red-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src={image.src}
                    alt={`Gallery ${image.id}`}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <span className="text-xs font-medium px-2 py-1 bg-red-600 rounded-full">
                        {(image?.name) ? image.name : image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">{translations.noImages[lang]}</p>
        </div>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors"
              >
                {/* <FaTimes className="h-6 w-6" /> */}
              </button>
              <div className="bg-white rounded-xl overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt="Selected"
                  className="w-full max-h-[80vh] object-contain"
                />
                <div className="p-4 bg-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">
                      {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                    </span>
                    <a
                      href={selectedImage.src}
                      download
                      className="text-sm font-medium text-red-600 hover:text-red-700 flex items-center"
                    >
                      {lang === 'hi' ? 'डाउनलोड' : 'Download'} <FaArrowRight className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;