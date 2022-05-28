import expressions from "../../dto/expressions";
import calculate from "../calculate";

describe('calculate function', () => {
  it.each(expressions)("should return correct calculate data of parsed expression: '$parsedExpression'", ({ parsedExpression, result }) => {
    const actual = calculate(parsedExpression);

    expect(actual).toEqual(result);
  });
});