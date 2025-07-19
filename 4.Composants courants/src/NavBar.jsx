import {useState} from 'react';

export default function NavBar () {
  const [displayMenu, setDisplayMenu] = useState (false);

  return (
    <nav 
    // position-fixed: pour que le menu soit en position fixe en haut de la page
    // top-0: pour que le menu soit en haut de la page
    // w-100: pour que le menu prenne toute la largeur de la page
    // d-flex: pour que le menu soit en mode flex
    // justify-content-center: pour centrer le menu
    // p-4: pour ajouter un padding de 4 en haut et en bas de la page
    // bg-light: pour ajouter un fond clair au menu
    className="position-fixed top-0 w-100 d-flex justify-content-center p-4 bg-light">
     <ul
        // d-flex: pour afficher le menu en mode desktop et mobile si displayMenu est vrai
        // d-none: pour cacher le menu en mode mobile si displayMenu est faux
        // flex-column: pour que le menu soit en mode vertical en mode mobile
        // align-items-center: pour centrer le menu en mode mobile  
        // w-100: pour que le menu prenne toute la largeur en mode mobile
        // position-absolute: pour que le menu soit en position absolue en mode mobile
        // top-100: pour que le menu soit en bas de la page en mode mobile
        // pb-5: pour ajouter un padding en bas de la page en mode mobile
        // d-sm-flex: pour afficher le menu en mode desktop
        // position-sm-relative: pour que le menu soit en position relative en mode desktop
        // flex-sm-row: pour que le menu soit en mode horizontal en mode desktop
        // pb-sm-0: pour enlever le padding en bas de la page en mode desktop
        // justify-content-sm-center: pour centrer le menu en mode desktop

        // position-absolute n'est mis que si displayMenu est vrai car il crée un conflit avec position-relative
        className={`${
            displayMenu ? "d-flex position-absolute" : "d-none"
          } flex-column align-items-center w-100  top-100 pb-5 d-sm-flex position-sm-relative flex-sm-row pb-sm-0 justify-content-sm-center`}
      >
        {/* 
        // d-inline-block: pour que les éléments du menu soient en mode bloc
        // py-2: pour ajouter un padding en haut et en bas de la page
        // mx-4: pour ajouter un margin à gauche et à droite de la page
        // py-sm-0: pour enlever le padding en haut et en bas de la page en mode desktop
        */}
        <li className="d-inline-block py-2 mx-4 py-sm-0"><a href="#">Accueil</a></li>
        <li className="d-inline-block py-2 mx-4 py-sm-0"><a href="#">Produits</a></li>
        <li className="d-inline-block py-2 mx-4 py-sm-0"><a href="#">Commande</a></li>
        <li className="d-inline-block py-2 mx-4 py-sm-0"><a href="#">Contact</a></li>
      </ul>
      <button 
        // ms-auto: pour que le bouton soit à droite de la page
        // d-block: pour que le bouton soit en mode bloc
        // d-sm-none: pour que le bouton soit caché en mode desktop
        className="ms-auto d-block d-sm-none" 
        onClick={() => setDisplayMenu(!displayMenu)}>
            {displayMenu ? "Fermer" : "Ouvrir"}
        </button>
    </nav>
  );
}