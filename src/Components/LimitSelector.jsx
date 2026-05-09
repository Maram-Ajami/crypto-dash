const LimitSelecror = ({limit, onLimitChange}) => {
    return (
            <div className="controls">
        <label htmlFor="limit">Limit:</label>
        <select
          value={limit}
          id="limit"
          onChange={(e) => onLimitChange(parseInt(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
      );
}
 
export default LimitSelecror;