const Employee = require("./Employee");
const Team = require("./lib/teamMaker");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
    getRole() {
        return `Manager`;
    }
}
const manager1 = new Manager();
 Team(manager1);
console.log(manager1);
