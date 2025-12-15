import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaPlus } from "react-icons/fa";
import { GiLotus, GiMeditation } from "react-icons/gi";

const VolunteersSection = () => {
  const volunteersData = [
    {
      name: "Yogesh Sharma",
      role: "Head Priest",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=500&fit=crop",
      experience: "15+ Years",
      specialty: "Vedic Rituals"
    },
    {
      name: "Mukesh Singh",
      role: "Temple Manager",
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=400&h=500&fit=crop",
      experience: "12+ Years",
      specialty: "Community Service"
    },
    {
      name: "Priya Patel",
      role: "Spiritual Guide",
      image: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=400&h=500&fit=crop",
      experience: "8+ Years",
      specialty: "Meditation"
    },
    {
      name: "Rajesh Kumar",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=500&fit=crop",
      experience: "10+ Years",
      specialty: "Festival Management"
    },
  ];

  const testimonials = [
    {
      text: "Serving at this temple has transformed my life. The divine energy of Lord Shiva guides our every action and brings peace to all devotees.",
      author: "Ravi Verma",
      role: "Devotee for 5 years"
    },
    {
      text: "The volunteers here are truly dedicated to preserving our ancient traditions. Their selfless service inspires everyone in the community.",
      author: "Sunita Devi",
      role: "Regular Visitor"
    },
    {
      text: "Through temple service, I've found my spiritual purpose. The blessings of Lord Shiva have brought immense peace to my family.",
      author: "Amit Joshi",
      role: "Volunteer for 3 years"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden font-bebas">
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
            Our <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">Dedicated Team</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet our devoted volunteers who work selflessly to maintain the sacred atmosphere 
            and serve the community with Lord Shiva's blessings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Testimonials Section */}
          <div className="space-y-8">
            <div className="text-left">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Voices of <span className="text-red-700">Devotion</span>
              </h3>
              <p className="text-gray-600 text-lg">
                Hear from our community members and volunteers about their spiritual 
                journey and experiences at our temple.
              </p>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-red-600 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GiLotus className="text-red-600 text-2xl mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Join Us CTA */}
            <motion.div 
              className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-6 text-white shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <GiMeditation className="text-4xl text-amber-300" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Join Our Spiritual Family</h4>
                  <p className="text-red-100">Become a volunteer and serve with devotion</p>
                </div>
              </div>
              <a 
                href="/volunteer" 
                className="mt-4 inline-flex items-center bg-white text-red-700 px-6 py-3 rounded-xl font-bold hover:bg-amber-50 transition-all duration-300"
              >
                Volunteer Now
              </a>
            </motion.div>
          </div>

          {/* Right: Volunteers Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {volunteersData.map((volunteer, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden relative group hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={volunteer.image}
                    alt={volunteer.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {volunteer.experience}
                  </div>

                  {/* Social Icons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <motion.a
                      href="#"
                      className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaPlus />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaFacebookF />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaTwitter />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaInstagram />
                    </motion.a>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 text-center">
                  <p className="text-red-600 font-semibold text-sm mb-1">{volunteer.role}</p>
                  <h5 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                    {volunteer.name}
                  </h5>
                  <p className="text-gray-600 text-sm mb-3">{volunteer.specialty}</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full mx-auto"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sacred Mantra Footer */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-amber-200 shadow-lg">
            <div className="text-red-700 text-2xl font-devanagari font-bold">
              ॐ नमः शिवाय
            </div>
            <p className="text-gray-600 text-sm mt-1">
              Serving with devotion, blessed by Lord Shiva
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

export default VolunteersSection;