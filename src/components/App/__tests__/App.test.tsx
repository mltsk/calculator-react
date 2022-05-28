import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App from '../App';

const calculateExpressionByButtons = (buttons: string): void => {
  buttons.split('').forEach((button) => {
    userEvent.click(screen.getByRole('button', { name: button }));
  });
  userEvent.click(screen.getByRole('button', { name: '=' }));
};

const calculateExpressionByKeys = (keys: string): void => {
  keys.split('').forEach((key) => {
    userEvent.keyboard(`${key}`);
  });
  userEvent.keyboard('{enter}');
};

describe('App component', () => {
  describe('Snapshot', () => {
    it('Should render valid snapshot', () => {
      const { asFragment } = render(<App />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('Main group of tests', () => {
    describe('Calculation using buttons', () => {
      it('Button "C" should clear calculation and result', () => {
        render(<App />);
        calculateExpressionByButtons('6x2');
        expect(screen.getByTestId('calculation')).toHaveTextContent('6x2');
        expect(screen.getByTestId('result')).toHaveTextContent('12');

        userEvent.click(screen.getByRole('button', { name: 'C' }));
        expect(screen.getByTestId('calculation')).toHaveTextContent('');
        expect(screen.getByTestId('result')).toHaveTextContent('0');
      });
      it('Should correctly calculate the expression: 45x10', () => {
        render(<App />);
        calculateExpressionByButtons('45x10');
        expect(screen.getByTestId('result')).toHaveTextContent('450');
      });
      it('Should correctly calculate the expression: 5+10/5', () => {
        render(<App />);
        calculateExpressionByButtons('5+10/5');
        expect(screen.getByTestId('result')).toHaveTextContent('7');
      });
      it('Should correctly calculate the expression: 3x10/5+200%+√36', () => {
        render(<App />);
        calculateExpressionByButtons('3x10/5+200%+√36');
        expect(screen.getByTestId('result')).toHaveTextContent('14');
      });
    });
    describe('Calculation using keys', () => {
      it('Key "Escape" should clear calculation and result', () => {
        render(<App />);
        calculateExpressionByKeys('6x2');
        expect(screen.getByTestId('calculation')).toHaveTextContent('6x2');
        expect(screen.getByTestId('result')).toHaveTextContent('12');

        userEvent.keyboard('{escape}');
        expect(screen.getByTestId('calculation')).toHaveTextContent('');
        expect(screen.getByTestId('result')).toHaveTextContent('0');
      });
      it('Should correctly calculate the expression: 45x10', () => {
        render(<App />);
        calculateExpressionByKeys('45x10');
        expect(screen.getByTestId('result')).toHaveTextContent('450');
      });
      it('Should correctly calculate the expression: 5+10/5', () => {
        render(<App />);
        calculateExpressionByKeys('5+10/5');
        expect(screen.getByTestId('result')).toHaveTextContent('7');
      });
      it('Should correctly calculate the expression: 3x10/5+200%', () => {
        render(<App />);
        calculateExpressionByKeys('3x10/5+200%');
        expect(screen.getByTestId('result')).toHaveTextContent('8');
      });
      it('Should correctly calculate the expression: 4x(300%+7)/4x(20-10)', () => {
        render(<App />);
        calculateExpressionByKeys('4x(300%+7)/4x(20-10)');
        expect(screen.getByTestId('result')).toHaveTextContent('100');
      });
    });
  });
});
