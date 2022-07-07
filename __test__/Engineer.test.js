// require
const Engineer = require('../lib/Engineer');

// test set and get for engineer
test('Test setGithub for engineer', () => {
  const testVal = 'schris48';
  const employeeInst = new Engineer("Chris", 2, "schris48@gmail.com", testVal);
  expect(employeeInst.office).toBe(testVal);
});

test('Test getRole for engineer', () => {
  const testVal = 'Engineer';
  const employeeInst = new Engineer('Chris', 2, 'schris48@gmail.com', "schris48");
  expect(employeeInst.getRole()).toBe(testVal);
});

test('Test getGithub for engineer()', () => {
  const testVal = 'schris48';
  const employeeInst = new Engineer('Chris', 2, 'schris48@gmail.com', testVal);
  expect(employeeInst.getOffice()).toBe(testVal);
});