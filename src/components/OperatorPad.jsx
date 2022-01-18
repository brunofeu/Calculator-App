import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import CalculatorContext from '../Context/CalculatorContext';

function OperatorPad({ value }) {

  const { setDisplay, operator, setOperator, calculatorParamLeft, setCalculatorParamLeft, calculatorParamRight, setCalculatorParamRight } = useContext(CalculatorContext);

  const switchOperator = (operator) => {
    let result = 0;
    switch (operator) {
      case '/':
        result = Number(calculatorParamLeft) / Number(calculatorParamRight)
        break;
      case 'x':
        result = Number(calculatorParamLeft) * Number(calculatorParamRight)
        break;
      case '-':
        result = Number(calculatorParamLeft) - Number(calculatorParamRight)
        break;
      case '+':
        result = Number(calculatorParamLeft) + Number(calculatorParamRight)
        break
      default: return result;
    }
    return result
  }

  const handleClick = (event) => {
    const selectedOperator = event.target.innerHTML
    const math = switchOperator(operator)

    if (selectedOperator !== '=') {
      setOperator(selectedOperator)
      setCalculatorParamLeft(math)
      setCalculatorParamRight('0')
    } else {
      setCalculatorParamLeft('0')
      setCalculatorParamRight(math);
    }
    setDisplay(math)
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>{value}</button>
    </div>
  )
}

export default OperatorPad
