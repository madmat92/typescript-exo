function genericFun(arg) {
    var tabDeT = arg;
    return tabDeT;
}
// var tabDeString = genericFun<string>("beep");
// console.log(tabDeString[0]);
// var tabDeNum = genericFun(42);
// console.log(tabDeNum);
// var tabDeBool = genericFun(true);
// console.log(tabDeBool);
// var tabDeTst = genericFun(["itm 1", "itm 2", "itm 3"]);
// console.log(tabDeTst);
var tabTst = genericFun('tst');
console.log(tabTst);
console.log(typeof tabTst);
var tabTst2 = genericFun(20);
console.log(tabTst2);
console.log(typeof genericFun(20));
var tabTst3 = genericFun([20, "tst", true]);
console.log(tabTst3);
console.log(typeof genericFun([20, "tst", true]));
