import React, { useState } from 'react';
import { Shield, Target, TrendingUp, Users } from 'lucide-react';
import { X, CheckCircle } from 'lucide-react';

const Expertise = () => {
  const [showRoiForm, setShowRoiForm] = useState(false);
  const [roiFormData, setRoiFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: ''
  });
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
        source: 'Expertise Section'
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

  const expertiseAreas = [
    {
      title: 'Offensive Ciblée',
      subtitle: 'Nous Attaquons Là Où l\'IA Fait Vraiment la Différence',
      description: 'Pas de solutions génériques ni de "gadgets IA". Notre démarche est chirurgicale : nous analysons en profondeur vos opérations pour identifier avec précision les points de friction, les inefficacités coûteuses ou les opportunités de croissance manquées. C\'est là, où l\'IA peut apporter une transformation significative et un avantage compétitif décisif, que nous concentrons nos efforts pour un impact maximal.',
      icon: Target,
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'ROI "Quick Win"',
      subtitle: 'Des Résultats Tangibles, Rapidement',
      description: 'Nous comprenons l\'importance d\'un retour sur investissement rapide et mesurable. Notre méthodologie agile est conçue pour identifier et déployer des solutions IA qui génèrent des "quick wins" : des améliorations concrètes et des gains de performance visibles à court terme. L\'objectif est de vous prouver rapidement la valeur de l\'IA, de faciliter l\'adhésion en interne et de construire une dynamique d\'innovation rentable.',
      icon: TrendingUp,
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Accompagnement Intégral',
      subtitle: 'Votre Partenaire IA, de A à Z',
      description: 'De l\'audit initial et la définition de votre stratégie IA, jusqu\'au développement sur mesure, à l\'intégration dans vos systèmes existants, la formation de vos équipes et le support post-déploiement, Arkeup est votre unique point de contact. Nous vous accompagnons à chaque étape, assurant une transition fluide et une appropriation réussie de vos nouvelles capacités IA pour un succès durable.',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Partenaire Google Cloud Premier',
      subtitle: 'Une Reconnaissance Rare, Une Expertise d\'Élite',
      description: 'Obtenir le statut de Partenaire Google Cloud Premier n\'est pas anodin. Ce badge, particulièrement rare dans l\'écosystème, atteste de notre niveau d\'excellence technique, de nos succès clients avérés et de notre investissement continu dans les technologies IA de pointe de Google. Pour vous, c\'est la garantie de collaborer avec une équipe dont l\'expertise est validée au plus haut niveau, vous donnant accès à des solutions innovantes et une longueur d\'avance.',
      icon: Shield,
      image: 'https://images2.imgbox.com/5f/6a/RINKZ6qa_o.png'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-green-50 via-white to-african-violet-50" id="expertise">
      <div className="container mx-auto px-4 md:px-8">
        {/* Priorité 6 : Style sophistiqué pour l'approfondissement */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-african-violet to-transparent w-24"></div>
            <span className="mx-4 text-sm font-medium text-african-violet bg-white px-3 py-1 rounded-full border border-african-violet/20">
              EXPERTISE
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-green to-transparent w-24"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            L'expertise <span className="bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">Arkeup</span>
          </h2>
          <p className="text-lg text-arkeup-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une approche unique de l'IA, validée par les plus grands acteurs du marché et éprouvée sur le terrain.
          </p>
        </div>
        
        <div className="space-y-20">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg transform transition-all hover:scale-[1.03] hover:shadow-xl duration-500 group cursor-pointer">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <area.icon className="w-8 h-8 mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                    <h3 className="text-xl font-semibold transition-transform duration-300 group-hover:translate-y-[-2px]">{area.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <div className="bg-white/20 text-white p-2 rounded-full border border-white/30 backdrop-blur-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-2 text-arkeup-gray-800">{area.title}</h3>
                <h4 className={`text-xl font-medium mb-4 ${index % 2 === 0 ? 'text-blue-green' : 'text-african-violet'}`}>{area.subtitle}</h4>
                <p className="text-arkeup-gray-600 leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-br from-african-violet-50 to-blue-green-50 rounded-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">Prêt à transformer votre entreprise avec l'IA ?</h3>
            <p className="text-arkeup-gray-600 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour étudier vos besoins et vous proposer une solution adaptée.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => { setShowRoiForm(true); setShowSuccessMessage(false); }}
              className="bg-gradient-to-r from-african-violet to-blue-green hover:from-blue-green hover:to-african-violet text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-african-violet/25 font-medium text-lg w-full sm:w-auto group"
            >
              Mon étude ROI
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <a 
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1MdM0w-HPpRqggY4vV_B4g-bSX1OtxeU6kXq_VInpHfIReMNEE0ngvskzKCZsouNPqMEyfBS0Y?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-transparent border-2 border-blue-green hover:border-african-violet hover:bg-gradient-to-r hover:from-blue-green hover:to-african-violet hover:text-white text-blue-green px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg w-full sm:w-auto"
            >
              J'ai un projet
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

export default Expertise;