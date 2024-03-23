/* 
var obj = require("./step1");

console.log(obj.user.toUpperCase());
console.log(obj.company);
console.log(obj.version);
console.log(obj.hero.title); 
*/

var hero = require("./step1").hero;

console.log(hero.title, hero.city, hero.power);

console.log("File Name",__filename);
console.log("Directory Name",__dirname);