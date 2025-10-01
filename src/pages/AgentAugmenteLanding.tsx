import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Clock, TrendingUp, Zap, Shield, Users, Brain, MessageSquare, BarChart3, AlertTriangle, ChevronDown, ChevronUp} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const AgentAugmenteLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
        formType: 'Agent Augmenté Demo Request',
        source: 'Agent Augmenté Landing'
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

  const problems = [
    {
      icon: Clock,
      text: "Le temps de traitement des demandes clients est trop long"
    },
    {
      icon: AlertTriangle,
      text: "Vous constatez un manque d'homogénéité dans les réponses et les actions"
    },
    {
      icon: MessageSquare,
      text: "Vos conseillers peinent à accéder rapidement aux informations pertinentes"
    },
    {
      icon: TrendingUp,
      text: "Vos équipes perdent du temps sur des tâches à faible valeur ajoutée"
    },
    {
      icon: Users,
      text: "Le contexte des échanges clients est difficile à maintenir"
    },
    {
      icon: BarChart3,
      text: "La création de comptes rendus est une tâche chronophage pour vos collaborateurs"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Offrez une assistance continue à vos clients et collaborateurs"
    },
    {
      icon: BarChart3,
      title: "Génération de rapports",
      description: "Réduisez la charge de travail grâce à la création de comptes rendus automatiques et précis"
    },
    {
      icon: Zap,
      title: "Réponses accélérées",
      description: "Fournissez instantanément les informations essentielles pour réduire les temps de traitement"
    },
    {
      icon: Users,
      title: "Personnalisation et Précision",
      description: "Adaptez les réponses aux historiques et informations spécifiques de chaque client"
    },
    {
      icon: Shield,
      title: "Intégration Facile",
      description: "Connectez l'Agent Augmenté à vos outils internes via API"
    },
    {
      icon: TrendingUp,
      title: "Scalabilité",
      description: "Adaptez facilement la solution à l'augmentation du volume de demandes"
    },
    {
      icon: Brain,
      title: "Plateforme Centralisée",
      description: "Gérez toutes les interactions et les données depuis un seul endroit"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Qualité de service améliorée",
      description: "Standardisez les réponses pour une expérience client plus homogène"
    },
    {
      icon: Zap,
      title: "Efficacité opérationnelle",
      description: "Réduisez drastiquement le temps de traitement des demandes grâce à l'automatisation"
    },
    {
      icon: TrendingUp,
      title: "Optimisation des ressources",
      description: "Permettez à vos conseillers de se concentrer sur les tâches à forte valeur ajoutée"
    },
    {
      icon: Shield,
      title: "Réduction des erreurs",
      description: "Fiez-vous à une documentation et des historiques précis pour limiter les erreurs"
    },
    {
      icon: AlertTriangle,
      title: "Gestion proactive",
      description: "Surveillez les incidents en temps réel pour une meilleure réactivité"
    }
  ];

  const faqs = [
    {
      question: "Nous avons déjà des outils de service client.",
      answer: "Notre solution va plus loin en utilisant l'IA pour une compréhension approfondie et une automatisation intelligente, améliorant à la fois l'efficacité et l'expérience client."
    },
    {
      question: "Le déploiement prendra trop de temps.",
      answer: "Notre approche agile permet un déploiement rapide. Un Proof of Concept (PoC) peut être réalisé en quelques semaines pour des résultats visibles rapidement."
    },
    {
      question: "L'investissement est trop important.",
      answer: "L'investissement est largement compensé par les gains en efficacité, en qualité et par la réduction des coûts opérationnels. L'optimisation de vos ressources génère des économies significatives."
    },
    {
      question: "Nos besoins sont spécifiques.",
      answer: "Notre solution est conçue pour être personnalisable et flexible. Nous travaillons en étroite collaboration avec vous pour l'adapter parfaitement à vos besoins."
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
                  <span className="bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
                    Révolutionnez votre service client avec l'Intelligence Artificielle
                  </span>
                </h1>
                
                <p 
                  ref={subtitleRef}
                  className="text-xl md:text-2xl text-arkeup-gray-700 mb-8 leading-relaxed opacity-0 transition-opacity duration-1000"
                >
                  Découvrez l'Agent Augmenté d'Arkeup : la solution IA et cloud conçue pour optimiser votre service client et booster l'efficacité de vos collaborateurs.
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
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Agent augmenté par IA"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
              Votre service client est-il confronté à ces défis ?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]">
                  <problem.icon className="w-8 h-8 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-lg text-arkeup-gray-700 leading-relaxed">
                    {problem.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section Solution */}
      <section className="py-16 bg-gradient-to-r from-white via-african-violet-50 to-blue-green-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-arkeup-gray-800">
              La solution : L'Agent Augmenté
            </h2>
            
            <p className="text-xl text-arkeup-gray-600 mb-8 leading-relaxed">
              Arkeup vous propose un outil d'IA puissant basé sur un LLM qui s'intègre à vos outils CRM pour comprendre et répondre intelligemment aux demandes. Il fournit des réponses automatiques, identifie les cas nécessitant une intervention humaine et utilise l'historique des échanges pour une assistance instantanée.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Section Fonctionnalités Clés */}
      <section className="py-16 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-arkeup-gray-800">
              Des fonctionnalités conçues pour votre performance
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-arkeup-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-arkeup-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section Bénéfices */}
      <section className="py-16 bg-gradient-to-br from-blue-green-50 via-white to-african-violet-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-arkeup-gray-800">
              Transformez vos opérations et optimisez vos résultats
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start bg-green-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-all transform hover:scale-[1.02]">
                  <benefit.icon className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-arkeup-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-lg text-arkeup-gray-700 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section "Pour Qui ?" */}
      <section className="py-16 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-arkeup-gray-800">
              Une solution pensée pour vous
            </h2>
            
            <p className="text-xl text-arkeup-gray-600 leading-relaxed">
              Cette offre est idéale pour les entreprises qui souhaitent améliorer leur service client, qu'il soit interne ou externe. Elle est particulièrement adaptée aux équipes qui gèrent un volume important de demandes ou qui ont besoin d'une meilleure gestion de l'information.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Section Confiance & Technologie */}
      <section className="py-16 bg-gradient-to-r from-white via-blue-green-50 to-african-violet-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-arkeup-gray-800">
              Une technologie fiable et une méthode éprouvée
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-800">Technologie</h3>
                <p className="text-lg text-blue-700 leading-relaxed">
                  Notre Agent Augmenté s'appuie sur les technologies robustes de Google Cloud Platform, incluant Cloud Run, BigQuery, Compute Engine et Vertex AI.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-800">Méthodologie</h3>
                <p className="text-lg text-green-700 leading-relaxed">
                  Nous adoptons une approche Agile/Scrum qui garantit une progression itérative et un déploiement rapide. Obtenez un Proof of Concept (PoC) en quelques semaines et constatez les premiers résultats rapidement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section FAQ */}
      <section className="py-16 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-arkeup-gray-800">
              Vos questions, nos réponses
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-arkeup-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-arkeup-gray-800">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-arkeup-orange" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-arkeup-orange" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-arkeup-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Section Appel à l'Action Final */}
      <section id="demo-form" className="py-16 bg-gradient-to-br from-blue-green-50 via-african-violet-50 to-blue-green-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-arkeup-gray-800">
                Prêt à faire passer votre service client au niveau supérieur ?
              </h2>
              <p className="text-xl text-arkeup-gray-600 mb-8">
                Discutons de votre projet. Planifiez un échange avec l'un de nos experts pour une démonstration personnalisée.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-arkeup-gray-800">
                    Planifiez votre démonstration
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-arkeup-orange mr-3" />
                      <span className="text-arkeup-gray-700">Démonstration personnalisée</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-arkeup-orange mr-3" />
                      <span className="text-arkeup-gray-700">Analyse de vos besoins</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-arkeup-orange mr-3" />
                      <span className="text-arkeup-gray-700">Proposition de PoC</span>
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-arkeup-orange focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-arkeup-orange focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-african-violet focus:border-transparent transition-all"
                        placeholder="www.votre-site.com ou https://votre-site.com"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-green to-blue-green-600 hover:from-blue-green-700 hover:to-blue-green-800 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg text-lg"
                    >
                      Planifier ma démo
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

export default AgentAugmenteLanding;