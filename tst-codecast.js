// #exemple de functions :
// rest operateur (...), 
// arguments en options avec "?"
// Iteration des parametres de function avec l'objet arguments[n]
function hi(nomDeFamille, age) {
    var prenom = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        prenom[_i - 2] = arguments[_i];
    }
    var sortie = "Salut : " + nomDeFamille + " " + prenom.join(' ');
    if (age) {
        sortie += " tu as " + age;
    }
    // console.log(arguments[1]);
    return sortie;
}
function newRecette(recetteJour) {
    var speak = "recette du : " + recetteJour.day + " : " + recetteJour.ingredient1 + " " + recetteJour.qty;
    if (recetteJour.ingredient2) {
        speak += " + Bonus : " + recetteJour.ingredient2;
    }
    return speak;
}
var recetteLundi = {
    day: "Lundi",
    ingredient1: "Pates",
    qty: 500
};
var recetteMardi = {
    day: "Mardi",
    ingredient1: "Riz",
    ingredient2: "Carottes",
    qty: 2
};
console.log(newRecette(recetteLundi));
