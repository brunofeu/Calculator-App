import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import CalculatorContext from '../Context/CalculatorContext';

function OperatorPad({value}) {

  const {setDisplay,operator, setOperator,calculatorParamLeft, setCalculatorParamLeft, calculatorParamRight, setCalculatorParamRight} = useContext(CalculatorContext);

  const handleClick = (event) => {
    let result = 0;
    const selectedOperator = event.target.innerHTML
    if(selectedOperator !== '=') {
      setOperator(selectedOperator)
      setCalculatorParamLeft(calculatorParamRight)
      setCalculatorParamRight('0')
      return
    }

    switch (operator) {
      case '/' :
        result = Number(calculatorParamLeft)/Number(calculatorParamRight)
        break;
      case 'x' :
        result = Number(calculatorParamLeft)*Number(calculatorParamRight)
        break;
      case '-' :
        result = Number(calculatorParamLeft)-Number(calculatorParamRight)
        break;
      case '+' :
        result = Number(calculatorParamLeft)+Number(calculatorParamRight)
        break
        default: return;
    }
    setCalculatorParamRight(result);
    setDisplay(result);
  }

// useEffect(() => {
//   console.log(operator)
// }, [operator])

  return (
    <div>
      <button type="button" onClick={handleClick}>{value}</button>
    </div>
  )
}

export default OperatorPad
