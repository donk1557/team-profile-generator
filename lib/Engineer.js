const employee = require("./Employee");

class Engineer extends employee { //class that instantiates info for this role
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