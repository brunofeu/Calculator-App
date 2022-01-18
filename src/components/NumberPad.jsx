import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import CalculatorContext from '../Context/CalculatorContext';

function NumberPad({ value }) {
  const { setDisplay, calculatorParamRight, setCalculatorParamRight } = useContext(CalculatorContext);

  const handleClick = (event) => {
    let selectedNumber = calculatorParamRight.concat(event.target.innerHTML)
    if (selectedNumber[0] === '0') selectedNumber = selectedNumber.substring(1);
    setCalculatorParamRight(`${selectedNumber}`)
    setDisplay(selectedNumber)
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>{value}</button>
    </div>
  )
}

export default NumberPad;
