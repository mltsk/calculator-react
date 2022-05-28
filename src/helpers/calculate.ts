import Calculator from './Calculator';

const calculate = (expression: (string | number)[]) => {
  const calculator = new Calculator();

  return calculator.calculate(expression);
};

export default calculate;
