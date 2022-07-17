// required
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "myTeam.html");
const generateMyTeam = require('./src/template.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

myTeamArray = [];

function runIndex() {
  function createMyTeam() {
    inquirer
    .prompt([
      {
        type: 'list',
        message: 'Choose an employee type to add to your team:',
        name: 'promptEmployee',
        choices: ['Manager', 'Engineer', 'Intern', 'My team is complete.'],
      }
    ]).then(async function (userInput) {
      console.log(userInput);
      switch(userInput.promptEmployee) {
        case 'Manager':
          await addManager();
          return;

        case 'Engineer':
          await addEngineer();
          return;
          
        case 'Intern':
          await addIntern();
          return;

        case 'My team is complete.':
          htmlBuilder();
          return;

        default:
          htmlBuilder();
          return;
      }
    })
  }

  async function addManager() {
    inquirer
    .prompt ([
      {
        type: 'input',
        name: 'managerName',
        message: "Enter manager's name.",
        validate: managerNameInput => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter the name of the manager!");
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'managerId',
        message: "Enter the manager's employee ID.",
        validate: managerIdInput => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("Please enter the employee ID for the manager!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "Enter the manager's e-mail.",
        validate: managerEmailInput => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log("Please enter the e-mail for the manager!");
            return false;
          }
        }
    },
      {
        type: 'input',
        name: 'managerOffice',
        message: "Enter the manager's office.",
        validate: managerOfficeInput => {
          if (managerOfficeInput) {
            return true;
          } else {
            console.log("Please enter the office for the manager!")
          }
        }
      }
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
      console.log(myTeamArray);
      myTeamArray.push(manager);
      
      console.log(myTeamArray);
      createMyTeam();
    });
  }

  async function addEngineer() {
    inquirer.prompt ([
      {
        type: 'input',
        name: 'engineerName',
        message: "Enter engineer's name.",
        validate: engineerNameInput => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("Please enter the name of the engineer!");
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'engineerId',
        message: "Enter the engineer's employee ID.",
        validate: engineerIdInput => {
          if (engineerIdInput) {
            return true;
          } else {
            console.log("Please enter the employee ID for the engineer!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "Enter the engineer's e-mail.",
        validate: engineerEmailInput => {
          if (engineerEmailInput) {
            return true;
          } else {
            console.log("Please enter the e-mail for the engineer!");
            return false;
          }
        }
    },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "Enter engineer's GitHub username.",
        validate: engineerGithubInput => {
          if (engineerGithubInput) {
            return true;
          } else {
            console.log("Please enter the username for the engineer's Github account!")
          }
        }
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      myTeamArray.push(engineer);
      createMyTeam();
    });
  }

  async function addIntern() {
    inquirer.prompt ([
      {
        type: 'input',
        name: 'internName',
        message: "Enter intern's name.",
        validate: internNameInput => {
          if (internNameInput) {
            return true;
          } else {
            console.log("Please enter the name of the intern!");
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'internId',
        message: "Enter the intern's employee ID.",
        validate: internIdInput => {
          if (internIdInput) {
            return true;
          } else {
            console.log("Please enter the employee ID for the intern!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "Enter the intern's e-mail.",
        validate: internEmailInput => {
          if (internEmailInput) {
            return true;
          } else {
            console.log("Please enter the e-mail for the engineer!");
            return false;
          }
        }
    },
      {
        type: 'input',
        name: 'internSchool',
        message: "Enter intern's school.",
        validate: internSchoolInput => {
          if (internSchoolInput) {
            return true;
          } else {
            console.log("Please enter the school of the intern!")
          }
        }
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      myTeamArray.push(intern);
      createMyTeam();
    });
  }
  function htmlBuilder() {
    console.log("myTeam has been created!")

    fs.writeFileSync(distPath, generateMyTeam(myTeamArray), "UTF-8")
  }
  createMyTeam();
}
runIndex();