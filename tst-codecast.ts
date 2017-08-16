// #exemple de functions :
// rest operateur (...), 
// arguments en options avec "?"
// Iteration des parametres de function avec l'objet arguments[n]

function hi(nomDeFamille: string, age?: number, ...prenoms: string[]): string {
    let sortie = "Salut : " + nomDeFamille + " " + prenoms.join(' ');
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

var recetteMercredi: Recette = {
    day: "Mercredi",
    ingredient1: "Coquillettes", 
    qty: 1
}

//console.log(newRecette(recetteLundi));
//console.log(recetteMercredi);

// #tuto classes

class Bolognese {
    ing1: string;
    ing2?: string;
    calo: number;
    
    constructor(el1: string) {
        this.ing1 = el1;
    }

    speak(prn:string):any {
        return "Hi " + prn;
    }
}

var bol1 = new Bolognese("Tomates");
var bol2 = new Bolognese("Huile");

//console.log(bol1.speak("Mathieu"));
console.log(bol1.ing1);
console.log(bol2.ing1);