import React, { useEffect, useState } from 'react';

import { KEYS, SPECIAL_KEYS } from '../../constants/constants';
import CalculatorContainer from '../CalculatorContainer/CalculatorContainer';
import CalculatorHeader from '../CalculatorHeader/CalculatorHeader';
import Controls from '../Controls/Controls';
import Layout from '../Layout/Layout';

function App() {
  const [calculation, setCalculation] = useState<string | null | undefined>(
    null
  );
  const [result, setResult] = useState<number>(0);

  const keyDownHandler = (event: {
    key: string | null | undefined;
    preventDefault: () => void;
  }) => {
    if (!event.key) return;
    if (KEYS.includes(event.key)) {
      setCalculation((prev) => (prev ? prev + event.key : event.key));
    } else if (event.key === SPECIAL_KEYS.ENTER) {
      event.preventDefault();
      console.log('calculation...');
    } else if (event.key === SPECIAL_KEYS.ESCAPE) {
      setCalculation(null);
      setResult(0);
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
      <CalculatorContainer>
        <CalculatorHeader calculation={calculation} result={result} />
        <Controls setCalculation={setCalculation} />
      </CalculatorContainer>
    </Layout>
  );
}

export default App;
