import { firstCharNumber, charBeforeNumber } from './../constants/constants';

const tokenize = (expression: string): (string | number)[] => {
  const fixedExpression = expression.replaceAll(',', '.').replaceAll('x', '*');
  const result = [];

  for (let i = 0; i < fixedExpression.length; i += 1) {
    const prevChar = fixedExpression[i - 1];
    let token = fixedExpression[i];

    if (
      firstCharNumber.includes(token) &&
      (i === 0 || charBeforeNumber.includes(prevChar))
    ) {
      while (/^-?\d+\.?\d*$/.test(token + fixedExpression[i + 1])) {
        token += fixedExpression[i + 1];
        i += 1;
      }

      result.push(Number(token));
    } else {
      result.push(token);
    }
  }

  return result;
};

export default tokenize;
