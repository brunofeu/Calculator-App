import React, { useContext } from 'react'
import CalculatorContext from '../Context/CalculatorContext'

function Display() {
  const {display, setDisplay} = useContext(CalculatorContext)
  return (
    <div>
      {display}
    </div>
  )
}

export default Display
