import React, {useState} from 'react';
import ListElement from './ListElement';
import {nanoid} from 'nanoid'; // Importation de nanoid pour générer des IDs uniques

// Penser à ajouter Bootstrap dans index.html
// Ajouter nanoid au package.json

export default function Container () {
  const [courseList, setCourseList] = useState ([]);
  const [inputValue, setInputValue] = useState ('');
  const [displayError, setDisplayError] = useState ();

  function handleAddElement (event) {
    event.preventDefault (); // Empêche le rechargement de la page
    if (inputValue.trim () !== '') {
      const id = nanoid (); // Génère un ID unique
      // Vérifie que l'input n'est pas vide
      const newElement = {id: id, elementName: inputValue}; // Crée un nouvel élément
      setCourseList ([...courseList, newElement]); // Ajoute l'élément à la liste
      setInputValue (''); // Réinitialise l'input
      setDisplayError (null);
    } else {
      setDisplayError ('Veuillez entrer un élément valide');
    }
  }

  function handleDeleteElement (index) {
    const newList = [...courseList]; // Crée une copie de la liste actuelle
    newList.splice (index, 1); // Supprime l'élément à l'index donné
    setCourseList (newList); // Met à jour la liste
    if (newList.length === 0) {
      setDisplayError ('Votre liste est vide');
    }
  }

  return (
    <div>
      <h1>Ma liste de course</h1>
      <form onSubmit={handleAddElement}>
        <div className="d-flex align-items-center mb-3">
          <p className="mb-0 me-2">Ajouter l'élément</p>
          <input
           className="me-3"
            type="text"
            value={inputValue}
            placeholder="Ajouter un élément"
            onChange={e => setInputValue (e.target.value)}
          />
          <button type="submit" className="btn btn-primary  rounded-pill">
            +
          </button>
        </div>
      </form>
      {displayError && <p className="text-danger">{displayError}</p>}
      {courseList.map (element => (
        <ListElement
          key={element.id}
          elementName={element.elementName}
          onTriggerRemove={() => handleDeleteElement (element.id)}
        />
      ))}

    </div>
  );
}
