const FillterCoins = ({ fillter, onFillterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        value={fillter}
        placeholder="Fillter Coins bBy Name Or Symbol"
        onChange={(e) => onFillterChange(e.target.value)}
      />
    </div>
  );
};

export default FillterCoins;
