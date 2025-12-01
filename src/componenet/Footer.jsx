import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaOm } from 'react-icons/fa';

const Footer = () => {
  const [lang, setLang] = React.useState('en');

  const content = {
    en: {
      description: "your premier online platform for booking experienced Pandit ji to officiate Pooja ceremonies across various events.",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About",
      pujaServices: "Puja Services",
      gallery: "Gallery",
      contact: "Contact",
      contactUs: "Would you have any enquiries. Please feel free to contact us",
      email: "info@gendeshwarmahadev.com",
      phone: "+919837970022",
      address: "Pardesi Pura, Indore",
      ourGallery: "Our Gallery",
      copyright: "© Copyright 2025 | Gendeshwar Mahadev | All right reserved.",
      followUs: "Follow Us"
    },
    hi: {
      description: "विभिन्न कार्यक्रमों में पूजा समारोहों का आयोजन करने के लिए अनुभवी पंडित जी को बुक करने के लिए आपका प्रमुख ऑनलाइन प्लेटफॉर्म।",
      quickLinks: "त्वरित लिंक",
      home: "होम",
      about: "हमारे बारे में",
      pujaServices: "पूजा सेवाएं",
      gallery: "हमारी गैलरी",
      contact: "संपर्क करें",
      contactUs: "क्या आपका कोई प्रश्न है? कृपया बेझिझक हमसे संपर्क करें",
      email: "info@gendeshwarmahadev.com",
      phone: "+919837970022",
      address: "Pardesi Pura, Indore",
      ourGallery: "हमारी गैलरी",
      copyright: "© कॉपीराइट 2025 | गंदेश्वर महादेव | सर्वाधिकार सुरक्षित।",
      followUs: "हमें फॉलो करें"
    }
  };

  const current = content[lang];

  // Placeholder images for gallery
  const galleryImages = [
    "/images/Gallery/g1.jpg",
    "/images/Gallery/g2.jpg",
    "/images/Gallery/g3.jpg",
    "/images/Gallery/g4.jpg"
  ];

  return (
    <footer className="bg-gradient-to-b from-red-800 to-red-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="rounded-full p-2 mr-1">
                <div className="text-red-700 font-bold text-2xl">
                  <FaOm className="text-white text-xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Gendeshwar Mahadev</h3>
            </div>
            <p className="text-gray-200 text-sm">{current.description}</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-white text-red-700 rounded-full p-2 hover:bg-gray-100">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="bg-white text-red-700 rounded-full p-2 hover:bg-gray-100">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="bg-white text-red-700 rounded-full p-2 hover:bg-gray-100">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b pb-2">{current.quickLinks}</h4>
            <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-200 hover:text-white transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-200 hover:text-white transition-colors text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="/puja" className="text-gray-200 hover:text-white transition-colors text-sm">
                    Puja
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="text-gray-200 hover:text-white transition-colors text-sm">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-200 hover:text-white transition-colors text-sm">
                    Contact
                  </a>
                </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b pb-2">{current.contact}</h4>
            <p className="text-gray-200 text-sm mb-4">{current.contactUs}</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-red-300" size={14} />
                <span className="text-sm">{current.email}</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-red-300" size={14} />
                <span className="text-sm">{current.phone}</span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-2 text-red-300 mt-1 flex-shrink-0" size={14} />
                <span className="text-sm">{current.address}</span>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b pb-2">{current.ourGallery}</h4>
            <div className="grid grid-cols-2 gap-2">
              {galleryImages.map((img, index) => (
                <div key={index} className="bg-white p-1 rounded">
                  <img 
                    src={img} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="flex justify-end mt-6 mb-4">
          <button 
            onClick={() => setLang('en')} 
            className={`px-3 py-1 text-sm rounded-l ${lang === 'en' ? 'bg-white text-red-700' : 'bg-red-700 text-white'}`}
          >
            English
          </button>
          <button 
            onClick={() => setLang('hi')} 
            className={`px-3 py-1 text-sm rounded-r ${lang === 'hi' ? 'bg-white text-red-700' : 'bg-red-700 text-white'}`}
          >
            हिंदी
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-red-700 pt-4 mt-6 text-center">
          <p className="text-xs text-gray-300">{current.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;