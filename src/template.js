// create myteam
const generateMyTeam = myTeam => {

// manager html
  const generateManager = manager => {
    return `
<div class="card employee-card">
  <div class="card-header bg-primary text-white">
    <h2 class="card-body">
    <h3 class="card-title">${manager.getName()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office: ${manager.getOffice()}<li>
    </ul>
  </div>
</div>
    `;
  };

// engineer html
  const generateEngineer = engineer => {
    return `
<div class="card employee-card">
  <div class="card-header bg-primary text-white">
    <h2 class="card-body">
    <h3 class="card-title">${engineer.getName()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a><li>
    </ul>
  </div>
</div>
    `;
  };

// intern html
  const generateIntern = intern => {
    return `
<div class="card employee-card">
  <div class="card-header bg-primary text-white">
    <h2 class="card-body">
    <h3 class="card-title">${intern.getName()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">Office: ${intern.getSchool()}<li>
    </ul>
  </div>
</div>
    `;
  };

  const html = [];

  html.push(myTeam
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
  );
  html.push(myTeam
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
  );
  html.push(myTeam
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
  );
  return html.join("");
}

// export to create page
module.exports = myTeam => {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF=8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>myTeam</title>
    <link rel="stylesheet" href="http://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading bg-danger">
          <h1 class="text-center text-white">myTeam</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="row myTeam-area col-12 d-flex justify-content-center">
          ${generateMyTeam(myTeam)}
        </div>
      </div>
    </div>
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </body>
  </html>
  `;
};