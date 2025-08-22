import { useContext } from 'react';
import { PanierContext } from '../Contexte/PanierProvider'

export default function Catalogue() {

  const { addInPanier } = useContext(PanierContext)

  const emojis = ['😀', '😂', '😍', '😎', '🤔', '💩'];
  return (
    <>
      <h1 className="text-center mb-4">Catalogue</h1>
      <div className="d-flex justify-content-center">
        <ul className="d-flex flex-wrap gap-4 list-unstyled justify-content-center">
          {emojis.map((emoji, index) => (
            <li
              key={index}
              className="bg-white rounded shadow-sm p-4 d-flex flex-column align-items-center"
              style={{ minWidth: '100px' }}
            >
              <span style={{ fontSize: '2.5rem' }}>{emoji}</span>
              <button
                className="btn btn-primary mt-3"
                onClick={() => addInPanier(emoji)}
              >
                Ajouter au panier
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}