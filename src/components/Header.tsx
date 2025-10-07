import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, CheckCircle } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    company: '', 
    phone: '',
    website: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUseCaseClick = (useCase: string) => {
    navigate(`/${useCase}`);
    setIsUseCasesOpen(false);
    setIsMenuOpen(false);
  };

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Envoi des données au webhook
    fetch('https://arkedown.app.n8n.cloud/webhook/844e5c4f-9dc2-405c-a19b-039df6856f0a', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...contactFormData,
        formType: 'Contact Form',
        source: 'Header Section'
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Form submitted successfully:', data);
      setShowContactForm(false);
      setShowSuccessMessage(true);
    })
    .catch(error => {
      console.error('Error submitting form:', error.message || error);
      setShowContactForm(false);
      setShowSuccessMessage(false);
      alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <button
              onClick={() => setIsUseCasesOpen(!isUseCasesOpen)}
              className="text-arkeup-gray-700 hover:text-african-violet transition-all duration-300 transform hover:translate-y-[-2px] hover:scale-105 font-medium flex items-center group"
            >
              Use Cases
              <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isUseCasesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isUseCasesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-arkeup-gray-200 py-2 z-50">
                <button
                  onClick={() => handleUseCaseClick('ecommerce')}
                  className="w-full text-left px-4 py-3 text-arkeup-gray-700 hover:bg-african-violet-50 hover:text-african-violet transition-all duration-300 transform hover:translate-x-1 hover:shadow-sm rounded-lg"
                >
                  <div className="font-medium">Assistant e-commerce</div>
                  <div className="text-sm text-arkeup-gray-500">Optimisez votre conversion</div>
                </button>
                <button
                  onClick={() => handleUseCaseClick('agent-augmente')}
                  className="w-full text-left px-4 py-3 text-arkeup-gray-700 hover:bg-blue-green-50 hover:text-blue-green transition-all duration-300 transform hover:translate-x-1 hover:shadow-sm rounded-lg"
                >
                  <div className="font-medium">Agent augmenté</div>
                  <div className="text-sm text-arkeup-gray-500">Décuplez l'efficacité de vos équipes</div>
                </button>
                <button
                  onClick={() => handleUseCaseClick('socle-climatique')}
                  className="w-full text-left px-4 py-3 text-arkeup-gray-700 hover:bg-african-violet-50 hover:text-african-violet transition-all duration-300 transform hover:translate-x-1 hover:shadow-sm rounded-lg"
                >
                  <div className="font-medium">Socle Climatique</div>
                  <div className="text-sm text-arkeup-gray-500">Pilotez votre stratégie environnementale</div>
                </button>
                <button
                  onClick={() => handleUseCaseClick('control-tower')}
                  className="w-full text-left px-4 py-3 text-arkeup-gray-700 hover:bg-blue-green-50 hover:text-blue-green transition-all duration-300 transform hover:translate-x-1 hover:shadow-sm rounded-lg"
                >
                  <div className="font-medium">Control Tower</div>
                  <div className="text-sm text-arkeup-gray-500">Gouvernance IA centralisée</div>
                </button>
                <button
                  onClick={() => handleUseCaseClick('geo-ai')}
                  className="w-full text-left px-4 py-3 text-arkeup-gray-700 hover:bg-african-violet-50 hover:text-african-violet transition-all duration-300 transform hover:translate-x-1 hover:shadow-sm rounded-lg"
                >
                  <div className="font-medium">Geo AI</div>
                  <div className="text-sm text-arkeup-gray-500">Intelligence géospatiale</div>
                </button>
                <button
                  onClick={() => {
                    navigate('/');
                    setIsUseCasesOpen(false);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-arkeup-gray-700 hover:bg-blue-green-50 hover:text-blue-green transition-all duration-300 transform hover:translate-x-1 hover:shadow-sm rounded-lg"
                >
                  <div className="font-medium">Tous les use cases</div>
                  <div className="text-sm text-arkeup-gray-500">Voir la liste complète</div>
                </button>
              </div>
            )}
          </div>
          
          <a
            href="#expertise"
            onClick={(e) => {
              e.preventDefault();
              // If we're not on the home page, navigate to home and pass a hint
              // so HomePage can scroll to the expertise section after mount.
              if (location.pathname !== '/') {
                navigate('/', { state: { scrollTo: 'expertise' } });
                setIsMenuOpen(false);
                return;
              }

              const expertiseSection = document.getElementById('expertise');
              if (expertiseSection) {
                expertiseSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-arkeup-gray-700 hover:bg-gradient-to-r hover:from-african-violet hover:to-blue-green hover:bg-clip-text hover:text-transparent transition-all duration-300 transform hover:translate-y-[-2px] hover:scale-105 font-medium relative group"
          >
            Expertise
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-african-violet to-blue-green transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <Link
            to="/about"
            className="text-arkeup-gray-700 hover:bg-gradient-to-r hover:from-blue-green hover:to-african-violet hover:bg-clip-text hover:text-transparent transition-all duration-300 transform hover:translate-y-[-2px] hover:scale-105 font-medium relative group"
          >
            À propos de nous
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-green to-african-violet transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <button
            onClick={() => {
              setShowContactForm(true);
              setShowSuccessMessage(false);
              setIsMenuOpen(false);
            }}
            className="bg-gradient-to-r from-african-violet to-blue-green hover:from-blue-green hover:to-african-violet text-white px-5 py-2 rounded-full transition-all transform hover:scale-105 hover:shadow-lg font-medium"
          >
            Contactez-nous
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
    
    {/* Contact Form Popup */}
    {showContactForm && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
              Contactez nos experts
            </h3>
            <button
              onClick={() => setShowContactForm(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-arkeup-gray-800 mb-4">
                Parlons de votre projet IA
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-arkeup-gray-700">Échange personnalisé avec nos experts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-arkeup-gray-700">Analyse de vos besoins spécifiques</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-arkeup-gray-700">Proposition de solution adaptée</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                  Votre nom *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={contactFormData.name}
                  onChange={handleContactInputChange}
                  className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
                  placeholder="Votre nom complet"
                />
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                  Votre email *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={contactFormData.email}
                  onChange={handleContactInputChange}
                  className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="contact-company" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                  Votre entreprise *
                </label>
                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  required
                  value={contactFormData.company}
                  onChange={handleContactInputChange}
                  className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
                  placeholder="Nom de votre entreprise"
                />
              </div>
              
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={contactFormData.phone}
                  onChange={handleContactInputChange}
                  className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              
              <div>
                <label htmlFor="contact-website" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                  Site web de votre entreprise (optionnel)
                </label>
                <input
                  type="text"
                  id="contact-website"
                  name="website"
                  value={contactFormData.website}
                  onChange={handleContactInputChange}
                  className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
                  placeholder="www.votre-site.com ou https://votre-site.com"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-african-violet to-blue-green hover:from-blue-green hover:to-african-violet text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg text-lg"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </div>
    )}

    {/* Success Message Popup */}
    {showSuccessMessage && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Message envoyé !</h3>
          <p className="text-lg text-arkeup-gray-700">Nous vous contacterons très bientôt.</p>
          <button
            onClick={() => setShowSuccessMessage(false)}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all"
          >
            Fermer
          </button>
        </div>
      </div>
    )}
        <button 
          className="md:hidden text-arkeup-gray-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <div>
              <button
                onClick={() => setIsUseCasesOpen(!isUseCasesOpen)}
                className="text-arkeup-gray-700 hover:text-arkeup-orange transition-all transform hover:translate-y-[-2px] py-2 font-medium flex items-center w-full"
              >
                Use Cases
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isUseCasesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isUseCasesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <button
                    onClick={() => handleUseCaseClick('ecommerce')}
                    className="block text-arkeup-gray-600 hover:text-african-violet transition-all transform hover:translate-y-[-1px] py-1 text-sm"
                  >
                    Assistant e-commerce
                  </button>
                  <button
                    onClick={() => handleUseCaseClick('agent-augmente')}
                    className="block text-arkeup-gray-600 hover:text-blue-green transition-all transform hover:translate-y-[-1px] py-1 text-sm"
                  >
                    Agent augmenté
                  </button>
                  <button
                    onClick={() => handleUseCaseClick('socle-climatique')}
                    className="block text-arkeup-gray-600 hover:text-african-violet transition-all transform hover:translate-y-[-1px] py-1 text-sm"
                  >
                    Socle Climatique
                  </button>
                  <button
                    onClick={() => handleUseCaseClick('control-tower')}
                    className="block text-arkeup-gray-600 hover:text-blue-green transition-all transform hover:translate-y-[-1px] py-1 text-sm"
                  >
                    Control Tower
                  </button>
                  <button
                    onClick={() => handleUseCaseClick('geo-ai')}
                    className="block text-arkeup-gray-600 hover:text-african-violet transition-all transform hover:translate-y-[-1px] py-1 text-sm"
                  >
                    Geo AI
                  </button>
                  <button
                    onClick={() => {
                      navigate('/');
                      setIsUseCasesOpen(false);
                      setIsMenuOpen(false);
                    }}
                    className="block text-arkeup-gray-600 hover:text-blue-green transition-all transform hover:translate-y-[-1px] py-1 text-sm"
                  >
                    Tous les use cases
                  </button>
                </div>
              )}
            </div>
            
            <a 
              href="#expertise"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const expertiseSection = document.getElementById('expertise');
                if (expertiseSection) {
                  expertiseSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-arkeup-gray-700 hover:text-african-violet transition-all transform hover:translate-y-[-2px] py-2 font-medium"
            >
              Expertise
            </a>
            
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-arkeup-gray-700 hover:text-blue-green transition-all transform hover:translate-y-[-2px] py-2 font-medium"
            >
              À propos de nous
            </Link>
            
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-african-violet to-african-violet-600 hover:from-african-violet-700 hover:to-african-violet-800 text-white px-5 py-2 rounded-full transition-all transform hover:scale-105 hover:shadow-lg font-medium w-full"
            >
              Contactez-nous
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;