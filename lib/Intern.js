// require
const Employee = require("./Employee.js");

// get intern school and role
class Intern extends Employee {
  constructor(name, id, email, school) {
    super (name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern"
  }
}

module.exports = Intern;