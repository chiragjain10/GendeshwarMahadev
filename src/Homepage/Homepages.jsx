import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutSection from "./AboutSetion";
import Banner from "./Banner"
import PujaSection from "./pujaData ";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./Testionlial";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Banner />
      <AboutSection />
      <PujaSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}

export default Home;