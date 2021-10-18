const employee = require("./Employee");

class Engineer extends employee {
    constructor(name, id, email, githubUsername) {
      super(name, id, email);
      this.github = githubUsername;
    }
    getGithub() {
        return `GitHub: <a href = "https://github.com/${this.github}">${this.github}</a>`; 
    }
    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;