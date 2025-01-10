import './App.css';
import BetterSolution from './components/BetterSolution';
import BlogSection from './components/BlogSection';
import ContactForm from './components/ContactForm';
import DevelopmentFeatures from './components/DevelopmentFeatures';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import MemberiumCertification from './components/MemberiumCertification';
import Navbar from './components/Navbar';
import PartnersSection from './components/PartnersSection';
import ScheduleConsultation from './components/ScheduleConsultation';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import UpworkProfile from './components/UpworkProfile';
import ValueProposition from './components/ValueProposition';


function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <PartnersSection/>
      <ValueProposition/>
      <FeaturesSection/>
      <ServicesSection/>
      <DevelopmentFeatures/>
      <BetterSolution/>
      <UpworkProfile/>
      <MemberiumCertification/>
      <ScheduleConsultation/>
      <TestimonialsSection/>
      <BlogSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
