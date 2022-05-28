import cn from 'classnames';
import React from 'react';

import { ButtonType } from '../../ts/enums';

import styles from './Button.module.scss';

interface IButton {
  value: string;
  type: ButtonType;
  setCalculation: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
}

const Button = ({ value, type, setCalculation }: IButton) => {

  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles.result]: type === ButtonType.Result,
      })}
    >
      {value}
    </button>
  );
};

export default Button;
