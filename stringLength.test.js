const stringLength = require('./stringLength');

test(`Returns the correct string length`, () => {
  const string = 'microvere';
  expect(stringLength(string)).toBe(string.length);
});
