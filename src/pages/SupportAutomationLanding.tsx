import { useState } from 'react';
import { Database, BookOpen, Zap, Shield, ArrowRight, CheckCircle, Clock, MessageSquare, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SupportAutomationLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    fetch('https://arkedown.app.n8n.cloud/webhook/844e5c4f-9dc2-405c-a19b-039df6856f0a', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        formType: 'Support Automation Demo Request',
        source: 'Support Automation Landing'
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="bg-white">
        <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-african-violet-50 via-blue-green-50 to-african-violet-100">
          <div className="absolute inset-0 bg-gradient-to-r from-arkeup-orange/5 to-arkeup-orange/5"></div>
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-green-500/30 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-african-violet-500/30 blur-3xl"></div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="h-1 w-8 bg-gradient-to-r from-african-violet-500 to-blue-green-500 rounded-full"></span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-african-violet-700">Support Client Automatisé</span>
                </div>
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-arkeup-gray-900 sm:text-5xl lg:text-6xl">
                  <span className="block mb-2">Vos clients attendent</span>
                  <span className="bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
                    6 minutes
                  </span>
                  <span className="block">pour une réponse ?</span>
                </h1>
                <p className="text-xl leading-relaxed text-arkeup-gray-600 lg:text-2xl font-light">
                  Divisez par <strong className="font-bold text-blue-green-600">12</strong> votre temps de réponse. Votre IA gère <strong className="font-bold text-african-violet-600">100%</strong> de vos requêtes Niveau 0 & 1 en <strong className="font-bold text-blue-green-600">30 secondes</strong>.
                </p>
                <div className="bg-gradient-to-r from-arkeup-orange-50 to-red-50 border-l-4 border-arkeup-orange-500 p-5 rounded-lg shadow-sm">
                  <p className="text-base font-semibold text-arkeup-gray-800 flex items-center gap-2">
                    <span className="text-xl">⚠️</span>
                    Chaque minute d'attente vous coûte des clients et gonfle vos coûts de support.
                  </p>
                </div>
                <div className="pt-6 flex flex-row gap-3">
                  <a
                    href="#cta-final"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-blue-green-500 to-african-violet-500 px-8 py-4 text-base font-bold text-white shadow-xl transition-transform duration-300 hover:scale-105 lg:px-10 lg:py-5 lg:text-lg"
                  >
                    Obtenir mon Audit Gratuit
                  </a>
                  <a
                    href="#workflow"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-african-violet-300 bg-white px-8 py-4 text-base font-semibold text-african-violet-700 shadow-md transition-transform duration-300 hover:bg-african-violet-50 hover:border-african-violet-400 lg:px-10 lg:py-5 lg:text-lg"
                  >
                    Comment ça marche ?
                  </a>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative lg:ml-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-green-400/20 to-african-violet-400/20 rounded-3xl blur-2xl"></div>
                <div className="relative overflow-hidden rounded-3xl border border-african-violet-200 bg-white shadow-2xl p-2">
                  <div className="overflow-hidden rounded-2xl">
                    <img 
                      src="RobotSupport.webp"
                      alt="Support client automatisé par IA - Agent utilisant un système intelligent"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-arkeup-gray-200 bg-white py-16">
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-1 w-8 bg-gradient-to-r from-african-violet-500 to-blue-green-500 rounded-full"></span>
                <span className="text-sm font-semibold uppercase tracking-wider text-african-violet-700">Ils nous font confiance</span>
              </div>
              <h2 className="text-3xl font-bold text-arkeup-gray-900 mb-3">
                Des leaders du retail qui ont choisi l'automatisation
              </h2>
              <p className="text-lg text-arkeup-gray-600 max-w-2xl mx-auto">
                Rejoignez les entreprises qui gèrent des millions de clients avec votre IA sur mesure
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex h-24 w-52 items-center justify-center rounded-2xl border-2 border-arkeup-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg transition-all hover:shadow-xl hover:border-blue-green-400 hover:-translate-y-1">
                <img 
                  src="kiabi.png" 
                  alt="Kiabi" 
                  className="max-w-full max-h-full object-contain"
                  loading="eager"
                />
              </div>
              <div className="flex h-24 w-52 items-center justify-center rounded-2xl border-2 border-arkeup-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg transition-all hover:shadow-xl hover:border-african-violet-400 hover:-translate-y-1">
                <img 
                  src="fnac.png" 
                  alt="Fnac Darty" 
                  className="max-w-full max-h-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-arkeup-gray-200 py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-1 w-8 bg-red-500 rounded-full"></span>
                <span className="text-sm font-semibold uppercase tracking-wider text-red-700">Le constat</span>
              </div>
              <h2 className="text-3xl font-bold text-arkeup-gray-900 sm:text-4xl lg:text-5xl mb-4">
                Arrêtez de payer des humains pour
                <span className="block text-red-600">copier-coller des réponses</span>
              </h2>
              <p className="text-xl text-arkeup-gray-600 max-w-3xl mx-auto">Comparez votre situation actuelle avec ce que vous pourriez avoir</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative rounded-3xl border-2 border-red-300 bg-gradient-to-br from-red-50 to-white p-8 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute -top-4 left-8 bg-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  ❌ Situation Actuelle
                </div>
                <h3 className="text-xl font-bold text-red-700 mb-8 mt-4">
                  Ce que vous vivez aujourd'hui
                </h3>
                <ul className="space-y-5 text-base leading-relaxed text-arkeup-gray-700">
                  <li className="flex gap-3 items-start">
                    <span className="text-red-600 text-lg flex-shrink-0">❌</span>
                    <span>Temps de réponse moyen : 360 secondes.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-red-600 text-lg flex-shrink-0">❌</span>
                    <span>Coût par ticket élevé (salaire agent).</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-red-600 text-lg flex-shrink-0">❌</span>
                    <span>Agents frustrés par les tâches répétitives.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-red-600 text-lg flex-shrink-0">❌</span>
                    <span>Impossible de scaler pendant les pics (Noël, Soldes).</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-3xl border-2 border-blue-green-400 bg-gradient-to-br from-blue-green-50 via-white to-african-violet-50 p-8 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 hover:border-blue-green-500">
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-green-500 to-african-violet-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  ✨ Avec Votre IA
                </div>
                <h3 className="text-xl font-bold text-blue-green-700 mb-8 mt-4">
                  Ce que vous obtiendrez demain
                </h3>
                <ul className="space-y-5 text-base leading-relaxed text-arkeup-gray-700">
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-green-600 text-lg flex-shrink-0">✅</span>
                    <span>Réponse instantanée en 30 secondes avec validation humaine.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-green-600 text-lg flex-shrink-0">✅</span>
                    <span>Coût par ticket divisé par 5 (ou plus).</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-green-600 text-lg flex-shrink-0">✅</span>
                    <span>Agents focalisés sur les problèmes complexes (Niveau 2+).</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-green-600 text-lg flex-shrink-0">✅</span>
                    <span>Capacité de support 24/7 illimitée.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-arkeup-gray-200 py-20 bg-gradient-to-b from-white to-african-violet-50/20">
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-semibold text-arkeup-gray-900 sm:text-4xl mb-4">
                La pièce manquante est déjà chez vous.
              </h2>
              <p className="text-lg leading-relaxed text-arkeup-gray-700">
                Vous n'avez rien à créer. Vous avez déjà les deux seules choses dont nous avons besoin :
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="rounded-2xl border-2 border-blue-green-200 bg-white p-8 shadow-md transition-all hover:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="rounded-xl bg-blue-green-50 p-4">
                    <Database className="h-10 w-10 text-blue-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-arkeup-gray-900 mb-2">Historique de conversations</h3>
                    <p className="text-base text-arkeup-gray-700 leading-relaxed">
                      Zendesk, Intercom, emails ou tout autre système que vous utilisez déjà
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border-2 border-african-violet-200 bg-white p-8 shadow-md transition-all hover:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="rounded-xl bg-african-violet-50 p-4">
                    <BookOpen className="h-10 w-10 text-african-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-arkeup-gray-900 mb-2">Base de connaissances</h3>
                    <p className="text-base text-arkeup-gray-700 leading-relaxed">
                      FAQ, fiches produits, documentation interne et guides clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border-2 border-blue-green-200 bg-gradient-to-br from-blue-green-50 to-african-violet-50 p-8 text-center shadow-md">
              <Shield className="w-10 h-10 text-blue-green-600 mx-auto mb-4" />
              <p className="text-lg font-medium text-arkeup-gray-900 leading-relaxed">
                "Nous branchons votre IA. Elle apprend de vos données existantes. Vous commencez à économiser."
              </p>
            </div>
          </div>
        </section>

        <section id="workflow" className="relative border-t border-arkeup-gray-200 py-24 bg-gradient-to-b from-white to-african-violet-50/30">
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-1 w-8 bg-gradient-to-r from-blue-green-500 to-blue-green-600 rounded-full"></span>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-green-700">Simple & Rapide</span>
              </div>
              <h2 className="text-3xl font-bold text-arkeup-gray-900 sm:text-4xl lg:text-5xl mb-4">
                Comment ça marche ?
              </h2>
              <p className="text-xl text-arkeup-gray-600 max-w-3xl mx-auto">Un processus en 3 étapes pour transformer votre support client</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="relative rounded-3xl border-2 border-blue-green-300 bg-white p-8 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 hover:border-blue-green-400 group">
                <div className="absolute -top-5 -right-5 w-12 h-12 bg-gradient-to-br from-blue-green-500 to-blue-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-green-100 to-blue-green-200 mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-blue-green-700">🔌</span>
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-900 mb-3">
                  Connexion & Analyse
                </h3>
                <p className="text-base leading-relaxed text-arkeup-gray-700">
                  L'IA ingère vos données et devient un expert dans votre domaine
                </p>
              </div>
              <div className="relative rounded-3xl border-2 border-african-violet-300 bg-white p-8 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 hover:border-african-violet-400 group">
                <div className="absolute -top-5 -right-5 w-12 h-12 bg-gradient-to-br from-african-violet-500 to-african-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-african-violet-100 to-african-violet-200 mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-9 w-9 text-african-violet-700" />
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-900 mb-3">
                  Résolution Instantanée
                </h3>
                <p className="text-base leading-relaxed text-arkeup-gray-700">
                  L'IA répond 24/7 aux requêtes N0/N1 (suivi colis, mot de passe, infos produit…).
                </p>
              </div>
              <div className="relative rounded-3xl border-2 border-blue-green-300 bg-white p-8 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 hover:border-blue-green-400 group">
                <div className="absolute -top-5 -right-5 w-12 h-12 bg-gradient-to-br from-blue-green-500 to-blue-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-green-100 to-blue-green-200 mb-6 group-hover:scale-110 transition-transform">
                  <ArrowRight className="h-9 w-9 text-blue-green-700" />
                </div>
                <h3 className="text-xl font-bold text-arkeup-gray-900 mb-3">
                  Escalade Intelligente
                </h3>
                <p className="text-base leading-relaxed text-arkeup-gray-700">
                  Si la requête est complexe (N2+), l'IA la transfère à un agent humain avec tout le contexte. Zéro friction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta-final" className="relative border-t border-arkeup-gray-200 py-20 bg-gradient-to-b from-african-violet-50/20 to-white">
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-1 w-8 bg-gradient-to-r from-blue-green-500 to-african-violet-500 rounded-full"></span>
                <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-green-700 to-african-violet-700 bg-clip-text text-transparent">Offre Exclusive</span>
              </div>
              <h2 className="text-3xl font-bold text-arkeup-gray-900 sm:text-4xl lg:text-5xl mb-6">
                <span className="block">On vous montre le ROI</span>
                <span className="bg-gradient-to-r from-blue-green-600 to-african-violet-600 bg-clip-text text-transparent">avant de parler de prix</span>
              </h2>
              <p className="text-xl leading-relaxed text-arkeup-gray-600 max-w-3xl mx-auto">
                Demandez votre <strong className="font-bold text-blue-green-600">"Audit de Performance"</strong> gratuit. On ne vous vend rien. On vous montre les faits avec des chiffres concrets.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-5">
                <div className="rounded-xl border-2 border-blue-green-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-green-100 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-blue-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-arkeup-gray-900 mb-2">L'Audit de Performance</h3>
                      <p className="text-base text-arkeup-gray-700">
                        Nous analysons vos 1000 derniers tickets pour identifier vos 3 demandes les plus récurrentes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border-2 border-african-violet-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-african-violet-100 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-african-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-arkeup-gray-900 mb-2">La Simulation de ROI</h3>
                      <p className="text-base text-arkeup-gray-700">
                        Un rapport d'une page vous montrant combien vous économiserez (en € et en heures) en 6 mois.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border-2 border-blue-green-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-green-100 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-blue-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-arkeup-gray-900 mb-2">La Démo (Optionnel)</h3>
                      <p className="text-base text-arkeup-gray-700">
                        Une démo de 15 min de l'IA répondant à VOS questions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border-l-4 border-arkeup-orange-500 bg-arkeup-orange-50 p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-arkeup-orange-100 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-arkeup-orange-700" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-arkeup-gray-900 leading-relaxed">
                        <strong className="text-arkeup-orange-700">NOTE :</strong> Pour garantir la qualité, nous n'acceptons que <span className="text-blue-green-700 font-bold">5 nouveaux audits par semaine</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-blue-green-300 bg-white p-8 shadow-xl lg:sticky lg:top-24">
                <h3 className="text-2xl font-bold text-arkeup-gray-900 mb-6 text-center">
                  Réserver mon Audit Gratuit
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-arkeup-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg bg-white text-arkeup-gray-900 placeholder-arkeup-gray-400 focus:ring-2 focus:ring-blue-green-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-arkeup-gray-700 mb-2">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg bg-white text-arkeup-gray-900 placeholder-arkeup-gray-400 focus:ring-2 focus:ring-blue-green-500 focus:border-blue-green-500 transition-all"
                      placeholder="john@entreprise.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-arkeup-gray-700 mb-2">
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg bg-white text-arkeup-gray-900 placeholder-arkeup-gray-400 focus:ring-2 focus:ring-blue-green-500 focus:border-blue-green-500 transition-all"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-arkeup-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg bg-white text-arkeup-gray-900 placeholder-arkeup-gray-400 focus:ring-2 focus:ring-blue-green-500 focus:border-blue-green-500 transition-all"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-arkeup-gray-700 mb-2">
                      Site web
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-arkeup-gray-300 rounded-lg bg-white text-arkeup-gray-900 placeholder-arkeup-gray-400 focus:ring-2 focus:ring-blue-green-500 focus:border-blue-green-500 transition-all"
                      placeholder="https://votre-site.com"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-green-500 to-african-violet-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-blue-green-400 focus:outline-none"
                  >
                    Obtenir mon Audit Gratuit
                  </button>
                </form>
                
                <p className="mt-4 text-sm text-center text-arkeup-gray-600">
                  Pas de carte de crédit. Pas de blabla. Juste des résultats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Message Popup */}
        {showSuccessMessage && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white border-2 border-blue-green-400 rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-blue-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-arkeup-gray-900 mb-4">Demande envoyée !</h3>
              <p className="text-lg text-arkeup-gray-700 mb-6">
                Nous vous contacterons très bientôt pour planifier votre audit gratuit.
              </p>
              <button
                onClick={() => setShowSuccessMessage(false)}
                className="bg-gradient-to-r from-blue-green-500 to-african-violet-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all focus:ring-2 focus:ring-blue-green-400"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SupportAutomationLanding;
