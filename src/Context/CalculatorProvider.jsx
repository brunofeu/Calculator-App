import { useState } from 'react';
import CalculatorContext from './CalculatorContext';

function CalculatorProvider({children}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const state = [menuOpen, setMenuOpen]
  return (
    <CalculatorContext.Provider value={state}>
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorProvider;