import calculate from './calculate';
import formatNumber from './formatNumber';
import tokenize from './tokenize';

const runCalculation = (expression: string): string => {
  const tokens = tokenize(expression);
  const calculationResult = calculate(tokens);
  const formattedNumber = formatNumber(calculationResult);

  return String(formattedNumber);
};

export default runCalculation;
