// require
const Engineer = require('../lib/Engineer');

// test set and get for engineer
test('Test setGithub for engineer', () => {
  const testVal = 'schris48';
  const employeeInst = new Engineer("Chris", 2, "schris48@gmail.com", testVal);
  expect(employeeInst.github).toBe(testVal);
});

test('Test getRole returns "Engineer"', () => {
  const testVal = 'Engineer';
  const employeeInst = new Engineer('Chris', 2, 'schris48@gmail.com', "schris48");
  expect(employeeInst.getRole()).toBe(testVal);
});

test('Test getGithub for engineer()', () => {
  const testVal = 'schris48';
  const employeeInst = new Engineer('Chris', 2, 'schris48@gmail.com', testVal);
  expect(employeeInst.getGithub()).toBe(testVal);
});