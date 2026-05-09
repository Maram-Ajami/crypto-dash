import { useState, useEffect } from "react";
import CoinsCard from "./Components/CoinsCard";
const API_URL = import.meta.env.VITE_API_URL;
import LimitSelecror from "./Components/LimitSelector";
import FillterCoins from "./Components/FillterCoins";

const App = () => {
  const [Coins, setCoins] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [fillter, setFillter] = useState(10);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`,
        );
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
  }, [Error, limit]);
  const filteredCoins = Coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(fillter.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(fillter.toLowerCase())
    );
  });

  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
      {Loading && <p>Loading...</p>}
      {Error && <div className="error">{Error}</div>}
      <div className="top-controls">
        <FillterCoins fillter={fillter} onFillterChange={setFillter} />
        <LimitSelecror limit={limit} onLimitChange={setLimit} />
      </div>

      {!Loading && !Error && (
        <main className="grid">
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => <CoinsCard key={coin.id} coin={coin} />)
          ) : (
            <p className="noCoins">No coins found.</p>
          )}
        </main>
      )}
    </div>
  );
};

export default App;
