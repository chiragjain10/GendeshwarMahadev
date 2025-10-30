import React, { useState } from "react";
import { 
  FaSearch, 
  FaCalendar, 
  FaOm, 
  FaChevronLeft, 
  FaChevronRight
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogGridPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Blog posts data - Shiva focused content
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=250&fit=crop",
      title: "Maha Shivratri Guide",
      excerpt: "Complete guide to Maha Shivratri celebrations and rituals",
      categories: ["Shiva"],
      date: "Dec 15, 2024",
      readTime: "5 min"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=400&h=250&fit=crop",
      title: "Rudrabhishek Benefits",
      excerpt: "Spiritual benefits of performing Rudrabhishek",
      categories: ["Puja"],
      date: "Dec 10, 2024",
      readTime: "4 min"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=400&h=250&fit=crop",
      title: "Shiva Meditation",
      excerpt: "Meditation techniques from Shiva traditions",
      categories: ["Meditation"],
      date: "Dec 5, 2024",
      readTime: "6 min"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop",
      title: "Shiva Mantras",
      excerpt: "Powerful Shiva mantras for daily chanting",
      categories: ["Mantra"],
      date: "Nov 28, 2024",
      readTime: "3 min"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      title: "Shiva Temples",
      excerpt: "Famous Shiva temples and their significance",
      categories: ["Temple"],
      date: "Nov 25, 2024",
      readTime: "7 min"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=250&fit=crop",
      title: "Shiva Stories",
      excerpt: "Inspirational stories from Shiva Purana",
      categories: ["Stories"],
      date: "Nov 20, 2024",
      readTime: "8 min"
    }
  ];

  // Recent posts data
  const recentPosts = [
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=80&h=80&fit=crop",
      title: "Daily Shiva Puja",
      date: "Nov 25, 2024"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=80&h=80&fit=crop",
      title: "Shiva Fasting Guide",
      date: "Nov 20, 2024"
    }
  ];

  // Popular tags
  const popularTags = ["Shiva", "Meditation", "Puja", "Mantra", "Temple"];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50  font-bebas">
      {/* Subheader Section */}
      <div className="relative py-20 bg-gradient-to-r from-red-800 via-red-700 to-red-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=1200&h=400&fit=crop)" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-amber-300 font-semibold text-sm tracking-wide">
                ॐ नमः शिवाय • Spiritual Wisdom
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Shiva Blog</h1>
            <p className="text-amber-200 text-sm mb-3">Divine insights and spiritual guidance</p>
            <nav className="flex justify-center items-center space-x-2 text-sm">
              <Link to="/" className="text-amber-200 hover:text-white transition-colors">Home</Link>
              <span className="text-white">/</span>
              <span className="text-white font-semibold">Blog</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            {/* Sidebar - Compact Design */}
            <div className="lg:w-1/4">
              <div className="space-y-5">
                
                {/* Search Widget */}
                <div className="bg-white rounded-xl shadow-lg p-4 border border-amber-200">
                  <h5 className="font-bold text-gray-900 text-sm mb-3">Search Articles</h5>
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search spiritual topics..."
                      className="w-full bg-amber-50 border border-amber-300 rounded-lg py-2 pl-3 pr-10 focus:outline-none focus:ring-1 focus:ring-red-600 text-sm"
                    />
                    <button 
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600 hover:text-red-700 text-sm"
                    >
                      <FaSearch />
                    </button>
                  </form>
                </div>

                {/* Recent Posts Widget */}
                <div className="bg-white rounded-xl shadow-lg p-4 border border-amber-200">
                  <h5 className="font-bold text-gray-900 text-sm mb-3">Recent Posts</h5>
                  <div className="space-y-3">
                    {recentPosts.map((post, index) => (
                      <Link to={`/blog/${post.id}`} key={index} className="block group">
                        <article className="flex items-start gap-2">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h6 className="font-medium text-gray-900 text-xs leading-tight mb-1 group-hover:text-red-600 transition-colors line-clamp-2">
                              {post.title}
                            </h6>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <FaCalendar className="text-red-600 text-xs" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Tags Widget */}
                <div className="bg-white rounded-xl shadow-lg p-4 border border-amber-200">
                  <h5 className="font-bold text-gray-900 text-sm mb-3">Topics</h5>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Link
                        key={index}
                        to={`/bloggrid?tag=${tag.toLowerCase()}`}
                        className="px-2 py-1 bg-red-50 text-red-700 rounded text-xs hover:bg-red-600 hover:text-white transition-colors duration-300 border border-red-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Main Blog Content - Improved Cards */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {blogPosts.map((post) => (
                  <Link to={`/blog/${post.id}`} key={post.id} className="block group">
                    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-200 h-full flex flex-col">
                      
                      {/* Image with Overlay */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                            {post.categories[0]}
                          </span>
                        </div>
                        {/* Read Time */}
                        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {post.readTime}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 flex-1 flex flex-col">
                        
                        {/* Date */}
                        <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                          <FaCalendar className="text-red-600" />
                          <span>{post.date}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-xs mb-3 line-clamp-2 flex-1">
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <div className="pt-3 border-t border-amber-100">
                          <div className="text-red-600 hover:text-red-700 font-semibold text-xs flex items-center gap-1 transition-colors group-hover:gap-2">
                            Read More
                            <FaChevronRight className="text-xs transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-2">
                  <button className="w-8 h-8 bg-white border border-amber-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors text-xs">
                    <FaChevronLeft className="text-xs" />
                  </button>
                  
                  <button className="w-8 h-8 bg-red-600 border border-red-600 rounded-lg flex items-center justify-center text-white text-xs font-semibold">
                    1
                  </button>
                  
                  <button className="w-8 h-8 bg-white border border-amber-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors text-xs">
                    2
                  </button>
                  
                  <button className="w-8 h-8 bg-white border border-amber-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors text-xs">
                    <FaChevronRight className="text-xs" />
                  </button>
                </nav>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogGridPage;