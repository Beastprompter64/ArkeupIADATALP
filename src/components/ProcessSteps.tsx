import { Search, Lightbulb, TrendingUp } from 'lucide-react';

const ProcessSteps = () => {

  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Analyse de l'existant",
      description: "Nous analysons en profondeur vos processus métier pour identifier les opportunités d'amélioration où l'IA peut avoir le plus d'impact.",
      color: "text-blue-600"
    },
    {
      number: 2,
      icon: Lightbulb,
      title: "Solution IA sur mesure",
      description: "Nous concevons et développons une solution IA parfaitement adaptée à vos enjeux spécifiques et vos contraintes techniques.",
      color: "text-african-violet"
    },
    {
      number: 3,
      icon: TrendingUp,
      title: "Résultats & Croissance", 
      description: "Votre solution génère immédiatement de la valeur mesurable : gains de productivité, réduction des coûts et nouvelles opportunités.",
      color: "text-blue-green"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white" id="process">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment nous procédons
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une approche simple et éprouvée en 3 étapes pour transformer votre entreprise
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto relative">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div key={step.number} className="text-center relative">
                {/* Step Number & Icon */}
                <div className="relative mb-6 inline-block">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <StepIcon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-african-violet to-blue-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-6 lg:-right-8 text-gray-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessSteps;