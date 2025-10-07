const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-arkeup-gray-800 via-african-violet-900 to-blue-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <img 
                src="/arkeup blanc.webp" 
                alt="Arkeup Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-arkeup-gray-300 mb-4">
              Arkeup est une ESN spécialisée en intelligence artificielle, accompagnant les entreprises dans leur transformation numérique.
            </p>
            <div className="flex space-x-4">
              <a href="https://fr.linkedin.com/company/arkeup" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir la page LinkedIn d'Arkeup dans un nouvel onglet" className="text-arkeup-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.17 20.42H3.58V9.01h3.59v11.41zm-1.8-12.96c-1.15 0-2.07-.93-2.07-2.07 0-1.14.92-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.07-2.07 2.07zm16.06 12.96h-3.58v-5.55c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.97v5.64H9.25V9.01h3.44v1.57h.05c.48-.91 1.65-1.87 3.4-1.87 3.64 0 4.31 2.39 4.31 5.5v6.21z"/>
                </svg>
              </a>

            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="/use-cases" className="text-arkeup-gray-300 hover:bg-gradient-to-r hover:from-african-violet hover:to-blue-green hover:bg-clip-text hover:text-transparent transition-all duration-300 transform hover:translate-x-1">Études de cas</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-african-violet mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-arkeup-gray-300">5 B RUE BERANGER, 75003 PARIS</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-green mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-arkeup-gray-300">michael@arkeup.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-african-violet mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-arkeup-gray-300">+33 7 55 50 66 93</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-arkeup-gray-700 pt-8 text-center">
          <p className="text-arkeup-gray-400 mb-4">
            <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
          </p>
          <p className="text-arkeup-gray-400">
            © 2025 Arkeup. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;