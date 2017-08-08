
// interface
interface Food {
    plat: string;
    calories: number;
}

//fonction appel l'interface food
function speak (food: Food): void {
    console.log("Le plat : " + food.plat + " à " + food.calories + " calories.");
}


var fondue = {
    plat: "Fondue",
    calories : 55
}

speak(fondue);