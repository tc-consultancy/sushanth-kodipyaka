import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BrandsSection from './components/BrandsSection';
import ServicesSection from './components/ServicesSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';

// Main App Component
function App() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Header />
      <div className='flex flex-col gap-40'>
        <HeroSection />
        <BrandsSection />
      </div>
      <AboutSection />
      <ServicesSection />
      <ExperienceTimeline />
      <ContactSection />
    </main>
  );
}
export default App;
