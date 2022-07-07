// require
const Manager = require("../lib/Manager");

// test set and get for manager
test('Test setOffice for manager', () => {
  const testVal = 48;
  const employeeInst = new Manager("Sharon", 1, "schris48@gmail.com", testVal);
  expect(employeeInst.office).toBe(testVal);
});

test('Test getRole for manager', () => {
  const testVal = "Manager";
  const employeeInst = new Manager("Sharon", 1, "schris48@gmail.com", 48);
  expect(employeeInst.getRole()).toBe(testVal);
});

test('Test getOffice for manager()', () => {
  const testVal = 48;
  const employeeInst = new Manager('Sharon', 1, 'schris48@gmail.com', testVal);
  expect(employeeInst.getOffice()).toBe(testVal);
});