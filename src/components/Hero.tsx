import React, { useEffect, useRef, useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const Hero = () => {
  const [showRoiForm, setShowRoiForm] = useState(false);
  const [roiFormData, setRoiFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: ''
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    
    if (title) title.classList.add('animate-fadeInUp');
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fadeInUp');
    }, 200);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-fadeInUp');
    }, 400);
    
    // Start floating animation after image fadeInUp completes (300ms delay + 1s duration)
    setTimeout(() => {
      setImageFloating(true);
    }, 1000);
  }, []);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [imageFloating, setImageFloating] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!roiFormData.name.trim()) {
      errors.name = 'Le nom est requis';
    }
    
    if (!roiFormData.email.trim()) {
      errors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(roiFormData.email)) {
      errors.email = 'Format d\'email invalide';
    }
    
    if (!roiFormData.company.trim()) {
      errors.company = 'Le nom de l\'entreprise est requis';
    }
    
    if (!roiFormData.phone.trim()) {
      errors.phone = 'Le numéro de téléphone est requis';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRoiInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRoiFormData({
      ...roiFormData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const handleRoiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsFormSubmitting(true);
    
    try {
      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/844e5c4f-9dc2-405c-a19b-039df6856f0a', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...roiFormData,
          formType: 'ROI Study Request',
          source: 'Hero Section'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();
      
      // Reset form and show success
      setRoiFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        website: ''
      });
      setShowRoiForm(false);
      setShowSuccessMessage(true);
      
      // Auto-hide success message after 10 seconds
      setTimeout(() => setShowSuccessMessage(false), 10000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
    } finally {
      setIsFormSubmitting(false);
    }
  };

  return (
    <section 
      ref={heroRef}
      className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 relative overflow-hidden bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100"
      aria-labelledby="hero-title"
    >
      <NeuralNetworkBackground />
      
      {/* Enhanced visual elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="max-w-2xl mx-auto lg:mx-0">
            {/* Enhanced typography with better hierarchy */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-african-violet/10 to-blue-green/10 border border-african-violet/20 rounded-full text-sm font-medium text-african-violet mb-6 animate-pulse">
                🚀 Solutions IA de nouvelle génération
              </span>
            </div>
          
          <h1 
            id="hero-title"
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight opacity-0 transition-all duration-1000 text-left"
          >
            <span className="bg-gradient-to-r from-arkeup-gray-800 to-arkeup-gray-700 bg-clip-text text-transparent block">
              Vos défis métier les plus complexes ?
            </span>
            <span className="block bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent mt-2 relative">
              Nous les transformons en avantages concurrentiels
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-african-violet to-blue-green rounded-full"></div>
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-arkeup-gray-600 mb-8 md:mb-10 opacity-0 transition-all duration-1000 leading-relaxed text-left max-w-3xl"
          >
            Là où d'autres reculent, nous transformons vos défis métier en opportunités stratégiques avec des 
            <span className="font-semibold text-african-violet"> solutions IA pour entreprises sur mesure</span>.
          </p>
        
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-start gap-4 opacity-0 transition-all duration-1000"
          >
            <button 
              onClick={() => { 
                setShowRoiForm(true); 
                setShowSuccessMessage(false);
                setFormErrors({});
              }}
              className="bg-gradient-to-r from-african-violet to-blue-green hover:from-blue-green hover:to-african-violet text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-african-violet/25 font-semibold text-lg w-full sm:w-auto group relative overflow-hidden focus:ring-4 focus:ring-african-violet/30 focus:outline-none whitespace-nowrap"
              aria-label="Demander une étude ROI personnalisée"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">📈</span>
                Mon étude ROI gratuite
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-green to-african-violet transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <a 
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1MdM0w-HPpRqggY4vV_B4g-bSX1OtxeU6kXq_VInpHfIReMNEE0ngvskzKCZsouNPqMEyfBS0Y?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center border-2 border-african-violet text-african-violet hover:bg-african-violet hover:text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold text-lg w-full sm:w-auto group relative overflow-hidden focus:ring-4 focus:ring-african-violet/30 focus:outline-none whitespace-nowrap"
              aria-label="Planifier un rendez-vous pour discuter de votre projet"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center">📅</span>
                Planifier un RDV
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </a>
          
          </div>
          </div>
          
          {/* Right side - Hero Image */}
          <div className="hidden lg:flex justify-end items-center pl-8">
            <div className="relative">
              <img 
                src="/heroImage.png" 
                alt="Intelligence Artificielle - Cerveau connecté représentant nos solutions IA innovantes"
                className={`w-96 h-96 object-contain animate-fadeInUp ${
                  imageFloating ? 'animate-float' : ''
                }`}
                style={{animationDelay: '300ms', animationFillMode: 'both'}}
              />
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-african-violet/20 to-blue-green/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-r from-blue-green/20 to-african-violet/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced ROI Form Popup */}
      {showRoiForm && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowRoiForm(false);
            }
          }}
        >
          <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full transform transition-all duration-300 scale-100">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
                  Demander votre étude ROI
                </h3>
                <p className="text-sm text-gray-500 mt-1">Recevez votre analyse personnalisée en 24h</p>
              </div>
              <button
                onClick={() => setShowRoiForm(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-african-violet/30"
                aria-label="Fermer le formulaire"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="px-6 pb-6">
              <div className="mb-5">
                <h4 className="text-lg font-semibold text-arkeup-gray-800 mb-4">
                  Obtenez votre analyse ROI personnalisée
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-arkeup-gray-700">Analyse de votre potentiel d'amélioration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-arkeup-gray-700">Estimation des gains financiers</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-arkeup-gray-700">Roadmap de mise en œuvre</span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleRoiSubmit} className="space-y-4">
                <div>
                  <label htmlFor="roi-name" className="block text-sm font-semibold text-arkeup-gray-700 mb-2">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    id="roi-name"
                    name="name"
                    required
                    value={roiFormData.name}
                    onChange={handleRoiInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all duration-200 text-base ${
                      formErrors.name 
                        ? 'border-red-400 bg-red-50' 
                        : 'border-arkeup-gray-300 hover:border-african-violet/50'
                    }`}
                    placeholder="Jean Dupont"
                    autoComplete="name"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1 animate-fadeIn">{formErrors.name}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="roi-email" className="block text-sm font-semibold text-arkeup-gray-700 mb-2">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      id="roi-email"
                      name="email"
                      required
                      value={roiFormData.email}
                      onChange={handleRoiInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all duration-200 text-base ${
                        formErrors.email 
                          ? 'border-red-400 bg-red-50' 
                          : 'border-arkeup-gray-300 hover:border-african-violet/50'
                      }`}
                      placeholder="jean.dupont@entreprise.com"
                      autoComplete="email"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1 animate-fadeIn">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="roi-phone" className="block text-sm font-semibold text-arkeup-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="roi-phone"
                      name="phone"
                      required
                      value={roiFormData.phone}
                      onChange={handleRoiInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all duration-200 text-base ${
                        formErrors.phone 
                          ? 'border-red-400 bg-red-50' 
                          : 'border-arkeup-gray-300 hover:border-african-violet/50'
                      }`}
                      placeholder="+33 6 12 34 56 78"
                      autoComplete="tel"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1 animate-fadeIn">{formErrors.phone}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="roi-company" className="block text-sm font-semibold text-arkeup-gray-700 mb-2">
                    Votre entreprise *
                  </label>
                  <input
                    type="text"
                    id="roi-company"
                    name="company"
                    required
                    value={roiFormData.company}
                    onChange={handleRoiInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all duration-200 text-base ${
                      formErrors.company 
                        ? 'border-red-400 bg-red-50' 
                        : 'border-arkeup-gray-300 hover:border-african-violet/50'
                    }`}
                    placeholder="Nom de votre entreprise"
                    autoComplete="organization"
                  />
                  {formErrors.company && (
                    <p className="text-red-500 text-sm mt-1 animate-fadeIn">{formErrors.company}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="roi-website" className="block text-sm font-semibold text-arkeup-gray-700 mb-2">
                    Site web (optionnel)
                  </label>
                  <input
                    type="url"
                    id="roi-website"
                    name="website"
                    value={roiFormData.website}
                    onChange={handleRoiInputChange}
                    className="w-full px-4 py-3 border border-arkeup-gray-300 hover:border-african-violet/50 rounded-xl focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all duration-200 text-base"
                    placeholder="https://www.votre-entreprise.com"
                    autoComplete="url"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isFormSubmitting}
                  className={`w-full font-bold py-4 px-8 rounded-xl transition-all relative overflow-hidden mt-5 text-lg ${
                    isFormSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-african-violet to-blue-green hover:from-blue-green hover:to-african-violet hover:shadow-xl hover:shadow-african-violet/25 transform hover:scale-[1.02]'
                  }`}
                >
                  {isFormSubmitting ? (
                    <span className="flex items-center justify-center gap-2 text-white">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2 text-white">
                      📧 Recevoir mon étude ROI gratuite
                      <span className="ml-1">→</span>
                    </span>
                  )}
                </button>
                
                <p className="text-xs text-arkeup-gray-500 text-center mt-3">
                  🔒 Vos données sont sécurisées et ne seront jamais partagées
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Success Message Popup */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center transform transition-all duration-300 scale-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-4">Demande envoyée avec succès ! 🎉</h3>
            <p className="text-lg text-arkeup-gray-700 mb-6">
              Nous vous contacterons dans les <strong>24 heures</strong> avec votre étude ROI personnalisée.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-green-700">
                📧 Vérifiez votre boîte email (et vos spams) pour notre confirmation
              </p>
            </div>
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Parfait, merci !
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;