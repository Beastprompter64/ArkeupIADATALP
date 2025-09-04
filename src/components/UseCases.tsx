import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const UseCases = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.case-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fadeInUp');
                card.classList.remove('opacity-0');
                card.classList.remove('translate-y-10');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const useCases = [
    {
      title: 'Assistant e-commerce',
      description: 'Optimisez votre conversion et fidélisez votre clientèle grâce à notre assistant IA générative pour retail qui personnalise chaque interaction client en temps réel.',
      icon: '🛍️',
      color: 'bg-blue-50 text-blue-500 border-blue-100'
    },
    {
      title: 'Agent augmenté',
      description: 'Décuplez l\'efficacité de vos équipes support avec nos solutions de copilotes IA qui augmentent les capacités de vos agents tout en réduisant leur charge cognitive.',
      icon: '🤖',
      color: 'bg-green-50 text-green-500 border-green-100'
    },
    {
      title: 'Socle Climatique',
      description: 'Pilotez votre stratégie environnementale avec notre plateforme IA durable qui analyse, optimise et projette votre empreinte carbone avec précision.',
      icon: '🌱',
      color: 'bg-teal-50 text-teal-500 border-teal-100'
    },
    {
      title: 'Geo AI',
      description: 'Exploitez la puissance de l\'intelligence artificielle géospatiale pour analyser, prédire et optimiser vos décisions basées sur la localisation et les données territoriales.',
      icon: '🗺️',
      color: 'bg-purple-50 text-purple-500 border-purple-100'
    },
    {
      title: 'Control Tower',
      description: 'Centralisez la gouvernance de vos projets IA avec notre plateforme unifiée de MLOps qui assure performance, conformité et sécurité de bout en bout.',
      icon: '🎯',
      color: 'bg-orange-50 text-orange-500 border-orange-100'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100" id="use-cases">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
            Nos Use Cases
          </h2>
          <p className="text-arkeup-gray-600 max-w-2xl mx-auto">
            Découvrez comment nos solutions d'intelligence artificielle répondent à des problématiques concrètes et créent de la valeur ajoutée pour nos clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className={`case-card bg-white rounded-xl shadow-md p-6 border-l-4 ${
                index % 2 === 0 
                  ? 'bg-african-violet-50 text-african-violet border-african-violet-100' 
                  : 'bg-blue-green-50 text-blue-green border-blue-green-100'
              } transition-all duration-500 opacity-0 translate-y-10 hover:shadow-lg hover:scale-[1.02]`}
            >
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-arkeup-gray-800">{useCase.title}</h3>
              </div>
              <p className="text-arkeup-gray-600 mb-4">{useCase.description}</p>
              <button 
                onClick={() => {
                  if (useCase.title === 'Assistant e-commerce') {
                    navigate('/ecommerce');
                  } else if (useCase.title === 'Agent augmenté') {
                    navigate('/agent-augmente');
                  } else if (useCase.title === 'Socle Climatique') {
                    navigate('/socle-climatique');
                  } else if (useCase.title === 'Control Tower') {
                    navigate('/control-tower');
                  } else if (useCase.title === 'Geo AI') {
                    navigate('/geo-ai');
                  }
                }}
                className="bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent hover:from-blue-green hover:to-african-violet font-medium inline-flex items-center transition-all duration-300 transform hover:translate-x-1 hover:scale-105 group"
              >
                En savoir plus
                <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          ))}
          
          <div className="case-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 opacity-0 translate-y-10 hover:shadow-lg group">
            <div className="h-48 bg-arkeup-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-african-violet/20 to-blue-green/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-african-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-arkeup-gray-800 mb-2 group-hover:text-blue-green transition-colors">
                Tous nos use cases
              </h3>
              <p className="text-arkeup-gray-600">
                Explorez notre catalogue complet de solutions d'intelligence artificielle et trouvez celle qui correspond à vos besoins.
              </p>
              <div className="mt-4">
                <button 
                  onClick={() => navigate('/')}
                  className="bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent hover:from-blue-green hover:to-african-violet font-medium inline-flex items-center transition-all duration-300 transform hover:translate-x-1 hover:scale-105 group"
                >
                  Découvrir
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;