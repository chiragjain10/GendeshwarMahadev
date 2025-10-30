import React, { useState } from "react";
import { 
  FaSearch, 
  FaCalendar, 
  FaClock, 
  FaMapMarkerAlt, 
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaPray,
  FaOm,
  FaHands
} from "react-icons/fa";
import { Link } from "react-router-dom";

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Shiva Temple Events data
  const events = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=500&h=300&fit=crop",
      date: { day: "15", month: "Mar'25" },
      title: "Maha Shivratri Grand Celebration",
      description: "Join us for the sacred night of Lord Shiva with special Rudrabhishek, all-night bhajans, and divine meditation sessions.",
      time: "Friday (6:00 PM - 6:00 AM)",
      location: "Shiva Temple Main Hall",
      category: "Festival"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=500&h=300&fit=crop",
      date: { day: "25", month: "Dec'24" },
      title: "Shravan Somvar Special Puja",
      description: "Special Monday worship during holy Shravan month with bilva patra offerings and Shiva mantra chanting.",
      time: "Monday (7:00 AM - 12:00 PM)",
      location: "Shiva Temple Sanctum",
      category: "Puja"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=500&h=300&fit=crop",
      date: { day: "13", month: "Jan'25" },
      title: "Pradosh Vrat Celebration",
      description: "Evening worship dedicated to Lord Shiva on Trayodashi tithi with special aarti and prasad distribution.",
      time: "Monday (5:30 PM - 7:30 PM)",
      location: "Temple Courtyard",
      category: "Vrat"
    }
  ];

  const recentEvents = [
    {
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=80&h=80&fit=crop",
      title: "Rudrabhishek performed with great devotion",
      date: "Dec 8, 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=80&h=80&fit=crop",
      title: "Weekly Shiva Sahasranama chanting session",
      date: "Dec 1, 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=80&h=80&fit=crop",
      title: "Special havan for peace and prosperity",
      date: "Nov 24, 2024"
    }
  ];

  const categories = [
    { name: "Daily Puja", count: 365, icon: FaPray },
    { name: "Festivals", count: 24, icon: FaOm },
    { name: "Meditation", count: 52, icon: FaHands },
    { name: "Special Events", count: 12, icon: FaCalendar },
  ];

  const templeImages = [
    "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=120&h=120&fit=crop",
    "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=120&h=120&fit=crop",
    "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=120&h=120&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=120&h=120&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=120&h=120&fit=crop"
  ];

  const spiritualTopics = [
    "Rudrabhishek", "Shiva Mantra", "Meditation", "Puja", "Dharma", "Bhajan", "Havan", "Prasad"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50  font-bebas">

      {/* Header Section */}
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
                ॐ नमः शिवाय • Divine Events
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Shiva Temple Events</h1>
            <p className="text-amber-200 text-lg mb-4 max-w-2xl mx-auto">
              Join us for sacred celebrations, spiritual discourses, and divine ceremonies
            </p>
            <nav className="flex justify-center items-center space-x-2 text-base sm:text-lg">
              <Link to="/" className="text-amber-200 hover:text-white transition-colors">Home</Link>
              <span className="text-white">/</span>
              <span className="text-white font-semibold">Events</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            {/* Left Side - Events List */}
            <div className="lg:w-2/3">
              <div className="space-y-6 md:space-y-8">
                {events.map((event) => (
                  <Link 
                    key={event.id} 
                    to={`/event/${event.id}`} 
                    className="block hover:no-underline"
                  >
                    <article className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group border-2 border-amber-200">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 relative">
                          <div className="overflow-hidden">
                            <img 
                              src={event.image} 
                              alt={event.title}
                              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                e.target.src = "https://via.placeholder.com/500x300/DC2626/FFFFFF?text=Shiva+Event";
                              }}
                            />
                          </div>

                          {/* Date Badge */}
                          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-3 text-center shadow-lg">
                            <span className="block text-xl font-bold">{event.date.day}</span>
                            <span className="text-xs font-semibold">{event.date.month}</span>
                          </div>

                          {/* Category Badge */}
                          <div className="absolute top-3 right-3">
                            <span className="bg-white/90 backdrop-blur-sm text-red-700 text-xs font-semibold px-3 py-1 rounded-full border border-red-200">
                              {event.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:w-3/5 p-4 sm:p-5 md:p-6">
                          <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                            {event.title}
                          </h5>
                          
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                            {event.description}
                          </p>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-gray-700 text-sm">
                              <FaClock className="text-red-600" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 text-sm">
                              <FaMapMarkerAlt className="text-red-600" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          <button className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold py-2 px-5 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                            Attend Event 
                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}

                {/* Pagination */}
                <div className="flex justify-center mt-8 md:mt-12">
                  <nav className="flex items-center space-x-2">
                    <button className="w-10 h-10 bg-white border border-amber-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors">
                      <FaChevronLeft />
                    </button>
                    <button className="w-10 h-10 bg-red-600 text-white border border-red-600 rounded-lg flex items-center justify-center font-semibold">1</button>
                    <button className="w-10 h-10 bg-white border border-amber-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors">2</button>
                    <button className="w-10 h-10 bg-white border border-amber-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors">
                      <FaChevronRight />
                    </button>
                  </nav>
                </div>
              </div>
            </div>

            {/* Right Side - Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              
              {/* Search */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-200">
                <h5 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  <FaSearch className="text-red-600" />
                  Search Events
                </h5>
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Shiva events..."
                    className="w-full bg-amber-50 border border-amber-300 rounded-lg py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 hover:text-red-700"
                  >
                    <FaSearch />
                  </button>
                </form>
              </div>

              {/* Recent Events */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-200">
                <h5 className="font-bold text-gray-900 text-lg mb-4">Recent Events</h5>
                <ul className="space-y-4">
                  {recentEvents.map((event, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h6 className="font-medium text-gray-900 text-sm leading-tight mb-1 group-hover:text-red-700 transition-colors line-clamp-2">
                          {event.title}
                        </h6>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <FaCalendar className="text-red-600" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-200">
                <h5 className="font-bold text-gray-900 text-lg mb-4">Event Categories</h5>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-b-0">
                      <span className="flex items-center gap-2 text-gray-700 text-sm">
                        <category.icon className="text-red-600" />
                        {category.name}
                      </span>
                      <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Temple Gallery */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-200">
                <h5 className="font-bold text-gray-900 text-lg mb-4">Temple Gallery</h5>
                <div className="grid grid-cols-3 gap-2">
                  {templeImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`Shiva Temple ${index + 1}`}
                      className="w-full h-20 object-cover rounded-lg hover:scale-105 transition-transform border border-amber-200"
                    />
                  ))}
                </div>
              </div>

              {/* Spiritual Topics */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-200">
                <h5 className="font-bold text-gray-900 text-lg mb-4">Spiritual Topics</h5>
                <div className="flex flex-wrap gap-2">
                  {spiritualTopics.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-xs border border-red-200 hover:bg-red-600 hover:text-white cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sacred Mantra Footer */}
      <div className="bg-gradient-to-r from-red-700 to-red-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-amber-300 text-3xl font-devanagari font-bold mb-4">
            ॐ नमः शिवाय
          </div>
          <p className="text-amber-200 text-lg">
            May Lord Shiva bless all events with divine energy and peace
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;