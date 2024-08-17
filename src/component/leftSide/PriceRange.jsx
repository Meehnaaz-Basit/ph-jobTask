import React, { useState } from "react";

const PriceRange = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
    onPriceChange(value, maxPrice);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    onPriceChange(minPrice, value);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <h2 className=" md:text-lg text-sm font-bold mb-4">Select Price Range</h2>
      <div className="flex md:flex-row flex-col gap-3">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="w-full p-2 border border-gray-300 rounded text-center"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="w-full p-2 border border-gray-300 rounded text-center"
        />
      </div>
    </div>
  );
};

export default PriceRange;
