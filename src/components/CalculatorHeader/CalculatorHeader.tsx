import React from 'react';

import styles from './CalculatorHeader.module.scss';

interface ICalculatorHeader {
  calculation: string | null | undefined;
  result: number | null;
}

const CalculatorHeader = ({ calculation, result }: ICalculatorHeader) => {
  return (
    <div className={styles.header}>
      <span className={styles.calculation}>{calculation}</span>
      <span className={styles.result}>{result}</span>
    </div>
  );
};

export default CalculatorHeader;
