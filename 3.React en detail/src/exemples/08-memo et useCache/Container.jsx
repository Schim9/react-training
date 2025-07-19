import {useState, useCallback} from 'react';
import Card from './Card';
import MemoCard from './MemoCard';
import MemoCardWithFunction from './MemoCardWithFunction'

export default function Container () {
  // On utilise state pour forcer le rendering
  const [compteur, setCompteur] = useState (0);

  // Cette fonction n'est pas mémorisée, elle sera recréée à chaque rendu
  // Sa référence changera à chaque fois, et forcera donc le rendu du composant qui la reçoit en props
  function displayMessage() {
    console.log('Message informatif');
  }

  // Avec useCallback, on mémorise la fonction et on la garde en cache
  // La fonction ne sera recréée que si les dépendances changent
  const displayMessageEnCache = useCallback( () => console.log('Message informatif'), [])



  // Dans cet exemple:
  // Card sera rendu à chaque fois que le compteur change, car il n'est pas mémorisé
  // MemoCard sera rendu uniquement si le libellé change, car il est mémorisé
  // MemoCardWithFunction avec displayMessage sera rendu à chaque fois que le compteur change, car la fonction n'est pas mémorisée
  // MemoCardWithFunction avec displayMessageEnCache sera rendu uniquement si le libellé change, car la fonction est mémorisée
  return (
    <div>
      <Card libelle={'Voici ma carte'}> </Card>
      {/* <MemoCard libelle={'Voici ma memo card'}></MemoCard> */}
      {/* <MemoCardWithFunction 
        libelle={"Voici ma memo card with function"} 
        callback={displayMessage}
      ></MemoCardWithFunction> */}
      {/* <MemoCardWithFunction libelle={"Voici ma memo card with cached function"} callback={displayMessageEnCache}></MemoCardWithFunction> */}
      <p>Valeur du compteur {compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>Incrémenter Compteur</button>
    </div>
  );
}
