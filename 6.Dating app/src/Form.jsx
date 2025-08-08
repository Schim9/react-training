import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Form() {
    // On utilise le hook useState pour gérer l'état du formulaire
    const [form, setForm] = useState({
        prenom: '',
        sexe: '',
        taille: '',
        cheveux: '',
        recherche: ''
    });

    function handleChange(e) {
        // On récupère les infos de l'input
        const { name, value } = e.target;
        // On met à jour l'état du formulaire
        setForm(f => ({ ...f, [name]: value }));
    }

    return (
        <form className="p-4 rounded border bg-light" style={{ maxWidth: 600, margin: '0 auto' }}>
            <div className="mb-3">
                <label htmlFor="prenom" className="form-label">Votre prénom</label>
                <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    className="form-control"
                    value={form.prenom}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Vous êtes</label>
                <div>
                    <input
                        type="radio"
                        id="homme"
                        name="sexe"
                        value="homme"
                        checked={form.sexe === 'homme'}
                        onChange={handleChange}
                        className="form-check-input"
                    />
                    <label htmlFor="homme" className="form-check-label ms-2 me-3">Un homme</label>
                    <input
                        type="radio"
                        id="femme"
                        name="sexe"
                        value="femme"
                        checked={form.sexe === 'femme'}
                        onChange={handleChange}
                        className="form-check-input"
                    />
                    <label htmlFor="femme" className="form-check-label ms-2 me-3">Une femme</label>
                    <input
                        type="radio"
                        id="indefini"
                        name="sexe"
                        value="indefini"
                        checked={form.sexe === 'indefini'}
                        onChange={handleChange}
                        className="form-check-input"
                    />
                    <label htmlFor="indefini" className="form-check-label ms-2">Indéfini</label>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="taille" className="form-label">Votre taille (en cm)</label>
                <input
                    type="number"
                    id="taille"
                    name="taille"
                    className="form-control"
                    value={form.taille}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="cheveux" className="form-label">Couleur de vos cheveux</label>
                <select
                    id="cheveux"
                    name="cheveux"
                    className="form-select"
                    value={form.cheveux}
                    onChange={handleChange}
                >
                    <option value="">Sélectionnez</option>
                    <option value="blond">Blond</option>
                    <option value="brun">Brun</option>
                    <option value="roux">Roux</option>
                    <option value="noir">Noir</option>
                    <option value="chauve">Look épuré</option>
                    <option value="autre">Autre</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Vous recherchez</label>
                <div>
                    <input
                        type="radio"
                        id="recherche-homme"
                        name="recherche"
                        value="male"
                        checked={form.recherche === 'homme'}
                        onChange={handleChange}
                        className="form-check-input"
                    />
                    <label htmlFor="recherche-homme" className="form-check-label ms-2 me-3">Un homme</label>
                    <input
                        type="radio"
                        id="recherche-femme"
                        name="recherche"
                        value="female"
                        checked={form.recherche === 'femme'}
                        onChange={handleChange}
                        className="form-check-input"
                    />
                    <label htmlFor="recherche-femme" className="form-check-label ms-2 me-3">Une femme</label>
                    <input
                        type="radio"
                        id="recherche-indefini"
                        name="recherche"
                        value="indefini"
                        checked={form.recherche === 'indefini'}
                        onChange={handleChange}
                        className="form-check-input"
                    />
                    <label htmlFor="recherche-indefini" className="form-check-label ms-2">Peu importe</label>
                </div>  
            </div>
            {/* 
                On utilise un Link pour envoyer les données du formulaire via un state 
                On perd la validation mais on passe le state à la page de soumission
            */}
            <Link
                to="/submit"
                state={form}
                className="btn btn-primary"
                style={{ display: 'block', textAlign: 'center' }}
            >
                Valider
            </Link>
        </form>
    )
}