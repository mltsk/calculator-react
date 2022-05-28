import cn from 'classnames';
import React from 'react';

import { SPECIAL_BUTTONS } from '../../constants/constants';
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
  const handlerClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    const char = event.target.textContent;

    if (char === SPECIAL_BUTTONS.RESULT) {
      console.log('calculation...');
    } else if (char === SPECIAL_BUTTONS.DELETE) {
      setCalculation(null);
    } else {
      setCalculation((prev) => (prev ? prev + char : char));
    }
  };

  return (
    <button
      onClick={handlerClick}
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
