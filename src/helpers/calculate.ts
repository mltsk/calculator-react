import Calculator from './Calculator';

const calculate = (tokens: (string | number)[]) => {
  const calculator = new Calculator();

  return calculator.calculate(tokens);
};

export default calculate;
