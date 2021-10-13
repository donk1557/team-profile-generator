const inquire = require('inquirer');
const fs = require('fs');
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const employee = require("./lib/Employee");


const questions = inquire.prompt([
    {
      type: 'input',
      message: 'What is the team manager\'s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the team manager\'s employee ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the team manager\'s email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the office number?',
      name: 'officeNumber',
    },
]).then((data) =>{
  console.log(data);
    // const content = manager(data); //Manager.js fxn
    // appendToFile("teamManager.html",content); //appendFile fs fxn
    round2Questions() //another prompt immediately starts
    
  } )

  function round2Questions() {
  const employeeAdd = inquire.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'option',
      choices: ["Add Engineer", "Add Intern", new inquire.Separator(), "Finish Building Team"]
    },
  ]).then((data) => {
    console.log(data.option);
    if (data.option === 'Add Engineer'){
      engineerPrompts();
    }else if (data.option === 'Add Intern'){
      internPrompts();
    }else{return '';}
  })}

  function engineerPrompts() {
  const questions3 = inquire.prompt([
    {
      type: 'input',
      message: 'What is the engineer\'s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the engineer\'s employee ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the engineer\'s email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the engineer\'s GitHub username?',
      name: 'githubUsername',
    },
]).then((data) =>{
  console.log(data);
  // const content2 = engineer(data);
  round2Questions();
})}

function internPrompts() {
  const questions4 = inquire.prompt([
    {
      type: 'input',
      message: 'What is the intern\'s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the intern\'s employee ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the intern\'s email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What school does the intern attend?',
      name: 'school',
    },
]).then((data) =>{
  console.log(data);
  // const content3 = intern(data);
  round2Questions();
})}