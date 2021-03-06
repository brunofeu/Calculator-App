import React, { useContext } from 'react'
import CalculatorContext from '../Context/CalculatorContext'

function Display() {
  const {display} = useContext(CalculatorContext)
  return (
    <div className="display-container">
      {display}
    </div>
  )
}

export default Display
