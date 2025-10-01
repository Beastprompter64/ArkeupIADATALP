import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import References from './components/References';
import ProcessSteps from './components/ProcessSteps';
import UseCases from './components/UseCases';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import EcommerceLanding from './components/EcommerceLanding';
import AboutUs from './components/AboutUs';
import AgentAugmenteLanding from './components/AgentAugmenteLanding';
import SocleClimatiqueLanding from './components/SocleClimatiqueLanding';
import ControlTowerLanding from './components/ControlTowerLanding';
import GeoAILanding from './components/GeoAILanding';
import LegalNotice from './components/LegalNotice';

function HomePage() {
  return (
    <div className="min-h-screen bg-arkeup-gray-50 text-arkeup-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <ProcessSteps />
        <UseCases />
        <References />
        <Expertise />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ecommerce" element={<EcommerceLanding />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/agent-augmente" element={<AgentAugmenteLanding />} />
      <Route path="/socle-climatique" element={<SocleClimatiqueLanding />} />
      <Route path="/control-tower" element={<ControlTowerLanding />} />
      <Route path="/geo-ai" element={<GeoAILanding />} />
      <Route path="/mentions-legales" element={<LegalNotice />} />
    </Routes>
  );
}

export default App;