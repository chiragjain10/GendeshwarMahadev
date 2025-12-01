import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaArrowRight, FaPlay, FaPause, FaHandHoldingHeart } from "react-icons/fa";

const banners = [
  {
    id: 1,
    title: {
      en: "Welcome to Shiva Dham Temple",
      hi: "शिव धाम मंदिर में आपका स्वागत है",
    },
    subtitle: {
      en: "Experience Divine Peace",
      hi: "दिव्य शांति का अनुभव करें",
    },
    text: {
      en: "Our sacred temple is dedicated to Lord Shiva, offering a divine space for worship, meditation, and spiritual enlightenment. Join us in daily rituals and experience Shiva's blessings.",
      hi: "हमारा पावन मंदिर भगवान शिव को समर्पित है, जो पूजा, ध्यान और आध्यात्मिक ज्ञान के लिए एक दिव्य स्थान प्रदान करता है। दैनिक अनुष्ठानों में शामिल हों और शिव कृपा का अनुभव करें।",
    },
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=500&h=400&fit=crop",
    bg: "/images/banner1.png",
    align: "left",
  },
  {
    id: 2,
    title: {
      en: "Daily Rudrabhishek & Aarti",
      hi: "दैनिक रुद्राभिषेक और आरती",
    },
    subtitle: {
      en: "Divine Shiva Blessings",
      hi: "भगवान शिव के दिव्य आशीर्वाद",
    },
    text: {
      en: "Participate in our sacred Rudrabhishek ceremonies and experience Lord Shiva's divine grace. Our experienced priests conduct authentic Vedic rituals for peace and prosperity.",
      hi: "हमारे पवित्र रुद्राभिषेक अनुष्ठानों में भाग लें और भगवान शिव की दिव्य कृपा का अनुभव करें। हमारे अनुभवी पुजारी शांति और समृद्धि के लिए प्रामाणिक वैदिक अनुष्ठान करते हैं।",
    },
    image: "https://feeds.abplive.com/onecms/images/uploaded-images/2023/02/18/a25ed512faadbfb8ff0ec1d0aa31a5e7189a4.jpg",
    bg: "/images/banner4.png",
    align: "right",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [searchParams] = useSearchParams();
  const lang = (searchParams.get("lang") || "en").toLowerCase() === "hi" ? "hi" : "en";

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const current = banners[index];

  const labels = {
    bookPuja: { en: "Book Puja", hi: "पूजा बुक करें" },
    donate: { en: "Make Donation", hi: "दान करें" },
    statsDaily: { en: "Daily Pujas", hi: "दैनिक पूजा" },
    statsHappy: { en: "Happy Devotees", hi: "खुश भक्त" },
    statsOpen: { en: "Temple Open", hi: "मंदिर खुला" },
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
      {/* Background with Simple Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${current.bg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-red-900/20" />

      {/* Decorative Spiritual Symbols */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🕉️</div>
        <div className="absolute bottom-10 right-10 text-6xl">🙏</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12" data-aos="fade-up">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[80vh] ${
            current.align === "right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              {/* Simple Subtitle */}
              <div className="mb-6">
                <span className="text-red-400 text-lg font-semibold tracking-wide">
                  {current.subtitle[lang]}
                </span>
              </div>

              {/* Clean Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                {current.title[lang]}
              </h1>

              {/* Simple Description */}
              <p className="text-lg text-gray-200 leading-relaxed mb-8">
                {current.text[lang]}
              </p>

              {/* Clean CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="/puja"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>{labels.bookPuja[lang]}</span>
                  <FaArrowRight className="text-sm" />
                </a>

                <a
                  href="/donation"
                  className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 border border-white"
                >
                  <FaHandHoldingHeart className="text-lg" />
                  <span>{labels.donate[lang]}</span>
                </a>
              </div>

              {/* Simple Stats */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-red-200 text-sm">{labels.statsDaily[lang]}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-red-200 text-sm">{labels.statsHappy[lang]}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-red-200 text-sm">{labels.statsOpen[lang]}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* <img
                src={current.image}
                alt="Shiva Temple"
                className="w-80 md:w-96 lg:w-[28rem] rounded-xl shadow-lg"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/500x400/DC2626/FFFFFF?text=Shiva+Temple";
                }}
              /> */}

              {/* Simple Decorative Element */}
              {/* <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-sm font-semibold">ॐ नमः शिवाय</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Simple Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="text-white hover:text-red-200 transition-colors duration-300 p-1"
          aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlay ? <FaPause className="text-sm" /> : <FaPlay className="text-sm" />}
        </button>

        {/* Simple Dots */}
        <div className="flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Simple Counter */}
        <div className="text-white text-xs flex items-center gap-1">
          <span>{index + 1}</span>
          <span>/</span>
          <span>{banners.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;