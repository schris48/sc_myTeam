// require
const Manager = require('../lib/Engineer.js');

// test set and get for engineer
test('test setGithub for manager', () => {
  const testVal = 219 + "I";
  const e = new Manager("Sharon", 1, "schris48@gmail.com", testVal);
  expect(e.office).toBe(testVal);
});

test('test getRole for manager', () => {
  const testVal = 'Engineer';
  const e = new Manager('Sharon', 1, 'schris48@gmail.com', "schris48");
  expect(e.getRole()).toBe(testVal);
});

test('test getGithub for engineer'(), () => {
  const testVal = 219 + 'I';
  const e = new Manager('Sharon', 1, 'schris48@gmali.com', testVal);
  expect(e.getOffice()).toBe(testVal);
});