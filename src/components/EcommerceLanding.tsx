import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Search, TrendingUp, Zap, Shield, ArrowRight, X, ShoppingCart, Plus, BarChart3 } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface DemoState {
  currentScene: number;
  searchQuery: string;
  showPainPopup: boolean;
  showResults: boolean;
  showTooltip: boolean;
  selectedFabric: string | null;
  showUpsell: boolean;
  showValuePopup: boolean;
}

const EcommerceLanding = () => {
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: ''
  });

  const [demoState, setDemoState] = useState<DemoState>({
    currentScene: 1,
    searchQuery: '',
    showPainPopup: false,
    showResults: false,
    showTooltip: false,
    selectedFabric: null,
    showUpsell: false,
    showValuePopup: false
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
        formType: 'E-commerce Audit Request',
        source: 'E-commerce Landing Page'
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
      // Réinitialiser le formulaire
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

  const handleDemoSearch = () => {
    if (demoState.currentScene === 1) {
      // Scene 1: Show no results and pain popup
      setDemoState(prev => ({ ...prev, showResults: true }));
      setTimeout(() => {
        setDemoState(prev => ({ ...prev, showPainPopup: true }));
      }, 1000);
    } else if (demoState.currentScene === 2) {
      // Scene 2: Show AI results with tooltip
      setDemoState(prev => ({ ...prev, showResults: true }));
      setTimeout(() => {
        setDemoState(prev => ({ ...prev, showTooltip: true }));
      }, 1500);
    }
  };

  const nextScene = () => {
    setDemoState({
      currentScene: demoState.currentScene + 1,
      searchQuery: demoState.currentScene === 1 ? demoState.searchQuery : '',
      showPainPopup: false,
      showResults: false,
      showTooltip: false,
      selectedFabric: null,
      showUpsell: false,
      showValuePopup: false
    });
  };

  const selectFabric = (fabric: string) => {
    setDemoState(prev => ({ 
      ...prev, 
      selectedFabric: fabric, 
      showUpsell: true 
    }));
    setTimeout(() => {
      setDemoState(prev => ({ ...prev, showValuePopup: true }));
    }, 2000);
  };

  const resetDemo = () => {
    setDemoState({
      currentScene: 1,
      searchQuery: '',
      showPainPopup: false,
      showResults: false,
      showTooltip: false,
      selectedFabric: null,
      showUpsell: false,
      showValuePopup: false
    });
  };

  const renderDemoContent = () => {
    switch (demoState.currentScene) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-white bg-clip-text text-transparent mb-2">La Recherche E-commerce aujourd'hui</h3>
              <p className="text-slate-600">Interface e-commerce standard - tissus.com</p>
            </div>
            
            {/* Mock e-commerce interface */}
            <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-3 text-center font-bold">
                tissus.com
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Vous êtes un client. Tapez une recherche que vous feriez dans la vraie vie :
                  </label>
                  
                  {/* Indicateur pour cliquer */}
                  <div className="mb-3 flex items-center justify-center">
                    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-2 rounded-lg text-sm font-medium animate-pulse">
                      👆 Cliquez sur le texte ci-dessous pour le copier dans la barre de recherche
                    </div>
                  </div>
                  
                  {/* Texte clickable */}
                  <div className="mb-3">
                    <button
                      onClick={() => setDemoState(prev => ({ 
                        ...prev, 
                        searchQuery: "un tissu qui ressemble à du lin mais qui ne se froisse pas pour une robe d'été" 
                      }))}
                      className="bg-blue-50 border-2 border-blue-200 hover:border-blue-400 text-blue-800 px-4 py-2 rounded-lg text-sm transition-all hover:bg-blue-100 cursor-pointer font-medium"
                    >
                      "un tissu qui ressemble à du lin mais qui ne se froisse pas pour une robe d'été"
                    </button>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      value={demoState.searchQuery}
                      onChange={(e) => setDemoState(prev => ({ ...prev, searchQuery: e.target.value }))}
                      placeholder="Tapez votre recherche ici..."
                      className="w-full px-4 py-3 border-2 border-yellow-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleDemoSearch}
                      disabled={!demoState.searchQuery.trim()}
                      className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {demoState.showResults && (
                  <div className="text-center py-12 bg-red-50 rounded-lg border-2 border-red-200">
                    <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h4 className="text-3xl font-bold text-red-600 mb-2">0 résultat trouvé</h4>
                    <p className="text-red-500">Aucun produit ne correspond à votre recherche</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Pain popup */}
            {demoState.showPainPopup && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
                <div className="bg-red-600 text-white p-8 rounded-xl max-w-md mx-4 text-center relative animate-fadeInUp">
                  <div className="text-6xl mb-4">💸</div>
                  <h4 className="text-2xl font-bold mb-4">VENTE PERDUE</h4>
                  <p className="mb-4">
                    C'est exactement ici que <strong>8 clients sur 10</strong> quittent votre site. 
                    Ils viennent d'aller chez votre concurrent.
                  </p>
                  <div className="text-3xl font-bold mb-4">Vous venez de perdre 85€</div>
                  <button
                    onClick={nextScene}
                    className="bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all"
                  >
                    Voir la solution →
                  </button>
                </div>
              </div>
            )}
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-2"> Maintenant avec l'IA</h3>
              <p className="text-slate-600">L'IA qui comprend vos clients</p>
            </div>
            
            <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-3 text-center font-bold">
                tissus.com
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Maintenant, essayez avec notre IA. Tapez EXACTEMENT la même chose :
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={demoState.searchQuery}
                      onChange={(e) => setDemoState(prev => ({ ...prev, searchQuery: e.target.value }))}
                      placeholder="un tissu qui ressemble à du lin mais qui ne se froisse pas pour une robe d'été"
                      className="w-full px-4 py-3 border-2 border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <div className="absolute right-12 top-2 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                      Powered by AI
                    </div>
                    <button
                      onClick={handleDemoSearch}
                      disabled={!demoState.searchQuery.trim()}
                      className="absolute right-2 top-2 bg-green-600 text-white p-2 rounded-md hover:bg-green-700 disabled:opacity-50"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {demoState.showResults && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fadeInUp">
                    {[
                      { name: 'Tencel Bleu Ciel', type: 'Mélange viscose', price: '24€/m', imageUrl: 'https://images2.imgbox.com/8a/0f/OjyihfSc_o.jpg' },
                      { name: 'Viscose Lin Look', type: 'Anti-froissement', price: '19€/m', imageUrl: 'https://images2.imgbox.com/ce/74/NC2kG2Ip_o.jpg' },
                      { name: 'Modal Texturé', type: 'Aspect naturel', price: '22€/m', imageUrl: 'https://images2.imgbox.com/2c/25/1VnfYZbe_o.jpg' },
                      { name: 'Lyocell Fluide', type: 'Respirant', price: '26€/m', imageUrl: 'https://images2.imgbox.com/e4/db/zTnxXOCZ_o.jpg' },
                      { name: 'Coton-Modal', type: 'Facile d\'entretien', price: '18€/m', imageUrl: 'https://images2.imgbox.com/af/a8/PbUg1XG4_o.jpg' }
                    ].map((fabric, index) => (
                      <div 
                        key={index}
                        className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center cursor-pointer hover:bg-green-100 transition-all opacity-0 translate-y-10 animate-fadeInUp"
                        style={{ animationDelay: `${index * 150}ms` }}
                        onClick={() => selectFabric(fabric.name)}
                      >
                        <img 
                          src={fabric.imageUrl}
                          alt={fabric.name}
                          className="w-full h-24 object-cover rounded-lg mb-3"
                        />
                        <h5 className="font-bold text-sm text-slate-800">{fabric.name}</h5>
                        <p className="text-xs text-slate-600">{fabric.type}</p>
                        <p className="text-sm font-bold text-green-600">{fabric.price}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {demoState.showTooltip && (
                  <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg animate-fadeInUp">
                    <h5 className="font-bold text-blue-800 mb-2">Notre IA ne cherche pas des mots-clés. Elle comprend l'intention :</h5>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li><strong>'Ressemble à du lin'</strong> → Aspect texturé, naturel</li>
                      <li><strong>'Ne se froisse pas'</strong> → Exclut le lin pur, privilégie les mélanges</li>
                      <li><strong>'Robe d'été'</strong> → Tissu léger, fluide, respirant</li>
                    </ul>
                    <div className="mt-3 text-green-600 font-bold">✅ Résultat : Vente sauvée</div>
                    <button
                      onClick={nextScene}
                     className="bg-arkeup-orange-600 text-white px-4 py-2 rounded-full text-sm hover:bg-arkeup-orange-700 transition-all transform hover:scale-105 hover:shadow-md"
                    >
                      Continuer la démo →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">La Vente Additionnelle</h3>
              <p className="text-slate-600">Augmenter le panier moyen</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Product details */}
              <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg mb-4"></div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Tencel Bleu Ciel</h4>
                <p className="text-slate-600 mb-2">Mélange viscose anti-froissement</p>
                <p className="text-2xl font-bold text-green-600 mb-4">24€/m</p>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all">
                  <ShoppingCart className="w-5 h-5 inline mr-2" />
                  Ajouter au panier
                </button>
              </div>
              
              {/* Upsell section */}
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Les clients complètent souvent avec :
                </h4>
                
                <div className="space-y-3">
                  {[
                    { name: 'Fil bleu ciel assorti', price: '8€' },
                    { name: 'Boutons nacrés (x6)', price: '12€' },
                    { name: 'Patron robe d\'été', price: '15€' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg border border-orange-200">
                      <span className="text-slate-700">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-orange-600">{item.price}</span>
                        <button className="bg-orange-600 text-white px-3 py-1 rounded text-sm hover:bg-orange-700 transition-all">
                          Ajouter
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <button
                    onClick={nextScene}
                    className="bg-arkeup-orange-600 text-white px-6 py-3 rounded-full font-bold hover:bg-arkeup-orange-700 transition-all transform hover:scale-105 hover:shadow-lg"
                  >
                    Voir l'impact sur les ventes →
                  </button>
                </div>
              </div>
            </div>
            
            {demoState.showValuePopup && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
                <div className="bg-green-600 text-white p-8 rounded-xl max-w-md mx-4 text-center relative animate-fadeInUp">
                  <div className="text-6xl mb-4">📈</div>
                  <h4 className="text-2xl font-bold mb-4">+20% sur le panier moyen</h4>
                  <p className="mb-4">
                    Notre IA ne se contente pas de trouver. <strong>Elle vend.</strong>
                  </p>
                  <button
                    onClick={nextScene}
                    className="bg-white text-arkeup-orange-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-md"
                  >
                    Voir les chiffres →
                  </button>
                </div>
              </div>
            )}
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Les estimations</h3>
              <p className="text-slate-600">Les chiffres ne mentent pas</p>
            </div>
            
            <div className="bg-white border-2 border-slate-200 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <XCircle className="w-10 h-10 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold text-red-600 mb-4">Avant l'IA</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Taux de conversion :</span>
                      <span className="font-bold text-red-600">2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Panier moyen :</span>
                      <span className="font-bold text-red-600">80€</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-slate-600">Manque à gagner :</span>
                      <span className="font-bold text-red-600">15 000€/mois</span>
                    </div>
                  </div>
                </div>
                
                {/* After */}
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-green-600 mb-4">Après l'IA</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Taux de conversion :</span>
                      <span className="font-bold text-green-600">17%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Panier moyen :</span>
                      <span className="font-bold text-green-600">96€</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-slate-600">Argent récupéré :</span>
                      <span className="font-bold text-green-600">13 500€/mois</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8 p-6 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <h4 className="text-2xl font-bold text-slate-800 mb-4">
                  On vous coûte moins cher que l'argent que vous perdez actuellement
                </h4>
                <button
                  onClick={nextScene}
                  className="bg-arkeup-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-arkeup-orange-600 transition-all transform hover:scale-105 hover:shadow-lg"
                >
                  Récupérer mon argent →
                </button>
              </div>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">L'Appel à l'Action</h3>
              <p className="text-slate-600">L'offre irrésistible</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-8 text-center">
              <h4 className="text-3xl font-bold text-slate-800 mb-6">
                Arrêtez de deviner. Voyez exactement combien d'argent votre recherche actuelle vous fait perdre.
              </h4>
              
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                On analyse comment l'IA serait un levier chez vous. En plus ? On branche notre outil sur 10 de vos fiches produits. <strong>Zéro effort, zéro coût.</strong>
              </p>
              
              <button className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl mb-4">
                🚀 Mon étude ROI
              </button>
              
              <p className="text-sm text-slate-500">
                Aucune carte de crédit requise.
              </p>
              
              <div className="mt-8 flex justify-center gap-4">
                <button
                  onClick={resetDemo}
                  className="bg-arkeup-gray-200 text-arkeup-gray-700 px-6 py-3 rounded-full hover:bg-arkeup-gray-300 transition-all transform hover:scale-105 hover:shadow-md"
                >
                  Revoir la démo
                </button>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-african-violet-50 via-blue-green-100 to-african-violet-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-arkeup-orange/5 to-arkeup-orange/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-arkeup-orange-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-arkeup-orange-200/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight opacity-0 transition-opacity duration-1000"
            >
              <span className="bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
                Vous perdez des ventes en ligne ?
              </span>
            </h1>
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-arkeup-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto opacity-0 transition-opacity duration-1000"
            >
              On ajoute <span className="text-arkeup-orange-600 font-bold bg-arkeup-orange-100 px-2 py-1 rounded-lg">6% à votre CA annuel</span> en transformant votre barre de recherche en votre meilleur vendeur. <span className="font-bold text-arkeup-gray-800 bg-arkeup-orange-100 px-2 py-1 rounded-lg">Garanti.</span>
            </p>
            
            {/* CTA Buttons */}
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 transition-opacity duration-1000"
            >
              <button 
                onClick={() => {
                  const formSection = document.getElementById('contact-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-african-violet to-blue-green hover:from-blue-green hover:to-african-violet text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 font-bold text-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
                🚀 Mon étude ROI
              </button>
              <button 
                onClick={() => {
                  const demoSection = document.getElementById('interactive-demo');
                  if (demoSection) {
                    demoSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white border-2 border-blue-green hover:border-african-violet hover:bg-gradient-to-r hover:from-blue-green hover:to-african-violet hover:text-white text-blue-green px-8 py-4 rounded-full transition-all transform hover:scale-105 hover:shadow-lg font-medium text-lg shadow-md w-full sm:w-auto">
                📊 L'explication en 60s
              </button>
            </div>
            
            {/* Demo Placeholder */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 min-h-[600px]">
              {renderDemoContent()}
            </div>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className="mt-16 max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/50 hover:shadow-xl transition-all transform hover:scale-[1.02]">
              <div className="bg-arkeup-orange-100 text-arkeup-orange px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                ROI
              </div>
              <div className="text-4xl md:text-5xl font-bold text-arkeup-gray-800 mb-2">
                3 sur 4
              </div>
              <p className="text-arkeup-gray-600 text-sm leading-tight">
                organisations (74%) constatent actuellement un ROI de leurs investissements en IA générative
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/50 hover:shadow-xl transition-all transform hover:scale-[1.02]">
              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                Augmentation du chiffre d'affaires annuel
              </div>
              <div className="text-4xl md:text-5xl font-bold text-arkeup-gray-800 mb-2">
                86%
              </div>
              <p className="text-arkeup-gray-600 text-sm leading-tight">
                des organisations utilisant l'IA générative en production voient une croissance estimée de 6% ou plus des gains du chiffre d'affaires annuel de l'entreprise
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/50 hover:shadow-xl transition-all transform hover:scale-[1.02]">
              <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                Délai de rentabilisation accéléré
              </div>
              <div className="text-4xl md:text-5xl font-bold text-arkeup-gray-800 mb-2">
                84%
              </div>
              <p className="text-arkeup-gray-600 text-sm leading-tight">
                des organisations transforment avec succès une idée de cas d'usage d'IA générative en production dans les six mois. Une fois en production, les organisations rapportent une augmentation du chiffre d'affaires annuel directement attribuée à l'IA générative en 12 mois ou plus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="interactive-demo" className="py-16 bg-gradient-to-br from-blue-green-50 via-african-violet-50 to-blue-green-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
              Le Problème
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                <XCircle className="w-8 h-8 text-arkeup-gray-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-arkeup-gray-700 leading-relaxed">
                    <strong>Votre barre de recherche est un cul-de-sac.</strong> 80% des visiteurs qui ne trouvent pas ce qu'ils cherchent partent pour ne jamais revenir.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                <XCircle className="w-8 h-8 text-arkeup-gray-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-arkeup-gray-700 leading-relaxed">
                    <strong>Vous ne savez pas ce que vos clients veulent VRAIMENT.</strong> Chaque recherche ratée est une mine d'or de données que vous jetez à la poubelle.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                <XCircle className="w-8 h-8 text-arkeup-gray-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-arkeup-gray-700 leading-relaxed">
                    <strong>Vous laissez des milliers d'euros sur la table chaque mois.</strong> Cet argent va directement chez votre concurrent qui, lui, a une meilleure expérience client.
                  </p>
                </div>
              </div>
            </div>
            </>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-to-r from-white via-african-violet-50 to-blue-green-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-green to-african-violet bg-clip-text text-transparent">
              La Solution : Le Moteur de Conversion IA
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start bg-arkeup-orange-50 p-6 rounded-xl border-l-4 border-arkeup-orange">
                <CheckCircle className="w-8 h-8 text-arkeup-orange mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-arkeup-gray-800 mb-2">Conversion instantanée</h3>
                  <p className="text-lg text-arkeup-gray-700 leading-relaxed">
                    Transforme les recherches vagues en achats immédiats.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-arkeup-orange-50 p-6 rounded-xl border-l-4 border-arkeup-orange">
                <CheckCircle className="w-8 h-8 text-arkeup-orange mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-arkeup-gray-800 mb-2">Intelligence client</h3>
                  <p className="text-lg text-arkeup-gray-700 leading-relaxed">
                    Découvrez les tendances cachées et les produits gagnants avant vos concurrents.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-arkeup-orange-50 p-6 rounded-xl border-l-4 border-arkeup-orange">
                <CheckCircle className="w-8 h-8 text-arkeup-orange mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-arkeup-gray-800 mb-2">Implémentation rapide</h3>
                  <p className="text-lg text-arkeup-gray-700 leading-relaxed">
                    Une extension de l'expérience utilisateur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concrete Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-arkeup-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
              Ce Que Vous Obtenez Concrètement
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Élément 1 - Audit */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:scale-[1.02] border-t-4 border-blue-500">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-6 text-arkeup-gray-800">
                  Votre Audit de Conversion IA Gratuit
                </h3>
                <p className="text-center text-blue-600 font-medium mb-6 italic">
                  (L'Électrocardiogramme de Votre E-commerce)
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">1</div>
                    <p className="text-arkeup-gray-700 leading-relaxed">
                      <strong className="text-blue-600">La Vérité Chiffrée :</strong> Le montant exact en euros que vous perdez chaque mois à cause de recherches échouées.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">2</div>
                    <p className="text-arkeup-gray-700 leading-relaxed">
                      <strong className="text-blue-600">Le Top 3 des "Fuites d'Argent" :</strong> Les 3 types de requêtes qui envoient vos clients directement chez vos concurrents.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">3</div>
                    <p className="text-arkeup-gray-700 leading-relaxed">
                      <strong className="text-blue-600">Un Plan d'Action Immédiat :</strong> La feuille de route pour transformer votre barre de recherche en machine à vendre.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Élément 2 - Expérience Client */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:scale-[1.02] border-t-4 border-green-500">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-8 h-8 text-green-600" />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-6 text-arkeup-gray-800">
                  Une Expérience Client Qui Imprime des Billets
                </h3>
                <p className="text-center text-green-600 font-medium mb-6 italic">
                  (Vos Clients Vous Remercieront avec Leur Carte Bleue)
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">1</div>
                    <p className="text-arkeup-gray-700 leading-relaxed">
                      <strong className="text-green-600">Des Clients qui Trouvent, donc qui Achètent :</strong> Fini les "0 résultat". L'IA comprend l'intention, pas juste les mots-clés.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">2</div>
                    <p className="text-arkeup-gray-700 leading-relaxed">
                      <strong className="text-green-600">Un Panier Moyen qui Explose :</strong> L'IA propose intelligemment les produits complémentaires pour augmenter la valeur de chaque commande.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">3</div>
                    <p className="text-arkeup-gray-700 leading-relaxed">
                      <strong className="text-green-600">Une Fidélité à Toute Épreuve :</strong> Offrez une expérience si fluide que vos clients n'auront aucune raison d'aller voir ailleurs.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Élément 3 - Boule de Cristal */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:scale-[1.02] border-t-4 border-purple-500">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-6 text-arkeup-gray-800">
                  La Boule de Cristal
                </h3>
                <p className="text-center text-purple-600 font-medium mb-6 italic">
                  (Arrêtez de Deviner, Commencez à Encaisser)
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">1</div>
                    <p className="text-arkeup-gray-700 leading-relaxed">
                      <strong className="text-purple-600">Anticipez les Tendances :</strong> Sachez quels produits commander avant que vos concurrents ne comprennent ce qui se passe.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">2</div>
                    <p className="text-arkeup-gray-700 leading-relaxed">
                      <strong className="text-purple-600">Comprenez l'Intention Réelle :</strong> Découvrez les besoins exacts de vos clients pour créer des offres et des messages marketing qui touchent juste à chaque fois.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">3</div>
                    <p className="text-arkeup-gray-700 leading-relaxed">
                      <strong className="text-purple-600">Prenez des Décisions Basées sur des Certitudes :</strong> Pilotez votre business avec des données claires, pas à l'instinct.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section id="contact-form" className="py-16 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-green to-african-violet bg-clip-text text-transparent">
                Prêt à Récupérer Vos Ventes Perdues ?
              </h2>
              <p className="text-xl text-arkeup-gray-600 mb-8">
                Obtenez votre audit de conversion IA gratuit et découvrez combien vous perdez chaque mois.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-arkeup-gray-800">
                    Audit gratuit de votre barre de recherche
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Zap className="w-6 h-6 text-arkeup-orange mr-3" />
                      <span className="text-arkeup-gray-700">Test sur 10 produits pendant 7 jours</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-6 h-6 text-arkeup-orange mr-3" />
                      <span className="text-arkeup-gray-700">Rapport détaillé des opportunités manquées</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-6 h-6 text-arkeup-orange mr-3" />
                      <span className="text-arkeup-gray-700">Estimation du gain de revenus potentiel</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-arkeup-orange-50 rounded-xl">
                    <h4 className="text-lg font-semibold text-arkeup-orange-800 mb-2">Audit Gratuit</h4>
                    <p className="text-arkeup-orange-700">
                      Remplissez ce formulaire pour commencer
                    </p>
                  </div>
                </div>

                {/* Form */}
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
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-arkeup-orange focus:border-transparent transition-all"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Votre numéro de téléphone"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-arkeup-gray-700 mb-2">
                        URL de votre site e-commerce (optionnel)
                      </label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg focus:ring-2 focus:ring-arkeup-orange focus:border-transparent transition-all"
                        placeholder="www.votre-site.com ou https://votre-site.com"
                      />
                    </div>
                    
                    <button
                      type="submit"
                     className="w-full bg-gradient-to-r from-african-violet to-african-violet-600 hover:from-african-violet-700 hover:to-african-violet-800 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg text-lg"
                    >
                      Demander Mon Audit Gratuit
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
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-green-600 mb-4">Demande envoyée !</h3>
            <p className="text-lg text-arkeup-gray-700 mb-6">
              Merci pour votre demande d'audit gratuit. Nous vous contacterons très bientôt pour planifier votre analyse.
            </p>
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all"
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

export default EcommerceLanding;