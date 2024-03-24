var os = require("node:os");

console.log("OS Architecture",os.arch());
console.log("OS CPUs ",os.cpus().length);
console.log("OS CPUs ",os.cpus()[0]);
console.log("OS Total Memory ",((os.totalmem()/1024)/1024)/1024);
console.log("OS Free Memory ",((os.freemem()/1024)/1024)/1024);
console.log("OS User Name ",os.userInfo().username);