// require
const Manager = require('../lib/Manager');

// test set and get for manager
test('test setOffice for manager', () => {
  const testVal = 219 + "I";
  const e = new Manager("Sharon", 1, "schris48@gmail.com", testVal);
  expect(e.office).toBe(testVal);
});

test('test getRole for manager', () => {
  const testVal = 'Manager';
  const e = new Manager('Sharon', 1, 'schris48@gmail.com', 219 + 'I');
  expect(e.getRole()).toBe(testVal);
});

test('test getOffice for manager'(), () => {
  const testVal = 219 + 'I';
  const e = new Manager('Sharon', 1, 'schris48@gmali.com', testVal);
  expect(e.getOffice()).toBe(testVal);
});