import React, { useContext } from 'react'
import CalculatorContext from '../Context/CalculatorContext';

function ClearPad({ value }) {
  const { setResult, setDisplay, setCalculatorParamLeft, setCalculatorParamRight } = useContext(CalculatorContext);

  const handleClick = (event) => {
    let selectedClear = event.target.innerHTML;
    setCalculatorParamRight('0');
    setDisplay('0');
    if (selectedClear === 'C') return
    setCalculatorParamLeft('0')
    setResult('0')
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>{value}</button>
    </div>
  )
}

export default ClearPad
