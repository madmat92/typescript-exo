var Menu = (function () {
    //constructeur d'objet
    function Menu(liste_plats, nb_pages, day) {
        this.plats = liste_plats;
        this.pages = nb_pages;
        this.jour = day;
    }
    // methode
    Menu.prototype.list = function () {
        console.log("votre menu pour ojd, " + this.jour + " : ");
        for (var i = 0; i < this.plats.length; i++) {
            console.log(this.plats[i]);
        }
    };
    return Menu;
}());
// Instance de la class Menu
var menuLundi = new Menu(["Epinards", "Oeufs pochés", "Poisson panés"], 1, "Lundi");
var menuMardi = new Menu(["Cardon Bleu", "Haricots", "Purée"], 2, "Mardi");
var menuMercredi = new Menu(["Coquillettes", "Steak", "Tomates"], 1, "Mercredi");
menuLundi.list();
menuMardi.list();
menuMercredi.list();
console.log("Choix préféré : " + menuMardi.plats[0]);
