var EventEmitter = require("node:events").EventEmitter;
var ee = new EventEmitter();
function intellipaatEventHandler(){
    console.log("Intellipaat Event Happened");
};
ee.addListener("intellipaatEvent",intellipaatEventHandler);
console.log("log from line 7");
console.log("log from line 8");
console.log("log from line 9");
setTimeout(function(){ // async function
    ee.emit("intellipaatEvent");
    console.log("log from line 12");
},4000);
console.log("log from line 14");