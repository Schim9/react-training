// Dans cet exemple, nous allons créer un composant qui affiche une liste d'éléments 
// en utilisant un autre composant.

import Element from "./Element";

function ListElement() {
    return (
        <div>
            <Element />
            <Element />
            <Element />
            <Element />
        </div>
    );
}

export default ListElement;