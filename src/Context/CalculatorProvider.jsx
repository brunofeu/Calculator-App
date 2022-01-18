import { useState } from 'react';
import CalculatorContext from './CalculatorContext';

function CalculatorProvider({children}) {
  const [display, setDisplay] = useState(0);

  const state = {display, setDisplay}

  return (
    <CalculatorContext.Provider value={state}>
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorProvider;