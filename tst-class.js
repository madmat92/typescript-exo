var Menu = (function () {
    //ingredients: true;
    //constructeur d'objet
    function Menu(liste_plats, nb_pages) {
        this.plats = liste_plats;
        this.pages = nb_pages;
    }
    // methode
    Menu.prototype.list = function () {
        console.log("votre menu pour ojd : ");
        for (var i = 0; i < this.plats.length; i++) {
            console.log(this.plats[i]);
        }
    };
    return Menu;
}());
// Instance de la class Menu
var menuLundi = new Menu(["Epinaards", "Oeufs pochés", "Poisson panés"], 1);
menuLundi.list();
