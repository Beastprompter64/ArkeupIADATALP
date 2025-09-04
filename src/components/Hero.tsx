import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, CheckCircle } from 'lucide-react';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const Hero = () => {
  const navigate = useNavigate();
  const [showRoiForm, setShowRoiForm] = useState(false);
  const [roiFormData, setRoiFormData] = useState({
    name: '',
    email: '',
    company: '',
    company: '',
    phone: '',
    website: ''
  });
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
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
  }, []);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleRoiInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoiFormData({
      ...roiFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleRoiSubmit = (e: React.FormEvent) => {
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
        ...roiFormData,
        formType: 'ROI Study Request',
        source: 'Hero Section'
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
      setShowRoiForm(false);
      setShowSuccessMessage(true);
      // Optionnel: afficher un message de succès
    })
    .catch(error => {
      console.error('Error submitting form:', error.message || error);
      // Fermer le formulaire même en cas d'erreur pour éviter de bloquer l'utilisateur
      setShowRoiForm(false);
      setShowSuccessMessage(false); // Ensure success message is not shown on error
      alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
      // Optionnel: afficher un message d'erreur
    });
  };

  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 relative overflow-hidden bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
      <NeuralNetworkBackground />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
          <h1 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight opacity-0 transition-opacity duration-1000 text-left"
          >
            <span className="bg-gradient-to-r from-arkeup-gray-800 to-arkeup-gray-700 bg-clip-text text-transparent">
              Vos défis métier les plus complexes ?
            </span>
            <span className="block bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent mt-2">
              Nous les transformons en avantages concurrentiels
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-base md:text-lg text-arkeup-gray-600 mb-6 md:mb-8 opacity-0 transition-opacity duration-1000 leading-relaxed italic text-left"
          >
            Là où d'autres reculent, nous transformons vos défis métier en opportunités stratégiques avec des solutions IA pour entreprises sur mesure.
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-start gap-3 opacity-0 transition-opacity duration-1000"
          >
            <button 
              onClick={() => { setShowRoiForm(true); setShowSuccessMessage(false); }}
              className="bg-gradient-to-r from-african-violet to-blue-green hover:from-blue-green hover:to-african-violet text-white px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-african-violet/25 font-medium text-base w-full sm:w-auto group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                Mon étude ROI
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">🚀</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-green to-african-violet transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <a 
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1MdM0w-HPpRqggY4vV_B4g-bSX1OtxeU6kXq_VInpHfIReMNEE0ngvskzKCZsouNPqMEyfBS0Y?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-gradient-to-r from-african-violet to-blue-green hover:from-blue-green hover:to-african-violet text-white px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-african-violet/25 font-medium text-base w-full sm:w-auto group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                J'ai un projet
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">💬</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-green to-african-violet transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </div>
      
      {/* ROI Form Popup */}
      {showRoiForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
                Demander votre étude ROI
              </h3>
              <button
                onClick={() => setShowRoiForm(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-arkeup-gray-800 mb-4">
                  Obtenez votre analyse ROI personnalisée
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-arkeup-gray-700">Analyse de votre potentiel d'amélioration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-arkeup-gray-700">Estimation des gains financiers</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-arkeup-gray-700">Roadmap de mise en œuvre</span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleRoiSubmit} className="space-y-4">
                <div>
                  <label htmlFor="roi-name" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    id="roi-name"
                    name="name"
                    required
                    value={roiFormData.name}
                    onChange={handleRoiInputChange}
                    className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
                    placeholder="Votre nom complet"
                  />
                </div>
                
                <div>
                  <label htmlFor="roi-email" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                    Votre email *
                  </label>
                  <input
                    type="email"
                    id="roi-email"
                    name="email"
                    required
                    value={roiFormData.email}
                    onChange={handleRoiInputChange}
                    className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="roi-company" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                    Votre entreprise *
                  </label>
                  <input
                    type="text"
                    id="roi-company"
                    name="company"
                    required
                    value={roiFormData.company}
                    onChange={handleRoiInputChange}
                    className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                
                <div>
                  <label htmlFor="roi-phone" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="roi-phone"
                    name="phone"
                    value={roiFormData.phone}
                    onChange={handleRoiInputChange}
                    className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                
                <div>
                  <label htmlFor="roi-website" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                    Site web de votre entreprise (optionnel)
                  </label>
                  <input
                    type="text"
                    id="roi-website"
                    name="website"
                    value={roiFormData.website}
                    onChange={handleRoiInputChange}
                    className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
                    placeholder="www.votre-site.com ou https://votre-site.com"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-african-violet to-blue-green hover:from-blue-green hover:to-african-violet text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg text-lg"
                >
                  Recevoir mon étude ROI
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
            <h3 className="text-2xl font-bold text-green-600 mb-4">Succès !</h3>
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
    </section>
  );
};

export default Hero;