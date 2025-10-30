import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaCalendar, FaClock, FaRupeeSign, FaStar, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaHeart, FaAward, FaShieldAlt } from "react-icons/fa";

const PujaDetailsPage = () => {
  const { pujaId } = useParams();

  // Sample puja details data - in real app, you'd fetch this based on pujaId
  const pujaDetails = {
    1: {
      id: 1,
      image: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=800&h=500&fit=crop",
      title: "Durga Puja",
      description: "Durga Puja is a major Hindu festival that celebrates the victory of Goddess Durga over the demon Mahishasura. It symbolizes the victory of good over evil.",
      longDescription: "Durga Puja is one of the most significant festivals in Hinduism, particularly in West Bengal and other eastern states of India. It is a ten-day festival, with the last five days being the most important. The festival marks the victory of Goddess Durga over the buffalo demon Mahishasura.",
      benefits: [
        "Destroys negative energies and evil forces",
        "Brings prosperity and happiness",
        "Removes obstacles from life",
        "Provides courage and strength",
        "Ensures family well-being"
      ],
      duration: "5 Days",
      price: "₹5,100",
      originalPrice: "₹6,000",
      rating: 4.8,
      reviews: 1247,
      category: "Festivals",
      itemsIncluded: [
        "Kalash Sthapana",
        "108 Names Chanting",
        "Aarti with Flowers",
        "Prasad Distribution",
        "Havan Ceremony"
      ],
      panditDetails: {
        name: "Pandit Ravi Shankar",
        experience: "15+ years",
        language: "Hindi, English, Sanskrit",
        rating: 4.9
      }
    },
    2: {
      id: 2,
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=800&h=500&fit=crop",
      title: "Raksha Bandhan",
      description: "Raksha Bandhan celebrates the bond between brothers and sisters.",
      longDescription: "Raksha Bandhan is a popular Hindu festival that celebrates the love and duty between brothers and sisters.",
      benefits: [
        "Strengthens sibling bond",
        "Protection from negative energies",
        "Family harmony"
      ],
      duration: "2 Hours",
      price: "₹1,500",
      originalPrice: "₹2,000",
      rating: 4.7,
      reviews: 892,
      category: "Festivals",
      itemsIncluded: [
        "Rakhi Ceremony",
        "Aarti",
        "Tilak Application",
        "Sweets Distribution"
      ],
      panditDetails: {
        name: "Pandit Suresh Kumar",
        experience: "10+ years",
        language: "Hindi, English",
        rating: 4.8
      }
    }
    // Add details for other pujas...
  };

  const puja = pujaDetails[pujaId] || pujaDetails[1]; // Fallback to first puja

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 font-sans">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🕉️</div>
        <div className="absolute bottom-10 right-10 text-6xl">🙏</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">🔱</div>
        <div className="absolute bottom-1/3 right-1/3 text-5xl">☸️</div>
      </div>

      {/* Subheader Section */}
      <div className="relative py-20 md:py-24 bg-gradient-to-r from-red-600 to-red-700 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${puja.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            {/* Spiritual Header */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-amber-300/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-amber-200 font-semibold text-sm tracking-wide">
                ॐ नमः शिवाय • Divine Puja Services
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{puja.title}</h1>
            <nav className="flex justify-center items-center space-x-2 text-base sm:text-lg">
              <Link to="/" className="text-amber-200 hover:text-white transition-colors">Home</Link>
              <span className="text-white">/</span>
              <Link to="/puja" className="text-amber-200 hover:text-white transition-colors">Sacred Pujas</Link>
              <span className="text-white">/</span>
              <span className="text-white font-semibold">{puja.title}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Puja Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border-2 border-amber-200">
              <img 
                src={puja.image} 
                alt={puja.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full font-semibold border border-red-200">
                    {puja.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i}
                          className={`text-sm ${
                            i < Math.floor(puja.rating) 
                              ? "text-red-500 fill-current" 
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 font-semibold">{puja.rating}</span>
                    <span className="text-gray-500">({puja.reviews} reviews)</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  About {puja.title}
                </h2>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {puja.longDescription}
                </p>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <FaHeart className="text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Benefits of {puja.title}</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {puja.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <FaAward className="text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Puja Includes</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {puja.itemsIncluded.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center border border-red-200">
                          <FaStar className="text-red-600 text-xs" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pandit Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-6">
                <FaShieldAlt className="text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900">About the Priest</h3>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-2xl font-bold border-2 border-amber-300">
                  {puja.panditDetails.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{puja.panditDetails.name}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-3 p-2 bg-amber-50 rounded-lg border border-amber-200">
                      <FaStar className="text-red-500" />
                      <span className="text-gray-700">{puja.panditDetails.experience} Experience</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-amber-50 rounded-lg border border-amber-200">
                      <FaStar className="text-red-500" />
                      <span className="text-gray-700">Rating: {puja.panditDetails.rating}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-amber-50 rounded-lg border border-amber-200">
                      <FaStar className="text-red-500" />
                      <span className="text-gray-700">Languages: {puja.panditDetails.language}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 bg-amber-50 p-4 rounded-lg border border-amber-200">
                    Certified Vedic priest with extensive experience in performing traditional pujas with authentic rituals and mantras.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg sticky top-8 p-6 border-2 border-amber-200">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-gray-900">{puja.price}</span>
                  <span className="text-xl text-gray-500 line-through">{puja.originalPrice}</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold border border-green-200">
                    15% OFF
                  </span>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    <FaClock className="text-red-600" />
                    <span>{puja.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    <FaCalendar className="text-red-600" />
                    <span>Flexible Dates</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 border border-amber-300 transform hover:scale-105">
                  Book Now - {puja.price}
                </button>
                
                <button className="w-full flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 border border-green-300">
                  <FaWhatsapp className="text-xl" />
                  Book via WhatsApp
                </button>
                
                <button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 border border-blue-300">
                  <FaPhone className="text-lg" />
                  Call for Booking
                </button>
              </div>

              <div className="border-t border-amber-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaAward className="text-red-600" />
                  <h4 className="font-bold text-gray-900">Why Book With Us?</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center border border-green-200">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Authentic Vedic Rituals</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center border border-green-200">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Experienced Certified Priests</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center border border-green-200">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Flexible Scheduling</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center border border-green-200">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">All Puja Materials Included</span>
                  </div>
                </div>
              </div>

              {/* Spiritual Note */}
              <div className="mt-6 p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg text-white border border-amber-300">
                <div className="text-center">
                  <div className="text-lg font-bold mb-1">ॐ नमः शिवाय</div>
                  <p className="text-amber-200 text-sm">
                    Divine blessings for your spiritual journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-80 right-20 w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
      <div className="absolute top-1/3 right-40 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default PujaDetailsPage;