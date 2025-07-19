import {useRef, useState} from 'react';
import {nanoid} from 'nanoid';

export default function DynamiqueRefs () {
  const petRefs = useRef ([]);

  const [pet, setPet] = useState ([
    {id: nanoid (5), espece: '😺'},
    {id: nanoid (5), espece: '🐶'},
    {id: nanoid (5), espece: '🐢'},
    {id: nanoid (5), espece: '🐍'},
    {id: nanoid (5), espece: '🐦'},
  ]);

  function addPetRefs (el) {
      if (el) {
        // On ajoute l'élément à la liste des refs
        petRefs.current.push (el);
      } else {
        // On retire l'élément de la liste des refs
        petRefs.current.shift();
      }
    console.log (petRefs.current);
  }

  return (
    <div>
      <ul>
        {pet.map (animal => (
          <li key={animal.id}>
            <p
              ref={addPetRefs}
              onClick={() => setPet (pet.filter (element => element.id !== animal.id))}
            >
              {animal.espece}
            </p>
          </li>
        ))}
      </ul>

      <button onClick={() => setPet([...pet, {id: nanoid (5), espece: '🕷️'}])}>Add Pet</button>
    </div>
  );
}
