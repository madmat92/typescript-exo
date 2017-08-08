//fonction appel l'interface food
function speak(food) {
    console.log("Le plat : " + food.plat + " à " + food.calories + " calories.");
}
var fondue = {
    plat: "Fondue",
    calories: 55
};
speak(fondue);
