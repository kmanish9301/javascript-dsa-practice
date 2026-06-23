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
      throw new Error("Cannot divided by zero");
    }
    this.value /= num;
    return this;
  }
  getResult() {
    return this.value;
  }

  reset() {
    this.value = 0;
    return this;
  }
}

// const calculator = new Calculator();

// console.log("Calculator", calculator.add(5).add(3).multiply(6).getResult());

const calculator = new Calculator();

console.log(calculator.add().subtract().multiply().divide().getResult());
// Output: 0 (default chaining with no values)

calculator.reset();

console.log(calculator.add(5).add(3).multiply(6).getResult());
// Output: 48
