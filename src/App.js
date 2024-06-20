import AddOptionStrategyForm from './components/AddOptionStrategyForm';
import './App.css';

function App() {

  const AddStrategy = (strategy) => {
    console.log(strategy);
    // Add to optionsList in state
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
