import {useRef, useState} from 'react';

export default function UncontrolledWithState () {
  
  const [counter, setCounter] = useState(0);
  const pseudoRef = useRef ("");  
  function handleSubmit(e) {
    // Arrête la propagation de l'événement et empêche le rechargement de la page
    e.preventDefault(); 
    console.log(pseudoRef.current.value);
  }
  return (
    <div>
      <h1>Inputs non contrôlés</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" ref={pseudoRef} />
        <button type="submit">Envoyer</button>
        
      </form>
      {/* Le changement de pseudoRef ne raffraichit pas le DOM */}
      <p>Votre saisie: {pseudoRef.current.value}</p>
      {/* On force le refresh du state pour voir apparaitre la valeur de l'input */}
      <button onClick={() => setCounter(counter + 1)}>Refresh State</button>
    </div>
  );
}


