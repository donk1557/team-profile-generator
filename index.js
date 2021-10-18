const inquire = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = require('./lib/teamMaker');
const engArray = [];
const intArray = [];
let managerInfo = "";

const questions = inquire
  .prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the team manager's employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the team manager's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the office number?",
      name: "officeNumber",
    },
  ])
  .then((data) => {
    managerInfo = new Manager(data.name, data.id, data.email, data.officeNumber); //Manager.js fxn 
    round2Questions(); //another prompt immediately starts
  });

function round2Questions() {
  const employeeAdd = inquire
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "option",
        choices: [
          "Add Engineer",
          "Add Intern",
          new inquire.Separator(),
          "Finish Building Team",
        ],
      },
    ])
    .then((data) => {
      console.log(data.option);
      if (data.option === "Add Engineer") {
        engineerPrompts();
      } else if (data.option === "Add Intern") {
        internPrompts();
      } else {
        writeToFile();
      }
    });
}

function engineerPrompts() {
  const questions3 = inquire
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "githubUsername",
      },
    ])
    .then((data) => {
      engArray.push(data);
      round2Questions();
    });
}

function internPrompts() {
  const questions4 = inquire
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What school does the intern attend?",
        name: "school",
      },
    ])
    .then((data) => {
      intArray.push(data);
      round2Questions();
    });
}

function writeToFile () {
  let content = team.createTeam(managerInfo);

  fs.writeFile("./src/test.html", content, (err) =>
  err ? console.error(err) : console.log('Manager Added'));

  engArray.forEach(function(engArray){
    let engData = new Engineer(engArray.name, engArray.id, engArray.email, engArray.githubUsername);
    let content = team.appendEng(engData);
    fs.appendFile("./src/test.html", content, (err) =>
    err ? console.error(err) : console.log('Engineer Added'));
  })

  intArray.forEach(function(intArray){
    let intData = new Intern(intArray.name, intArray.id, intArray.email, intArray.school);
    let content = team.appendInt(intData);
    fs.appendFile("./src/test.html", content, (err) =>
    err ? console.error(err) : console.log('Intern Added'));
  })
  
  final();
}

function final () {
  fs.appendFile("./src/test.html", team.ender(), (err) =>
  err ? console.error(err) : console.log('HTML Complete!'));
}