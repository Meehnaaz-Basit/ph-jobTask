import React, { useState, useEffect } from "react";

const brands = ["All", "Apple", "Samsung", "Dell", "Sony", "Bose"];

const Brand = ({ onBrandChange }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleCheckboxChange = (event) => {
    event.preventDefault();
    const brand = event.target.value;
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((item) => item !== brand)
        : [...prevSelected, brand]
    );
  };

  useEffect(() => {
    onBrandChange(selectedBrands);
  }, [selectedBrands, onBrandChange]);

  return (
    <div>
      <h2>Select Brand(s)</h2>
      {brands.map((brand) => (
        <div key={brand} className="flex items-center gap-2 my-2">
          <input
            type="checkbox"
            className="w-6 h-6"
            value={brand}
            checked={selectedBrands.includes(brand)}
            onChange={handleCheckboxChange}
          />
          <label className="text-base">{brand}</label>
        </div>
      ))}
    </div>
  );
};

export default Brand;
