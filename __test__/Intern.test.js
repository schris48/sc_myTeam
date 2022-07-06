// require
const Intern = require('../lib/Intern');

// test set and get for intern
test('test setSchool constructor', () => {
  const testVal = 'UofT';
  const e = new Intern("Sharon", 1, "schris48@gmail.com", testVal);
  expect(e.school).toBe(testVal);
});

test('test getRole returns "Intern"', () => {
  const testVal = 'Intern';
  const e =  new Intern('Sharon', 1, 'schris48@gmail.com', 'UofT');
  expect(e.getRole()).toBe(testVal);
});

test('test getSchool method', () => {
  const testVal = 'Intern';
  const e = new Intern("Sharon", 1, "schris48@gmail.com", testVal);
  expect(e.getSchool()).toBe(testVal);
});