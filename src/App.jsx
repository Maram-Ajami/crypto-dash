import { useState, useEffect } from "react";
import CoinsCard from "./Components/CoinsCard";
const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&Order=market_cap_desc&per_page=12&page=1&sparkline=false&sparkline=false";

const App = () => {
  const [Coins, setCoins] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data);
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [Error]);

  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
      {Loading && <p>Loading...</p>}
      {Error && <div className="error">{Error}</div>}
      {!Loading && !Error && (
        <main className="grid">
          {Coins.map((coin) => (
           < CoinsCard key={coin.id}  coin={coin}/>
          ))}
        </main>
      )}
    </div>
  );
};

export default App;
