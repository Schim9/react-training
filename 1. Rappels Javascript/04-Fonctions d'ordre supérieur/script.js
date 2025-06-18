// Exemple d'une fonction filter qui prend un tableau et une fonction de callback
// et retourne un nouveau tableau filtré selon la condition définie dans la fonction de callback
function filter(tableau, callback) {
    const filterArray = []
    for(let i=0; i< tableau.length; i++) {
        if (callback(tableau[i])) {
            filterArray.push(tableau[i])
        }
    }
    return filterArray
}

const salaries = [1000, 1200, 500, 279, 7000]
// On peut vouloir les salaires supérieurs à 1000€
console.log("Supérieurs à 1000:" + filter(salaries, (salaire => salaire > 1000)))
// On peut vouloir les salaires inféreur à 800
console.log("Inférieurs à 800:" + filter(salaries, (salaire => salaire < 800)))

// On pourrait mettre passer un autre type de tableau sans devoir changer la méthode filter
const eleves = [
    {nom: "Eric", pays: "France"},
    {nom: "Sebastian", pays: "Luxembourg"},
    {nom: "Bastien", pays: "Belgique"},
]
// Résidents français
console.log(filter(eleves, (eleve => eleve.pays == "France")))
// Résidents belges
console.log(filter(eleves, (eleve => eleve.pays == "Belgique")))