import './App.css';
import Display from './components/Display';
import EntryPad from './components/EntryPad';

function App() {
  
  return (
    <div className="calculator-container">
      <Display/>
      <EntryPad/>
    </div>
  );
};

export default App;
