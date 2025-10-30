import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaCalendar, FaOm, FaChurch, FaUser, FaArrowRight, FaMapMarkerAlt, FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("home");

  const timelineData = [
    {
      year: "2019",
      month: "JUN 1",
      title: "Establishment of Shiva Dham Temple",
      description: "Founded with the vision to spread Lord Shiva's divine teachings and provide a sacred space for spiritual growth and community service in Varanasi."
    },
    {
      year: "2020",
      month: "MAR 15",
      title: "First Maha Shivratri Celebration",
      description: "Successfully organized our first grand Maha Shivratri celebration with 1000+ devotees participating in the all-night vigil and Rudrabhishek."
    },
    {
      year: "2022",
      month: "AUG 1",
      title: "Expansion of Spiritual Services",
      description: "Introduced daily Rudrabhishek, meditation classes, and Vedic education programs to serve the growing spiritual needs of our community."
    },
    {
      year: "2024",
      month: "JAN 30",
      title: "Community Outreach Initiative",
      description: "Launched free food distribution and spiritual counseling services, extending Lord Shiva's blessings to underprivileged families."
    }
  ];

  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
      categories: ["Shiva", "Spiritual"],
      date: "Dec 15, 2024",
      title: "The Significance of Maha Shivratri Celebration",
      author: {
        image: "https://images.unsplash.com/photo-1589178849368-f43598d25e8e?w=100&h=100&fit=crop&crop=face",
        name: "Pandit Ravi"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=400&h=300&fit=crop",
      categories: ["Meditation", "Yoga"],
      date: "Dec 10, 2024",
      title: "Meditation Techniques from Shiva Scriptures",
      author: {
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        name: "Yogi Ananda"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=400&h=300&fit=crop",
      categories: ["Puja", "Rituals"],
      date: "Dec 5, 2024",
      title: "Complete Guide to Shiva Puja Rituals",
      author: {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        name: "Mukesh Kumar"
      }
    }
  ];

  const features = [
    {
      icon: "/assets/img/textures/icons/1.png",
      title: "Sacred Temple",
      description: "A divine space dedicated to Lord Shiva for worship, meditation, and spiritual enlightenment."
    },
    {
      icon: "/assets/img/textures/icons/2.png",
      title: "Daily Pujas",
      description: "Authentic Vedic rituals and Rudrabhishek performed daily by experienced priests."
    },
    {
      icon: "/assets/img/textures/icons/3.png",
      title: "Spiritual Guidance",
      description: "Expert guidance on meditation, yoga, and spiritual practices from learned gurus."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50  font-bebas">
      {/* Subheader Section */}
      <div className="relative py-32 bg-gradient-to-r from-red-800 via-red-700 to-red-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=1200&h=400&fit=crop)" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-4 backdrop-blur-sm">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-amber-300 font-semibold text-sm tracking-wide">
                ॐ नमः शिवाय • Divine Journey
              </p>
            </div>
            <h1 className="text-5xl font-bold mb-4">About Shiva Dham</h1>
            <nav className="flex justify-center items-center space-x-2 text-lg">
              <Link to="/" className="text-amber-200 hover:text-white transition-colors">Home</Link>
              <span className="text-white">/</span>
              <span className="text-white font-semibold">About Us</span>
            </nav>
          </div>
        </div>
      </div>

      {/* About Section 1 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Grid */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop" 
                    alt="Shiva Temple" 
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover border-2 border-amber-200"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=400&h=300&fit=crop" 
                    alt="Puja Ceremony" 
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover border-2 border-amber-200"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=400&h=300&fit=crop" 
                    alt="Meditation" 
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover border-2 border-amber-200"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop" 
                    alt="Community" 
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover border-2 border-amber-200"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    <p className="text-red-700 font-semibold text-sm tracking-wide">
                      SPIRITUAL HERITAGE
                    </p>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                    We Are Devotees of{" "}
                    <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">
                      Lord Shiva
                    </span>
                  </h2>
                </div>

                <blockquote className="text-xl text-gray-600 italic border-l-4 border-red-600 pl-6 py-2 bg-red-50 rounded-r-lg">
                  Dedicated to preserving ancient Vedic traditions and spreading the divine teachings of Lord Shiva for spiritual enlightenment and inner peace.
                </blockquote>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                        <FaOm className="text-white text-xl" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h5>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <p className="text-red-700 font-semibold text-sm tracking-wide">
                ॐ नमः शिवाय • Our Journey
              </p>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Spiritual <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">Timeline</span>
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start mb-12">
                <div className="md:w-2/5 md:text-right md:pr-8 mb-4 md:mb-0">
                  <div className="text-red-700 font-bold text-2xl">{item.year}</div>
                  <div className="text-gray-500 font-semibold">{item.month}</div>
                </div>
                
                <div className="flex items-center md:w-1/5 justify-center mb-4 md:mb-0 relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full border-4 border-white shadow-lg z-10"></div>
                  {index !== timelineData.length - 1 && (
                    <div className="absolute h-16 w-0.5 bg-red-200 mt-8"></div>
                  )}
                </div>
                
                <div className="md:w-2/5 md:pl-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100">
                    <h4 className="font-bold text-gray-900 text-xl mb-3">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    <p className="text-red-700 font-semibold text-sm tracking-wide">
                      OUR DIVINE MISSION
                    </p>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                    Spreading <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">Shiva's Teachings</span>
                  </h2>
                </div>

                <blockquote className="text-xl text-gray-600 italic border-l-4 border-red-600 pl-6 py-2 bg-red-50 rounded-r-lg">
                  Our mission is to share the eternal wisdom of Lord Shiva through authentic Vedic practices, community service, and spiritual guidance.
                </blockquote>

                {/* Tabs */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
                    {[
                      { id: "home", icon: <FaOm />, label: "Spiritual" },
                      { id: "profile", icon: <FaChurch />, label: "Temple" },
                      { id: "contact", icon: <FaUser />, label: "Community" }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
                          activeTab === tab.id
                            ? "bg-gradient-to-r from-red-700 to-red-800 text-white shadow-lg"
                            : "bg-white text-gray-500 hover:text-red-700 border border-amber-200 hover:border-red-300"
                        }`}
                      >
                        {tab.icon}
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 bg-white rounded-2xl shadow-lg border border-amber-100">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      At Shiva Dham, we are committed to preserving ancient Vedic traditions while making them accessible to modern seekers. 
                      Through daily pujas, meditation sessions, educational programs, and community service, we strive to create a sacred 
                      space where everyone can experience the transformative power of Lord Shiva's blessings and find their path to spiritual enlightenment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&h=500&fit=crop" 
                  alt="Shiva Dham Mission" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover border-2 border-amber-200"
                />
                {/* Sacred Mantra Overlay */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-700 to-red-800 text-white p-6 rounded-2xl shadow-2xl">
                  <div className="text-2xl font-devanagari font-bold">ॐ नमः शिवाय</div>
                  <p className="text-amber-200 text-sm mt-1">Divine Blessings</p>
                </div>
              </div>
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

export default AboutPage;