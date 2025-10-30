import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './componenet/Navbar';
import Home from './Homepage/Homepages';
import AboutPage from './Pages/About';
import Footer from './componenet/Footer';
import BlogGridPage from "./Pages/Bloggrid";
import ServicesPage from "./Pages/Servise";
import ContactPage from "./Pages/Contact";
import EventsPage from "./Pages/Events";
import PujaPage from "./Pages/Puja";
import PujaDetail from "./Pages/PujaDetail";
import BlogDetails from "./Pages/BlogDtails";
import EventDetails from "./Pages/EventDetails";
import DonationPage from "./Pages/DonationPage";
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

        <Route path="/bloggrid" element={<BlogGridPage />} />
        <Route path="/blog/:blogId" element={<BlogDetails/>}/>
        
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event/:eventId" element={<EventDetails/>}/>

        <Route path="/donation" element={<DonationPage/>}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
