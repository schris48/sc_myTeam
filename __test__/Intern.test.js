// require
const Intern = require('../lib/Intern');

// test set and get for intern
test('Test setSchool constructor', () => {
  const testVal = 'UofT';
  const employeeInst = new Intern("Christen", 3, "schris48@gmail.com", testVal);
  expect(employeeInst.school).toBe(testVal);
});

test('Test getRole returns "Intern"', () => {
  const testVal = 'Intern';
  const employeeInst =  new Intern('Christen', 3, 'schris48@gmail.com', "UofT");
  expect(employeeInst.getRole()).toBe(testVal);
});

test('Test method getSchool()', () => {
  const testVal = 'UofT';
  const employeeInst = new Intern("Christen", 3, "schris48@gmail.com", testVal);
  expect(employeeInst.getSchool()).toBe(testVal);
});