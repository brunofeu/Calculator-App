import React from 'react';
import ClearPad from './ClearPad';
import NumberPad from './NumberPad';
import OperatorPad from './OperatorPad';

function EntryPad() {
  return (
    <div className="entry-pad-container">
      <div>
        <div className="clear-container">
          <ClearPad value="C"/>
          <ClearPad value="AC"/>
        </div>
        <div className="numbers-container">
          <div className="numbers-row">
            <NumberPad value="7"/>
            <NumberPad value="8"/>
            <NumberPad value="9"/>
          </div>
          <div className="numbers-row">
            <NumberPad value="4"/>
            <NumberPad value="5"/>
            <NumberPad value="6"/>
          </div>
          <div className="numbers-row">
            <NumberPad value="1"/>
            <NumberPad value="2"/>
            <NumberPad value="3"/>
          </div>
          <div className="numbers-row">
            <NumberPad value="0"/>
          </div>
        </div>
      </div>
      <div className="operator-container">
        <OperatorPad value="/"/>
        <OperatorPad value="x"/>
        <OperatorPad value="-"/>
        <OperatorPad value="+"/>
        <OperatorPad value="="/>
      </div>
    </div>
  )
}

export default EntryPad
