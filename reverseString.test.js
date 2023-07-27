const reverseString = require('./reverseString');

test(`Reverses the string`, () => {
  const string = 'microverse';
  const reverse = reverseString(string);
  expect(reverse).toBe(string.split('').reverse().join(''));
});
