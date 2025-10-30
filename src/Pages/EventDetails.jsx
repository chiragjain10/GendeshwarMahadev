import React from "react";
import { useParams, Link } from "react-router-dom";
import { 
  FaCalendar, 
  FaClock, 
  FaMapMarkerAlt, 
  FaUser, 
  FaRupeeSign,
  FaWhatsapp,
  FaPhone,
  FaShare,
  FaArrowLeft,
  FaUsers,
  FaStar,
  FaHeart,
  FaAward,
  FaHandsHelping
} from "react-icons/fa";

const EventDetails = () => {
  const { eventId } = useParams();

  // Event details data
  const eventDetails = {
    1: {
      id: 1,
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=800&h=400&fit=crop",
      title: "Maha Shivratri Night Festival",
      description: "Join us for this unforgettable night of devotion and spiritual awakening",
      longDescription: `
        <p>Experience the divine energy of Lord Shiva at this special Maha Shivratri festival. This sacred night is dedicated to worship, meditation, and spiritual growth.</p>
        
        <h3>Key Highlights of the Program</h3>
        <ul>
          <li>Traditional Shiva Abhishekam with milk, honey, and Bilva leaves</li>
          <li>All-night Bhajan and Kirtan sessions</li>
          <li>Vedic chanting by renowned priests</li>
          <li>Meditation and Yoga sessions</li>
          <li>Prasad (holy offering) distribution</li>
          <li>Cultural performances</li>
        </ul>

        <h3>What to Expect</h3>
        <p>This event brings together devotees from all walks of life—to celebrate the Cosmic Dancer, Lord Shiva. The atmosphere is filled with positive energy and devotion.</p>
      `,
      date: "March 8, 2024",
      time: "7:00 PM - 6:00 AM",
      venue: "Shri Krishna Temple, Vrindavan",
      address: "Mandir Street, Vrindavan, Uttar Pradesh",
      organizer: "Shri Krishna Seva Trust",
      price: "Free",
      category: "Festival",
      availableSeats: 150,
      registered: 89,
      rating: 4.9,
      includes: [
        "Prasad and Food",
        "Worship materials",
        "Cultural program",
        "Meditation sessions"
      ]
    },
    2: {
      id: 2,
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=400&fit=crop",
      title: "Gita Jayanti Celebration",
      description: "Celebrate the birth of the Bhagavad Gita with spiritual discourses",
      longDescription: `
        <p>Join us for Gita Jayanti, the auspicious day when Lord Krishna revealed the divine knowledge of the Bhagavad Gita to Arjuna.</p>
        
        <h3>Key Highlights of the Program</h3>
        <ul>
          <li>Recitation and discourses on the Gita by spiritual leaders</li>
          <li>Interactive Q&A session on Gita teachings</li>
          <li>Cultural programs and Bhajans (devotional songs)</li>
          <li>Prasad distribution</li>
          <li>Book exhibition on spiritual literature</li>
        </ul>

        <h3>Special Features</h3>
        <p>Learn from experienced spiritual teachers how to apply the eternal wisdom of the Gita in modern life.</p>
      `,
      date: "December 11, 2024", // Corrected date for 2024
      time: "9:00 AM - 6:00 PM",
      venue: "Radha Krishna Temple, Delhi",
      address: "Connaught Place, New Delhi",
      organizer: "Gita Foundation",
      price: "₹500",
      category: "Spiritual",
      availableSeats: 200,
      registered: 145,
      rating: 4.8,
      includes: [
        "Lunch Prasad",
        "Gita book",
        "Course materials",
        "Certificate"
      ]
    },
    3: {
      id: 3,
      image: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=800&h=400&fit=crop",
      title: "Meditation Retreat Weekend",
      description: "Deepen your meditation practice on this transformative weekend retreat",
      longDescription: `
        <p>Immerse yourself in silence and meditation in this weekend retreat specifically designed for spiritual seekers.</p>
        
        <h3>Retreat Schedule</h3>
        <ul>
          <li>Morning Yoga and Pranayama</li>
          <li>Guided meditation sessions</li>
          <li>Silent walking meditation</li>
          <li>Spiritual discourses</li>
          <li>Nature walks and mindfulness practice</li>
        </ul>

        <h3>Benefits</h3>
        <p>This retreat will help you establish a consistent meditation practice and experience inner peace.</p>
      `,
      date: "January 15-16, 2024",
      time: "6:00 AM - 8:00 PM",
      venue: "Yoga Ashram, Rishikesh",
      address: "Swarg Ashram, Rishikesh, Uttarakhand",
      organizer: "Yoga Life Foundation",
      price: "₹2,500",
      category: "Meditation",
      availableSeats: 50,
      registered: 32,
      rating: 4.9,
      includes: [
        "Accommodation",
        "Vegetarian Meals",
        "Yoga Mat",
        "Course Materials"
      ]
    }
  };

  const event = eventDetails[eventId] || eventDetails[1];

  // Related events
  const relatedEvents = [
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=150&fit:crop",
      title: "Diwali Festival",
      date: "November 12, 2024",
      category: "Festival"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit:crop",
      title: "Holi Festival",
      date: "March 25, 2024",
      category: "Festival"
    }
  ];

  const shareEvent = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Event link copied to clipboard!');
    }
  };

  const registerForEvent = () => {
    alert(`Registration started for: ${event.title}`);
  };

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
      <div className="relative py-16 md:py-20 bg-gradient-to-r from-red-600 to-red-700 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${event.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <Link 
              to="/events"
              className="inline-flex items-center gap-2 text-amber-200 hover:text-white transition-colors mb-4 text-sm font-devanagari"
            >
              <FaArrowLeft className="text-xs" />
              Back to Events
            </Link>
            
            {/* Spiritual Header */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-amber-300/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-amber-200 font-semibold text-sm tracking-wide font-devanagari">
                Om Namah Shivaya • Spiritual Event
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight font-devanagari">
              {event.title}
            </h1>
            <p className="text-amber-200 text-lg mb-6 max-w-2xl mx-auto font-devanagari">
              {event.description}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <FaCalendar className="text-amber-300" />
                <span className="font-devanagari">{event.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <FaClock className="text-amber-300" />
                <span className="font-devanagari">{event.time}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <FaMapMarkerAlt className="text-amber-300" />
                <span className="font-devanagari">{event.venue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Main Event Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-amber-200">
                {/* Event Image */}
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                
                {/* Event Content */}
                <div className="p-6 md:p-8">
                  {/* Event Stats */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold font-devanagari border border-red-200">
                      {event.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaUsers className="text-red-600" />
                      <span className="text-sm font-devanagari">{event.registered} Registered</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaStar className="text-red-500" />
                      <span className="text-sm">{event.rating} Rating</span>
                    </div>
                  </div>

                  {/* Event Description */}
                  <div 
                    className="prose prose-lg max-w-none text-gray-700 mb-8 font-devanagari"
                    dangerouslySetInnerHTML={{ __html: event.longDescription }}
                  />

                  {/* What's Included */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <FaHeart className="text-red-600" />
                      <h3 className="text-xl font-bold text-gray-900 font-devanagari">What's Included</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {event.includes.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center border border-green-200">
                            <span className="text-green-600 text-xs">✓</span>
                          </div>
                          <span className="text-gray-700 font-medium font-devanagari">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Venue Details */}
                  <div className="border-t border-amber-200 pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FaMapMarkerAlt className="text-red-600" />
                      <h3 className="text-xl font-bold text-gray-900 font-devanagari">Venue Details</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-red-600" />
                        <div>
                          <p className="font-semibold text-gray-900 font-devanagari">{event.venue}</p>
                          <p className="text-gray-600 text-sm font-devanagari">{event.address}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaUser className="text-red-600" />
                        <div>
                          <p className="font-semibold text-gray-900 font-devanagari">Organizer</p>
                          <p className="text-gray-600 text-sm font-devanagari">{event.organizer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Registration & Details */}
            <div className="lg:w-1/3">
              <div className="space-y-6">
                
                {/* Registration Card */}
                <div className="bg-white rounded-2xl shadow-lg sticky top-8 p-6 border-2 border-amber-200">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      {event.price === "Free" ? (
                        <span className="text-3xl font-bold text-green-600 font-devanagari">FREE</span>
                      ) : (
                        <>
                          <span className="text-3xl font-bold text-gray-900">{event.price}</span>
                          <span className="text-lg text-gray-500 font-devanagari">per person</span>
                        </>
                      )}
                    </div>
                    
                    {/* Seats Available */}
                    <div className="bg-amber-50 rounded-lg p-4 mb-4 border border-amber-200">
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span className="text-gray-600 font-devanagari">Available Seats</span>
                        <span className="font-semibold text-gray-900">{event.availableSeats - event.registered} / {event.availableSeats}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-600 h-2 rounded-full" 
                          style={{ width: `${(event.registered / event.availableSeats) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 mb-6">
                    <button 
                      onClick={registerForEvent}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-amber-300 font-devanagari"
                    >
                      Register Now
                    </button>
                    
                    <button className="w-full flex items-center justify-center gap-3 bg-green-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 border border-green-300">
                      <FaWhatsapp className="text-xl" />
                      <span className="font-devanagari">Register via WhatsApp</span>
                    </button>
                    
                    <button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 border border-blue-300">
                      <FaPhone className="text-lg" />
                      <span className="font-devanagari">Register via Call</span>
                    </button>
                  </div>

                  {/* Share Event */}
                  <div className="border-t border-amber-200 pt-4">
                    <button 
                      onClick={shareEvent}
                      className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-red-600 transition-colors font-devanagari"
                    >
                      <FaShare className="text-sm" />
                      <span className="font-semibold">Share This Event</span>
                    </button>
                  </div>
                </div>

                {/* Spiritual Quote */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg p-6 text-white border-2 border-amber-300">
                  <div className="text-center">
                    <div className="text-2xl font-devanagari font-bold mb-2">
                      Om Namah Shivaya
                    </div>
                    <p className="text-amber-200 text-sm font-devanagari">
                      Panchakshari Mantra - The Divine Five-Syllable Mantra
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-3 text-amber-200">
                      <FaHandsHelping className="text-sm" />
                      <span className="text-xs font-devanagari">Grace of Lord Shiva</span>
                    </div>
                  </div>
                </div>

                {/* Related Events */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-200">
                  <div className="flex items-center gap-2 mb-4">
                    <FaAward className="text-red-600" />
                    <h5 className="font-bold text-gray-900 text-lg font-devanagari">Related Events</h5>
                  </div>
                  <div className="space-y-4">
                    {relatedEvents.map((relatedEvent) => (
                      <Link 
                        key={relatedEvent.id}
                        to={`/event/${relatedEvent.id}`}
                        className="flex items-start gap-3 group"
                      >
                        <img 
                          src={relatedEvent.image} 
                          alt={relatedEvent.title}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-amber-200"
                        />
                        <div className="flex-1 min-w-0">
                          <h6 className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-red-600 transition-colors line-clamp-2 font-devanagari">
                            {relatedEvent.title}
                          </h6>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <FaCalendar className="text-red-600" />
                            <span className="font-devanagari">{relatedEvent.date}</span>
                          </div>
                          <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded text-xs mt-1 border border-red-200 font-devanagari">
                            {relatedEvent.category}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Decorative Elements */}
      <div className="absolute top-80 right-20 w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
      <div className="absolute top-1/3 right-40 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default EventDetails;