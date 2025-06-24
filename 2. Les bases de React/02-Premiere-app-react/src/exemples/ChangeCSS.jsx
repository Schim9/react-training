import {useState} from 'react'

export default function Container() {
  // Booléen à modifier pour changer la couleur du texte
  let isRed = true;
  // Texte à afficher, en minuscules
  let titleLowerCase = "titre en petit";
  // Utilisation de useState pour gérer l'état du compteur et de l'objet
  const [count, setCount] = useState(0)

  const [monObjet, setMonObjet] = useState({
    nom: 'test',
    prenom: 'test2'
  })
  function doSomething() {
    console.log('on incrément le compteur')
    setCount(count+1)
  }

  console.log('notre count', count)
  console.log('notre objet', monObjet)

  return (
    <div>
      <p className={`${isRed ? 'text-danger' : 'text-success'}`}>
        {titleLowerCase.toUpperCase()}
      </p>+++

      <button className='btn' onClick={doSomething}> Changer le label </button>
    </div>
  );
}
