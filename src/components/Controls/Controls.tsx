import React from 'react';

import { BUTTONS } from '../../constants/constants';
import Button from '../Button/Button';

import styles from './Controls.module.scss';

class IControls {
  setCalculation!: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
}

const Controls = ({ setCalculation }: IControls) => {
  return (
    <div className={styles.controls}>
      {BUTTONS.map(({ value, type }) => (
        <Button
          key={value}
          value={value}
          type={type}
          setCalculation={setCalculation}
        />
      ))}
    </div>
  );
};

export default Controls;
