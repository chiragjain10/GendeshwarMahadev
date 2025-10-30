import React from "react";
import { motion } from "framer-motion";
import { GiTempleGate, GiPrayerBeads, GiFoodTruck } from "react-icons/gi";

const DonationSection = () => {
  const donations = [
    {
      title: "Temple Maintenance",
      description: "Help us maintain the sacred Shiva temple and conduct daily rituals for devotees.",
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=400&h=300&fit=crop",
      icon: <GiTempleGate className="text-3xl" />,
      raised: 52384,
      goal: 85000,
      link: "/donation",
      color: "from-red-600 to-red-700"
    },
    {
      title: "Spiritual Education",
      description: "Support our programs for teaching Vedic knowledge and spiritual practices to children.",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
      icon: <GiPrayerBeads className="text-3xl" />,
      raised: 49444,
      goal: 78000,
      link: "/donation",
      color: "from-amber-600 to-amber-700"
    },
    {
      title: "Food for Devotees",
      description: "Provide nutritious meals to devotees and underprivileged families visiting the temple.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      icon: <GiFoodTruck className="text-3xl" />,
      raised: 78334,
      goal: 96400,
      link: "/donation",
      color: "from-orange-600 to-orange-700"
    },
  ];

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
              ॐ नमः शिवाय • Divine Service
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Support Our <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">Sacred Mission</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your generous donations help us preserve ancient traditions and serve the community through spiritual activities.
          </p>
        </div>

        {/* Donation Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {donations.map((donation, index) => {
            const progressPercent = Math.floor((donation.raised / donation.goal) * 100);
            
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-amber-100 hover:border-amber-200"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                
                {/* Image with Overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={donation.image}
                    alt={donation.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Divine+Service";
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 p-3 bg-gradient-to-r ${donation.color} text-white rounded-2xl shadow-lg`}>
                    {donation.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                    {donation.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {donation.description}
                  </p>

                  {/* Progress Section */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-700 mb-2">
                      <span className="font-semibold">Raised: ₹{donation.raised.toLocaleString()}</span>
                      <span className="font-semibold">Goal: ₹{donation.goal.toLocaleString()}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${donation.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progressPercent}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                    
                    {/* Progress Percentage */}
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">{progressPercent}% Completed</span>
                      <span className="text-sm font-semibold text-red-700">
                        ₹{(donation.goal - donation.raised).toLocaleString()} needed
                      </span>
                    </div>
                  </div>

                  {/* Donate Button */}
                  <motion.a
                    href={donation.link}
                    className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${donation.color} hover:shadow-xl text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 group/btn`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Donate Now</span>
                    <motion.span
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-8 text-white shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Every Donation Makes a Difference
            </h3>
            <p className="text-red-100 mb-6 text-lg">
              Your support helps us continue our spiritual services and community programs
            </p>
            <a 
              href="/donate" 
              className="inline-flex items-center bg-white text-red-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View All Causes
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
              May Lord Shiva bless you for your generosity
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

export default DonationSection;