import {
  binaryOperators,
  unaryOperators,
  bracket,
  firstNumberSymbols,
  bodyNumberSymbols,
} from '../constants/constants';

const tokenize = (expression: string): (string | number)[] => {
  const fixedExpression = expression.replaceAll(',', '.').replaceAll('x', '*');
  const result = [];

  for (let i = 0; i < fixedExpression.length; i += 1) {
    const prevChar = fixedExpression[i - 1];
    const char = fixedExpression[i];

    if (
      binaryOperators.includes(char) &&
      prevChar &&
      !binaryOperators.includes(prevChar)
    ) {
      result.push(char);
    } else if (unaryOperators.includes(char)) {
      result.push(char);
    } else if (bracket.includes(char)) {
      result.push(char);
    } else if (firstNumberSymbols.includes(char)) {
      let figure = '';

      do {
        figure += fixedExpression[i];
        i += 1;
      } while (bodyNumberSymbols.includes(fixedExpression[i]));
      i -= 1;
      result.push(Number(figure));
    }
  }

  return result;
};

export default tokenize;
