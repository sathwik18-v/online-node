var fetch = require("fetch");
var fs = require("node:fs");

// fetch.fetchUrl("https://www.whiskyrasam.com/index.html")
fetch.fetchUrl("https://www.whiskyrasam.com/index.html",null,function(err,meta,data){
    // console.log(data.toString());
    fs.writeFileSync("wr.html",data,"utf8");
})