var EventEmitter = require("node:events").EventEmitter;
var ee = new EventEmitter();
function intellipaatEventHandler(){
    console.log("Intellipaat Event Happened");
};
ee.addListener("intellipaatEvent",intellipaatEventHandler);
ee.emit("intellipaatEvent");