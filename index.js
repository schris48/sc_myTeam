// required
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "myTeam.html");
const generateMyTeam = require('./src/template.js');

myTeamArray = [];

function runIndex() {
  function createMyTeam() {
    inquirer.prompt([{
      type: 'list',
      message: 'Choose an employee type to add to your team:',
      name: 'promptAddEmployee',
      choices: ['Manager', 'Engineer', 'Intern', 'My team is complete.'],
    }]).then(function (userInput) {
      switch(userInput.promptAddEmployee) {
        case 'Manager':
          addManager();
          return;
        case 'Engineer':
          addEngineer();
          return;
        case 'Intern':
          addIntern();
          return;

        default:
          htmlBuilder();
      }
    })
  }

  function addManager() {
    inquirer.prompt ([
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
        name: 'managerOfficeInput',
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
      const manager = new Manager(answers.managerNameInput, answers.managerIdInput, answers.managerEmailInput, answers.managerOfficeInput);
      myTeamArray.push(manager);
      createMyTeam();
    });
  }

  function addEngineer() {
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
        name: 'engineerGitHubInput',
        message: "Enter link to engineer's GitHub.",
        validate: engineerOfficeInput => {
          if (engineerOfficeInput) {
            return true;
          } else {
            console.log("Please enter a link to the Github account for the engineer!")
          }
        }
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerNameInput, answers.engineerIdInput, answers.engineerEmailInput, answers.engineerGitHubInput);
      myTeamArray.push(engineer);
      createMyTeam();
    });
  }

  function addIntern() {
    inquirer.prompt ([
      {
        type: 'input',
        name: 'internName',
        message: "Enter intern's name.",
        validate: engineerNameInput => {
          if (engineerNameInput) {
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
        name: 'internSchool',
        message: "Enter intern's school.",
        validate: internOfficeInput => {
          if (internOfficeInput) {
            return true;
          } else {
            console.log("Please enter the school of the intern!")
          }
        }
      }
    ]).then(answers => {
      const intern = new Intern(answers.internNameInput, answers.internIdInput, answers.internEmailInput, answers.internSchoolInput);
      myTeamArray.push(intern);
      createMyTeam();
    });
  }
  function htmlBuilder() {
    console.log("myTeam has been created!")

    fs.writeFileSync(distPath.at, generateMyTeam(myTeamArray), "UTF-8")
  }
  createMyTeam();
}
runIndex();