import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [USD,setUSD] = useState(0);

  const input_value = (event) => {
    setUSD(event.target.value)
  }

  const onChange = (event) => {
    const selectedCoin = (coins.find(coin => coin.symbol === event.target.value)).quotes.USD.price;
    setSelectedCoin(selectedCoin)
    setUSD(0)
  }
  
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json)
      setLoading(false);
    })
  }, [])
  return (
  <div>
    <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
    
    {loading ? <strong>Loading...</strong> : 
    <select onChange={onChange}>
      {coins.map((coin, index) => <option key={coin.symbol} value={coin.symbol} selected={index === 0 ? "selected" : null}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>)}
    </select>}
    <div>
      <input 
        onChange={input_value}
        type="number" 
        min="0" 
        placeholder="You can buy ($ => BTC)" 
        value={USD}
      />
      <div>Result : {selectedCoin > 0 ? USD / selectedCoin : ""}</div>
    </div>
  </div>
  );
}

export default App;
