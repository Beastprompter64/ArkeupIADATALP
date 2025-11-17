import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, MapPin, TrendingUp, BarChart3, Shield, ArrowRight, Target, Globe, Database, Eye, Zap, Users, Brain, Map, Layers, Navigation, Satellite, Truck, DollarSign, Clock, TrendingDown, Route, Package, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const GeoAILanding = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Envoi des données au webhook
    fetch('https://arkedown.app.n8n.cloud/webhook/data&IA', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        formType: 'Geo AI Demo Request',
        source: 'Geo AI Landing'
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
      setShowSuccessMessage(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        website: ''
      });
    })
    .catch(error => {
      console.error('Error submitting form:', error.message || error);
      alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const challenges = [
    {
      icon: DollarSign,
      title: "Coûts élevés",
      text: "Des coûts de livraison difficiles à optimiser à cause de la complexité des itinéraires."
    },
    {
      icon: Zap,
      title: "Manque d'agilité",
      text: "Des difficultés à s'adapter rapidement aux changements opérationnels et aux fluctuations de la demande."
    },
    {
      icon: Eye,
      title: "Visibilité limitée",
      text: "Un besoin crucial d'améliorer le suivi en temps réel des livraisons pour gérer les imprévus."
    },
    {
      icon: Clock,
      title: "Planification manuelle",
      text: "Un processus de planification des tournées chronophage qui ne peut intégrer tous les paramètres importants."
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Optimisation du réseau",
      description: "Identifiez les emplacements optimaux pour vos centres de distribution afin de réduire les distances de livraison."
    },
    {
      icon: Route,
      title: "Routage Dynamique",
      description: "Ajustez les tournées en temps réel en fonction du trafic et des imprévus pour une efficacité maximale."
    },
    {
      icon: Users,
      title: "Planification des ressources",
      description: "Affectez de manière optimale vos véhicules et votre personnel aux différentes tâches logistiques."
    },
    {
      icon: BarChart3,
      title: "Suivi et Reporting",
      description: "Analysez vos performances grâce à des tableaux de bord personnalisables pour une amélioration continue."
    }
  ];

  const kpis = [
    {
      value: "14%",
      label: "Réduction du coût moyen par livraison",
      icon: TrendingDown,
      color: "text-green-600"
    },
    {
      value: "6M$",
      label: "Économies annuelles estimées",
      icon: DollarSign,
      color: "text-blue-600"
    },
    {
      value: "10%",
      label: "Réduction de l'empreinte carbone",
      icon: Layers,
      color: "text-green-600"
    },
    {
      value: "20%",
      label: "Réduction des kilomètres parcourus",
      icon: Route,
      color: "text-purple-600"
    }
  ];

  const faqs = [
    {
      question: "L'investissement de départ est-il important ?",
      answer: "L'investissement est rapidement rentabilisé. Pour Fnac Darty, le ROI élevé s'est traduit par 6 millions de dollars d'économies annuelles estimées."
    },
    {
      question: "L'intégration avec nos systèmes actuels est-elle complexe ?",
      answer: "Non, notre solution est conçue pour être flexible et intégrable. L'expertise d'ArkeUp garantit un déploiement fluide avec vos systèmes existants."
    },
    {
      question: "Faut-il former nos équipes à de nouveaux outils ?",
      answer: "Oui, et nous vous accompagnons. Nous assurons une formation complète de vos équipes et un accompagnement personnalisé dans la conduite du changement pour garantir une adoption réussie."
    }
  ];

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* 1. Section Héros */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100 relative overflow-hidden">
        <NeuralNetworkBackground />
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h1 
                  ref={titleRef}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight opacity-0 transition-opacity duration-1000"
                >
                  <span className="bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
                    Économisez 6 millions de dollars par an sur votre logistique.
                  </span>
                  <span className="block bg-gradient-to-r from-blue-green to-african-violet bg-clip-text text-transparent mt-2">
                    C'est possible.
                  </span>
                </h1>
                
                <p 
                  ref={subtitleRef}
                  className="text-xl md:text-2xl text-arkeup-gray-700 mb-8 leading-relaxed opacity-0 transition-opacity duration-1000"
                >
                  Découvrez la solution GeoAI d'ArkeUp GIS et Google Maps Platform qui transforme votre logistique du dernier kilomètre en un avantage concurrentiel.
                </p>
                
                <div 
                  ref={ctaRef}
                  className="opacity-0 transition-opacity duration-1000"
                >
                  <button 
                    onClick={() => {
                      const formSection = document.getElementById('demo-form');
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-gradient-to-r from-blue-green to-african-violet hover:from-african-violet hover:to-blue-green text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 font-bold text-lg shadow-lg hover:shadow-xl"
                  >
                    Demander une analyse de ROI
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/50">
                  <img 
                    src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Optimisation logistique avec GeoAI"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-12 left-12 text-white">
                    <Map className="w-8 h-8 mb-2" />
                    <p className="text-sm font-medium">Optimisation des tournées en temps réel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section Problèmes */}
      <section className="py-16 bg-gradient-to-br from-blue-green-50 via-african-violet-50 to-blue-green-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
              Votre logistique est-elle un centre de coûts difficile à maîtriser ?
            </h2>
            
            <p className="text-xl text-arkeup-gray-600 text-center mb-12 leading-relaxed">
              Pour des leaders du retail comme Fnac Darty, la complexité du réseau, les variations de volume et les attentes clients élevées représentent des défis quotidiens.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]">
                  <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <challenge.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-arkeup-gray-800 mb-3">{challenge.title}</h3>
                  <p className="text-arkeup-gray-600 leading-relaxed text-sm">{challenge.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section Résultats - Cas Fnac Darty */}
      <section className="py-16 bg-gradient-to-r from-white via-african-violet-50 to-blue-green-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-arkeup-gray-800">
                Des résultats concrets pour une logistique plus performante.
              </h2>
              <p className="text-xl text-arkeup-gray-600 max-w-3xl mx-auto">
                En adoptant notre solution GeoAI, Fnac Darty a radicalement transformé ses opérations et sa rentabilité.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {kpis.map((kpi, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all transform hover:scale-[1.02]">
                  <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <kpi.icon className={`w-8 h-8 ${kpi.color}`} />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${kpi.color}`}>
                    {kpi.value}
                  </div>
                  <p className="text-arkeup-gray-600 text-sm leading-tight">{kpi.label}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-green-50 rounded-xl p-6 inline-block">
                <p className="text-lg text-green-700 font-medium">
                  <strong>Bonus :</strong> Meilleure utilisation des véhicules et diminution des heures supplémentaires
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section Solution */}
      <section className="py-16 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-arkeup-gray-800">
              Transformez vos données géospatiales en décisions rentables.
            </h2>
            
            <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-xl">
              <p className="text-xl text-arkeup-gray-700 mb-8 leading-relaxed">
                ArkeUp GIS a développé une solution complète basée sur la GeoAI et Google Maps Platform. Elle intègre des outils avancés de planification, d'ordonnancement, de routage et d'affectation des ressources pour optimiser l'ensemble de votre chaîne logistique.
              </p>
              
              <h3 className="text-2xl font-bold text-arkeup-gray-800 mb-6">Grille de fonctionnalités :</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-arkeup-gray-800 mb-2">{feature.title}</h4>
                      <p className="text-arkeup-gray-600 leading-relaxed text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section "Pour Qui ?" */}
      <section className="py-16 bg-gradient-to-br from-blue-green-50 via-white to-african-violet-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-arkeup-gray-800">
              Une solution conçue pour les leaders de la logistique et des opérations.
            </h2>
            
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
              <p className="text-xl text-arkeup-gray-700 leading-relaxed">
                Notre solution s'adresse aux responsables logistiques, directeurs des opérations, directeurs de la chaîne d'approvisionnement et responsables IT qui cherchent à optimiser les coûts, améliorer la satisfaction client et réduire l'empreinte carbone de leurs activités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section Confiance & Expertise */}
      <section className="py-16 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-arkeup-gray-800">
              Votre partenaire expert en GeoAI et logistique.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-800 mb-4">Expertise unique</h3>
                <p className="text-arkeup-gray-600">Nous combinons une expertise pointue en GeoAI, en données spatiales et une connaissance approfondie des défis du secteur du retail.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-800 mb-4">Technologie de pointe</h3>
                <p className="text-arkeup-gray-600">Nous maîtrisons les Google Maps Platform Mobility Services pour vous offrir les outils les plus performants du marché.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-800 mb-4">Solution sur-mesure</h3>
                <p className="text-arkeup-gray-600">Notre approche flexible et personnalisable permet une intégration parfaite avec vos systèmes existants et d'autres services Google Cloud.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section FAQ */}
      <section className="py-16 bg-gradient-to-r from-white via-blue-green-50 to-african-violet-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-arkeup-gray-800">
              Vos questions, nos réponses.
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-arkeup-gray-50 rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-arkeup-gray-100 transition-colors"
                  >
                    <span className="text-lg font-semibold text-arkeup-gray-800">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-green-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-green-600" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 bg-white">
                      <p className="text-arkeup-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section CTA Final */}
      <section id="demo-form" className="py-16 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-arkeup-gray-800">
                Prêt à transformer votre logistique en un centre de profit ?
              </h2>
              <p className="text-xl text-arkeup-gray-600 mb-8">
                Contactez nos experts pour une démonstration personnalisée et découvrez comment la GeoAI peut réduire vos coûts et améliorer votre compétitivité.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-arkeup-gray-800">
                    Démonstration personnalisée
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                      <span className="text-arkeup-gray-700">Analyse de votre réseau logistique</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                      <span className="text-arkeup-gray-700">Calcul du ROI potentiel</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                      <span className="text-arkeup-gray-700">Démonstration sur vos données</span>
                    </div>
                  </div>
                </div>

                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                        Votre nom *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                        Votre email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                        Votre entreprise *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                        Site web de votre entreprise (optionnel)
                      </label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="www.votre-site.com ou https://votre-site.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Votre numéro de téléphone"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-green to-blue-green-600 hover:from-blue-green-700 hover:to-blue-green-800 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg text-lg"
                    >
                      Envoyer ma demande
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message Popup */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Demande envoyée !</h3>
            <p className="text-lg text-arkeup-gray-700">Nous vous contacterons très bientôt pour planifier votre démonstration.</p>
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GeoAILanding;