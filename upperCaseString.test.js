const upperCaseString = require('./upperCaseString');

test('Should return The first letter in uppercase', () => {
  const string = 'salsabeel';
  const converted = upperCaseString(string);
  expect(converted).toBe(string[0].toUpperCase() + string.slice(1));
});
