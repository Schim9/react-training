import { useContext } from 'react';
import { PanierContext } from '../Contexte/PanierProvider';

export default function Panier() {
  const { panier, deleteFromPanier } = useContext(PanierContext);

  return (
    <>
      <h1 className="text-center mb-4">Panier</h1>
      <ul className="d-flex flex-wrap gap-4 list-unstyled justify-content-center">
        {panier && panier.map((emoji, index) => (
          <li
            key={index}
            className="bg-white rounded shadow-sm p-4 d-flex flex-column align-items-center"
            style={{ minWidth: '100px' }}
          >
            <span style={{ fontSize: '2.5rem' }}>{emoji.value}</span>
            <button
              className="btn btn-danger mt-3"
              onClick={() => deleteFromPanier(emoji)}
            >
              Retirer du panier
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}