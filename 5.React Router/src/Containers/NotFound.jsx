import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>La ressource n'existe pas</h1>
      <p>Vous pouvez retourner à la page d'accueil</p>
      <Link to="/">Page d'accueil</Link>
    </div>
  )
}

