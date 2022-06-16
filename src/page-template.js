// create the about section
const generateManagerProfile = managerArr => {
  if (!managerArr) {
    return '';
  }


  return `
    <section class="my-3" id="manager">
      <p>${managerArr.nom}</p>
      <h2 class="text-dark bg-primary p-2 display-inline-block">Manager</h2>
      <div class="flex-row justify-space-between">
      ${managerArr
      .filter(({ info }) => info)
      .map(({ nom, id , email, office }) => {
        return `
          <div class="col=12 mb-2 bg-dark text-light p-3">
            <h3 class="manager-item-title text-light">${nom}</h3>
            <h4 class="manager-id text-light">${id}</h4>
            <h4 class="manager-email text-light">${email}</h4>
            <h4 class="manager-office text-light">${office}</h4>
          `;
      })
    .join('')}

  ${engineerArr
    .filter(({ info }) => !info)
    .map(({ nom, id , email , github }) => {
      console.log(email);
      return `
          <div class="col=12 mb-2 bg-dark text-light p-3">
            <h3 class="engineer-item-title text-light">${nom}</h3>
            <h4 class="engineer-id text-light">${id}</h4>
            <h4 class="engineer-email text-light">${email}</h4>
            <h4 class="engineer-office text-light">${github}</h4>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View GitHub Profile</a>
          </div>
          `;
      })
    .join('')}
    })
    })}
    </section>
    `;
};

// create the projects section
const generateProjects = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectsArr
      .filter(({ feature }) => feature)
      .map(({ nom, description, languages, link}) => {
        return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${nom}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on Github</a>
          </div>
        `;
        })
        .join('')}

      ${projectsArr
        .filter(({ feature }) => !feature)
        .map(({ name, description, languages, link}) => {
          console.log(languages);
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-2 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on Github</a>
          </div>
        `;
        })
        .join('')}

      </div>
      </section>
    `;
  };

// Export function to generate entire page
module.exports = templateData => {

  // destructure projects and about data from templateData based on their property key names
  const { projects, about, ...header } = templateData;

  return `
  <!DOCTYPE html> 
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text secondary bg-dark py-2 px-3">${header.name}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
            header.github
          }">Github</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateManagerProfile(about)}
      ${generateProjects(projects)}
    </main>
    <footer class="container text-center py-3">
    <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
  </body>
  </html>
  `;
};