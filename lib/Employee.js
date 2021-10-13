class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(name) {
        console.log(`${this.name}`);
    }
    getId(id) {
        console.log(`ID: ${this.id}`);
    }
    getEmail(email) {
        console.log(`Email: ${this.email}`); 
    }
    getRole() {
        return `Employee`;
    }
}

module.exports = Employee;