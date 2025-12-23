import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaCalendar, FaOm, FaChurch, FaUser, FaArrowRight, FaMapMarkerAlt, FaHandsHelping, FaLanguage } from "react-icons/fa";
import { Link, useSearchParams, useLocation, useNavigate } from "react-router-dom";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const lang = (searchParams.get("lang") || "en").toLowerCase() === "hi" ? "hi" : "en";

  const toggleLang = () => {
    const params = new URLSearchParams(searchParams);
    params.set("lang", lang === "hi" ? "en" : "hi");
    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
  };

  // Translations
  const translations = {
    pageTitle: {
      en: "About Us - Gendeshwar Mahadev",
      hi: "हमारे बारे में - गेंदेश्वर महादेव"
    },
    spiritualHeritage: {
      en: "SPIRITUAL HERITAGE",
      hi: "आध्यात्मिक विरासत"
    },
    weAreDevotees: {
      en: "We Are Devotees of ",
      hi: "हम भगवान शिव के भक्त हैं "
    },
    lordShiva: {
      en: "Lord Shiva",
      hi: "भगवान शिव"
    },
    dedicationText: {
      en: "Dedicated to preserving ancient Vedic traditions and spreading the divine teachings of Lord Shiva for spiritual enlightenment and inner peace.",
      hi: "प्राचीन वैदिक परंपराओं को संरक्षित करने और आध्यात्मिक ज्ञान और आंतरिक शांति के लिए भगवान शिव की दिव्य शिक्षाओं का प्रसार करने के लिए समर्पित।"
    },
    ourDivineMission: {
      en: "OUR DIVINE MISSION",
      hi: "हमारा दिव्य मिशन"
    },
    spreadingTeachings: {
      en: "Spreading ",
      hi: "प्रसारित करना "
    },
    shivasTeachings: {
      en: "Shiva's Teachings",
      hi: "भगवान शिव की शिक्षाएं"
    },
    missionQuote: {
      en: "Our mission is to share the eternal wisdom of Lord Shiva through authentic Vedic practices, community service, and spiritual guidance.",
      hi: "हमारा मिशन प्रामाणिक वैदिक प्रथाओं, सामुदायिक सेवा और आध्यात्मिक मार्गदर्शन के माध्यम से भगवान शिव के शाश्वत ज्ञान को साझा करना है।"
    },
    tabSpiritual: {
      en: "Spiritual",
      hi: "आध्यात्मिक"
    },
    tabTemple: {
      en: "Temple",
      hi: "मंदिर"
    },
    tabCommunity: {
      en: "Community",
      hi: "समुदाय"
    },
    missionDescription: {
      en: "At Shiv Dham, we are committed to preserving ancient Vedic traditions while making them accessible to modern seekers. Through daily pujas, meditation sessions, educational programs, and community service, we strive to create a sacred space where everyone can experience the transformative power of Lord Shiva's blessings and find their path to spiritual enlightenment.",
      hi: "शिव धाम में, हम प्राचीन वैदिक परंपराओं को संरक्षित करने और उन्हें आधुनिक साधकों के लिए सुलभ बनाने के लिए प्रतिबद्ध हैं। दैनिक पूजा, ध्यान सत्र, शैक्षिक कार्यक्रमों और सामुदायिक सेवा के माध्यम से, हम एक पवित्र स्थान बनाने का प्रयास करते हैं जहाँ हर कोई भगवान शिव के आशीर्वाद की परिवर्तनकारी शक्ति का अनुभव कर सके और आध्यात्मिक ज्ञान का मार्ग प्राप्त कर सके।"
    },
    divineBlessings: {
      en: "Divine Blessings",
      hi: "दिव्य आशीर्वाद"
    },
    // Features
    sacredTemple: {
      en: "Sacred Temple",
      hi: "पवित्र मंदिर"
    },
    sacredTempleDesc: {
      en: "A divine space dedicated to Lord Shiva for worship, meditation, and spiritual enlightenment.",
      hi: "भगवान शिव को समर्पित एक दिव्य स्थान जहां पूजा, ध्यान और आध्यात्मिक ज्ञान प्राप्त किया जा सकता है।"
    },
    dailyPujas: {
      en: "Daily Pujas",
      hi: "नियमित पूजा"
    },
    dailyPujasDesc: {
      en: "Authentic Vedic rituals and Rudrabhishek performed daily by experienced priests.",
      hi: "अनुभवी पुजारियों द्वारा प्रतिदिन वैदिक रीति-रिवाजों और रुद्राभिषेक का आयोजन।"
    },
    spiritualGuidance: {
      en: "Spiritual Guidance",
      hi: "आध्यात्मिक मार्गदर्शन"
    },
    spiritualGuidanceDesc: {
      en: "Expert guidance on meditation, yoga, and spiritual practices from learned gurus.",
      hi: "ध्यान, योग और आध्यात्मिक प्रथाओं पर विद्वान गुरुओं से विशेषज्ञ मार्गदर्शन।"
    },
    // Timeline
    establishment: {
      en: "Establishment of Shiv Dham Temple",
      hi: "शिव धाम मंदिर की स्थापना"
    },
    establishmentDesc: {
      en: "Founded with the vision to spread Lord Shiva's divine teachings and provide a sacred space for spiritual growth and community service in Varanasi.",
      hi: "भगवान शिव की दिव्य शिक्षाओं को फैलाने और वाराणसी में आध्यात्मिक विकास और सामुदायिक सेवा के लिए एक पवित्र स्थान प्रदान करने के उद्देश्य से स्थापित।"
    },
    firstShivratri: {
      en: "First Maha Shivratri Celebration",
      hi: "पहला महा शिवरात्रि उत्सव"
    },
    firstShivratriDesc: {
      en: "Successfully organized our first grand Maha Shivratri celebration with 1000+ devotees participating in the all-night vigil and Rudrabhishek.",
      hi: "1000 से अधिक भक्तों की भागीदारी के साथ पहला भव्य महा शिवरात्रि उत्सव और रात भर चलने वाले जागरण एवं रुद्राभिषेक का सफल आयोजन।"
    },
    expansion: {
      en: "Expansion of Spiritual Services",
      hi: "आध्यात्मिक सेवाओं का विस्तार"
    },
    expansionDesc: {
      en: "Introduced daily Rudrabhishek, meditation classes, and Vedic education programs to serve the growing spiritual needs of our community.",
      hi: "हमारे समुदाय की बढ़ती आध्यात्मिक आवश्यकताओं को पूरा करने के लिए दैनिक रुद्राभिषेक, ध्यान कक्षाएं और वैदिक शिक्षा कार्यक्रम शुरू किए गए।"
    },
    communityInitiative: {
      en: "Community Outreach Initiative",
      hi: "सामुदायिक पहल"
    },
    communityInitiativeDesc: {
      en: "Launched free food distribution and spiritual counseling services, extending Lord Shiva's blessings to underprivileged families.",
      hi: "निःशुल्क भोजन वितरण और आध्यात्मिक परामर्श सेवाएं शुरू की गईं, जिससे वंचित परिवारों तक भगवान शिव का आशीर्वाद पहुंचाया जा सके।"
    },
    // Blog
    mahaShivratri: {
      en: "The Significance of Maha Shivratri Celebration",
      hi: "महा शिवरात्रि उत्सव का महत्व"
    },
    meditationTechniques: {
      en: "Meditation Techniques from Shiva Scriptures",
      hi: "शिव शास्त्रों से ध्यान की विधियाँ"
    },
    pujaGuide: {
      en: "Complete Guide to Shiva Puja Rituals",
      hi: "शिव पूजा विधि की संपूर्ण मार्गदर्शिका"
    },
    // Navigation
    home: {
      en: "Home",
      hi: "होम"
    }
  };

  const timelineData = [
    {
      year: "2019",
      month: "JUN 1",
      title: translations.establishment[lang],
      description: translations.establishmentDesc[lang]
    },
    {
      year: "2020",
      month: "MAR 15",
      title: translations.firstShivratri[lang],
      description: translations.firstShivratriDesc[lang]
    },
    {
      year: "2022",
      month: "AUG 1",
      title: translations.expansion[lang],
      description: translations.expansionDesc[lang]
    },
    {
      year: "2024",
      month: "JAN 30",
      title: translations.communityInitiative[lang],
      description: translations.communityInitiativeDesc[lang]
    }
  ];

  const blogPosts = [
    {
      image: "/images/Gallery/g4.jpg",
      categories: ["Shiva", "Spiritual"],
      date: lang === 'hi' ? '15 दिसंबर, 2024' : 'Dec 15, 2024',
      title: translations.mahaShivratri[lang],
      author: {
        image: "/images/Gallery/g4.jpg",
        name: lang === 'hi' ? 'पंडित रवि' : 'Pandit Ravi'
      }
    },
    {
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=400&h=300&fit=crop",
      categories: ["Meditation", "Yoga"],
      date: lang === 'hi' ? '10 दिसंबर, 2024' : 'Dec 10, 2024',
      title: translations.meditationTechniques[lang],
      author: {
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        name: lang === 'hi' ? 'योगी आनंद' : 'Yogi Ananda'
      }
    },
    {
      image: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=400&h=300&fit=crop",
      categories: ["Puja", "Rituals"],
      date: lang === 'hi' ? '5 दिसंबर, 2024' : 'Dec 5, 2024',
      title: translations.pujaGuide[lang],
      author: {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        name: lang === 'hi' ? 'मुकेश कुमार' : 'Mukesh Kumar'
      }
    }
  ];

  const features = [
    {
      icon: "/assets/img/textures/icons/1.png",
      title: translations.sacredTemple[lang],
      description: translations.sacredTempleDesc[lang]
    },
    {
      icon: "/assets/img/textures/icons/2.png",
      title: translations.dailyPujas[lang],
      description: translations.dailyPujasDesc[lang]
    },
    {
      icon: "/assets/img/textures/icons/3.png",
      title: translations.spiritualGuidance[lang],
      description: translations.spiritualGuidanceDesc[lang]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
            <h1 className="text-5xl font-bold mb-4">{translations.pageTitle[lang]}</h1>
            <nav className="flex justify-center items-center space-x-2 text-lg">
              <Link to="/" className="text-amber-200 hover:text-white transition-colors">{translations.home[lang]}</Link>
              <span className="text-white">/</span>
              <span className="text-white font-semibold">{lang === 'hi' ? 'हमारे बारे में' : 'About Us'}</span>
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
                    src="/images/Gallery/g4.jpg"
                    alt="Shiva Temple"
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover border-2 border-amber-200"
                  />
                  <img
                    src="/images/Gallery/g2.jpg"
                    alt="Puja Ceremony"
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover border-2 border-amber-200"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/images/Gallery/g6.jpg"
                    alt="Meditation"
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover border-2 border-amber-200"
                  />
                  <img
                    src="/images/Gallery/g1.jpg"
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
                      {translations.spiritualHeritage[lang]}
                    </p>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                    {translations.weAreDevotees[lang]}
                    <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">
                      {translations.lordShiva[lang]}
                    </span>
                  </h2>
                </div>

                <blockquote className="text-xl text-gray-600 italic border-l-4 border-red-600 pl-6 py-2 bg-red-50 rounded-r-lg">
                  {translations.dedicationText[lang]}
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

      {/* Sacred Mantra Footer */}
      <div className="bg-gradient-to-r from-red-700 to-red-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-amber-300 text-4xl font-devanagari font-bold mb-4">
            ॐ नमः शिवाय
          </div>
          <p className="text-amber-200 text-lg">
            {lang === 'hi' 
              ? 'भगवान शिव आपको शांति और आध्यात्मिक ज्ञान प्रदान करें।' 
              : 'May Lord Shiva bless you with peace and spiritual enlightenment'}
          </p>
        </div>
      </div>

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
                      {translations.ourDivineMission[lang]}
                    </p>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                    {translations.spreadingTeachings[lang]}
                    <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">
                      {translations.shivasTeachings[lang]}
                    </span>
                  </h2>
                </div>

                <blockquote className="text-xl text-gray-600 italic border-l-4 border-red-600 pl-6 py-2 bg-red-50 rounded-r-lg">
                  {translations.missionQuote[lang]}
                </blockquote>

                {/* Tabs */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
                    {[
                      { id: "home", icon: <FaOm />, label: translations.tabSpiritual[lang] },
                      { id: "profile", icon: <FaChurch />, label: translations.tabTemple[lang] },
                      { id: "contact", icon: <FaUser />, label: translations.tabCommunity[lang] }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${activeTab === tab.id
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
                      {translations.missionDescription[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/images/shiv2.jpeg"
                  alt="Shiv Dham Mission"
                  className="rounded-2xl shadow-2xl w-full object-cover border-2 border-amber-200"
                />
                {/* Sacred Mantra Overlay */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-700 to-red-800 text-white p-6 rounded-2xl shadow-2xl">
                  <div className="text-2xl font-devanagari font-bold">ॐ नमः शिवाय</div>
                  <p className="text-amber-200 text-sm mt-1">{translations.divineBlessings[lang]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;