import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Container() {
  // On utilise le hook useLocation pour savoir si on est sur la page du formulaire
  const location = useLocation();
  // On vérifie si le chemin actuel est celui du formulaire pour masquer le bouton de redirection
  const isFormPage = location.pathname === '/formulaire';

  return (
    <div className="container bg-light rounded shadow p-5 mt-5">
      <h1 className="text-center mb-4 fw-bold text-primary">
        Bienvenue sur le meilleur site de rencontre du Grand Est
      </h1>
      {!isFormPage && <Link
        to="/formulaire"
        className="btn btn-lg btn-primary d-block mx-auto mb-4"
        style={{ maxWidth: 350 }}
      >Commencez votre recherche</Link>}
      <div className="bg-white rounded p-4 shadow-sm">
        <Outlet />
      </div>
    </div>
  )
}