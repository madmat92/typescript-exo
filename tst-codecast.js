// #exemple de functions :
// rest operateur (...), 
// arguments en options avec "?"
// Iteration des parametres de function avec l'objet arguments[n]
function hi(nomDeFamille, age) {
    var prenoms = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        prenoms[_i - 2] = arguments[_i];
    }
    var sortie = "Salut : " + nomDeFamille + " " + prenoms.join(' ');
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
var recetteMercredi = {
    day: "Mercredi",
    ingredient1: "Coquillettes",
    qty: 1
};
//console.log(newRecette(recetteLundi));
//console.log(recetteMercredi);
// #tuto classes
var Bolognese = (function () {
    function Bolognese(el1) {
        this.ing1 = el1;
    }
    Bolognese.prototype.speak = function (prn) {
        return "Hi " + prn;
    };
    return Bolognese;
}());
var bol1 = new Bolognese("Tomates");
var bol2 = new Bolognese("Huile");
//console.log(bol1.speak("Mathieu"));
console.log(bol1.ing1);
console.log(bol2.ing1);
