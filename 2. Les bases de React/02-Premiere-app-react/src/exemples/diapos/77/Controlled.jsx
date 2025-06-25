import {useRef, useState} from 'react';

export default function Controlled () {
  const [state, setState] = useState ('');
  return (
    <div>
      <h1>Inputs contrôlés</h1>
      <form>
        <label htmlFor="name">Nom</label>
        <input 
          type="text" id="name" value={state} 
          onChange={(e) => setState(e.target.value)}  // Met à jour l'état avec la valeur de l'input
        />
        <button type="submit">Envoyer</button>
      </form>
      <p>Votre saisie: {state}</p>
    </div>
  );
}

