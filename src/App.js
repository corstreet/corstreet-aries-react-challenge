import AddOptionStrategyForm from './components/AddOptionStrategyForm';
import OptionsGraph from './components/OptionsGraph';
import './App.css';
import { useState, useEffect } from 'react';
import { calculateStrategy } from './helpers/strategyCalc'

function App() {

  const [optionsList, setOptionsList] = useState([
    {
      optionType: "call",
      strike: 100,
      price: 16.50,
      quantity: 1,
    },
    {
      optionType: "call",
      strike: 150,
      price: 11.50,
      quantity: 1,
    },
    {
      optionType: "call",
      strike: 85,
      price: 7.00,
      quantity: 1,
    },
    {
      optionType: "call",
      strike: 95,
      price: 10,
      quantity: 1,
    },
  ]);
  const [graphData, setGraphData] = useState([]);
  const [breakeven, setBreakeven] = useState("");
  const [maxProfit, setMaxProfit] = useState("");
  const [maxLoss, setMaxLoss] = useState("");

  useEffect(() => {
    // calc sample data for graph
    const calcData = calculateStrategy(optionsList);
    // set the sample graph data
    setGraphData(calcData)

  }, [optionsList])

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
    const calcData = calculateStrategy(updatedOptionsList)
    // set graph options in state
    setGraphData(calcData);
  }

  const handleTabClick = (e) => {
    const key = e.target.getAttribute("data-key");
    if (key === "overall") {
      console.log(key);
      const calcData = calculateStrategy(optionsList);
      setGraphData(calcData);
      return;
    }
    const calcData = calculateStrategy(optionsList[key]);
    setGraphData(calcData);
    setBreakeven(calcData[key].breakeven);
    setMaxProfit(calcData[key].maxProfit);
    setMaxLoss(calcData[key].maxLoss);
  }

  return (
    <div className="App">
      <h1 className="calc_h1">tradearies.com</h1>
      <AddOptionStrategyForm handleInput={AddStrategy} />
      <div className='additional-info__row'>
        <div className='info-item'>Max Profit: {maxProfit}</div>
        <div className='info-item'>Max Loss: {maxLoss}</div>
        <div className='info-item'>Breakeven: {breakeven}</div>
      </div>
      <div className='tab_row'>
        <div onClick={handleTabClick} className='tab' data-key={0}>Option 1</div>
        <div onClick={handleTabClick} className='tab' data-key={1}>Option 2</div>
        <div onClick={handleTabClick} className='tab' data-key={2}>Option 3</div>
        <div onClick={handleTabClick} className='tab' data-key={3}>Option 4</div>
        <div onClick={handleTabClick} className='tab' data-key="overall">Overall</div>
      </div>
      <OptionsGraph data={graphData} />
    </div>
  );
}

export default App;
