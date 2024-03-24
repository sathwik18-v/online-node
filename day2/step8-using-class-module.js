var Hero = require("./step7-class-module").Hero;

var hero1 = new Hero("Bruce","Wayne",101);
var hero2 = new Hero("Clark","Kent",201);

console.log(hero1.firstname);
console.log(hero1.lastname);
console.log(hero1.version);
console.log(hero1.sayname());

console.log("==========================");

console.log(hero2.firstname);
console.log(hero2.lastname);
console.log(hero2.version);
console.log(hero2.sayname());