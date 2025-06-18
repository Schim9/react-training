// Permet la création de variables à partir d'un objet
let personnne = {
    nom: 'KAMINSKI',
    prenom: 'Eric',
    role: 'formateur'
    
}

// Permet la création de variables à partir d'un tableau
const monTableau = ["Microsoft", "Apple", "Samsung", "Sony"];

// Permet de créer des variables à partir d'un objet
// let {role, prenom, nom} = personnne;
// console.log(nom, prenom, role)

// Permet de créer des variables à partir d'un tableau
// let [microsoft, apple, samsung, sony] = monTableau
// console.log(microsoft, apple, samsung, sony)

// Si on utilise les noms identiques aux attributs de l'objet, l'ordre n'a pas d'importance
// let {nom, prenom, role} = personnne;
// let {role, prenom, nom} = personnne;
// console.log(nom, prenom, role)

// Si on utilise les valeurs d'un tableau, l'ordre est important
// let [sony, samsung, microsoft, apple] = monTableau
// console.log(microsoft, apple, samsung, sony)

// Pour donner un nom différent aux constantes
// let {role: mainRole, prenom: mainPrenom, nom: mainNom} = personnne;
// console.log(mainRole, mainPrenom, mainNom)

// On peut donner des valeurs par défaut (si la propriété n'est pas présente)
// let {role: mainRole, prenom: mainPrenom, nom: mainNom, region = "GrandEst"} = personnne;
// console.log(mainRole, mainPrenom, mainNom, region)


// Affecter les props d'un objet passé en paramètre
// let meteo = {
//     temperature: 20,
//     humidite: 45
// }

// // Cette fonction
// function displayMeteo(meteo) {
//     console.log(`Il fait ${meteo.temperature} degres avec un taux d'humidité de ${meteo.humidite}%`)
// }
// // peut devenir
// function displayMeteo({temperature, humidite}) {
//     console.log(`Il fait ${temperature} degres avec un taux d'humidité de ${humidite}%`)
// }

displayMeteo(meteo)