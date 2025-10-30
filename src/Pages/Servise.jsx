import React, { useState } from "react";
import { FaArrowRight, FaPhone, FaSearch, FaOm, FaHands, FaPray, FaDonate, FaBook, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const [email, setEmail] = useState("");

  // Shiva-focused Services data
  const services = [
    {
      id: 1,
      icon: <FaHome className="text-3xl" />,
      title: "Shiva Darshan",
      description: "Experience divine darshan of Lord Shiva with special aarti and sacred rituals at our temple.",
      link: "/darshan"
    },
    {
      id: 2,
      icon: <FaPray className="text-3xl" />,
      title: "Rudrabhishek",
      description: "Sacred bathing of Shiva Linga with milk, honey, water and bilva patra for divine blessings.",
      link: "/rudrabhishek"
    },
    {
      id: 3,
      icon: <FaDonate className="text-3xl" />,
      title: "Prasad Distribution",
      description: "Receive blessed prasad after puja ceremonies for spiritual nourishment and divine grace.",
      link: "/prasad"
    },
    {
      id: 4,
      icon: <FaHands className="text-3xl" />,
      title: "Vastu Puja",
      description: "Sacred rituals for home and business purification according to Vastu Shastra principles.",
      link: "/vastu-puja"
    },
    {
      id: 5,
      icon: <FaOm className="text-3xl" />,
      title: "Mantra Jaap",
      description: "Chanting of powerful Shiva mantras including Panchakshari and Maha Mrityunjay.",
      link: "/mantra-jaap"
    },
    {
      id: 6,
      icon: <FaOm className="text-3xl" />, // FaMeditation replaced with FaOm
      title: "Meditation Guidance",
      description: "Learn authentic meditation techniques from Shiva traditions for inner peace and spiritual growth.",
      link: "/meditation"
    }
  ];

  // Spiritual partners data
  const partners = [
    {
      name: "Vedic Foundation",
      description: "Preserving ancient Vedic traditions"
    },
    {
      name: "Yoga Ashram",
      description: "Spiritual yoga and meditation center"
    },
    {
      name: "Dharma Seva",
      description: "Community service organization"
    },
    {
      name: "Sanskrit Academy",
      description: "Traditional Sanskrit education"
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

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
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-amber-300 font-semibold text-sm tracking-wide">
                ॐ नमः शिवाय • Divine Services
              </p>
            </div>
            <h1 className="text-5xl font-bold mb-4">Spiritual Services</h1>
            <nav className="flex justify-center items-center space-x-2 text-lg">
              <Link to="/" className="text-amber-200 hover:text-white transition-colors">Home</Link>
              <span className="text-white">/</span>
              <span className="text-white font-semibold">Spiritual Services</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">Divine Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience authentic Vedic rituals and spiritual guidance under the divine blessings of Lord Shiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-amber-200 hover:border-red-300"
              >
                <Link to={service.link} className="block p-8 h-full">
                  {/* Service Icon */}
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <h5 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                      {service.title}
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-red-700 font-semibold group-hover:gap-4 transition-all duration-300 pt-4">
                      <span>Learn More</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Partners Section */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVjOC4yODQgMCAxNSA2LjcxNiAxNSAxNXMtNi43MTYgMTUtMTUgMTUtMTUtNi43MTYtMTUtMTUgNi43MTNiLTE1IDE1LTE1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-amber-300 font-semibold text-sm tracking-wide">
                Spiritual Partnerships
              </p>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Spiritual Partners</h2>
            <p className="text-amber-200 text-lg max-w-2xl mx-auto">
              Collaborating with authentic organizations to preserve and spread Vedic wisdom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FaOm className="text-white text-2xl" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{partner.name}</h4>
                <p className="text-amber-200 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <p className="text-amber-300 font-semibold text-sm tracking-wide">
                  ॐ नमः शिवाय
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Spiritual Guidance?
              </h2>
              <p className="text-amber-200 text-lg mb-8">
                Contact our experienced priests for personalized puja services and spiritual counseling
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-red-700 hover:bg-amber-50 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
                >
                  <FaPhone className="text-lg" />
                  Book a Service
                </Link>
                <Link
                  to="/puja"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-700 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                >
                  <FaPray className="text-lg" />
                  View All Pujas
                </Link>
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
            May Lord Shiva bless all services with divine energy and spiritual transformation
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
