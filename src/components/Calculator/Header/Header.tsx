import React from 'react';

import styles from './Header.module.scss';

interface IHeader {
  calculation: string | null | undefined;
  result: string | null;
}

const Header = ({ calculation, result }: IHeader) => {
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

export default Header;
