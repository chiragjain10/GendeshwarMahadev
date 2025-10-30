import React from "react";
import { useParams, Link } from "react-router-dom";
import { 
  FaCalendar, 
  FaUser, 
  FaTag, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowLeft,
  FaShare,
  FaHeart,
  FaAward,
  FaHandsHelping
} from "react-icons/fa";

const BlogDetails = () => {
  const { blogId } = useParams();

  // Blog details data
  const blogDetails = {
    1: {
      id: 1,
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=400&fit=crop",
      title: "महाशिवरात्रि उत्सव - एक आध्यात्मिक यात्रा",
      content: `
        <p>महाशिवरात्रि, "शिव की महान रात", हिंदू धर्म में सबसे महत्वपूर्ण त्योहारों में से एक है। इसे पूरे भारत और दुनिया भर में हिंदुओं द्वारा बड़ी श्रद्धा और उत्साह के साथ मनाया जाता है।</p>
        
        <h3>आध्यात्मिक महत्व</h3>
        <p>यह पवित्र रात शिव और शक्ति के मिलन का प्रतीक है - वह पुरुष और स्त्री ऊर्जा जो दुनिया को संतुलित करती है। भक्त मानते हैं कि इस दिन भगवान शिव की सच्ची भक्ति के साथ पूजा करने से अत्यधिक आध्यात्मिक लाभ मिलते हैं।</p>
        
        <h3>पारंपरिक रीति-रिवाज</h3>
        <p>उत्सव में विभिन्न रीति-रिवाज शामिल हैं जिनमें शामिल हैं:</p>
        <ul>
          <li>दूध, शहद और पानी से अभिषेक</li>
          <li>शिव लिंग को बेल पत्र अर्पित करना</li>
          <li>रात भर जागरण और ध्यान</li>
          <li>ॐ नमः शिवाय का जाप</li>
          <li>उपवास और प्रार्थना</li>
        </ul>
        
        <p>कई भक्त सख्त उपवास रखते हैं और पूरी रात जागकर प्रार्थना और ध्यान में लगे रहते हैं। मंदिरों को खूबसूरती से सजाया जाता है और पूरी रात विशेष पूजा आयोजित की जाती है।</p>
      `,
      categories: ["त्योहार", "आध्यात्मिकता"],
      author: "पंडित रवि शंकर",
      date: "15 दिसंबर, 2024",
      readTime: "5 मिनट पढ़ना",
      tags: ["शिव", "त्योहार", "ध्यान", "पूजा"]
    },
    2: {
      id: 2,
      image: "https://images.unsplash.com/photo-1548351514-8b6d0f6c7499?w=800&h=400&fit=crop",
      title: "आध्यात्मिक विकास के लिए दैनिक पूजा अनुष्ठान",
      content: `
        <p>दैनिक पूजा दिनचर्या स्थापित करने से आपके आध्यात्मिक जीवन में परिवर्तन आ सकता है और आपके घर में शांति आ सकती है। दैनिक पूजा के लिए यहां एक व्यापक मार्गदर्शिका है।</p>
        
        <h3>सुबह की पूजा दिनचर्या</h3>
        <p>इन आवश्यक चरणों के साथ अपना दिन शुरू करें:</p>
        <ul>
          <li>स्नान करें और स्वच्छ वस्त्र पहनें</li>
          <li>दीपक और अगरबत्ती जलाएं</li>
          <li>देवता को फूल अर्पित करें</li>
          <li>सुबह की प्रार्थना और मंत्रों का जाप करें</li>
          <li>भक्ति के साथ आरती करें</li>
        </ul>
        
        <h3>आवश्यक पूजा सामग्री</h3>
        <p>हर पूजा के लिए कुछ बुनियादी वस्तुओं की आवश्यकता होती है:</p>
        <ul>
          <li>दीया (तेल का दीपक)</li>
          <li>अगरबत्ती</li>
          <li>फूल</li>
          <li>प्रसाद</li>
          <li>जल और पंचामृत</li>
        </ul>
        
        <p>याद रखें, पूजा का सबसे महत्वपूर्ण पहलू भक्ति है। सच्ची भक्ति के साथ अर्पित की गई एक साधारण प्रार्थना भी ईमानदारी के बिना किए गए विस्तृत अनुष्ठान से अधिक मूल्यवान है।</p>
      `,
      categories: ["पूजा", "दैनिक अभ्यास"],
      author: "पंडित सुरेश कुमार",
      date: "10 दिसंबर, 2024",
      readTime: "4 मिनट पढ़ना",
      tags: ["पूजा", "दैनिक", "उपासना", "रीति-रिवाज"]
    },
    3: {
      id: 3,
      image: "https://images.unsplash.com/photo-1603383928972-0fe54f8a2b4f?w=800&h=400&fit=crop",
      title: "दैनिक ध्यान के माध्यम से अपने जीवन को रूपांतरित करें",
      content: `
        <p>ध्यान आध्यात्मिक विकास और मानसिक शांति के लिए एक शक्तिशाली उपकरण है। आज की तेजी से भागती दुनिया में, यह शांति और स्पष्टता का एक आश्रय स्थल प्रदान करता है।</p>
        
        <h3>नियमित ध्यान के लाभ</h3>
        <p>नियमित ध्यान अभ्यास कर सकता है:</p>
        <ul>
          <li>तनाव और चिंता कम करना</li>
          <li>एकाग्रता में सुधार</li>
          <li>आत्म-जागरूकता बढ़ाना</li>
          <li>भावनात्मक स्वास्थ्य को बढ़ावा देना</li>
          <li>ध्यान अवधि बढ़ाना</li>
        </ul>
        
        <h3>सरल ध्यान तकनीकें</h3>
        <p>इन शुरुआती-अनुकूल तकनीकों के साथ शुरुआत करें:</p>
        <ul>
          <li>श्वास जागरूकता ध्यान</li>
          <li>मंत्र ध्यान</li>
          <li>मार्गदर्शित विज़ुअलाइज़ेशन</li>
          <li>माइंडफुलनेस ध्यान</li>
        </ul>
        
        <p>प्रतिदिन केवल 5-10 मिनट से शुरुआत करें और धीरे-धीरे अवधि बढ़ाएं। मुख्य बात अवधि नहीं बल्कि निरंतरता है।</p>
      `,
      categories: ["ध्यान", "कल्याण"],
      author: "योगी आनंद",
      date: "5 दिसंबर, 2024",
      readTime: "6 मिनट पढ़ना",
      tags: ["ध्यान", "माइंडफुलनेस", "शांति", "योग"]
    }
  };

  const blog = blogDetails[blogId] || blogDetails[1];

  // Recent posts for sidebar
  const recentPosts = [
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop",
      title: "भगवद गीता ज्ञान",
      date: "28 नवंबर, 2024"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      title: "होली त्योहार गाइड",
      date: "25 नवंबर, 2024"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=100&h=100&fit=crop",
      title: "गणेश चतुर्थी",
      date: "20 नवंबर, 2024"
    }
  ];

  const shareBlog = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.content.substring(0, 100) + '...',
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('लिंक क्लिपबोर्ड पर कॉपी हो गया!');
    }
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
      <div className="relative py-16 md:py-20 bg-gradient-to-r from-red-600 to-red-700 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${blog.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-amber-200 hover:text-white transition-colors mb-4 text-sm font-devanagari"
            >
              <FaArrowLeft className="text-xs" />
              ब्लॉग पर वापस जाएं
            </Link>
            
            {/* Spiritual Header */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-amber-300/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-amber-200 font-semibold text-sm tracking-wide font-devanagari">
                ॐ नमः शिवाय • आध्यात्मिक ज्ञान
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight font-devanagari">
              {blog.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <FaUser className="text-amber-300" />
                <span className="font-devanagari">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <FaCalendar className="text-amber-300" />
                <span className="font-devanagari">{blog.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <FaTag className="text-amber-300" />
                <span className="font-devanagari">{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Main Blog Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-amber-200">
                {/* Blog Image */}
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                
                {/* Blog Content */}
                <div className="p-6 md:p-8">
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.categories.map((category, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold font-devanagari border border-red-200"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Blog Content HTML */}
                  <div 
                    className="prose prose-lg max-w-none text-gray-700 font-devanagari"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />

                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-amber-200">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-gray-900 font-semibold font-devanagari">टैग्स:</span>
                      {blog.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs hover:bg-red-100 hover:text-red-700 transition-colors cursor-pointer font-devanagari border border-amber-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="mt-6 pt-6 border-t border-amber-200">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-gray-900 font-semibold font-devanagari">शेयर करें:</span>
                      <div className="flex gap-3">
                        <button 
                          onClick={shareBlog}
                          className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full flex items-center justify-center hover:from-red-700 hover:to-red-800 transition-colors border border-amber-300"
                        >
                          <FaShare className="text-sm" />
                        </button>
                        <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors border border-blue-300">
                          <FaFacebookF className="text-sm" />
                        </button>
                        <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors border border-sky-300">
                          <FaTwitter className="text-sm" />
                        </button>
                        <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors border border-green-300">
                          <FaWhatsapp className="text-sm" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-6">
                
                {/* About Author */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-200">
                  <h5 className="font-bold text-gray-900 text-lg mb-4 font-devanagari">लेखक के बारे में</h5>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-xl font-bold border-2 border-amber-300">
                      {blog.author.charAt(0)}
                    </div>
                    <div>
                      <h6 className="font-bold text-gray-900 font-devanagari">{blog.author}</h6>
                      <p className="text-gray-600 text-sm mt-1 font-devanagari">
                        हिंदू परंपराओं और प्रथाओं के गहन ज्ञान के साथ अनुभवी आध्यात्मिक मार्गदर्शक और लेखक।
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-200">
                  <div className="flex items-center gap-2 mb-4">
                    <FaHeart className="text-red-600" />
                    <h5 className="font-bold text-gray-900 text-lg font-devanagari">हाल के लेख</h5>
                  </div>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link 
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="flex items-start gap-3 group"
                      >
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-amber-200"
                        />
                        <div className="flex-1 min-w-0">
                          <h6 className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-red-600 transition-colors line-clamp-2 font-devanagari">
                            {post.title}
                          </h6>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <FaCalendar className="text-red-600" />
                            <span className="font-devanagari">{post.date}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-200">
                  <div className="flex items-center gap-2 mb-4">
                    <FaAward className="text-red-600" />
                    <h5 className="font-bold text-gray-900 text-lg font-devanagari">श्रेणियाँ</h5>
                  </div>
                  <div className="space-y-2">
                    {["त्योहार", "पूजा", "ध्यान", "शास्त्र", "आध्यात्मिकता"].map((category, index) => (
                      <Link
                        key={index}
                        to={`/blog?category=${category.toLowerCase()}`}
                        className="flex items-center justify-between py-2 text-gray-700 hover:text-red-600 transition-colors group font-devanagari"
                      >
                        <span className="text-sm">{category}</span>
                        <span className="text-xs bg-amber-100 px-2 py-1 rounded group-hover:bg-red-100 transition-colors border border-amber-200">
                          12
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Spiritual Quote */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg p-6 text-white border-2 border-amber-300">
                  <div className="text-center">
                    <div className="text-2xl font-devanagari font-bold mb-2">
                      ॐ नमः शिवाय
                    </div>
                    <p className="text-amber-200 text-sm font-devanagari">
                      पंचाक्षरी मंत्र - पांच अक्षरों का दिव्य मंत्र
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-3 text-amber-200">
                      <FaHandsHelping className="text-sm" />
                      <span className="text-xs font-devanagari">भगवान शिव की कृपा</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

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

export default BlogDetails;