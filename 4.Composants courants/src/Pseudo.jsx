export default function Pseudo({data, setData, errors}) {
  return (
     <>
        <label 
            htmlFor="pseudo"
            // inline-block: pour afficher le label sur une ligne
            // text-white: pour changer la couleur du texte en blanc
            className="inline-block text-white">
            Votre pseudo (minimum 3 caractères)
        </label>
        <input 
            type="text"
            id="pseudo" 
            name="pseudo"
            value={data.pseudo}
            onChange={(event) => setData({...data, pseudo: event.target.value})}
            // rounded: pour arrondir les coins
            // w-full: pour une largeur de 100%
            // p-1: pour un padding de 1 unité
            className="rounded w-full p-1"
        />   
        {errors.pseudo && <p className="text-danger">Le pseudo doit faire au moins 3 caractères</p>}
    </>
  )
}