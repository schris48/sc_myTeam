// require
const Employee = require("../lib/Employee.js");

// test create new employee
test('Test create new employee.', () => {
  const employeeInstance = new Employee();
  expect(typeof(employeeInstance)).toBe('object');
})

// test name
test('Test name.', () => {
  const name = 'Sharon';
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
})

// test id
test('Test ID.', () => {
  const id = 1;
  const employeeInstance = new Employee('Sharon', id);
  expect(employeeInstance.id).toBe(id);
})

// test email
test('Test email.', () => {
  const email = 'schris48@gmail.com';
  const employeeInstance = new Employee('Sharon', 1, email);
  expect(employeeInstance.email).toBe(email);
})

test('Use getName method.', () => {
  const testName = 'Sharon';
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
})

test('use getId method', () => {
  const testId = 1;
  const employeeInstance = new Employee('Sharon', testId);
  expect(employeeInstance.getId()).toBe(testId);
})

test('use getEmail method.', () => {
  const testEmail = 'schris48@gmail.com';
  const employeeInstance = new Employee('Sharon', 1, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
})

test('use getRole', () => {
  const returnVal = "Employee";
  const employeeInstance = new Employee("Sharon", 1, 'schris48@gmail.com');
  expect(employeeInstance.getRole()).toBe(returnVal)
})