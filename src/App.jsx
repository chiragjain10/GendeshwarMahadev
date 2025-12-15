import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from 'react';
import Navbar from './componenet/Navbar';
import Home from './Homepage/Homepages';
import AboutPage from './Pages/About';
import Footer from './componenet/Footer';
import ServicesPage from "./Pages/Servise";
import ContactPage from "./Pages/Contact";
import PujaPage from "./Pages/Puja";
import PujaDetail from "./Pages/PujaDetail";
import Gallery from "./Pages/Gallery";
import './App.css';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/puja" element={<PujaPage/>} />
        <Route path="/puja/:slug" element={<PujaDetail/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/donation" element={<Navigate to="/contact" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
