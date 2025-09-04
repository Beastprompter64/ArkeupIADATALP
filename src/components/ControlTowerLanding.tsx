import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, AlertTriangle, TrendingUp, BarChart3, Shield, ArrowRight, Target, Globe, Database, FileText, ChevronDown, ChevronUp, Zap, Users, Brain, Eye, Activity, Lock, Truck, MapPin, Clock, DollarSign, Factory, Navigation, Gauge, TrendingDown } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const ControlTowerLanding = () => {
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
    fetch('https://arkedown.app.n8n.cloud/webhook/844e5c4f-9dc2-405c-a19b-039df6856f0a', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        formType: 'Control Tower Demo Request',
        source: 'Control Tower Landing'
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
      icon: Eye,
      title: "Manque de visibilité",
      text: "Absence de vue en temps réel sur la livraison des pièces entre les usines et les centres d'assemblage."
    },
    {
      icon: AlertTriangle,
      title: "Risques imprévus",
      text: "Perturbations liées aux problèmes de transport, aux défaillances de fournisseurs, aux grèves ou aux conditions météo."
    },
    {
      icon: TrendingUp,
      title: "Difficultés d'optimisation",
      text: "Complexité dans la gestion des risques et l'optimisation des flux logistiques pour maîtriser les temps de fabrication."
    },
    {
      icon: Clock,
      title: "Manque de proactivité",
      text: "Difficulté à identifier et anticiper les problèmes pour prendre des mesures correctives avant qu'il ne soit trop tard."
    }
  ];

  const features = [
    {
      icon: Eye,
      title: "Visualisation en temps réel",
      description: "Suivez vos flux logistiques, les risques (météo, trafic, grèves) et les alertes sur une carte interactive."
    },
    {
      icon: AlertTriangle,
      title: "Alertes proactives",
      description: "Soyez notifié instantanément en cas de temps de transit anormal ou de retards pour prendre des mesures immédiates."
    },
    {
      icon: Brain,
      title: "Optimisation par l'IA",
      description: "Utilisez l'IA pour analyser les risques, prévoir les retards et simuler les itinéraires de transport optimaux."
    },
    {
      icon: Target,
      title: "Aide à la décision",
      description: "Identifiez les camions les plus urgents et les actions de mitigation à prioriser pour éviter les ruptures."
    }
  ];

  const kpis = [
    {
      value: "100 000€",
      label: "ROI mensuel atteint en 8 mois",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      value: "60%",
      label: "Réduction des délais et coûts de livraison",
      icon: TrendingDown,
      color: "text-blue-600"
    },
    {
      value: "580M€",
      label: "ROI projeté sur 2 ans (global et stock)",
      icon: BarChart3,
      color: "text-purple-600"
    },
    {
      value: "Drastique",
      label: "Diminution des arrêts d'usines",
      icon: Factory,
      color: "text-orange-600"
    }
  ];

  const faqs = [
    {
      question: "Nous avons déjà des outils de suivi.",
      answer: "Notre solution va au-delà du simple suivi. Elle intègre l'analyse prédictive et l'optimisation par l'IA pour une gestion proactive et une réponse rapide aux changements."
    },
    {
      question: "Le temps de déploiement sera trop long.",
      answer: "Grâce à notre méthodologie Agile, le déploiement est rapide et les premiers résultats sont visibles en quelques mois."
    },
    {
      question: "L'investissement est-il rentable ?",
      answer: "Le retour sur investissement est significatif dès les premiers mois, comme le prouve le cas Renault avec un ROI dépassant 100 000 € mensuels."
    },
    {
      question: "Nos besoins sont très spécifiques.",
      answer: "La solution est conçue pour être flexible et personnalisable afin de s'adapter aux contraintes spécifiques de chaque client."
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
                    Mettez fin aux arrêts de production coûteux. Prenez le contrôle de votre Supply Chain.
                  </span>
                </h1>
                
                <p 
                  ref={subtitleRef}
                  className="text-xl md:text-2xl text-arkeup-gray-700 mb-8 leading-relaxed opacity-0 transition-opacity duration-1000"
                >
                  Découvrez la "Control Tower" par ArkeUp et Google Cloud : la solution IA qui offre une visibilité en temps réel pour anticiper les risques, optimiser vos flux et éliminer les ruptures d'approvisionnement.
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
                    className="bg-gradient-to-r from-african-violet to-blue-green hover:from-blue-green hover:to-african-violet text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 font-bold text-lg shadow-lg hover:shadow-xl"
                  >
                    Demander une démo
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/50">
                  <img 
                    src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Control Tower - Tableau de bord Supply Chain"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-12 left-12 text-white">
                    <Navigation className="w-8 h-8 mb-2" />
                    <p className="text-sm font-medium">Visibilité temps réel</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-green to-african-violet bg-clip-text text-transparent">
              Chaque minute d'arrêt vous coûte une fortune. Avez-vous la visibilité pour l'éviter ?
            </h2>
            
            <div className="text-center mb-12">
              <div className="bg-red-100 rounded-2xl p-8 mb-8">
                <div className="text-5xl font-bold text-red-600 mb-2">1 000€</div>
                <p className="text-xl text-red-700">
                  <strong>par minute et par usine</strong> - Le coût des arrêts de production
                </p>
              </div>
            </div>
            
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

      {/* 3. Section Résultats - Cas Renault */}
      <section className="py-16 bg-gradient-to-r from-white via-african-violet-50 to-blue-green-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-arkeup-gray-800">
                Des résultats qui parlent d'eux-mêmes.
              </h2>
              <p className="text-xl text-arkeup-gray-600 max-w-3xl mx-auto">
                Mis en place pour Renault, un acteur majeur de l'industrie automobile, notre solution a généré un impact financier et opérationnel massif.
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
          </div>
        </div>
      </section>

      {/* 4. Section Solution */}
      <section className="py-16 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-arkeup-gray-800">
              Notre "Control Tower" : Une plateforme centralisée, intelligente et proactive.
            </h2>
            
            <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-xl">
              <p className="text-xl text-arkeup-gray-700 mb-8 leading-relaxed">
                La solution développée par ArkeUp et Google Cloud est une plateforme centralisée qui permet de superviser et de gérer l'ensemble de votre chaîne d'approvisionnement en temps réel. Grâce à l'intelligence artificielle, elle ne se contente pas de montrer les problèmes, elle les anticipe.
              </p>
              
              <h3 className="text-2xl font-bold text-arkeup-gray-800 mb-6">Fonctionnalités principales :</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                    <div className="bg-orange-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-600" />
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
              Conçue pour les experts de la logistique.
            </h2>
            
            <div className="bg-red-50 rounded-2xl p-8 md:p-12">
              <p className="text-xl text-arkeup-gray-700 leading-relaxed">
                Cette offre s'adresse aux équipes logistiques et de Supply Chain des grandes entreprises industrielles, comme celles du secteur automobile, qui font face à des défis de gestion complexes. Elle est l'outil indispensable pour les directeurs de projet, responsables logistiques et directeurs des opérations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section Confiance & Technologie */}
      <section className="py-16 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-arkeup-gray-800">
              L'expertise d'ArkeUp alliée à la puissance de Google Cloud.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-800 mb-4">Partenariat stratégique</h3>
                <p className="text-arkeup-gray-600">Bénéficiez de notre partenariat stratégique avec Google Cloud pour une solution technologique de pointe.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Database className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-800 mb-4">Technologie robuste</h3>
                <p className="text-arkeup-gray-600">Plateforme bâtie sur les services les plus robustes de Google Cloud Platform (GCP).</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-800 mb-4">Méthodologie Agile</h3>
                <p className="text-arkeup-gray-600">Approche Agile/Scrum avec des sprints de 3 semaines pour un déploiement rapide.</p>
              </div>
            </div>
            
            {/* Technologies */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-center mb-8 text-arkeup-gray-800">Technologies Google Cloud Platform</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-lg mb-2">
                    <Database className="w-8 h-8 text-blue-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-arkeup-gray-700">BigQuery</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-lg mb-2">
                    <Activity className="w-8 h-8 text-green-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-arkeup-gray-700">Cloud Run</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-4 rounded-lg mb-2">
                    <Globe className="w-8 h-8 text-purple-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-arkeup-gray-700">GKE</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 p-4 rounded-lg mb-2">
                    <MapPin className="w-8 h-8 text-orange-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-arkeup-gray-700">Maps Platform</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 p-4 rounded-lg mb-2">
                    <Eye className="w-8 h-8 text-red-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-arkeup-gray-700">CARTO</p>
                </div>
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
                      <ChevronUp className="w-5 h-5 text-red-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-red-600" />
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
                Prêt à transformer votre Supply Chain ?
              </h2>
              <p className="text-xl text-arkeup-gray-600 mb-8">
                Discutons de vos enjeux spécifiques. Contactez-nous pour une démonstration personnalisée et découvrez comment notre Control Tower peut sécuriser vos approvisionnements et booster votre rentabilité.
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
                      <CheckCircle className="w-6 h-6 text-red-600 mr-3" />
                      <span className="text-arkeup-gray-700">Analyse de vos flux actuels</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-red-600 mr-3" />
                      <span className="text-arkeup-gray-700">Démonstration sur vos données</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-red-600 mr-3" />
                      <span className="text-arkeup-gray-700">Calcul du ROI potentiel</span>
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
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

export default ControlTowerLanding;