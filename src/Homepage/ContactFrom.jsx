import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    subject: "",
    email: "",
    message: "",
    poojaWithSamagri: "",
    pujaType: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
  };

  const pujaServices = [
    "Please choose an option",
    "Maha Shivratri Puja",
    "Rudrabhishek",
    "Shravan Somvar Puja",
    "Pradosh Vrat Puja",
    "Lingashtakam Path",
    "Shiva Sahasranama",
    "Maha Mrityunjay Jaap",
    "Laghu Rudra",
    "Maha Rudra",
    "Ati Rudra",
    "Grah Shanti Puja",
    "Vastu Puja",
    "Wedding Ceremony",
    "Other Special Puja"
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      info: "+91 98765 43210",
      subtitle: "Mon-Sun: 6 AM - 10 PM"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      info: "shivatemple@divine.com",
      subtitle: "We reply within 24 hours"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Temple",
      info: "Shiv Dham, Varanasi",
      subtitle: "Uttar Pradesh, India"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Temple Hours",
      info: "5:00 AM - 9:00 PM",
      subtitle: "Open all days"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 font-sans">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🕉️</div>
        <div className="absolute bottom-10 right-10 text-6xl">🙏</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">🔱</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <p className="text-red-700 font-semibold text-sm tracking-wide">
                ॐ नमः शिवाय • Divine Connection
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">Divine Touch</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Connect with us for spiritual guidance, puja services, or to experience the divine blessings of Lord Shiva
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Form Section */}
            <div className="flex-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name *"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                    className="p-4 rounded-xl bg-white placeholder-gray-500 text-gray-800 w-full border-2 border-amber-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 shadow-lg"
                  />
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name *"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                    className="p-4 rounded-xl bg-white placeholder-gray-500 text-gray-800 w-full border-2 border-amber-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 shadow-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-4 rounded-xl bg-white placeholder-gray-500 text-gray-800 w-full border-2 border-amber-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 shadow-lg"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="p-4 rounded-xl bg-white placeholder-gray-500 text-gray-800 w-full border-2 border-amber-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 shadow-lg"
                  />
                </div>

                {/* Book Pandit Section */}
                <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl border-2 border-amber-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Book <span className="text-red-700">Pandit</span> Services
                  </h3>

                  {/* Puja With Samagri */}
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-4 font-semibold text-lg">Pooja With Samagri:</label>
                    <div className="flex gap-8">
                      <label className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="poojaWithSamagri"
                          value="yes"
                          onChange={handleChange}
                          className="w-5 h-5 text-red-700 focus:ring-red-700"
                        />
                        <span className="text-gray-700 font-medium">Yes</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="poojaWithSamagri"
                          value="no"
                          onChange={handleChange}
                          className="w-5 h-5 text-red-700 focus:ring-red-700"
                        />
                        <span className="text-gray-700 font-medium">No</span>
                      </label>
                    </div>
                  </div>

                  {/* Puja Type Dropdown */}
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-3 font-semibold text-lg">Select Puja Type:</label>
                    <select
                      name="pujaType"
                      value={formData.pujaType}
                      onChange={handleChange}
                      className="p-4 rounded-xl bg-white text-gray-800 w-full border-2 border-amber-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 shadow-lg"
                    >
                      {pujaServices.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-3 font-semibold">Preferred Date:</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="p-4 rounded-xl bg-white text-gray-800 w-full border-2 border-amber-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 shadow-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-3 font-semibold">Preferred Time:</label>
                      <input
                        type="time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="p-4 rounded-xl bg-white text-gray-800 w-full border-2 border-amber-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your Spiritual Message *"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="p-4 rounded-xl bg-white placeholder-gray-500 text-gray-800 w-full border-2 border-amber-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 shadow-lg"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-2 justify-center shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Submit Spiritual Request
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex-1">
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-2xl border-2 border-amber-200">
                
                {/* Contact Info Cards */}
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Contact <span className="text-red-700">Information</span>
                </h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-amber-100 rounded-xl border border-amber-200 hover:bg-amber-200 transition-all duration-300">
                      <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-red-700 font-bold">{item.info}</p>
                        <p className="text-gray-600 text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sacred Mantra */}
                <div className="text-center p-6 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl text-white shadow-xl">
                  <div className="text-3xl font-devanagari font-bold mb-2">
                    ॐ नमः शिवाय
                  </div>
                  <p className="text-red-100">
                    May Lord Shiva bless your journey
                  </p>
                </div>

                {/* Emergency Contact */}
                <div className="mt-6 p-4 bg-amber-100 rounded-xl border border-amber-300 text-center">
                  <h4 className="font-bold text-gray-900 mb-2">Urgent Spiritual Help?</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Call us directly for immediate puja bookings
                  </p>
                  <p className="bg-gradient-to-r from-red-700 to-red-800 text-white px-4 py-2 rounded-lg font-bold text-lg">
                    📞 +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sacred Mantra Footer */}
          <div className="text-center mt-16">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-amber-200 shadow-lg">
              <div className="text-red-700 text-2xl font-devanagari font-bold">
                ॐ नमः शिवाय
              </div>
              <p className="text-gray-600 text-sm mt-1">
                Your spiritual journey begins with a single step
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-red-500 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
    </section>
  );
};

export default ContactFormSection;