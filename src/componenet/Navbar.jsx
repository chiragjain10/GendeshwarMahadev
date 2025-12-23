import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaBars,
  FaTimes,
  FaPhone,
  FaHome,
  FaUser,
  FaHandsHelping,
  FaPray,
  FaEnvelope,
  FaOm,
  FaLanguage,
  FaChevronDown,
  FaChevronRight
} from "react-icons/fa";

function Navbar() {
  const [openLeft, setOpenLeft] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const lang = (searchParams.get("lang") || "en").toLowerCase() === "hi" ? "hi" : "en";
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  // Puja services data
  const pujaServices = [
    { name: "ENGAGEMENT PUJA" },
    { 
      name: "VIVAH PUJA",
      submenu: [
        { name: "VIVAH" },
        { name: "PITRU PAKSHA" },
        { name: "AKHAND RAMAYAN PATH" },
        { name: "ASK YOUR MUHURT" },
        { name: "BABY MUNDAN PUJA" },
        { name: "BIRTHDAY PUJA" },
        { name: "GRAH PRAVESH" },
        { name: "KAAL SARP DOSH PUJA" },
        { name: "BHOOMI PUJAN" },
        { name: "SATYANARAYAN PUJA" },
        { name: "OFFICE/BUSINESS PUJA" },
        { name: "NEW VEHICLE PUJA" },
        { name: "NAMKARAN SANSKAR" },
        { name: "MAHA MRITYUNJAY MANTR" },
        { name: "VASTU SHANTI PUJA" }
      ]
    },
    { 
      name: "PITRU PAKSHA",
      submenu: [
        { name: "PITRA PAKSH PUJA" },
        { name: "BARSI PUJA" },
        { name: "SUDDHI PUJA & HAVAN" }
      ]
    },
    { name: "GOD BHARAI PUJA" },
    { name: "HALDI & MEHANDI PUJA" },
    { name: "MARRIAGE ANNIVERSARY PUJA" },
    { name: "AKHAND RAMAYAN PATH" },
    { name: "ASK YOUR MUHURT" },
    { name: "BABY MUNDAN PUJA" },
    { name: "BIRTHDAY PUJA" },
    { name: "GRAH PRAVESH" },
    { name: "KAAL SARP DOSH PUJA" },
    { name: "BHOOMI PUJAN" },
    { name: "SATYANARAYAN PUJA" },
    { name: "OFFICE/BUSINESS PUJA" },
    { name: "NEW VEHICLE PUJA" },
    { name: "NAMKARAN SANSKAR" },
    { name: "MAHA MRITYUNJAY MANTR" },
    { name: "VASTU SHANTI PUJA" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileDropdown = (itemName) => {
    setMobileActiveDropdown(mobileActiveDropdown === itemName ? null : itemName);
  };
  const toggleLang = () => {
    const params = new URLSearchParams(searchParams);
    params.set("lang", lang === "hi" ? "en" : "hi");
    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
  };

  const menuItems = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "About", path: "/about", icon: FaUser },
    { 
      name: "Puja Services", 
      path: "/puja",
      icon: FaPray,
    },
    { name: "Gallery", path: "/gallery", icon: FaUser },
    { name: "Contact", path: "/contact", icon: FaEnvelope }
  ];

  return (
    <div className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white shadow-lg border-b border-amber-300/30 z-40">
      <nav className="flex items-center justify-between px-4 md:px-8 md:py-4">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpenLeft(true)}
          className="p-3 bg-red-600 hover:bg-red-500 rounded-lg transition duration-300 md:hidden shadow-md"
          aria-label="Open menu"
        >
          <FaBars className="text-lg" />
        </button>

        {/* Logo */}
        <div className="flex-1 flex justify-center md:flex-none md:mr-8">
          <Link to={{ pathname: "/", search: location.search }} className="flex items-center gap-3 hover:opacity-90 transition duration-300 logo">
            <img src="/images/logo.png" alt="Gendeshwar Mahadev" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex items-center space-x-1">
            {menuItems.map((item) => (
              <li 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && !activeDropdown?.includes('sub-') && setActiveDropdown(null)}
              >
                {!item.dropdown ? (
                  <Link
                    to={{ pathname: item.path, search: location.search }}
                    className="font-medium text-white hover:text-amber-300 transition duration-300 py-2 px-4 rounded-lg hover:bg-red-600/50 text-sm lg:text-base flex items-center"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div
                    className="font-medium text-white hover:text-amber-300 transition duration-300 py-2 px-4 rounded-lg hover:bg-red-600/50 text-sm lg:text-base flex items-center cursor-pointer"
                  >
                    {item.name}
                    <FaChevronDown className="ml-1 text-xs" />
                  </div>
                )}
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    ref={dropdownRef}
                    className="absolute left-0 mt-0 w-72 bg-white rounded-md shadow-lg z-50 border border-gray-200"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    style={{ top: '100%' }}
                  >
                    <div className="py-1 max-h-96 overflow-y-auto">
                      {item.items.map((service, index) => (
                        <div 
                          key={index} 
                          className="relative group"
                          onMouseEnter={() => service.submenu && setActiveDropdown(`sub-${service.name}`)}
                        >
                          {service.submenu ? (
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center pr-2">
                              <span className="whitespace-nowrap">{service.name}</span>
                              <FaChevronRight className="text-xs text-gray-400" />
                            </div>
                          ) : (
                            <Link
                              to="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                            >
                              {service.name}
                            </Link>
                          )}
                          
                          {/* Nested Dropdown */}
                          {service.submenu && activeDropdown === `sub-${service.name}` && (
                            <div 
                              className="absolute left-full top-0 w-72 bg-white rounded-md shadow-lg z-50 border border-gray-200 pointer-events-auto"
                              onMouseEnter={() => setActiveDropdown(`sub-${service.name}`)}
                              onMouseLeave={() => setActiveDropdown(item.name)}
                              style={{ marginLeft: '2px' }}
                            >
                              <div className="py-1">
                                {service.submenu.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Book Pandit Button */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="bg-white/20 hover:bg-white/30 text-white font-semibold px-3 py-2 rounded-lg transition duration-300 shadow-md flex items-center gap-2 text-sm lg:text-base"
            aria-label="Toggle language"
          >
            <FaLanguage className="text-sm" />
            <span>{lang === "hi" ? "EN" : "हिं"}</span>
          </button>
          <Link
            to={{ pathname: "/contact", search: location.search }}
            className="bg-amber-500 hover:bg-amber-400 text-red-900 font-bold px-6 py-2 rounded-lg transition duration-300 shadow-md flex items-center gap-2 text-sm lg:text-base"
          >
            <FaPhone className="text-sm" />
            Book Pandit
          </Link>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-80 h-full bg-gradient-to-b from-red-700 to-red-800 transform ${
          openLeft ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-y-auto z-50 md:hidden shadow-2xl border-r border-amber-300/30`}
      >
        <div className="flex items-center justify-between p-6 border-b border-amber-300/30 bg-red-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500 rounded-full shadow-md">
              <FaOm className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Shiv Dham</h1>
              <p className="text-amber-200 text-sm">ॐ नमः शिवाय</p>
            </div>
          </div>
          <button
            onClick={() => setOpenLeft(false)}
            className="p-3 bg-red-600 hover:bg-red-500 rounded-lg transition duration-300 shadow-md"
            aria-label="Close menu"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                <div className="flex items-center justify-between">
                  <Link
                    to={{ pathname: item.path, search: location.search }}
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault();
                        toggleMobileDropdown(item.name);
                      } else {
                        setOpenLeft(false);
                      }
                    }}
                    className={`flex-1 flex items-center font-medium text-white text-base py-3 px-4 hover:bg-red-600/50 transition duration-300 rounded-lg ${item.dropdown ? 'pr-2' : ''}`}
                  >
                    <item.icon className="mr-3 text-amber-300 text-lg" />
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="p-2 text-white hover:text-amber-300 transition-colors"
                    >
                      <FaChevronDown className={`transition-transform duration-200 ${mobileActiveDropdown === item.name ? 'transform rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {item.dropdown && mobileActiveDropdown === item.name && (
                  <div className="ml-6 mt-1 bg-red-800/50 rounded-lg overflow-hidden">
                    {item.items.map((service, index) => (
                      <div key={index} className="relative">
                        <div 
                          className="flex items-center justify-between px-4 py-2 text-white hover:bg-red-700/50"
                          onClick={() => toggleMobileDropdown(`sub-${service.name}`)}
                        >
                          <span className="text-sm">{service.name}</span>
                          {service.submenu && (
                            <FaChevronDown className={`text-xs transition-transform duration-200 ${mobileActiveDropdown === `sub-${service.name}` ? 'transform rotate-180' : ''}`} />
                          )}
                        </div>
                        
                        {/* Mobile Nested Dropdown */}
                        {service.submenu && mobileActiveDropdown === `sub-${service.name}` && (
                          <div className="ml-4 bg-red-900/30 rounded-r-lg border-l-2 border-amber-300/30">
                            {service.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to="#"
                                onClick={() => setOpenLeft(false)}
                                className="block px-4 py-2 text-sm text-white/90 hover:bg-red-700/50"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-2">
            <button
              onClick={toggleLang}
              className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2"
              aria-label="Toggle language"
            >
              <FaLanguage className="text-base" />
              <span>{lang === "hi" ? "English" : "हिंदी"}</span>
            </button>
          </div>

          {/* Mobile Book Pandit Button */}
          <div className="mt-6 pt-6 border-t border-amber-300/30">
            <Link
              to={{ pathname: "/contact", search: location.search }}
              onClick={() => setOpenLeft(false)}
              className="w-full bg-amber-500 hover:bg-amber-400 text-red-900 font-bold px-6 py-3 rounded-lg transition duration-300 text-center block shadow-md flex items-center justify-center gap-2"
            >
              <FaPhone className="text-base" />
              Book Pandit
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-6 p-4 bg-red-600/50 rounded-xl border border-amber-300/20">
            <h3 className="font-bold text-amber-300 mb-3 text-base flex items-center gap-2">
              <FaPhone className="text-amber-300" />
              Contact Info
            </h3>
            <div className="space-y-2 text-amber-100 text-sm">
              <p className="flex items-center gap-2">📞 +91 98765 43210</p>
              <p className="flex items-center gap-2">📧 info@shivadham.com</p>
              <p className="flex items-center gap-2">📍 Varanasi, UP</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 mt-4">
              {[FaFacebookF, FaTwitter, FaYoutube].map((Icon, index) => (
                <a
                  href="#"
                  key={index}
                  className="p-2 rounded-lg text-white bg-red-500 hover:bg-red-400 transition duration-300 shadow-md"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </aside>

      {/* Overlay */}
      {openLeft && (
        <div
          onClick={() => setOpenLeft(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        ></div>
      )}
    </div>
  );
};

// Wrap the component with React.memo for performance optimization
export default React.memo(Navbar);