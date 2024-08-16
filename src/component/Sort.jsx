const Sort = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div>
      <select onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
