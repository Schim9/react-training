import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { PanierContext } from '../Contexte/PanierProvider'

export default function HomePage() {
  const { cleanPanier } = useContext(PanierContext)
  return (
    <div className="container bg-light rounded shadow p-5 mt-5">
      <h1 className="text-center mb-4">Bienvenue dans notre magasin d'émojis</h1>
      <p className="text-center mb-4">Vous pouvez naviguer entre le catalogue et votre panier</p>
      <div className="d-flex justify-content-center gap-3 mb-4">
        <Link to="/catalogue" className="btn btn-primary">Catalogue</Link>
        <Link to="/panier" className="btn btn-success">Panier</Link>
        <button onClick={() => cleanPanier()} className="btn btn-danger">
          Vider le panier
        </button>
      </div>
      <div className="bg-white rounded p-4 shadow-sm">
        <Outlet />
      </div>
    </div>
  )
}