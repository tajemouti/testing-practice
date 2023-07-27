const stringLength = require('./stringLength');

test(`Returns the correct string length`, () => {
  const string = 'microvere';
  expect(stringLength(string)).toBe(string.length);
});

test(`Generates an error when the string length is not within 0 and 10`, () => {
    const string1 = 'microverseCirruculum';
    const length = () => {
      stringLength(string1);
    };
    expect(length).toThrowError();
});