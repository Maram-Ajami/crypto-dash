const CoinsCard = ({ coin }) => {
  return (
    <div className="coin-card">
      <div className="coin-header">
        <img src={coin.image} alt={coin.name} className="coin-image" />
        <div>
          <h2> {coin.name} </h2>
          <p className="symbol">({coin.symbol.toUpperCase()})</p>
        </div>
        <div className="coin-price">
          <p>Price: ${coin.current_price.toLocaleString()}</p>
          <p
            className={
              coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
            }
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
          {/* <p>Market cap: {coin.market_cap.toLocaleString1()}</p> */}
        </div>
      </div>
    </div>
  );
};

export default CoinsCard;
