import React from 'react';

import { BUTTONS } from '../../../constants/constants';
import Button from '../Button/Button';

import styles from './Controls.module.scss';

class IControls {
  handlerClick!: (event: React.MouseEvent<HTMLElement>) => void;
}

const Controls = ({ handlerClick }: IControls) => {
  return (
    <div className={styles.controls}>
      {BUTTONS.map(({ value, type }) => (
        <Button
          key={value}
          value={value}
          type={type}
          handlerClick={handlerClick}
        />
      ))}
    </div>
  );
};

export default Controls;
