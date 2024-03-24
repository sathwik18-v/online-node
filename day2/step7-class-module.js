class Hero{
    firstname = "default";
    lastname = 'default';
    version = `default`;
    constructor(fname,lname,nversion){
        this.firstname = fname;
        this.lastname = lname;
        this.version = nversion;
    }
    sayname(){
        return this.firstname+" "+this.lastname;
    };
};
module.exports = { Hero };