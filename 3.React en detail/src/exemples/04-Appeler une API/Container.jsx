import {useState, useEffect} from 'react';

export default function Container () {
  const [APIState, setAPIState] = useState ({
    loading: true,
    data: null,
    error: null,
  });

  // On utilise le hook useEffect pour appeler l'API au premier rendu du composant
  // On utilise le tableau vide [] pour ne pas relancer l'effet à chaque rendu
  useEffect (() => {
    setAPIState ({...APIState, loading: true});
    fetch ('https://jsonplaceholder.typicode.com/users')
      .then (response => {
        console.log (response);
        return response.json ();
      })
      .then (data => {
        // Si l'API renvoie une erreur, on lève une exception
        // Le catch n'est pas suffisant dans le cas d'une erreur 404 par exemple
        if (data.error) {
          throw new Error ();
        }
        console.log ("Réponse de l'API", data);
        setAPIState ({
          ...APIState, 
          loading: false,
          error: false,
          data: data
          });
      })
      .catch (err => {
        console.log ('booouuh', err);
        setAPIState ({
          ...APIState,
          loading: false, 
          error: true, 
          data: null
        });
      });
  }, []);

  let content = null;
  if (!!APIState.loading) {
    content = <p>Chargement...</p>;
  } else if (!!APIState.error) {
    content = <p>Erreur lors de la récupération des données</p>;
  } else {
    content = (
      <ul>
        {/* On vérifie que data est un tableau avant de le parcourir */}
        {Array.isArray(APIState.data) && APIState.data.map (user => <li key={user.id}>{user.name}</li>)}
      </ul>
    );
  }
  return (
    <div>
      <h1>Appel d'une API</h1>
      {content}
    </div>
  );
}
