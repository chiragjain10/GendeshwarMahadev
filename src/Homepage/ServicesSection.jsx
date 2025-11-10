import React from "react";
import { useSearchParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { GiTempleGate, GiPrayer, GiPrayerBeads } from "react-icons/gi";

const ServicesSection = () => {
  const [searchParams] = useSearchParams();
  const lang = (searchParams.get("lang") || "en").toLowerCase() === "hi" ? "hi" : "en";

  const services = [
    {
      title: { en: "Temple Services", hi: "मंदिर सेवाएं" },
      desc: {
        en: "Experience divine blessings at our sacred Shiva temple with traditional rituals and peaceful atmosphere.",
        hi: "हमारे पावन शिव मंदिर में पारंपरिक अनुष्ठानों और शांत वातावरण के साथ दिव्य आशीर्वाद का अनुभव करें।",
      },
      bgClass: "bg-gradient-to-br from-amber-50 to-orange-50",
      icon: <GiTempleGate className="text-red-700 text-5xl" />,
      textClass: "text-gray-800",
      borderClass: "border border-amber-200",
      buttonClass: "text-red-700 hover:text-red-800"
    },
    {
      title: { en: "Our Pandits", hi: "हमारे पंडित" },
      desc: {
        en: "Our experienced Pandits guide you through authentic Vedic rituals and spiritual ceremonies.",
        hi: "हमारे अनुभवी पंडित आपको प्रामाणिक वैदिक अनुष्ठानों और आध्यात्मिक कार्यक्रमों में मार्गदर्शन प्रदान करते हैं।",
      },
      bgClass: "bg-gradient-to-br from-red-50 to-red-100",
      icon: <GiPrayerBeads className="text-red-700 text-5xl" />,
      textClass: "text-gray-800",
      borderClass: "border border-red-200",
      buttonClass: "text-red-700 hover:text-red-800"
    },
    {
      title: { en: "Divine Prayers", hi: "दिव्य प्रार्थनाएँ" },
      desc: {
        en: "Join us in powerful prayers and chants that bring peace, prosperity and Shiva's blessings.",
        hi: "हमारी शक्तिशाली प्रार्थनाओं और मंत्रों में शामिल हों जो शांति, समृद्धि और भगवान शिव के आशीर्वाद लाते हैं।",
      },
      bgClass: "bg-gradient-to-br from-amber-50 to-yellow-50",
      icon: <GiPrayer className="text-red-700 text-5xl" />,
      textClass: "text-gray-800",
      borderClass: "border border-amber-200",
      buttonClass: "text-red-700 hover:text-red-800"
    },
  ];

  const labels = {
    badge: { en: "Om Namah Shivaya • Divine Services", hi: "ॐ नमः शिवाय • दिव्य सेवाएँ" },
    heading1: { en: "Our", hi: "हमारी" },
    heading2: { en: "Spiritual Services", hi: "आध्यात्मिक सेवाएँ" },
    desc: {
      en: "Experience the divine grace of Lord Shiva through our authentic services, traditional rituals, and spiritual guidance.",
      hi: "प्रामाणिक सेवाओं, पारंपरिक अनुष्ठानों और आध्यात्मिक मार्गदर्शन के माध्यम से भगवान शिव की दिव्य कृपा का अनुभव करें।",
    },
    learnMore: { en: "Learn More", hi: "अधिक जानें" },
    ctaTitle: { en: "Ready to Experience Divine Blessings?", hi: "दिव्य आशीर्वाद का अनुभव करने के लिए तैयार हैं?" },
    ctaDesc: { en: "Join us in spiritual practices and receive the grace of Lord Shiva", hi: "आध्यात्मिक साधनाओं में शामिल हों और भगवान शिव की कृपा प्राप्त करें" },
    ctaBtn: { en: "Get Started Now", hi: "अभी शुरू करें" },
    mantraLine2: { en: "May Lord Shiva bless you with peace and prosperity", hi: "भगवान शिव आपको शांति और समृद्धि प्रदान करें" },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden font-bebas">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl">🕉️</div>
        <div className="absolute bottom-20 right-10 text-6xl">🙏</div>
        <div className="absolute top-1/2 left-1/3 text-4xl">🔱</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <p className="text-red-700 font-semibold text-sm tracking-wide">
              {labels.badge[lang]}
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {labels.heading1[lang]} <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">{labels.heading2[lang]}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {labels.desc[lang]}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-3 shadow-lg hover:shadow-2xl ${service.bgClass} ${service.borderClass} group`}
            >
              
              {/* Icon Container */}
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white rounded-2xl shadow-md border border-amber-100 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold mb-4 ${service.textClass}`}>
                {service.title[lang]}
              </h3>
              <p className={`${service.textClass} mb-6 leading-relaxed text-gray-700`}>
                {service.desc[lang]}
              </p>

              {/* Learn More Button */}
              <div className="inline-flex items-center font-semibold group/btn">
                <span className={`${service.buttonClass} transition-colors duration-300`}>
                  {labels.learnMore[lang]}
                </span>
                <FaArrowRight className={`ml-2 transition-transform duration-300 group-hover/btn:translate-x-2 ${service.buttonClass}`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-8 text-white shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {labels.ctaTitle[lang]}
            </h3>
            <p className="text-red-100 mb-6 text-lg">
              {labels.ctaDesc[lang]}
            </p>
            <a 
              href="/services" 
              className="inline-flex items-center bg-white text-red-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {labels.ctaBtn[lang]}
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
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
              May Lord Shiva bless you with peace and prosperity
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-40 right-20 w-4 h-4 bg-red-500 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
    </section>
  );
};

export default ServicesSection;