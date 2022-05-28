import React, { ReactNode } from 'react';

import styles from './Container.module.scss';

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.calculator}>{children}</section>
    </div>
  );
};

export default Container;
