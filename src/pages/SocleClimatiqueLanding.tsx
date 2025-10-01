import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, MapPin, TrendingUp, BarChart3, Shield, ArrowRight, Target, Globe, Database, FileText, AlertTriangle, ChevronDown, ChevronUp, Zap, Users, Brain, Map, Eye, Settings, Download, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const SocleClimatiqueLanding = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        formType: 'Socle Climatique Demo Request',
        source: 'Socle Climatique Landing'
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

  const challenges = [
    {
      icon: AlertTriangle,
      title: "Gestion complexe",
      text: "La gestion des risques climatiques exige des outils et des données de plus en plus sophistiqués."
    },
    {
      icon: Settings,
      title: "Manque d'industrialisation",
      text: "Difficulté à industrialiser les processus de production et de restitution des modèles de risque pour gagner en efficacité."
    },
    {
      icon: Database,
      title: "Données hétérogènes",
      text: "La collecte, l'analyse et le stockage de données géospatiales sont indispensables mais complexes à mettre en œuvre."
    }
  ];

  const features = [
    {
      icon: Database,
      title: "Base de connaissance centralisée",
      description: "Accédez à une base commune de données climatiques, avec stockage sécurisé, historisation et versioning."
    },
    {
      icon: BarChart3,
      title: "Analyse de risque approfondie",
      description: "Calculez des scores d'exposition, de vulnérabilité et simulez différents scénarios de risque avec précision."
    },
    {
      icon: Eye,
      title: "Visualisation intuitive",
      description: "Transformez les analyses complexes en cartes interactives et accessibles pour faciliter la prise de décision, grâce à CARTO et Google Maps Platform."
    },
    {
      icon: Zap,
      title: "Intégration fluide",
      description: "Notre solution s'intègre parfaitement avec vos systèmes d'information (SI) existants."
    },
    {
      icon: TrendingUp,
      title: "Performance et évolutivité",
      description: "Bénéficiez d'un environnement robuste qui garantit performance et s'adapte à vos besoins futurs."
    },
    {
      icon: MapPin,
      title: "Géolocalisation précise",
      description: "Transformez simplement des adresses en coordonnées GPS pour une analyse fine."
    }
  ];

  const kpis = [
    {
      icon: CheckCircle,
      title: "Amélioration de la qualité des souscriptions",
      description: "Évaluez plus précisément les risques avant engagement"
    },
    {
      icon: Target,
      title: "Pilotage optimal de l'exposition du portefeuille clients",
      description: "Maîtrisez votre exposition globale aux risques climatiques"
    },
    {
      icon: Users,
      title: "Augmentation de la satisfaction client",
      description: "Offrez un service plus réactif et personnalisé"
    },
    {
      icon: Zap,
      title: "Adaptation plus rapide et efficace de vos offres",
      description: "Ajustez tarifs et garanties en temps réel"
    }
  ];

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
                  <span className="bg-gradient-to-r from-blue-green to-african-violet bg-clip-text text-transparent">
                    Risques Climatiques : Transformez les défis en opportunités pour votre assurance
                  </span>
                </h1>
                
                <p 
                  ref={subtitleRef}
                  className="text-xl md:text-2xl text-arkeup-gray-700 mb-8 leading-relaxed opacity-0 transition-opacity duration-1000"
                >
                  Découvrez notre socle de données géospatiales innovant, basé sur Google Cloud Platform, pour anticiper les risques, adapter vos offres et renforcer votre position sur le marché.
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
                    Demander une démo personnalisée
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/50">
                  <img 
                    src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Données géospatiales et risques climatiques"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-12 left-12 text-white">
                    <Map className="w-8 h-8 mb-2" />
                    <p className="text-sm font-medium">Données géospatiales en temps réel</p>
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
              Le changement climatique redéfinit les règles de l'assurance. Êtes-vous prêt ?
            </h2>
            
            <p className="text-xl text-arkeup-gray-600 text-center mb-12 leading-relaxed">
              Le marché est marqué par une accélération des risques climatiques, obligeant les assureurs à adapter leurs offres et à mieux accompagner leurs clients vers une prévention proactive.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] text-center">
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <challenge.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-arkeup-gray-800 mb-4">{challenge.title}</h3>
                  <p className="text-arkeup-gray-600 leading-relaxed">{challenge.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section Solution */}
      <section className="py-16 bg-gradient-to-r from-white via-african-violet-50 to-blue-green-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-arkeup-gray-800">
              Notre Solution : Un Socle de Données Géospatiales Robuste et Évolutif
            </h2>
            
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-8">
              <p className="text-xl text-arkeup-gray-700 mb-6 leading-relaxed">
                Nous avons conçu une plateforme centralisée pour optimiser la gestion des risques climatiques et stimuler le développement de services innovants. Grâce à une collaboration entre Arkeup, Google Earth Engine et Carto, notre solution s'appuie sur les technologies de pointe de Google Cloud Platform pour collecter, analyser et visualiser les données géospatiales.
              </p>
              
              <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                  <Brain className="w-6 h-6 mr-3" />
                  Rôle de l'IA
                </h3>
                <p className="text-arkeup-gray-700 leading-relaxed">
                  L'Intelligence Artificielle est au cœur de notre approche pour anticiper les événements, évaluer les impacts et optimiser les prévisions, vous permettant de prendre des décisions plus éclairées et d'adopter une gestion proactive des risques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section Fonctionnalités & Avantages */}
      <section className="py-16 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-arkeup-gray-800">
              Une plateforme unique pour des avantages multiples
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-arkeup-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-arkeup-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section "Pour Qui ?" */}
      <section className="py-16 bg-gradient-to-br from-blue-green-50 via-white to-african-violet-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-arkeup-gray-800">
              Conçu pour les acteurs de l'assurance et des mutuelles
            </h2>
            
            <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
              <p className="text-xl text-arkeup-gray-700 mb-8 leading-relaxed">
                Cette proposition s'adresse aux entreprises du secteur de l'assurance et des mutuelles qui sont confrontées aux défis complexes posés par le changement climatique et qui souhaitent :
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-arkeup-gray-700">Maîtriser la qualité des souscriptions au regard des risques climatiques</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-arkeup-gray-700">Améliorer le niveau de service et la satisfaction client lors d'événements majeurs</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-arkeup-gray-700">Adapter en continu les offres (tarifs, garanties) à l'évolution des aléas</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-arkeup-gray-700">Accompagner les clients dans une démarche de prévention proactive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section Confiance & Expertise */}
      <section className="py-16 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-arkeup-gray-800">
              Pourquoi nous choisir ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-800 mb-4">Expertise reconnue</h3>
                <p className="text-arkeup-gray-600">Profitez de notre savoir-faire solide dans le déploiement de plateformes de données et de services.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-800 mb-4">Sécurité et conformité</h3>
                <p className="text-arkeup-gray-600">Nous respectons scrupuleusement les règles de sécurité et les processus établis.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-800 mb-4">Maîtrise technologique</h3>
                <p className="text-arkeup-gray-600">Nous avons une maîtrise complète de la plateforme, de sa scalabilité et de son évolutivité.</p>
              </div>
            </div>
            
            {/* Logos des technologies */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-center mb-8 text-arkeup-gray-800">Technologies de pointe</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-lg mb-2">
                    <Globe className="w-8 h-8 text-blue-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-arkeup-gray-700">Google Cloud Platform</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-lg mb-2">
                    <Map className="w-8 h-8 text-green-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-arkeup-gray-700">Google Earth Engine</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-4 rounded-lg mb-2">
                    <Database className="w-8 h-8 text-purple-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-arkeup-gray-700">BigQuery</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 p-4 rounded-lg mb-2">
                    <Eye className="w-8 h-8 text-orange-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-arkeup-gray-700">Carto</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 p-4 rounded-lg mb-2">
                    <Brain className="w-8 h-8 text-red-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-arkeup-gray-700">Vertex AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section ROI & Métriques */}
      <section className="py-16 bg-gradient-to-r from-white via-blue-green-50 to-african-violet-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-arkeup-gray-800">
              Un investissement mesurable pour un impact durable
            </h2>
            
            <p className="text-xl text-arkeup-gray-600 text-center mb-12 leading-relaxed">
              Le retour sur investissement se mesure concrètement à travers des indicateurs de performance clairs.
            </p>
            
            <div className="space-y-6">
              {kpis.map((kpi, index) => (
                <div key={index} className="flex items-start bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all transform hover:scale-[1.02]">
                  <kpi.icon className="w-8 h-8 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-arkeup-gray-800 mb-2">{kpi.title}</h3>
                    <p className="text-lg text-arkeup-gray-700 leading-relaxed">{kpi.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section Appel à l'Action Final */}
      <section id="demo-form" className="py-16 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-arkeup-gray-800">
                Prêt à anticiper demain ? Renforcez votre stratégie face aux risques climatiques.
              </h2>
              <p className="text-xl text-arkeup-gray-600 mb-8">
                Planifiez un échange avec nos experts pour découvrir comment notre socle climatique peut s'adapter à vos enjeux spécifiques.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-arkeup-gray-800">
                    Échangez avec nos experts
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                      <span className="text-arkeup-gray-700">Démonstration personnalisée</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                      <span className="text-arkeup-gray-700">Analyse de vos enjeux spécifiques</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                      <span className="text-arkeup-gray-700">Roadmap d'implémentation</span>
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Nom de votre entreprise"
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Votre numéro de téléphone"
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="www.votre-site.com ou https://votre-site.com"
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

export default SocleClimatiqueLanding;