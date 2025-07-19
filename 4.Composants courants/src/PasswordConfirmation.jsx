export default function PasswordConfirmation({data, setData, errors}) {
  return (
     <>
        <label 
          htmlFor="passwordConfirmation"
          // inline-block: pour afficher le label sur une ligne
          // text-white: pour changer la couleur du texte en blanc
          className="inline-block text-white"
        >
          Confirmer votre mot de passe
        </label>
        <input 
            type="password"
            id="passwordConfirmation" 
            name="passwordConfirmation"
            value={data.passwordConfirmation}
            onChange={(event) => setData({...data, passwordConfirmation: event.target.value})}
            // rounded: pour arrondir les coins
            // w-full: pour une largeur de 100%
            // p-1: pour un padding de 1 unité
            className="rounded w-full p-1"
        />   
        {errors.passwordConfirmation && <p className="text-danger">Les mots de passe ne correspondent pas</p>}
    </>
  )
}