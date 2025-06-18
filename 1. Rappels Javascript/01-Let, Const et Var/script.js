// 1. Scope
// let et const sont block scoped
// var est function scroped

// if (true) {
//     let testScope = "Une variable dans un scope précis"
// }
// console.log(testScope)
    

// function maFonction() {
//     var testInFunction = "une variable dans une fonction"
// }
// console.log(testInFunction)


// 2. Const ne peut pas être vide
//  let testVide
//  console.log(testVide)

// 3. Var peut être redéclaré
// let et const ne peuvent pas être redéclarés
// let testOverride = "anyVal"
// let testOverride = "overridedVal"
// console.log(testOverride)


// 4. Chargement en mémoire
// var est hoisted (mise en mémoire) et peut être utilisé avant
// déclaration (la variable sera juste initialisée à  undefined)
// let et const ne seront pas initialisées
// console.log(testHoisted)
// let testHoisted = "test init"

