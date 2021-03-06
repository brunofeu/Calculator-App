import { useState, useEffect } from 'react';
import CalculatorContext from './CalculatorContext';

function CalculatorProvider({children}) {
  const [display, setDisplay] = useState(0);
  const [calculatorParamLeft, setCalculatorParamLeft] = useState('0');
  const [calculatorParamRight, setCalculatorParamRight] = useState('0');
  const [operator, setOperator] = useState('=');



  const state = {operator, setOperator,display, setDisplay, calculatorParamLeft, setCalculatorParamLeft, calculatorParamRight, setCalculatorParamRight}

  return (
    <CalculatorContext.Provider value={state}>
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorProvider;