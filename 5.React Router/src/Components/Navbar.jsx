import {Link} from 'react-router-dom';

export default function Navbar () {
  return (
    <nav 
        // bg-light: pour définir un fond clair
        // text-center: pour centrer le texte
        // p2: pour ajouter un padding de 2 unités
        className="p2 text-center bg-light"
    >
      {/* 
        // mx-2: pour ajouter une marge horizontale de 2 unités
        // fs-4: pour définir la taille de la police à 4 unités
        // fw-bolder: pour rendre le texte plus gras
        // text-secondary: pour définir la couleur du texte en gris
        // text-decoration: none: pour enlever le soulignement du texte
         */}
      <Link
        className="mx-2 fs-4 fw-bolder text-secondary"
        style={{textDecoration: 'none'}}
        to="/"
      >
        Home
      </Link>
      <Link
        state={{from: 'navbar'}}
        className="mx-2 fs-4 fw-bolder text-secondary"
        style={{textDecoration: 'none'}}
        to="/webshop"
      >
        Webshop
      </Link>
      <Link
        className="mx-2 fs-4 fw-bolder text-secondary"
        style={{textDecoration: 'none'}}
        to="/espace-client/1"
      >
        Espace client
      </Link>
    </nav>
  );
}
