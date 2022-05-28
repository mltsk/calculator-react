const formatNumber = (number: number): number => {
  const fractionalNumberPart = String(number).split('.')[1];

  if (fractionalNumberPart?.length > 4) {
    return Number(number.toFixed(4));
  }

  return number;
};

export default formatNumber;
