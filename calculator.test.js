const Calculator = require('./calculator');

describe('Calculator test', () => {
  test('Should return the sum of two numbers', () => {
    // Arrange
    const a = 11;
    const b = 7;

    // Act
    const calculator = new Calculator(a, b);
    const sum = calculator.add();

    // Assert
    expect(sum).toBe(a + b);
  });

  test('Should return the difference between two numbers', () => {
    // Arrange
    const a = 13;
    const b = 8;

    // Act
    const calculator = new Calculator(a, b);
    const sum = calculator.subtract();

    // Assert
    expect(sum).toBe(a - b);
  });

  test('Should return the product of two numbers', () => {
    // Arrange
    const a = 5;
    const b = 6;

    // Act
    const calculator = new Calculator(a, b);
    const sum = calculator.multiply();

    // Assert
    expect(sum).toBe(a * b);
  });

  test('Should return the quotient of two numbers', () => {
    // Arrange
    const a = 20;
    const b = 4;

    // Act
    const calculator = new Calculator(a, b);
    const sum = calculator.divide();

    // Assert
    expect(sum).toBe(a / b);
  });
});
