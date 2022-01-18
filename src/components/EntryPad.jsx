import React from 'react'
import Button from './Button'

function EntryPad() {
  return (
    <div>
      <div>
        <Button value="9" />
        <Button value="8" />
        <Button value="7" />
      </div>
      <div>
        <Button value="6" />
        <Button value="5" />
        <Button value="4" />
      </div>
      <div>
        <Button value="3" />
        <Button value="2" />
        <Button value="1" />
      </div>
      <div>
        <Button value="0" />
      </div>
    </div>
  )
}

export default EntryPad
