import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPencilAlt, FaArrowRight, FaPhone, FaMapMarkerAlt, FaCreditCard, FaShieldAlt, FaCalendarAlt, FaClock, FaHeart, FaHandsHelping, FaAward } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    poojaWithSamagri: "",
    pujaType: "",
    preferredDate: "",
    preferredTime: ""
  });

  const contactInfo = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "ईमेल पता",
      description: "किसी भी समय हमें ईमेल भेजें",
      details: ["info@shivdhammandir.com", "support@shivdhammandir.com"],
      linkText: "ईमेल भेजें",
      gradient: "from-red-600 to-red-700"
    },
    {
      id: 2,
      icon: FaPhone,
      title: "फोन नंबर",
      description: "तत्काल सहायता के लिए कॉल करें",
      details: ["+91 98765 43210", "+91 98765 43211"],
      linkText: "अभी कॉल करें",
      gradient: "from-red-600 to-red-700"
    },
    {
      id: 3,
      icon: FaMapMarkerAlt,
      title: "हमारा पता",
      description: "हमारे मंदिर में आएं",
      details: ["शिवधाम मार्ग", "वृंदावन, उत्तर प्रदेश"],
      linkText: "लोकेशन देखें",
      gradient: "from-red-600 to-red-700"
    }
  ];

  const pujaServices = [
    "कृपया पूजा चुनें",
    "गणेश पूजा",
    "लक्ष्मी पूजा", 
    "सत्यनारायण पूजा",
    "नवरात्रि पूजा",
    "महामृत्युंजय पूजा",
    "गृह प्रवेश पूजा",
    "वास्तु पूजा",
    "कार्यालय/व्यवसाय पूजा",
    "विवाह पूजा",
    "जन्मदिन पूजा",
    "अन्य विशेष पूजा"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      poojaWithSamagri: "",
      pujaType: "",
      preferredDate: "",
      preferredTime: ""
    });
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
      <div className="relative py-24 bg-gradient-to-r from-red-800 via-red-700 to-red-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-devanagari">हमसे संपर्क करें</h1>
            <nav className="flex justify-center items-center space-x-2 text-lg">
              <a href="/" className="text-amber-200 hover:text-white transition-colors">मुख्य पृष्ठ</a>
              <span className="text-white">/</span>
              <span className="text-white font-semibold font-devanagari">संपर्क करें</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-amber-200">
                <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  <p className="text-red-700 font-semibold text-sm tracking-wide">
                    ॐ नमः शिवाय • भगवान शिव की कृपा
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-2 font-devanagari">हमें संदेश भेजें</h2>
                <p className="text-gray-600 mb-8 font-devanagari">हम जल्द से जल्द आपको जवाब देंगे</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name Input */}
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-red-600">
                        <FaUser className="text-lg" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="पूरा नाम *"
                        className="w-full bg-amber-50 border border-amber-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 font-devanagari"
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-red-600">
                        <FaEnvelope className="text-lg" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ईमेल पता *"
                        className="w-full bg-amber-50 border border-amber-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="relative mb-6">
                    <div className="absolute left-4 top-4 text-red-600">
                      <FaPencilAlt className="text-lg" />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="विषय"
                      className="w-full bg-amber-50 border border-amber-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 font-devanagari"
                    />
                  </div>

                  {/* Book Pandit Section */}
                  <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-300 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-devanagari">पंडित जी बुक करें</h3>
                    
                    {/* Puja With Samagri */}
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-3 font-medium font-devanagari">
                        पूजा सामग्री के साथ:
                      </label>
                      <div className="flex gap-6">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="poojaWithSamagri"
                            value="yes"
                            onChange={handleInputChange}
                            className="mr-2 text-red-600 focus:ring-red-600"
                          />
                          <span className="text-gray-700 font-devanagari">हाँ</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="poojaWithSamagri"
                            value="no"
                            onChange={handleInputChange}
                            className="mr-2 text-red-600 focus:ring-red-600"
                          />
                          <span className="text-gray-700 font-devanagari">नहीं</span>
                        </label>
                      </div>
                    </div>

                    {/* Puja Type Dropdown */}
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2 font-medium font-devanagari">
                        पूजा का प्रकार चुनें:
                      </label>
                      <select
                        name="pujaType"
                        value={formData.pujaType}
                        onChange={handleInputChange}
                        className="p-4 rounded-lg bg-white text-gray-800 w-full border border-amber-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 shadow-sm font-devanagari"
                      >
                        {pujaServices.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <div className="absolute left-4 top-4 text-red-600">
                          <FaCalendarAlt className="text-lg" />
                        </div>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          placeholder="पसंदीदा तारीख"
                          className="w-full bg-white border border-amber-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 font-devanagari"
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute left-4 top-4 text-red-600">
                          <FaClock className="text-lg" />
                        </div>
                        <input
                          type="time"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          placeholder="पसंदीदा समय"
                          className="w-full bg-white border border-amber-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 font-devanagari"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="relative mb-8">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="अपना संदेश लिखें *"
                      rows="6"
                      className="w-full bg-amber-50 border border-amber-200 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 resize-none font-devanagari"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-devanagari"
                    >
                      अनुरोध भेजें
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Online Donation Box */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg p-6 md:p-8 text-white border-2 border-amber-400">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-300">
                  <FaCreditCard className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2 font-devanagari">ऑनलाइन दान</h3>
                <p className="text-amber-200 font-devanagari">हमारे मंदिर के कार्यों में सहयोग करें</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 border border-amber-300/30">
                  <div className="flex items-center gap-3 mb-2">
                    <FaShieldAlt className="text-amber-300" />
                    <h4 className="font-semibold font-devanagari">सुरक्षित भुगतान</h4>
                  </div>
                  <p className="text-amber-100 text-sm font-devanagari">100% सुरक्षित और एन्क्रिप्टेड लेनदेन</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4 border border-amber-300/30">
                  <div className="flex items-center gap-3 mb-2">
                    <FaHeart className="text-amber-300" />
                    <h4 className="font-semibold font-devanagari">शीघ्र प्रक्रिया</h4>
                  </div>
                  <p className="text-amber-100 text-sm font-devanagari">तत्काल पुष्टि और रसीद</p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-amber-300/30">
                  <div className="flex items-center gap-3 mb-2">
                    <FaAward className="text-amber-300" />
                    <h4 className="font-semibold font-devanagari">कर लाभ</h4>
                  </div>
                  <p className="text-amber-100 text-sm font-devanagari">कर कटौती के लिए पात्र</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-amber-200 mb-4">
                <FaShieldAlt className="text-lg" />
                <span className="text-sm font-devanagari">SSL सुरक्षित भुगतान</span>
              </div>

              <button className="w-full bg-amber-400 text-red-700 hover:bg-amber-300 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-devanagari border-2 border-amber-300">
                अभी दान करें
              </button>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-white/10 rounded-xl border border-amber-300/30">
                <div className="flex items-center gap-2 mb-2">
                  <FaHandsHelping className="text-amber-300" />
                  <h4 className="font-semibold font-devanagari">तत्काल सहायता चाहिए?</h4>
                </div>
                <p className="text-amber-100 text-sm mb-3 font-devanagari">
                  तत्काल पूजा बुकिंग के लिए सीधे कॉल करें।
                </p>
                <p className="text-white font-bold text-lg">📞 +91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <p className="text-red-700 font-semibold text-sm tracking-wide">
                ॐ नमः शिवाय • हमसे जुड़ें
              </p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-devanagari">हमसे संपर्क करने के तरीके</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-devanagari">भक्ति और सेवा के लिए हमेशा आपकी सेवा में</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item) => (
              <div 
                key={item.id}
                className="text-center bg-amber-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-amber-200 hover:border-red-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-300`}>
                  <item.icon className="text-white text-xl" />
                </div>

                <h5 className="text-xl font-bold text-gray-900 mb-3 font-devanagari">
                  {item.title}
                </h5>

                <p className="text-gray-600 text-sm mb-4 font-devanagari">
                  {item.description}
                </p>

                <div className="space-y-1">
                  {item.details.map((detail, index) => (
                    <p key={index} className="text-gray-800 font-medium font-devanagari">{detail}</p>
                  ))}
                </div>

                <div className="mt-4">
                  <button className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center justify-center gap-2 mx-auto transition-colors duration-300 font-devanagari">
                    {item.linkText}
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-amber-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-devanagari">हमारा मंदिर ढूंढें</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-devanagari">आध्यात्मिक मार्गदर्शन और शांतिपूर्ण ध्यान के लिए हमसे मिलें</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-amber-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.862015559234!2d77.69631431505605!3d27.692944382798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736fd4056c7e0f%3A0x5a1b57c7e1d3b7a2!2sVrindavan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-96 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="शिवधाम मंदिर लोकेशन"
            ></iframe>
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

export default ContactPage;