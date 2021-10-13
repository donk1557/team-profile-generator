const employee = require("./Employee");

class Intern extends employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
    getSchool(school) {
        console.log(`GitHub: ${this.school}`); 
    }
    getRole() {
        return `Intern`;
    }
}