import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import References from './components/References';
import ProcessSteps from './components/ProcessSteps';
import UseCases from './components/UseCases';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import EcommerceLanding from './pages/EcommerceLanding';

// Pages
import AboutUs from './pages/AboutUs';
import AgentAugmenteLanding from './pages/AgentAugmenteLanding';
import SocleClimatiqueLanding from './pages/SocleClimatiqueLanding';
import ControlTowerLanding from './pages/ControlTowerLanding';
import GeoAILanding from './pages/GeoAILanding';
import LegalNotice from './pages/LegalNotice';
import AllUseCases from './pages/AllUseCases';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // If navigation included a scroll hint, scroll to that section after mount
    const state: any = location.state as any;
    if (state && state.scrollTo) {
      const el = document.getElementById(state.scrollTo);
      if (el) {
        // slight delay to ensure layout and header height
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
      }

      // clear the history state so subsequent navigations don't auto-scroll
      try {
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch (e) {
        // ignore
      }
    }
  }, []);

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
      <Route path="/use-cases" element={<AllUseCases />} />
    </Routes>
  );
}

export default App;