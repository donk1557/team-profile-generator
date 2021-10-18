
function createTeam(input) {   //generates html elements, Bootstrap CDN, header info, & manager card
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <title>Team Profile Builder</title>
    </head>
    <body>
    <header class="jumbotron">
      <h1 class="display-3">Team</h1>
    </header>
    <div class="row justify-content-around">
    <div class="col-3 border rounded border-success">
    <div class="p-4 mb-4 bg-success text-white">
    ${input.getName()} <br>
    ${input.getRole()} <br>
    </div>
    ${input.getId()} <br>
    ${input.getEmail()} <br>
    Office Number: ${input.officeNumber}
    </div>
  `;
  }

 function appendEng (input) {    //generates card for an engineer
   return `
    <div class="col-3 border rounded border-info">
    <div class="p-4 mb-4 bg-info text-white">
    ${input.getName()} <br>
    ${input.getRole()} <br>
    </div>
    ${input.getId()} <br>
    ${input.getEmail()} <br>
    ${input.getGithub()}
    </div>
  `;
  }
 

 function appendInt (input) {    //generates card for an intern
  return `
   <div class="col-3 border rounded border-warning">
   <div class="p-4 mb-4 bg-warning text-white">
   ${input.getName()} <br>
   ${input.getRole()} <br>
   </div>
   ${input.getId()} <br>
   ${input.getEmail()} <br>
   ${input.getSchool()}
   </div>
 `;
 }

 function ender () {    //adds closing tags to html
   return `
   </div>
   </body>
  `;
 }


  module.exports =  {   //each of these fxns exported to index.js
    createTeam,
    appendEng,
    appendInt,
    ender,
  };