const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the your team member's name (Required)",
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a name to continue.ß');
          return false;
        }
      }
    },