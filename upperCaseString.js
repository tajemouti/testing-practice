const upperCaseString = (string) => {
    const [a, ...b] = string.split('');
    return a.toUpperCase() + b.join('');
  };
  
module.exports = upperCaseString;