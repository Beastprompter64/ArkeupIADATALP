import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Users, Lightbulb, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const AboutUs = () => {
  const navigate = useNavigate();
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

  const values = [
    {
      icon: Target,
      title: 'Excellence Technique',
      description: 'Nous ne nous contentons pas de suivre les tendances IA. Nous les créons. Notre équipe maîtrise les technologies les plus avancées pour vous offrir des solutions qui dépassent vos attentes.',
      color: 'bg-arkeup-orange-100 text-arkeup-orange'
    },
    {
      icon: Users,
      title: 'Partenariat Authentique',
      description: 'Votre succès est notre obsession. Nous ne vendons pas de produits, nous construisons des partenariats durables basés sur la confiance, la transparence et des résultats mesurables.',
      color: 'bg-arkeup-orange-100 text-arkeup-orange'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Pragmatique',
      description: 'L\'innovation pour l\'innovation ne nous intéresse pas. Chaque solution que nous développons répond à un besoin métier concret et génère un ROI démontrable.',
      color: 'bg-arkeup-orange-100 text-arkeup-orange'
    },
    {
      icon: Award,
      title: 'Qualité Sans Compromis',
      description: 'Notre statut de Partenaire Google Cloud Premier n\'est pas un hasard. Il reflète notre engagement constant vers l\'excellence et notre capacité à livrer des projets d\'envergure.',
      color: 'bg-arkeup-orange-100 text-arkeup-orange'
    }
  ];

  const stats = [
    { number: '2011', label: 'Année de création' },
    { number: '1000+', label: 'Collaborateurs' },
    { number: '600+', label: 'Projets réalisés' },
    { number: '40+', label: 'Technologies maîtrisées' }
  ];

  const milestones = [
    {
      year: '2011',
      title: 'Création d\'Arkeup',
      description: 'Fondation de l\'entreprise avec une vision claire : démocratiser l\'IA pour les entreprises françaises.'
    },
    {
      year: '2020',
      title: 'Premier Partenariat Stratégique',
      description: 'Obtention du statut de Partenaire Google Cloud, marquant notre expertise reconnue dans le domaine.'
    },
    {
      year: '2022',
      title: 'Expansion Nationale',
      description: 'Ouverture de nouveaux bureaux et croissance de l\'équipe pour répondre à la demande croissante.'
    },
    {
      year: '2024',
      title: 'Partenaire Google Cloud Premier',
      description: 'Accession au niveau Premier, confirmant notre position de leader sur le marché français de l\'IA.'
    }
  ];

  return (
    <div className="min-h-screen bg-arkeup-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 relative overflow-hidden bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <NeuralNetworkBackground />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <img 
                  src="/Rebranding Innovation-02.png" 
                  alt="Arkeup Logo" 
                  className="h-16 w-auto mx-auto"
                />
              </div>
            </div>
            
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight opacity-0 transition-opacity duration-1000"
            >
              <span className="bg-gradient-to-r from-arkeup-gray-800 to-arkeup-gray-700 bg-clip-text text-transparent">
                L'IA au service de
              </span>
              <span className="block bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent mt-2">
                votre ambition
              </span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-arkeup-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto opacity-0 transition-opacity duration-1000"
            >
              Depuis 2011, nous transformons les défis métier les plus complexes en avantages concurrentiels grâce à l'intelligence artificielle.
            </p>
            
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 transition-opacity duration-1000"
            >
              <button className="bg-gradient-to-r from-african-violet to-blue-green hover:from-blue-green hover:to-african-violet text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 hover:shadow-lg font-bold text-lg w-full sm:w-auto">
                Découvrir nos projets
              </button>
              <button className="bg-transparent border-2 border-blue-green hover:border-african-violet hover:bg-gradient-to-r hover:from-blue-green hover:to-african-violet hover:text-white text-blue-green px-8 py-4 rounded-full transition-all transform hover:scale-105 hover:shadow-md font-medium text-lg w-full sm:w-auto">
                Rencontrer l'équipe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-white via-blue-green-50 to-african-violet-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                  index % 2 === 0 ? 'text-african-violet' : 'text-blue-green'
                }`}>
                  {stat.number}
                </div>
                <p className="text-arkeup-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-green-50 via-african-violet-50 to-blue-green-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
                Notre Histoire
              </h2>
              <p className="text-xl text-arkeup-gray-600 leading-relaxed">
                Arkeup est née d'une conviction simple : l'intelligence artificielle ne doit pas être réservée aux géants de la tech. Elle doit être accessible, pragmatique et créatrice de valeur pour toutes les entreprises.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-arkeup-gray-800">
                    Une Vision, Une Mission
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-arkeup-orange mr-3 mt-1 flex-shrink-0" />
                      <p className="text-arkeup-gray-700">
                        <strong>Démocratiser l'IA</strong> en la rendant accessible aux entreprises de toutes tailles
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-arkeup-orange mr-3 mt-1 flex-shrink-0" />
                      <p className="text-arkeup-gray-700">
                        <strong>Créer de la valeur tangible</strong> avec des solutions qui génèrent un ROI mesurable
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-arkeup-orange mr-3 mt-1 flex-shrink-0" />
                      <p className="text-arkeup-gray-700">
                        <strong>Accompagner la transformation</strong> en étant un partenaire de confiance sur le long terme
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Équipe Arkeup"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arkeup-orange/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center mb-12 text-arkeup-gray-800">
                Les Étapes Clés de Notre Croissance
              </h3>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]">
                  <div className="bg-arkeup-orange text-white px-4 py-2 rounded-full font-bold text-lg mr-6 flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-arkeup-gray-800 mb-2">{milestone.title}</h4>
                    <p className="text-arkeup-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-african-violet-50 to-blue-green-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-arkeup-gray-800">
              Nos Valeurs
            </h2>
            <p className="text-xl text-arkeup-gray-600 max-w-3xl mx-auto">
              Ces principes guident chacune de nos décisions et façonnent notre approche unique de l'intelligence artificielle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-arkeup-gray-50 rounded-xl p-8 hover:shadow-lg transition-all transform hover:scale-[1.02]"
              >
                <div className={`${
                  index % 2 === 0 
                    ? 'bg-african-violet-100 text-african-violet' 
                    : 'bg-blue-green-100 text-blue-green'
                } rounded-full w-16 h-16 flex items-center justify-center mb-6 p-4`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-800 mb-4">{value.title}</h3>
                <p className="text-arkeup-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-arkeup-gray-800">
              Prêt à Écrire Votre Propre Histoire de Succès ?
            </h2>
            <p className="text-xl text-arkeup-gray-600 mb-8 leading-relaxed">
              Rejoignez les centaines d'entreprises qui ont déjà transformé leurs défis en opportunités grâce à nos solutions IA.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-african-violet to-blue-green hover:from-blue-green hover:to-african-violet text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 hover:shadow-lg font-bold text-lg w-full sm:w-auto">
                Commencer votre projet
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
              <button onClick={() => navigate('/')} className="bg-transparent border-2 border-blue-green hover:border-african-violet hover:bg-gradient-to-r hover:from-blue-green hover:to-african-violet hover:text-white text-blue-green px-8 py-4 rounded-full transition-all transform hover:scale-105 hover:shadow-md font-medium text-lg w-full sm:w-auto">
                Découvrir nos solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;