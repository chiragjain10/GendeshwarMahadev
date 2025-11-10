import React, { useState } from "react";
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
  FaLanguage
} from "react-icons/fa";

const Navbar = () => {
  const [openLeft, setOpenLeft] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const lang = (searchParams.get("lang") || "en").toLowerCase() === "hi" ? "hi" : "en";
  const toggleLang = () => {
    const params = new URLSearchParams(searchParams);
    params.set("lang", lang === "hi" ? "en" : "hi");
    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
  };

  const menuItems = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "About", path: "/about", icon: FaUser },
    { name: "Services", path: "/service", icon: FaHandsHelping },
    { name: "Pujas", path: "/puja", icon: FaPray },
    { name: "Contact", path: "/contact", icon: FaEnvelope }
  ];

  return (
    <div className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white shadow-lg border-b border-amber-300/30">
      <nav className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
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
          <Link to={{ pathname: "/", search: location.search }} className="flex items-center gap-3 hover:opacity-90 transition duration-300">
            <div className="p-2 bg-amber-500 rounded-full shadow-md">
              <FaOm className="text-white text-xl" />
            </div>
            <div className="text-center">
              <h1 className="text-xl md:text-2xl font-bold text-white">
                Shiva Dham
              </h1>
              <p className="text-amber-200 text-xs hidden md:block">ॐ नमः शिवाय</p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex items-center space-x-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={{ pathname: item.path, search: location.search }}
                  className="font-medium text-white hover:text-amber-300 transition duration-300 py-2 px-4 rounded-lg hover:bg-red-600/50 text-sm lg:text-base"
                >
                  {item.name}
                </Link>
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
              <h1 className="text-xl font-bold text-white">Shiva Dham</h1>
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
              <li key={item.name}>
                <Link
                  to={{ pathname: item.path, search: location.search }}
                  onClick={() => setOpenLeft(false)}
                  className="flex items-center font-medium text-white text-base py-3 px-4 hover:bg-red-600/50 transition duration-300 rounded-lg"
                >
                  <item.icon className="mr-3 text-amber-300 text-lg" />
                  {item.name}
                </Link>
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

export default Navbar;