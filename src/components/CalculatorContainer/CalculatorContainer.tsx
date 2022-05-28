import React, { ReactNode } from 'react';

import styles from './CalculatorContainer.module.scss';

interface ICalculatorContainer {
  children: ReactNode;
}

const CalculatorContainer = ({ children }: ICalculatorContainer) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.calculator}>{children}</section>
    </div>
  );
};

export default CalculatorContainer;
