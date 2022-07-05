// require
const Employee = require("./Employee");

// get manaaer's office and role
class Manager extends Employee {
  constructor (name, id, email, office) {
    super (name, id, email);
    this.office = office;
  }

  getOffice() {
    return this.office;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;