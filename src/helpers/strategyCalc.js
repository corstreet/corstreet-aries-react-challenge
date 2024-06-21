export const calculateStrategy = (options) => {
  // create the price range from exisiting options
  const priceRange = createPriceRange(options)

  // Find profit(or loss) from the data
  const profitLossData = priceRange.map(pricePoint => {
    let profit = 0;
    let breakeven = 0;
    let maxProfit = "";
    let maxLoss = "";
    if (!options.length) {
      // destructure the option data
      const { optionType, strike, price, quantity } = options;
      // calc profit for calls and puts separately 
      if (optionType.toLowerCase() === 'call') {
        profit += Math.max(pricePoint - strike, 0) * quantity - price * quantity;
        breakeven = strike + price;
        maxProfit = "infinite";
        maxLoss = price
      } else if (optionType.toLowerCase() === 'put') {
        profit += Math.max(strike - pricePoint, 0) * quantity - price * quantity;
        breakeven = strike - price;
        maxProfit = strike - price;
        maxLoss = "infinite"
      }
    } else {
      options.forEach(option => {
        // destructure the option data
        const { optionType, strike, price, quantity } = option;
        // calc profit for calls and puts separately 
        if (optionType.toLowerCase() === 'call') {
          profit += Math.max(pricePoint - strike, 0) * quantity - price * quantity;
        } else if (optionType.toLowerCase() === 'put') {
          profit += Math.max(strike - pricePoint, 0) * quantity - price * quantity;
        }
      });
    }
    return { pricePoint, profit, breakeven, maxProfit, maxLoss };
  })
  return profitLossData;
}

const createPriceRange = (options) => {
  if (!options.length) {
    const minPrice = options.strike - 50;
    const maxPrice = options.strike + 50;
    return Array.from({length: maxPrice - minPrice + 1}, (_, i) => i + minPrice );
  }
  const minPrice = Math.min(...options.map(item => item.strike)) - 50;
  const maxPrice = Math.max(...options.map(item => item.strike)) + 50;
  return Array.from({length: maxPrice - minPrice + 1}, (_, i) => i + minPrice );
}
