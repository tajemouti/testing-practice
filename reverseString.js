const reverseString = (string) => {
    let string1 = '';
    for (let i = string.length - 1; i >= 0; i--) {
      string1 += string[i];
    };
    return string1;
};
  
module.exports = reverseString;