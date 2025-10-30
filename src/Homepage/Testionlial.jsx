import React from "react";
import Slider from "react-slick";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial data
const testimonials = [
  {
    name: "Mukesh Sharma",
    role: "Head Priest",
    image: "https://images.unsplash.com/photo-1589178849368-f43598d25e8e?w=150&h=150&fit=crop&crop=face",
    review: "Serving at this Shiva temple has been the most fulfilling experience of my life. The divine energy here transforms every devotee's spiritual journey.",
    rating: 5,
  },
  {
    name: "Priya Devi",
    role: "Regular Devotee",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    review: "The Rudrabhishek performed here brought immense peace to our family. Lord Shiva's blessings are truly felt in every corner of this sacred space.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Community Volunteer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    review: "Working with this temple has deepened my connection with Lord Shiva. The authentic Vedic rituals and spiritual atmosphere are truly transformative.",
    rating: 5,
  },
  {
    name: "Sunita Patel",
    role: "Spiritual Seeker",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    review: "The Maha Shivratri celebration here was beyond divine. The energy, the chants, and the devotion created an experience that touched my soul deeply.",
    rating: 5,
  },
];

// Custom arrows for slider
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300"
    aria-label="Previous testimonial"
  >
    <FaChevronLeft className="text-lg" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300"
    aria-label="Next testimonial"
  >
    <FaChevronRight className="text-lg" />
  </button>
);

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div className="mt-8">
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-red-600 transition-all duration-300 focus:outline-none">
        <span className="sr-only">Go to slide {i + 1}</span>
      </button>
    ),
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`text-lg ${
          i < rating ? "text-amber-500 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden font-bebas">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🕉️</div>
        <div className="absolute bottom-10 right-10 text-6xl">🙏</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">🔱</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <p className="text-red-700 font-semibold text-sm tracking-wide">
              ॐ नमः शिवाय • Divine Experiences
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Voices of <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">Divine Blessings</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from our devotees about their spiritual transformation and experiences with Lord Shiva's divine grace
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative px-8 lg:px-12">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-amber-200 hover:shadow-3xl transition-all duration-500">
                  <div className="text-center">
                    
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="p-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg">
                        <FaQuoteLeft className="text-white text-3xl" />
                      </div>
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-gray-700 text-xl leading-relaxed mb-8 italic font-medium">
                      "{testimonial.review}"
                    </p>
                    
                    {/* Rating Stars */}
                    <div className="flex justify-center gap-2 mb-8">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* User Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-amber-300 shadow-lg"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150/DC2626/FFFFFF?text=Devotee";
                          }}
                        />
                        {/* Decorative Element */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-600 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="text-center sm:text-left">
                        <h4 className="font-bold text-gray-900 text-xl mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-red-600 font-semibold">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Sacred Mantra */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-amber-200 shadow-lg">
            <div className="text-red-700 text-2xl font-devanagari font-bold">
              ॐ नमः शिवाय
            </div>
            <p className="text-gray-600 text-sm mt-1">
              Lord Shiva's blessings flow through every devotee's heart
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

export default TestimonialsSection;