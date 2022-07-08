// require
const Employee = require("../lib/Employee");

// test create new employee
test('Test create new employee.', () => {
  const employeeInst = new Employee();
  expect(typeof(employeeInst)).toBe('object');
})

// test name
test('Test name.', () => {
  const name = 'Sharon';
  const employeeInst = new Employee(name);
  expect(employeeInst.name).toBe(name);
})

// test id
test('Test ID.', () => {
  const id = 1;
  const employeeInst = new Employee('Sharon', id);
  expect(employeeInst.id).toBe(id);
})

// test email
test('Test email.', () => {
  const email = 'schris48@gmail.com';
  const employeeInst = new Employee('Sharon', 1, email);
  expect(employeeInst.email).toBe(email);
})

test('Use method getName()', () => {
  const testName = 'Sharon';
  const employeeInst = new Employee(testName);
  expect(employeeInst.getName()).toBe(testName);
})

test('Use method getId()', () => {
  const testId = 1;
  const employeeInst = new Employee('Sharon', testId);
  expect(employeeInst.getId()).toBe(testId);
})

test('Use method getEmail()', () => {
  const testEmail = 'schris48@gmail.com';
  const employeeInst = new Employee('Sharon', 1, testEmail);
  expect(employeeInst.getEmail()).toBe(testEmail);
})

test('Use method getRole()', () => {
  const returnVal = "Employee";
  const employeeInst = new Employee("Sharon", 1, 'schris48@gmail.com');
  expect(employeeInst.getRole()).toBe(returnVal)
})