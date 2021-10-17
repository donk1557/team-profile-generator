const employee = require("./Employee");

class Engineer extends employee {
    constructor(name, id, email, githubUsername) {
      super(name, id, email);
      this.github = githubUsername;
    }
    getGithub() {
        console.log(`GitHub: ${this.github}`); 
    }
    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;