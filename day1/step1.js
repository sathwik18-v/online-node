var user = "Vijay";

var company = "Intellipaat";

var version = 1001;

var hero = {
    title : "Batman",
    power : 7,
    city : "Gotham"
};

// commonjs
/* 
module.exports.user = user;
module.exports.company = company;
module.exports.version = version;
module.exports.hero = hero; 
*/

/*
module.exports = {
    user : user,
    company : company,
    version : version,
    hero : hero
}
*/

module.exports = { user, company, version, hero };


/* 
for(var i = 0; i < 10; i++){
    console.log(user);
}; 
*/