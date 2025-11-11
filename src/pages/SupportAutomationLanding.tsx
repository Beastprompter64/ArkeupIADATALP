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
    <div className="min-h-screen bg-arkeup-gray-900 text-white">
      <Header />
      <main className="bg-arkeup-gray-900">
        <section className="relative overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-arkeup-gray-900 via-arkeup-gray-800 to-arkeup-gray-900"></div>
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-green-500/20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-african-violet-500/20 blur-3xl"></div>
          <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-8">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Vos clients attendent 6 minutes pour une réponse ?
              </h1>
              <p className="text-lg leading-relaxed text-blue-green-100 sm:text-xl">
                Divisez par 12 votre temps de réponse. Notre IA gère 100% de vos requêtes Niveau 0 & 1 en 30 secondes.
              </p>
              <p className="text-base font-medium text-african-violet-200 sm:text-lg">
                Chaque minute d'attente vous coûte des clients et gonfle vos coûts de support.
              </p>
              <div className="pt-4">
                <a
                  href="#cta-final"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-green-500 to-african-violet-500 px-8 py-4 text-center text-base font-semibold text-white shadow-2xl transition-transform duration-300 hover:scale-[1.03] hover:from-african-violet-500 hover:to-blue-green-500"
                >
                  Demander votre Audit de Performance (Gratuit)
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[48px] border border-white/10 bg-gradient-to-br from-blue-green-500/20 via-transparent to-african-violet-500/20 blur-3xl"></div>
              <div className="relative rounded-[40px] border border-white/10 bg-arkeup-gray-800/60 p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur">
                <img 
                  src="https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="IA automatisant le support client"
                  className="w-full h-80 object-cover rounded-[32px] border border-white/10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arkeup-gray-900/50 to-transparent rounded-[32px]"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-arkeup-gray-800 bg-arkeup-gray-900/95 py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-arkeup-gray-900/60 to-arkeup-gray-900"></div>
          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-semibold uppercase tracking-wider sm:tracking-[0.2em] text-blue-green-200">
              Ils gèrent des millions de clients avec une IA sur mesure.
            </h2>
            <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row">
              <div className="group relative inline-flex h-20 items-center justify-center rounded-2xl border border-arkeup-gray-700 bg-arkeup-gray-800/60 px-12 transition-all hover:border-blue-green-500/50 hover:bg-arkeup-gray-800">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-green-500/0 to-blue-green-500/0 opacity-0 transition-opacity group-hover:from-blue-green-500/10 group-hover:to-african-violet-500/10 group-hover:opacity-100"></div>
                <span className="relative text-2xl font-bold text-white">Kiabi</span>
              </div>
              <div className="group relative inline-flex h-20 items-center justify-center rounded-2xl border border-arkeup-gray-700 bg-arkeup-gray-800/60 px-12 transition-all hover:border-african-violet-500/50 hover:bg-arkeup-gray-800">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-african-violet-500/0 to-african-violet-500/0 opacity-0 transition-opacity group-hover:from-african-violet-500/10 group-hover:to-blue-green-500/10 group-hover:opacity-100"></div>
                <span className="relative text-2xl font-bold text-white">Fnac Darty</span>
              </div>
            </div>
            <p className="mt-8 text-sm text-blue-green-300/70">
              Logos utilisés à titre illustratif - Exemples de leaders du retail utilisant l'IA
            </p>
          </div>
        </section>

        <section className="relative border-t border-arkeup-gray-800 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-arkeup-gray-900 via-arkeup-gray-800 to-arkeup-gray-900"></div>
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Arrêtez de payer des humains pour copier-coller des réponses.
            </h2>
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div className="group rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/70 p-10 shadow-[0_30px_80px_-30px_rgba(17,24,39,0.8)] transition-all hover:border-red-500/30 hover:shadow-[0_30px_80px_-30px_rgba(239,68,68,0.3)]">
                <h3 className="text-sm font-semibold uppercase tracking-wider sm:tracking-[0.2em] text-blue-green-200 mb-6">
                  Le Problème - Ce qu'ils font maintenant
                </h3>
                <ul className="mt-8 space-y-5 text-base leading-relaxed text-blue-green-50">
                  <li className="flex gap-4 items-start">
                    <span className="text-african-violet-300 text-xl flex-shrink-0">❌</span>
                    <span>Temps de réponse moyen : 360 secondes.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-african-violet-300 text-xl flex-shrink-0">❌</span>
                    <span>Coût par ticket élevé (salaire agent).</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-african-violet-300 text-xl flex-shrink-0">❌</span>
                    <span>Agents frustrés par les tâches répétitives.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-african-violet-300 text-xl flex-shrink-0">❌</span>
                    <span>Impossible de scaler pendant les pics (Noël, Soldes).</span>
                  </li>
                </ul>
              </div>
              <div className="group rounded-3xl border border-arkeup-gray-700/80 bg-gradient-to-br from-blue-green-600/20 via-arkeup-gray-900 to-african-violet-600/20 p-10 shadow-[0_30px_80px_-30px_rgba(17,24,39,0.9)] transition-all hover:border-blue-green-500/50 hover:shadow-[0_30px_80px_-30px_rgba(50,197,240,0.5)]">
                <h3 className="text-sm font-semibold uppercase tracking-wider sm:tracking-[0.2em] text-blue-green-200 mb-6">
                  La Solution - Ce qu'ils auront
                </h3>
                <ul className="mt-8 space-y-5 text-base leading-relaxed text-blue-green-50">
                  <li className="flex gap-4 items-start">
                    <span className="text-blue-green-300 text-xl flex-shrink-0">✅</span>
                    <span>Réponse instantanée en 30 secondes avec validation humaine.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-blue-green-300 text-xl flex-shrink-0">✅</span>
                    <span>Coût par ticket divisé par 5 (ou plus).</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-blue-green-300 text-xl flex-shrink-0">✅</span>
                    <span>Agents focalisés sur les problèmes complexes (Niveau 2+).</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-blue-green-300 text-xl flex-shrink-0">✅</span>
                    <span>Capacité de support 24/7 illimitée.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-arkeup-gray-800 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-arkeup-gray-900 via-arkeup-gray-800 to-arkeup-gray-900"></div>
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                La pièce manquante est déjà chez vous.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-blue-green-100">
                Vous n'avez rien à créer. Vous avez déjà les deux seules choses dont nous avons besoin :
              </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div className="group rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/70 p-8 transition-all hover:border-blue-green-500/50 hover:shadow-[0_30px_80px_-30px_rgba(50,197,240,0.3)]">
                <div className="flex items-start gap-6">
                  <div className="rounded-2xl border border-blue-green-500/30 bg-blue-green-500/10 p-6 transition-all group-hover:bg-blue-green-500/20">
                    <Database className="h-12 w-12 text-blue-green-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-green-100 mb-3">Historique de conversations</h3>
                    <p className="text-base text-blue-green-200/80 leading-relaxed">
                      Zendesk, Intercom, emails ou tout autre système que vous utilisez déjà
                    </p>
                  </div>
                </div>
              </div>
              <div className="group rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/70 p-8 transition-all hover:border-african-violet-500/50 hover:shadow-[0_30px_80px_-30px_rgba(130,87,229,0.3)]">
                <div className="flex items-start gap-6">
                  <div className="rounded-2xl border border-african-violet-500/30 bg-african-violet-500/10 p-6 transition-all group-hover:bg-african-violet-500/20">
                    <BookOpen className="h-12 w-12 text-african-violet-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-green-100 mb-3">Base de connaissances</h3>
                    <p className="text-base text-blue-green-200/80 leading-relaxed">
                      FAQ, fiches produits, documentation interne et guides clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/80 p-8 sm:p-10 text-center transition-all hover:border-blue-green-500/50 hover:shadow-[0_30px_80px_-30px_rgba(50,197,240,0.3)]">
              <Shield className="w-12 h-12 text-blue-green-300 mx-auto mb-4" />
              <p className="text-lg font-medium text-blue-green-100 leading-relaxed">
                "Nous branchons notre IA. Elle apprend de vos données existantes. Vous commencez à économiser."
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-arkeup-gray-800 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-arkeup-gray-900 via-arkeup-gray-800 to-arkeup-gray-900"></div>
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Notre workflow en 3 étapes
            </h2>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              <div className="group rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/70 p-8 transition-all hover:border-blue-green-500/50 hover:shadow-[0_30px_80px_-30px_rgba(50,197,240,0.3)] hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-green-500/20 border border-blue-green-500/30 mb-6 transition-all group-hover:bg-blue-green-500/30 group-hover:scale-110">
                  <span className="text-3xl font-bold text-blue-green-300">1</span>
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider sm:tracking-[0.2em] text-blue-green-200 mb-4">
                  Connexion & Analyse
                </div>
                <p className="text-base leading-relaxed text-blue-green-100">
                  L'IA ingère vos données et devient un expert dans votre domaine
                </p>
              </div>
              <div className="group rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/70 p-8 transition-all hover:border-african-violet-500/50 hover:shadow-[0_30px_80px_-30px_rgba(130,87,229,0.3)] hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-african-violet-500/20 border border-african-violet-500/30 mb-6 transition-all group-hover:bg-african-violet-500/30 group-hover:scale-110">
                  <Zap className="h-8 w-8 text-african-violet-300" />
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider sm:tracking-[0.2em] text-blue-green-200 mb-4">
                  Résolution Instantanée
                </div>
                <p className="text-base leading-relaxed text-blue-green-100">
                  L'IA répond 24/7 aux requêtes N0/N1 (suivi colis, mot de passe, infos produit…).
                </p>
              </div>
              <div className="group rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/70 p-8 transition-all hover:border-blue-green-500/50 hover:shadow-[0_30px_80px_-30px_rgba(50,197,240,0.3)] hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-green-500/20 border border-blue-green-500/30 mb-6 transition-all group-hover:bg-blue-green-500/30 group-hover:scale-110">
                  <ArrowRight className="h-8 w-8 text-blue-green-300" />
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider sm:tracking-[0.2em] text-blue-green-200 mb-4">
                  Escalade Intelligente
                </div>
                <p className="text-base leading-relaxed text-blue-green-100">
                  Si la requête est complexe (N2+), l'IA la transfère à un agent humain avec tout le contexte. Zéro friction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta-final" className="relative border-t border-arkeup-gray-800 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-arkeup-gray-900 via-arkeup-gray-800 to-arkeup-gray-900"></div>
          <div className="absolute inset-y-0 right-0 h-full w-1/2 bg-gradient-to-l from-blue-green-500/10 to-transparent" aria-hidden="true"></div>
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl mb-6">
                On vous montre le ROI avant de parler de prix.
              </h2>
              <p className="text-lg leading-relaxed text-blue-green-100 max-w-3xl mx-auto">
                Demandez votre "Plan d'Action IA" gratuit. On ne vous vend rien. On vous montre les faits.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="rounded-2xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/80 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-blue-green-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">L'Audit de Performance</h3>
                      <p className="text-base text-blue-green-100">
                        Nous analysons vos 1000 derniers tickets pour identifier vos 3 demandes les plus récurrentes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/80 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-african-violet-500/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-african-violet-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">La Simulation de ROI</h3>
                      <p className="text-base text-blue-green-100">
                        Un rapport d'une page vous montrant combien vous économiserez (en € et en heures) en 6 mois.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/80 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-green-500/20 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-blue-green-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">La Démo (Optionnel)</h3>
                      <p className="text-base text-blue-green-100">
                        Une démo de 15 min de l'IA répondant à VOS questions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-african-violet-500/50 bg-gradient-to-br from-african-violet-500/20 to-blue-green-500/20 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-african-violet-500/30 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-african-violet-200" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white leading-relaxed">
                        <strong className="text-african-violet-200">NOTE :</strong> Pour garantir la qualité, nous n'acceptons que <span className="text-blue-green-300 font-bold">5 nouveaux audits par semaine</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/90 p-8 shadow-[0_40px_120px_-50px_rgba(50,197,240,0.3)]">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Réserver mon Audit Gratuit
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-blue-green-100 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-arkeup-gray-600 rounded-lg bg-arkeup-gray-800 text-white placeholder-blue-green-300/50 focus:ring-2 focus:ring-blue-green-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-blue-green-100 mb-2">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-arkeup-gray-600 rounded-lg bg-arkeup-gray-800 text-white placeholder-blue-green-300/50 focus:ring-2 focus:ring-blue-green-500 focus:border-transparent transition-all"
                      placeholder="john@entreprise.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-blue-green-100 mb-2">
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-arkeup-gray-600 rounded-lg bg-arkeup-gray-800 text-white placeholder-blue-green-300/50 focus:ring-2 focus:ring-blue-green-500 focus:border-transparent transition-all"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-blue-green-100 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-arkeup-gray-600 rounded-lg bg-arkeup-gray-800 text-white placeholder-blue-green-300/50 focus:ring-2 focus:ring-blue-green-500 focus:border-transparent transition-all"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-blue-green-100 mb-2">
                      Site web
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-arkeup-gray-600 rounded-lg bg-arkeup-gray-800 text-white placeholder-blue-green-300/50 focus:ring-2 focus:ring-blue-green-500 focus:border-transparent transition-all"
                      placeholder="https://votre-site.com"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-green-500 to-african-violet-500 px-8 py-4 text-base font-semibold text-white shadow-[0_20px_60px_-20px_rgba(50,197,240,0.7)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_30px_80px_-20px_rgba(50,197,240,0.8)] hover:from-african-violet-500 hover:to-blue-green-500"
                  >
                    Obtenir mon Audit Gratuit
                  </button>
                </form>
                
                <p className="mt-4 text-sm text-center text-blue-green-300/70">
                  Pas de carte de crédit. Pas de blabla. Juste des résultats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Message Popup */}
        {showSuccessMessage && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-arkeup-gray-900 border border-blue-green-500/50 rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-green-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-blue-green-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Demande envoyée !</h3>
              <p className="text-lg text-blue-green-100 mb-6">
                Nous vous contacterons très bientôt pour planifier votre audit gratuit.
              </p>
              <button
                onClick={() => setShowSuccessMessage(false)}
                className="bg-gradient-to-r from-blue-green-500 to-african-violet-500 text-white px-8 py-3 rounded-full font-bold hover:from-african-violet-500 hover:to-blue-green-500 transition-all"
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
