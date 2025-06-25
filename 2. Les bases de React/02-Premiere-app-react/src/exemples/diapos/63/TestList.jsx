// Dans cet exemple, nous allons créer un composant qui affiche une liste d'éléments
// en utilisant un tableau d'objets pour générer dynamiquement les éléments.

import Element from "./Element"

export default function TestList() {
    const personnes = [
        { id: 0, nom: "aaa", age: 40 },
        { id: 1, nom: "bbb", age: 50 },
        { id: 2, nom: "ccc", age: 32 },
        { id: 3, nom: "ddd", age: 20 },
    ]
    return (
        <div>
            {personnes.map(personne => {
                return (
                    <Element
                        // la propriété key est obligatoire pour React, elle différencie chaque élément dans le DOM
                        key={personne.id}
                        numero={personne.id}
                        nom={personne.nom}>
                    </Element>
                )
            })}
        </div>
    )
}