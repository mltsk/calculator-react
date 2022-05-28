import calculate from './calculate';
import formatNumber from './formatNumber';
import tokenize from './tokenize';

const runCalculation = (expression: string): string => {
  const parsedExpression = tokenize(expression);
  const calculationResult = calculate(parsedExpression);
  const formattedNumber = formatNumber(calculationResult);

  return String(formattedNumber);
};

export default runCalculation;
