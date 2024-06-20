import AddOptionStrategyForm from './components/AddOptionStrategyForm';
import './App.css';
import { useState } from 'react';

function App() {

  const [optionsList, setOptionsList] = useState([]);
  const [graphData, setGraphData] = useState([]);

  const AddStrategy = (strategy) => {

    // Add to optionsList in state
    const updatedOptionsList = [...optionsList, strategy];
    setOptionsList(updatedOptionsList);

    // use helper to calculate parameters for graph
    // set graph options in state
  }

  return (
    <div className="App">
      <AddOptionStrategyForm handleInput={AddStrategy} />
    </div>
  );
}

export default App;
