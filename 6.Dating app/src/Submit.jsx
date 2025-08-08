import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Submit() {
    // On utilise le hook useLocation pour récupérer les données passées via le state
    const data = useLocation();
    const formData = data.state;
    console.log(formData);

    // On utilise le hook useState pour gérer l'état de l'API
    const [APIState, setAPIState] = useState({
        loading: true,
        data: null,
        error: null,
    });


    // On utilise le hook useEffect pour appeler l'API au premier rendu du composant
    // On utilise le tableau vide [] pour ne pas relancer l'effet à chaque rendu
    useEffect(() => {

        setAPIState({ ...APIState, loading: true });
        fetch(`https://randomuser.me/api/?gender=${formData.recherche}&results=6`)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                // Si l'API renvoie une erreur, on lève une exception
                // Le catch n'est pas suffisant dans le cas d'une erreur 404 par exemple
                if (data.error) {
                    throw new Error();
                }
                console.log("Réponse de l'API", data);
                setAPIState({
                    ...APIState,
                    loading: false,
                    error: false,
                    data: data
                });
            })
            .catch(err => {
                console.log('booouuh', err);
                setAPIState({
                    ...APIState,
                    loading: false,
                    error: true,
                    data: null
                });
            });
    }, []);
    return (
        <>
        <h2 className="text-center mb-4">{formData.prenom}, ces profils recherchent une personne comme vous</h2>
            {APIState.loading && <p>Chargement...</p>}
            {APIState.error && <p>Erreur lors de la récupération des données</p>}
            {APIState.data && (
                <ul className="d-flex flex-wrap gap-4 list-unstyled justify-content-center">
                    {APIState.data.results.map(user => (
                        <li
                            key={user.login.uuid}
                            className="d-flex flex-column align-items-center bg-white rounded shadow-sm p-3"
                            style={{ minWidth: 120 }}
                        >
                            <img src={user.picture.medium} alt={user.name.first} className="mb-2 rounded-circle" />
                            <span className="fw-bold">{user.name.first}</span>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}