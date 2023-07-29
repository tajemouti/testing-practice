class Calculator {
    #a;
    #b;
    constructor(a, b) {
      this.#a = a;
      this.#b = b;
    }
    add() {
      if (!isFinite(this.#a) || !isFinite(this.#b)) {
        throw new Error('Bad input');
      };
      return this.#a + this.#b;
    }
    subtract() {
      if (!isFinite(this.#a) || !isFinite(this.#b)) {
        throw new Error('Bad input');
      };
      return this.#a - this.#b;
    }
    multiply() {
      if (!isFinite(this.#a) || !isFinite(this.#b)) {
        throw new Error('Bad input');
      };
      return this.#a * this.#b;
    }
    divide() {
      if (!isFinite(this.#a) || !isFinite(this.#b)) {
        throw new Error('Bad input');
      };
      return this.#a / this.#b;
    }
  }
  
  module.exports = Calculator;