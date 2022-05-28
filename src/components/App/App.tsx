import React, { useEffect, useState } from 'react';

import { KEYS, SPECIAL_BUTTONS, SPECIAL_KEYS } from '../../constants/constants';
import runCalculation from '../../helpers/runCalculation';
import Container from '../Calculator/Container/Container';
import Controls from '../Calculator/Controls/Controls';
import Header from '../Calculator/Header/Header';
import Layout from '../Layout/Layout';

function App() {
  const [calculation, setCalculation] = useState<string | null | undefined>(
    null
  );
  const [result, setResult] = useState<string>('0');

  const handlerClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    const char = event.target.textContent;

    if (char === SPECIAL_BUTTONS.RESULT) {
      if (calculation) {
        const result = runCalculation(calculation);

        setResult(result);
      }
    } else if (char === SPECIAL_BUTTONS.DELETE) {
      setCalculation(null);
      setResult('0');
    } else {
      setCalculation((prev) => (prev ? prev + char : char));
    }
  };

  const keyDownHandler = (event: {
    key: string | null | undefined;
    preventDefault: () => void;
  }) => {
    if (!event.key) return;
    if (KEYS.includes(event.key)) {
      setCalculation((prev) => (prev ? prev + event.key : event.key));
    } else if (event.key === SPECIAL_KEYS.ENTER) {
      event.preventDefault();
      if (calculation) {
        const result = runCalculation(calculation);

        setResult(result);
      }
    } else if (event.key === SPECIAL_KEYS.ESCAPE) {
      setCalculation(null);
      setResult('0');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  });

  return (
    <Layout>
      <Container>
        <Header calculation={calculation} result={result} />
        <Controls handlerClick={handlerClick} />
      </Container>
    </Layout>
  );
}

export default App;
