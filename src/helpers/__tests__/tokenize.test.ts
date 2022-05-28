import expressions from "../../dto/expressions";
import tokenize from "../tokenize";

describe('tokenize function', () => {
  it.each(expressions)("should return correct tokenized data of expression: '$expression'", ({ expression, parsedExpression }) => {
    const actual = tokenize(expression);

    expect(actual).toEqual(parsedExpression);
  });
});