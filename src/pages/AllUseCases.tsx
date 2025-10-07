import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AllUseCases = () => {
  const navigate = useNavigate();

  const useCases = [
    {
      title: 'Assistant e-commerce',
      description:
        "Optimisez votre conversion et fidélisez grâce à notre assistant IA qui personnalise chaque interaction client en temps réel.",
      icon: '🛍️',
      to: '/ecommerce',
      accent: 'from-blue-50 to-blue-100 text-blue-700 border-blue-200',
    },
    {
      title: 'Agent augmenté',
      description:
        "Décuplez l'efficacité de vos équipes support avec des copilotes IA qui augmentent les capacités de vos agents.",
      icon: '🤖',
      to: '/agent-augmente',
      accent: 'from-green-50 to-green-100 text-green-700 border-green-200',
    },
    {
      title: 'Socle Climatique',
      description:
        "Pilotez votre stratégie environnementale avec notre plateforme IA durable basée sur des données géospatiales.",
      icon: '🌱',
      to: '/socle-climatique',
      accent: 'from-teal-50 to-teal-100 text-teal-700 border-teal-200',
    },
    {
      title: 'Geo AI',
      description:
        "Exploitez l'IA géospatiale pour analyser, prédire et optimiser vos décisions liées à la localisation.",
      icon: '🗺️',
      to: '/geo-ai',
      accent: 'from-purple-50 to-purple-100 text-purple-700 border-purple-200',
    },
    {
      title: 'Control Tower',
      description:
        'Centralisez la gouvernance de vos opérations avec une plateforme IA proactive et unifiée.',
      icon: '🎯',
      to: '/control-tower',
      accent: 'from-orange-50 to-orange-100 text-orange-700 border-orange-200',
    },
  ];

  return (
    <div className="min-h-screen bg-arkeup-gray-50 text-arkeup-gray-800">
      <Header />
      <main className="pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-african-violet/10 to-blue-green/10 backdrop-blur-sm rounded-full border border-african-violet/20 shadow mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-african-violet to-blue-green rounded-full animate-pulse" />
              <span className="text-sm font-bold text-african-violet uppercase tracking-wider">
                Tous nos Use Cases
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
              Explorez nos solutions IA
            </h1>
            <p className="mt-3 text-arkeup-gray-600 max-w-2xl mx-auto">
              Parcourez l’ensemble de nos use cases et découvrez comment nous transformons des enjeux concrets en résultats mesurables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <button
                key={uc.title}
                onClick={() => navigate(uc.to)}
                className={`text-left group rounded-2xl border bg-gradient-to-br ${uc.accent} p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-3xl" aria-hidden>{uc.icon}</div>
                  <h2 className="text-xl font-bold text-arkeup-gray-900">
                    {uc.title}
                  </h2>
                </div>
                <p className="text-arkeup-gray-700 mb-4">{uc.description}</p>
                <span className="inline-flex items-center font-medium bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent group-hover:translate-x-1 transition-transform">
                  En savoir plus
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllUseCases;
