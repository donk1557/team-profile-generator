const employee = require("./Employee");

class Intern extends employee {  //class that instantiates info for this role
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
    getSchool() {
        return `School: ${this.school}`; 
    }
    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;