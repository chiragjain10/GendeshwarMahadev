import AboutSection from "./AboutSetion";
import Banner from "./Banner"
import BlogSection from "./BlogSection";
import ContactFormSection from "./ContactFrom";
import CTASection from "./Cta";
import DonationSection from "./DonationSection";
import ProgressSection from "./ProgressSection ";
import PujaSection from "./pujaData ";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./Testionlial";
import VolunteersSection from "./VolunteersSection";

const Home =()=>{
  return(
  <>
  <Banner/>
  <AboutSection/>
  <ServicesSection/>
  <ProgressSection/>
  <DonationSection/>

  <VolunteersSection/>
  <PujaSection/>
  <TestimonialsSection/>
  {/* <CTASection/> */}
  <ContactFormSection/>
  <BlogSection/>
  </>
  )
}

export default Home;