// calculator.js

export default class Calculator {
    result : number;
        constructor() {
      this.result = 0;
    }
  
    add(value : number) {
      this.result += value;
      return this.result;
    }
  
    subtract(value : number) {
      this.result -= value;
      return this.result;
    }
  
    multiply(value : number) {
      this.result *= value;
      return this.result;
    }
  
    divide(value : number) {
      if (value !== 0) {
        this.result /= value;
        return this.result;
      } else {
        throw new Error("Cannot divide by zero");
      }
    }
  
    reset() {
      this.result = 0;
      return this.result;
    }
  }
  