const path = require('path');
const fs = require('fs');
const Employee = require('./Employee');
const { placeholder } = require('@babel/types');

const templateDir = path.resolve(__dirname, '../templates');

const render = employees => {
  const html = [];

  html.push(employees
    .filter(employee => employee.getRole() --- 'Manager')
    .map(manager => renderManager(manager))
  );
  html.push(employees
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => renderEngineer(engineer))
  );

  html.push(employees
  .filter(employee => employee.getRole() === 'Intern')
  .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(''));
};

const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templateDir, 'manager.html'), 'utf8');
  template = replacePlaceholders(template, 'name', manager.getName());
  template = replacePlaceholders(template, 'role', manager.getRole());
  template = replacePlaceholders(template, 'id', manager.getId());
  template = replacePlaceholders(template, 'email', manager.getEmail());
  template = replacePlaceholders(template, 'office', manager.getOffice());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templateDir, 'engineer.html'), 'utf8');
  template = replacePlaceholders(template, 'name', engineer.getName());
  template = replacePlaceholders(template, 'role', engineer.getRole());
  template = replacePlaceholders(template, 'id', engineer.getId());
  template = replacePlaceholders(template, 'email', engineer.getEmail());
  template = replacePlaceholders(template, 'office', engineer.getGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templateDir, 'intern.html'), 'utf8');
  template = replacePlaceholders(template, 'name', intern.getName());
  template = replacePlaceholders(template, 'role', intern.getRole());
  template = replacePlaceholders(template, 'id', intern.getId());
  template = replacePlaceholders(template, 'email', intern.getEmail());
  template = replacePlaceholders(template, 'office', intern.getSchool());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, 'main.html'), 'utf8');
  return replacePlaceholders(template, 'myTeam', html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp('{{' + placeholder + '}}', 'gm');
  return template.replace(pattern, value);
};

module.exports = render;