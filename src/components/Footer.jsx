const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Section Informations sur l'entreprise */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Accessoires Informatique</h3>
            <p className="text-gray-400 mb-4">
              Spécialistes dans la vente d'accessoires informatiques de qualité, nous vous offrons une large gamme de produits adaptés à tous vos besoins.
            </p>
            <p className="text-gray-400">© {new Date().getFullYear()} Accessoires Informatique. Tous droits réservés.</p>
          </div>

          {/* Section Liens rapides */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">À propos de nous</a>
              </li>
              <li>
                <a href="/shop" className="text-gray-400 hover:text-white">Nos produits</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">Contactez-nous</a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Section Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Abonnez-vous à notre newsletter</h3>
            <p className="text-gray-400 mb-4">Recevez les dernières nouveautés et offres directement dans votre boîte de réception.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                S'abonner
              </button>
            </form>
          </div>

          {/* Section Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
