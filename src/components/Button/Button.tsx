import cn from 'classnames';
import React from 'react';

import { ButtonType } from '../../ts/enums';

import styles from './Button.module.scss';

interface IButton {
  value: string;
  type: ButtonType;
  handlerClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ value, type, handlerClick }: IButton) => {
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
