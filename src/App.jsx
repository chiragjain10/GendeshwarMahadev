import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './componenet/Navbar';
import Home from './Homepage/Homepages';
import AboutPage from './Pages/About';
import Footer from './componenet/Footer';
import ServicesPage from "./Pages/Servise";
import ContactPage from "./Pages/Contact";
import PujaPage from "./Pages/Puja";
import PujaDetail from "./Pages/PujaDetail";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/puja" element={<PujaPage/>} />
        <Route path="/pujaDetail/:pujaId" element={<PujaDetail/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
