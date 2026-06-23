class Calculator {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  add(num = 0) {
    this.value += num;
    return this;
  }

  subtract(num = 0) {
    this.value -= num;
    return this;
  }
  multiply(num = 1) {
    this.value *= num;
    return this;
  }
  divide(num = 1) {
    if (num === 0) {
      throw new Error("Cannot divide it by 0");
    }
    this.value /= num;
    return this;
  }
  getResult() {
    return this.value;
  }
}

const calculator = new Calculator();

console.log(
  calculator.add(5).subtract(3).multiply(2).add(3).divide(2).getResult(),
);
