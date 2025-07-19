export default function Password({data, setData, errors}) {
  return (
     <>
        <label 
          htmlFor="password"
          // inline-block: pour afficher le label sur une ligne
          // text-white: pour changer la couleur du texte en blanc
          className="inline-block text-white"
        >
          Votre mot de passe (minimum 1 chiffre et 5 lettres)
        </label>
        <input 
            type="password"
            id="password" 
            name="password"
            value={data.password}
            onChange={(event) => setData({...data, password: event.target.value})}
            // rounded: pour arrondir les coins
            // w-full: pour une largeur de 100%
            // p-1: pour un padding de 1 unité
            className="rounded w-full p-1"
        />   
        {errors.password && <p className="text-danger">Le mot de passe doit faire au moins 6 caractères et contenir au moins 1 chiffre et 1 lettre</p>}
    </>
  )
}