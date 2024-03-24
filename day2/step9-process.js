var user = process.argv[2];
var company = process.argv[3];
// console.log(process.argv);
console.log(user," is from ",company);
// log the process id on your taskmanager
console.log(process.pid);
setTimeout(function(){
    console.log("timer done");
},25000);
console.log("task done");