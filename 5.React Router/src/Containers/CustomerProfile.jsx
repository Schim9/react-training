import {Link, Outlet, useLocation, useParams} from 'react-router-dom';

export default function CustomerProfile () {
  // useParams nous permet de récupérer les paramètres de la route
  // dans ce cas, nous récupérons l'id du client
  const {id} = useParams ();
  return (
    <div className="container">
      <h1>Bienvenue dans votre espace client, {id}</h1>

      <nav // text-center: pour centrer le texte // bg-light: pour définir un fond clair
      // p2: pour ajouter un padding de 2 unités
      className="p2 text-center bg-warning">
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
          to={`/espace-client/${id}/informations`}
        >
          Vos informations
        </Link>
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
          to={`/espace-client/${id}/commandes`}
        >
          Vos commandes
        </Link>
      </nav>
      {/* 
        Outlet est un composant de React Router qui permet de rendre le contenu d'une route imbriquée. 
        Il est utilisé pour afficher le contenu de la route enfant dans le composant parent.
      */}
      <Outlet />
    </div>
  );
}
