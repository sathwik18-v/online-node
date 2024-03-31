var fs = require("node:fs");
// synchronous
// fs.writeFileSync("temp.txt","Welcome to your life",{ encoding : "utf-8" });
// console.log(typeof fs.readFileSync("temp.txt"));
// console.log(typeof fs.readFileSync("temp.txt","utf-8"));
// console.log(typeof fs.readFileSync("temp.txt").toString());
// console.log(typeof (fs.readFileSync("temp.txt")+""));

// asynchronous
/* 
fs.writeFile("temp.txt","Welcome to your life",{ encoding : "utf-8" }, function(error){
    if(error){
        console.log("Error ", error);
    }else{
        console.log("file created");
    }
});
console.log("log from line 17"); 
*/

/* 
fs.readFile("temp.txt",{ encoding : "utf8"},function(err,data){
    if(err){ console.log("Error ", err) }
    else{ console.log(data) }
});
*/

// fs.writeFileSync("data/temp.txt","Welcome to your life",{ encoding : "utf-8", flag : "a" });

fs.mkdirSync("data");
process.chdir("data");
fs.writeFileSync("temp.txt","welcome to your life, there's no turning back","utf8");
console.log("file is ready");
console.log(__dirname);//?? 
console.log(process.cwd());//?? 