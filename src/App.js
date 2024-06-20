import AddOptionStrategyForm from './components/AddOptionStrategyForm';
import './App.css';
import { useState } from 'react';

function App() {

  const [optionsList, setOptionsList] = useState([]);
  const [graphData, setGraphData] = useState([]);

  const AddStrategy = (strategy) => {

    // Only allow 4 most recent strategy submissions
    let optionsListLength = optionsList.length;
    // if length>3
    if(optionsListLength > 3) {
      // remove oldest strategy
      optionsList.shift();
      // set options list
      setOptionsList(optionsList);
    }

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
