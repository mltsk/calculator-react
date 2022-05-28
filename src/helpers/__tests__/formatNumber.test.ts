import numbers from "../../dto/numbers";
import formatNumber from "../formatNumber";

describe('formatNumber function', () => {
  it.each(numbers)("should return correct formatted data of number: '$number'", ({ number, result }) => {
    const actual = formatNumber(number);

    expect(actual).toEqual(result);
  });
});