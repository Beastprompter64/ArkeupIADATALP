import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-arkeup-gray-50">
      <Header />
      
      <section className="pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
              Mentions légales
            </h1>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-sm text-arkeup-gray-600 mb-8 italic">
                En vigueur au 01/01/2021
              </p>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site www.arkeup.com les présentes mentions légales.
                </p>
                
                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  La connexion et la navigation sur le site www.arkeup.com par l'Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
                </p>
                
                <p className="text-arkeup-gray-700 leading-relaxed mb-12">
                  Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».
                </p>

                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-green to-african-violet bg-clip-text text-transparent">
                  ARTICLE 1 : L'ÉDITEUR
                </h2>
                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  L'édition du site www.arkeup.com est assurée par la Société ARKEUP, société par actions simplifiée au capital de 260.000 euros, immatriculée au RCS de Paris sous le numéro 538 662 602 dont le siège social est situé au 23 Rue de Liège 75008 Paris, numéro de téléphone 01.79.97.36.20, adresse e-mail : contact@arkeup.com
                </p>
                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  N° de TVA intracommunautaire : FR22538662602
                </p>
                <p className="text-arkeup-gray-700 leading-relaxed mb-12">
                  Le Directeur de la publication est M. Pierre-Paul ARDILE, en qualité de gérant de la SARL TOGETH'UP, présidente d'ARKEUP
                </p>

                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
                  ARTICLE 2 : L'HÉBERGEUR
                </h2>
                <p className="text-arkeup-gray-700 leading-relaxed mb-12">
                  L'hébergeur du site www.arkeup.com est la Société GOOGLE CLOUD FRANCE, dont le siège social est situé au 8 RUE DE LONDRES, 75009 PARIS.
                </p>

                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-green to-african-violet bg-clip-text text-transparent">
                  ARTICLE 3 : ACCÈS AU SITE
                </h2>
                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d'une nécessité de maintenance.
                </p>
                <p className="text-arkeup-gray-700 leading-relaxed mb-12">
                  En cas de modification, interruption ou suspension des services le site www.arkeup.com ne saurait être tenu responsable.
                </p>

                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
                  ARTICLE 4 : RECUEIL DES DONNÉES ET TRAITEMENT
                </h2>
                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
                </p>
                
                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  Conformément au Règlement Général de Protection des données, l'utilisateur est informé que les informations recueillies sur le site par l'intermédiaire de formulaires sont enregistrées dans un fichier informatisé par la société ARKEUP à des fins de traitement des demandes, de prospection commerciale et d'amélioration ou de développement des services, de traitement statistique. La base légale du traitement est le consentement de l'utilisateur.
                </p>

                <p className="text-arkeup-gray-700 leading-relaxed mb-4">
                  Les données collectées sont les suivantes :
                </p>
                <ul className="list-disc list-inside text-arkeup-gray-700 mb-6 space-y-1">
                  <li>Nom</li>
                  <li>Prénom</li>
                  <li>Courriel</li>
                  <li>Numéro de téléphone</li>
                  <li>Société</li>
                  <li>Fonction</li>
                </ul>

                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  Les données collectées pourront être communiquées aux personnels de la société ARKEUP et à ses éventuels sous-traitants aux fins susmentionnées.
                </p>

                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  Les données sont conservées pendant une durée de deux ans.
                </p>

                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  La société ARKEUP s'engage à ne commercialiser en aucun cas les données collectées par l'intermédiaire du site www.arkeup.com.
                </p>

                <p className="text-arkeup-gray-700 leading-relaxed mb-4">
                  Conformément au RGPD et à loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose des droits suivants :
                </p>

                <ul className="list-disc list-inside text-arkeup-gray-700 mb-6 space-y-2">
                  <li>accéder aux données le concernant, les rectifier, demander leur effacement ou exercer son droit à la limitation du traitement de vos données, s'opposer au traitement de ses données</li>
                  <li>exercer son droit à la portabilité de vos données</li>
                  <li>Consultez le site cnil.fr pour plus d'informations sur vos droits.</li>
                </ul>

                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  Afin d'exercer ses droits, l'Utilisateur peut adresser un courriel à rgpd@arkeup.com.
                </p>

                <p className="text-arkeup-gray-700 leading-relaxed mb-12">
                  Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
                </p>

                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-green to-african-violet bg-clip-text text-transparent">
                  ARTICLE 5 : COOKIES
                </h2>
                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  L'Utilisateur est informé que lors de ses visites sur le site, un cookie peut s'installer automatiquement sur son logiciel de navigation.
                </p>
                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  En naviguant sur le site, il les accepte.
                </p>
                <p className="text-arkeup-gray-700 leading-relaxed mb-12">
                  Un cookie est un élément qui ne permet pas d'identifier l'Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. L'Utilisateur pourra désactiver ce cookie par l'intermédiaire des paramètres figurant au sein de son logiciel de navigation.
                </p>

                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-african-violet to-blue-green bg-clip-text text-transparent">
                  ARTICLE 6 : PROPRIÉTÉ INTELLECTUELLE
                </h2>
                <p className="text-arkeup-gray-700 leading-relaxed mb-6">
                  Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site www.arkeup.com sans autorisation de l'Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalNotice;