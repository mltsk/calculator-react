import {
  binaryOperators,
  unaryOperators,
  bracket,
} from '../constants/constants';

const tokenize = (expression: string): (string | number)[] => {
  const fixedExpression = expression.replaceAll(',', '.').replaceAll('x', '*');
  const result = [];

  for (let i = 0; i < fixedExpression.length; i += 1) {
    const prevChar = fixedExpression[i - 1];
    const token = fixedExpression[i];

    if (
      binaryOperators.includes(token) &&
      prevChar &&
      !binaryOperators.includes(prevChar)
    ) {
      result.push(token);
    } else if (unaryOperators.includes(token)) {
      result.push(token);
    } else if (bracket.includes(token)) {
      result.push(token);
    } else {
      let token = fixedExpression[i];

      while (/^-?\d+\.?\d*$/.test(token + fixedExpression[i + 1])) {
        token += fixedExpression[i + 1];
        i += 1;
      }

      result.push(Number(token));
    }
  }

  return result;
};

export default tokenize;
