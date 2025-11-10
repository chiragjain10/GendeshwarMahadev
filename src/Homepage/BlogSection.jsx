import React from "react";
import { FaCalendarAlt, FaOm } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
      categories: ["Shiva", "Spiritual"],
      date: "Dec 15, 2024",
      title: "The Significance of Maha Shivratri - A Night of Divine Awakening",
      authorImg: "https://images.unsplash.com/photo-1589178849368-f43598d25e8e?w=100&h=100&fit=crop&crop=face",
      author: "Pandit Ravi Sharma",
      excerpt: "Discover the deep spiritual meaning behind Maha Shivratri and how this sacred night can transform your consciousness.",
      link: "/blog/1",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=400&h=300&fit=crop",
      categories: ["Meditation", "Guidance"],
      date: "Dec 10, 2024",
      title: "Meditation Techniques from Shiva Scriptures for Modern Life",
      authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      author: "Yogi Ananda",
      excerpt: "Learn ancient meditation practices from Shiva traditions that bring peace and clarity in today's busy world.",
      link: "/blog/2",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=400&h=300&fit=crop",
      categories: ["Rituals", "Puja"],
      date: "Dec 5, 2024",
      title: "Complete Guide to Rudrabhishek - The Sacred Shiva Abhishekam",
      authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      author: "Mukesh Kumar",
      excerpt: "Step-by-step guide to performing Rudrabhishek and understanding its profound spiritual benefits.",
      link: "/blog/3",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      
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
              ॐ नमः शिवाय • Spiritual Wisdom
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Divine <span className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">Insights</span> & Wisdom
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore spiritual knowledge, Shiva teachings, and ancient wisdom to guide your spiritual journey
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link to={article.link} key={article.id} className="block">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 border-amber-100 hover:border-amber-200">
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Badges */}
                  <div className="absolute top-4 left-4">
                    <div className="flex flex-wrap gap-2">
                      {article.categories.map((cat, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-red-600" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaOm className="text-red-600" />
                      <span>Spiritual</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h5 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-red-700 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h5>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="relative">
                      <img
                        src={article.authorImg}
                        alt={article.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-amber-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm font-medium">
                        By <span className="text-red-700 font-semibold">{article.author}</span>
                      </p>
                      <p className="text-gray-500 text-xs">Spiritual Guide</p>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="mt-6">
                    <div className="inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-800 transition-colors duration-300 group/readmore">
                      Read More
                      <svg
                        className="w-4 h-4 group-hover/readmore:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/bloggrid"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span>View All Spiritual Articles</span>
            <FaOm className="text-lg" />
          </Link>
        </div>

        {/* Sacred Mantra */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-amber-200 shadow-lg">
            <div className="text-red-700 text-2xl font-devanagari font-bold">
              ॐ नमः शिवाय
            </div>
            <p className="text-gray-600 text-sm mt-1">
              May Lord Shiva guide your spiritual journey
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

export default BlogSection;