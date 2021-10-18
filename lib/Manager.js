const Employee = require("./Employee");

class Manager extends Employee {  //class that instantiates info for this role
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
    getRole() {
        return `Manager`;
    }
}


module.exports = Manager;
