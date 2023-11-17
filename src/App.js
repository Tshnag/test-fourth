import './App.css';
import TestButton from './components/TestButton';
import TestImage from './components/TestImage';
import TestInput from './components/TestInput';

function App() {
  return (
    <div className="App">
      Hello App
      <TestImage></TestImage>
      <TestInput onHover={()=> newHeight="50vh"}></TestInput>
      <TestButton></TestButton>

    </div>
  );
}

export default App;
