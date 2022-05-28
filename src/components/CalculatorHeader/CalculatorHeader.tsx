import React from 'react';

import styles from './CalculatorHeader.module.scss';

interface ICalculatorHeader {
  calculation: string | null | undefined;
  result: string | null;
}

const CalculatorHeader = ({ calculation, result }: ICalculatorHeader) => {
  return (
    <div className={styles.header}>
      <span className={styles.calculation} data-testid="calculation">
        {calculation}
      </span>
      <span className={styles.result} data-testid="result">
        {result}
      </span>
    </div>
  );
};

export default CalculatorHeader;
