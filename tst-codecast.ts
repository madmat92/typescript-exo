// #exemple de functions :
// rest operateur (...), 
// arguments en options avec "?"
// Iteration des parametres de function avec l'objet arguments[n]

function hi(nomDeFamille: string, age?: number, ...prenom: string[]): string {
    let sortie = "Salut : " + nomDeFamille + " " + prenom.join(' ');
    if(age) {
        sortie += " tu as " + age;
    }
   // console.log(arguments[1]);
    return sortie;
}

//console.log(hi("Mat", 45, "Lorem", "Ipsum", "Dolor"));


// #exemple des interfaces
// création d'un obj préfixé d'"interface"
// interface est un nv type
// possibillité d'options avec "?"
// création de var de type de l'interface = {}

interface Recette {
    day: string,
    ingredient1: string,
    ingredient2?: string,
    qty: number
}

function newRecette(recetteJour: Recette) {
    var speak = "recette du : " + recetteJour.day + " : " + recetteJour.ingredient1 + " " + recetteJour.qty;
    if(recetteJour.ingredient2) {
        speak += " + Bonus : " + recetteJour.ingredient2;
    }
    return speak;
}

var recetteLundi : Recette = {
    day: "Lundi",
    ingredient1: "Pates",
    qty: 500
}

var recetteMardi: Recette = {
    day: "Mardi",
    ingredient1: "Riz", 
    ingredient2: "Carottes", 
    qty: 2
}

console.log(newRecette(recetteLundi));