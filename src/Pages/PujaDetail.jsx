import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { FaCalendar, FaClock, FaRupeeSign, FaStar, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaHeart, FaAward, FaShieldAlt } from "react-icons/fa";
import pujasData from "../Data/Pujas.json";
import PopupForm from "../componenet/PopupForm";

const PujaDetailsPage = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const [puja, setPuja] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // Find the puja by ID
    const foundPuja = pujasData.find(p => p.link === slug);
    setPuja(foundPuja);
  }, [slug]);

  if (!puja) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {lang === 'hi' ? 'पूजा नहीं मिली' : 'Puja not found'}
          </h2>
          <Link 
            to={`/puja?lang=${lang}`} 
            className="mt-4 inline-block text-red-600 hover:underline"
          >
            {lang === 'hi' ? 'सभी सेवाएं देखें' : 'View all services'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50">
      {/* Breadcrumbs */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link 
                  to={`/?lang=${lang}`} 
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-red-600"
                >
                  {lang === 'hi' ? 'होम' : 'Home'}
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link 
                    to={`/puja?lang=${lang}`} 
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-red-600 md:ml-2"
                  >
                    {lang === 'hi' ? 'पूजा सेवाएं' : 'Puja Services'}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                    {puja.title[lang]}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Puja Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                className="w-full h-full object-cover"
                src={puja.image}
                alt={puja.title[lang]}
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="uppercase tracking-wide text-sm text-red-600 font-semibold mb-2">
                {puja.category.toUpperCase()}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {puja.title[lang]}
              </h1>
              <p className="text-gray-600 mb-6">
                {puja.desc[lang]}
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === 'hi' ? 'पूजा विवरण' : 'Puja Details'}
                </h3>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-gray-600 w-32">
                      {lang === 'hi' ? 'अवधि' : 'Duration'}:
                    </span>
                    <span className="text-gray-800">
                      {lang === 'hi' ? '2-3 घंटे' : '2-3 hours'}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">
                      {lang === 'hi' ? 'सामग्री' : 'Materials'}:
                    </span>
                    <span className="text-gray-800">
                      {lang === 'hi' 
                        ? 'सभी आवश्यक पूजा सामग्री शामिल है' 
                        : 'All necessary puja materials included'}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">
                      {lang === 'hi' ? 'भाषा' : 'Language'}:
                    </span>
                    <span className="text-gray-800">
                      {lang === 'hi' ? 'हिंदी, संस्कृत' : 'Hindi, Sanskrit'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center"
                >
                  <FaCalendar className="mr-2" />
                  {lang === 'hi' ? 'पूजा बुक करें' : 'Book This Puja'}
                </button>
                <button 
                  onClick={() => {
                    const message = encodeURIComponent(`Namaste, mujhe is puja (${puja.title.hi}) ke bare me jankari chahiye`);
                    window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
                  }}
                  className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center"
                >
                  <FaPhone className="mr-2" />
                  {lang === 'hi' ? 'कॉल बैक' : 'Request Callback'}
                </button>
                
                <PopupForm 
                  isOpen={isFormOpen} 
                  onClose={() => setIsFormOpen(false)}
                  pujaName={puja.title[lang]}
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="p-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {lang === 'hi' ? 'अतिरिक्त जानकारी' : 'Additional Information'}
            </h3>
            <div className="prose max-w-none text-gray-600">
              <p>
                {lang === 'hi'
                  ? 'यह पूजा हमारे अनुभवी पंडितों द्वारा वैदिक विधि-विधान के साथ संपन्न कराई जाती है। पूजा के बाद प्रसाद वितरण किया जाता है।'
                  : 'This puja is performed by our experienced priests following Vedic rituals. Prasad distribution is done after the puja.'}
              </p>
              <p className="mt-4">
                {lang === 'hi'
                  ? 'अधिक जानकारी या किसी विशेष अनुरोध के लिए कृपया हमसे संपर्क करें।'
                  : 'For more information or any special requests, please contact us.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PujaDetailsPage;