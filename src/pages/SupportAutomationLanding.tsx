import Header from '../components/Header';
import Footer from '../components/Footer';

const SupportAutomationLanding = () => {
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
                <div className="h-80 w-full rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-green-600/30 via-arkeup-gray-900 to-african-violet-600/30"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-arkeup-gray-800 bg-arkeup-gray-900/95 py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-arkeup-gray-900/60 to-arkeup-gray-900"></div>
          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.3em] text-blue-green-200">
              Ils gèrent des millions de clients avec une IA sur mesure.
            </h2>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <div className="inline-flex h-16 items-center rounded-full border border-arkeup-gray-700 bg-arkeup-gray-800/60 px-10 text-lg font-semibold uppercase tracking-[0.4em] text-white">
                [Logo Kiabi]
              </div>
              <div className="inline-flex h-16 items-center rounded-full border border-arkeup-gray-700 bg-arkeup-gray-800/60 px-10 text-lg font-semibold uppercase tracking-[0.4em] text-white">
                [Logo Fnac Darty]
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-arkeup-gray-800 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-arkeup-gray-900 via-arkeup-gray-800 to-arkeup-gray-900"></div>
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Arrêtez de payer des humains pour copier-coller des réponses.
            </h2>
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div className="rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/70 p-10 shadow-[0_30px_80px_-30px_rgba(17,24,39,0.8)]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-green-200">
                  Le Problème - Ce qu'ils font maintenant
                </h3>
                <ul className="mt-8 space-y-5 text-base leading-relaxed text-blue-green-50">
                  <li className="flex gap-4">
                    <span className="text-african-violet-300">❌</span>
                    <span>Temps de réponse moyen : 360 secondes.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-african-violet-300">❌</span>
                    <span>Coût par ticket élevé (salaire agent).</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-african-violet-300">❌</span>
                    <span>Agents frustrés par les tâches répétitives.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-african-violet-300">❌</span>
                    <span>Impossible de scaler pendant les pics (Noël, Soldes).</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-arkeup-gray-700/80 bg-gradient-to-br from-blue-green-600/20 via-arkeup-gray-900 to-african-violet-600/20 p-10 shadow-[0_30px_80px_-30px_rgba(17,24,39,0.9)]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-green-200">
                  La Solution - Ce qu'ils auront
                </h3>
                <ul className="mt-8 space-y-5 text-base leading-relaxed text-blue-green-50">
                  <li className="flex gap-4">
                    <span className="text-blue-green-300">✅</span>
                    <span>Réponse instantanée en 30 secondes avec validation humaine.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-blue-green-300">✅</span>
                    <span>Coût par ticket divisé par 5 (ou plus).</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-blue-green-300">✅</span>
                    <span>Agents focalisés sur les problèmes complexes (Niveau 2+).</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-blue-green-300">✅</span>
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
              <div className="rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/70 p-8">
                <div className="rounded-2xl border border-blue-green-500/30 bg-blue-green-500/10 p-8 text-lg font-semibold text-blue-green-100">
                  Image/Icône 1 : Votre historique de conversations (Zendesk, Intercom, emails...)
                </div>
              </div>
              <div className="rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/70 p-8">
                <div className="rounded-2xl border border-african-violet-500/30 bg-african-violet-500/10 p-8 text-lg font-semibold text-blue-green-100">
                  Image/Icône 2 : Votre base de connaissances (FAQ, fiches produits)
                </div>
              </div>
            </div>
            <div className="mt-12 rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/80 p-10 text-center text-lg font-medium text-blue-green-100">
              "Nous branchons notre IA. Elle apprend de vos données existantes. Vous commencez à économiser."
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
              <div className="rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/70 p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-green-200">
                  Étape 1 : Connexion & Analyse
                </div>
                <p className="mt-6 text-base leading-relaxed text-blue-green-100">
                  L'IA ingère vos données et devient un expert dans votre domaine
                </p>
              </div>
              <div className="rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/70 p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-green-200">
                  Étape 2 : Résolution Instantanée
                </div>
                <p className="mt-6 text-base leading-relaxed text-blue-green-100">
                  L'IA répond 24/7 aux requêtes N0/N1 (suivi colis, mot de passe, infos produit…).
                </p>
              </div>
              <div className="rounded-3xl border border-arkeup-gray-700/80 bg-arkeup-gray-900/70 p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-green-200">
                  Étape 3 : Escalade Intelligente
                </div>
                <p className="mt-6 text-base leading-relaxed text-blue-green-100">
                  Si la requête est complexe (N2+), l'IA la transfère à un agent humain avec tout le contexte. Zéro friction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta-final" className="relative border-t border-arkeup-gray-800 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-arkeup-gray-900 via-arkeup-gray-800 to-arkeup-gray-900"></div>
          <div className="absolute inset-y-0 right-0 h-full w-1/2 bg-gradient-to-l from-blue-green-500/10 to-transparent" aria-hidden="true"></div>
          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              On vous montre le ROI avant de parler de prix.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-blue-green-100">
              Demandez votre "Plan d'Action IA" gratuit. On ne vous vend rien. On vous montre les faits.
            </p>
            <div className="mt-12 space-y-4 text-base leading-relaxed text-blue-green-50">
              <div>L'Audit de Performance : Nous analysons vos 1000 derniers tickets pour identifier vos 3 demandes les plus récurrentes.</div>
              <div>La Simulation de ROI : Un rapport d'une page vous montrant combien vous économiserez (en € et en heures) en 6 mois.</div>
              <div>La Démo (Optionnel) : Une démo de 15 min de l'IA répondant à VOS questions.</div>
              <div className="text-african-violet-200">"NOTE : Pour garantir la qualité, nous n'acceptons que 5 nouveaux audits par semaine."</div>
            </div>
            <div className="mt-12">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-green-500 to-african-violet-500 px-10 py-4 text-base font-semibold text-white shadow-[0_40px_120px_-50px_rgba(50,197,240,0.7)] transition-transform duration-300 hover:scale-[1.04] hover:from-african-violet-500 hover:to-blue-green-500"
              >
                Réserver mon Audit Gratuit
              </a>
              <p className="mt-4 text-sm text-blue-green-200">
                Pas de carte de crédit. Pas de blabla. Juste des résultats.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SupportAutomationLanding;
