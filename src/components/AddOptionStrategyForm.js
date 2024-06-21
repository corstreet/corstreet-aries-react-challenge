import React, {useState} from 'react'

function AddOptionStrategyForm({handleInput}) {
  // save strategy from form to state
  const [strategy, setStrategy] = useState({
    optionType: '',
    strike: '',
    price: '',
    quantity: '',
  })

  const handleSubmit = (e) => {
    // No refresh
    e.preventDefault();

    // Use behavior passed from props
    handleInput(strategy);
    // Reset state
    setStrategy({ optionType: '', strike: '', price: '', quantity: ''})

  }

  const handleChange = (e) => {
    // grab name and value from e.target
    const {name, value} = e.target;

    //update state
    setStrategy({...strategy, [name]: value});
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="call or put" type="text" name="optionType" value={strategy.optionType} required />
        <input onChange={handleChange} placeholder="strike price" type="number" name="strike" value={strategy.strike} required />
        <input onChange={handleChange} placeholder="price paid" type="number" name="price" value={strategy.premium} required />
        <input onChange={handleChange} placeholder="quantity" type="number" name="quantity" value={strategy.quantity} required />
        <button type='submit'>Submit Options Details</button>
    </form>
  )
}

export default AddOptionStrategyForm