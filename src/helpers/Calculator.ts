import {
  allOperators,
  binaryOperators,
  priority,
} from '../constants/constants';

class Calculator {
  numbersStack: number[] = [];
  operatorStack: string[] = [];

  private getLastOperator() {
    return this.operatorStack[this.operatorStack.length - 1];
  }

  private executeOperation() {
    const operator = this.getLastOperator();
    const firstNumber = this.numbersStack[this.numbersStack.length - 2];
    const secondNumber = this.numbersStack[this.numbersStack.length - 1];

    switch (operator) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      case '*':
        return firstNumber * secondNumber;
      case '/':
        return firstNumber / secondNumber;
      case '%':
        return secondNumber / 100;
      case '√':
        return Math.sqrt(secondNumber);
      default:
        throw Error(`Unknown operator: ${operator}`);
    }
  }

  private addResult(result: number) {
    const operator = this.operatorStack.pop();

    if (operator && binaryOperators.includes(operator)) {
      this.numbersStack.pop();
    }
    this.numbersStack.pop();
    this.numbersStack.push(result);
  }

  public calculate(tokens: (string | number)[]): number {
    for (let i = 0; i < tokens.length; i += 1) {
      const char = tokens[i];

      if (char === '(') {
        this.operatorStack.push(char);
      } else if (char === ')') {
        while (this.getLastOperator() !== '(') {
          const result = this.executeOperation();

          this.addResult(result);
        }
        this.operatorStack.pop();
      } else if (typeof char === 'number') {
        this.numbersStack.push(char);
      } else if (allOperators.includes(char)) {
        if (!this.operatorStack.length) {
          this.operatorStack.push(char);
        } else if (this.getLastOperator() === '(') {
          this.operatorStack.push(char);
        } else if (priority[char] > priority[this.getLastOperator()]) {
          this.operatorStack.push(char);
        } else if (priority[char] <= priority[this.getLastOperator()]) {
          while (priority[char] <= priority[this.getLastOperator()]) {
            const result = this.executeOperation();

            this.addResult(result);
          }
          this.operatorStack.push(char);
        }
      }

      if (i === tokens.length - 1) {
        while (this.operatorStack.length !== 0) {
          const result = this.executeOperation();

          this.addResult(result);
        }
      }
    }

    return this.numbersStack[0];
  }
}

export default Calculator;
