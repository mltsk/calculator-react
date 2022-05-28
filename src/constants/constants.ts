import { ButtonType } from './../ts/enums';

export const BUTTONS: { value: string; type: ButtonType }[] = [
  { value: 'C', type: ButtonType.Default },
  { value: '√', type: ButtonType.Default },
  { value: '%', type: ButtonType.Default },
  { value: '/', type: ButtonType.Default },
  { value: '7', type: ButtonType.Default },
  { value: '8', type: ButtonType.Default },
  { value: '9', type: ButtonType.Default },
  { value: 'x', type: ButtonType.Default },
  { value: '4', type: ButtonType.Default },
  { value: '5', type: ButtonType.Default },
  { value: '6', type: ButtonType.Default },
  { value: '-', type: ButtonType.Default },
  { value: '1', type: ButtonType.Default },
  { value: '2', type: ButtonType.Default },
  { value: '3', type: ButtonType.Default },
  { value: '+', type: ButtonType.Default },
  { value: '00', type: ButtonType.Default },
  { value: '0', type: ButtonType.Default },
  { value: ',', type: ButtonType.Default },
  { value: '=', type: ButtonType.Result },
];

export const KEYS: string[] = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '/',
  '-',
  '+',
  ',',
  'x',
  '(',
  ')',
  '%',
];

export const SPECIAL_BUTTONS: { [key: string]: string } = {
  DELETE: 'C',
  RESULT: '=',
};

export const SPECIAL_KEYS: { [key: string]: string } = {
  ENTER: 'Enter',
  ESCAPE: 'Escape',
};
