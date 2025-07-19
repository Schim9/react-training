import {useState} from 'react';

import Pseudo from './Pseudo';
import Password from './Password';
import PasswordConfirmation from './PasswordConfirmation';

export default function Formulaire () {
  const [data, setData] = useState ({
    pseudo: '',
    password: '',
    passwordConfirmation: '',
  });

  const [errors, setErrors] = useState ({
    pseudo: false,
    password: false,
    passwordConfirmation: false,
  });

  function validationCheck () {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
    const isValid = {
      pseudo: data.pseudo.length >= 3,
      password: data.password.length >= 6 && passwordRegex.test (data.password),
      passwordConfirmation: data.passwordConfirmation === data.password
    };
    console.log (isValid);  
    setErrors (state => ({
      pseudo: !isValid.pseudo,
      password: !isValid.password,
      passwordConfirmation: !isValid.passwordConfirmation,
    }));

    return Object.values (isValid).every (value =>value)
  }

  function handleSubmit (event) {
    // On empêche le rechargement de la page
    event.preventDefault ();
    if (validationCheck ()) {
      // On affiche un message dans la console
      console.log ('Formulaire valide !');
    }
  }

  return (
    <form
      // mx-auto: pour centrer horizontalement
      // rounded: pour arrondir les coins
      // border: pour ajouter une bordure
      // border-white: pour une couleur de bordure blanche
      // border-2: pour une bordure de 2 unités
      // container: pour centrer le contenu
      // d-flex: pour utiliser le flexbox
      // flex-column: pour aligner les éléments en colonne
      // gap-3: pour ajouter un espacement entre les éléments
      className="mx-auto rounded border border-white border-2 container d-flex flex-column gap-3"
      // On ajoute une balise style car bootstrap ne permet pas de le faire directement
      // maxWidth: pour limiter la largeur à 60rem
      // minHeight: pour limiter la hauteur à 250px
      style={{
        maxWidth: '60rem',
        minHeight: '250px',
      }}
      onSubmit={handleSubmit}
    >

      <p className="mb-6" style={{color: '#f1f5f9', fontSize: '1.25rem'}}>
        Création de votre compte client
      </p>

      <Pseudo data={data} setData={setData} errors={errors} />
      <Password data={data} setData={setData} errors={errors} />
      <PasswordConfirmation data={data} setData={setData} errors={errors} />
      <button // mt-10: pour ajouter une marge en haut de 10 unités
      // px-4: pour ajouter un padding horizontal de 4 unités
      // py-2: pour ajouter un padding vertical de 2 unités
      // rounded: pour arrondir les coins
      // mb-2: pour ajouter une marge en bas de 2 unités
      className="mt-10 px-4 py-2 rounded mb-2">
        Valider
      </button>

    </form>
  );
}
