class Menu {
    plats: Array<string>;
    pages: number;
    //ingredients: true;
    
    //constructeur d'objet
    constructor(liste_plats: Array<string>, nb_pages: number) {
        this.plats = liste_plats;
        this.pages = nb_pages;
    }

    // methode
    list(): void {
        console.log("votre menu pour ojd : ");
        for(var i = 0; i < this.plats.length; i++) {
            console.log(this.plats[i]);
        }
    }
}

// Instance de la class Menu
var menuLundi = new Menu(["Epinaards", "Oeufs pochés", "Poisson panés"], 1);

menuLundi.list();