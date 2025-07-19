import {useState, useEffect} from 'react';

export default function Container () {
  const [count, setCount] = useState (0);

  // Description d'un potentiel bug : Lorsque le composant est démonté, l'intervalle continue de s'exécuter.
  // Cela peut entraîner des fuites de mémoire et des comportements inattendus.
  setInterval (() => {
    setCount (count + 1);
  }, 1000);

  // Solution: Utiliser useEffect pour gérer le cycle de vie de l'intervalle.
   useEffect(() => {
     const interval = setInterval(() => {
        // Utilisation de la fonction de mise à jour de l'état pour s'assurer que nous avons la valeur la plus récente.
       // setCount(count + 1);
       setCount((prevCount) => prevCount + 1);
     }, 1000);  

     return () => {
      // Nettoyage de l'intervalle lorsque le composant est démonté.
       clearInterval(interval); 
     }; 
    },
    // Le tableau vide [] signifie que l'effet ne s'exécute qu'une seule fois, lors du premier rendu du composant.
  []); 

  return (
    <div>
      <p>Compteur : {count}</p> 
    </div>
  );
}
