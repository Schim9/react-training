// Dans cet exemple, nous allons créer un composant Parent qui gère un état et passe des 
// props à un composant enfant.
// Les props peuvent être des variables ou des fonctions

import { useState } from "react"
import Children from "./Children"

function Parent() {

    const [state, setState] = useState('Contenu de notre state');
    const id = 1234;
    function changeState(newState) {
        console.log('on change le state', newState)
        setState(newState)
    }

    return (
        <div>
            <p>State du parent {state}</p>
            <Children id={id} changeState={changeState} />
        </div>
    )
}
export default Parent