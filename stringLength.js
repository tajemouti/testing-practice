const stringLength = (string) => {
    if (string.length < 1 || string.length > 10) {
        throw new Error('String length must not exceed 10 characters');
    };
    return string.length;
};
  
module.exports = stringLength;
  