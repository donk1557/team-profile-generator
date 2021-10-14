
function createTeam() {
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
    <div class="row justify-content-evenly">
    <div class="col-3">
    ${manager1.getName()}
    ${manager1.getRole()}
    ${manager1.getId()}
    ${manager1.getEmail}
    </div>

  </div>
  `;
  }

  createTeam();

  module.exports = teamMaker;