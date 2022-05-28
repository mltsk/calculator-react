import React, { useEffect, useState } from 'react';

import CalculatorContainer from '../CalculatorContainer/CalculatorContainer';
import CalculatorHeader from '../CalculatorHeader/CalculatorHeader';
import Controls from '../Controls/Controls';
import Layout from '../Layout/Layout';

function App() {
  const [calculation, setCalculation] = useState<string | null | undefined>(
    null
  );
  const [result, setResult] = useState<number>(0);

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
