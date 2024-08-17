import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../provider/useAxiosCommon";
import Product from "../component/productUi/Product";
import Brand from "../component/leftSide/Brand";
import Category from "../component/leftSide/Category";
import Sort from "../component/Sort";
import Search from "../component/Search";
import Pagination from "../component/Pagination";
import PriceRange from "../component/leftSide/PriceRange";

const Home = () => {
  const axiosCommon = useAxiosCommon();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSorting, setIsSorting] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/products");
      return data;
    },
  });

  const applyFiltersAndSorting = useCallback(() => {
    let filtered = products;

    // Apply filtering based on selected brands and categories
    if (selectedBrands.length > 0 && !selectedBrands.includes("All")) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    if (selectedCategories.length > 0 && !selectedCategories.includes("All")) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Apply search filtering
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (priceRange.min !== "" && priceRange.max !== "") {
      filtered = filtered.filter(
        (product) =>
          product.price >= Number(priceRange.min) &&
          product.price <= Number(priceRange.max)
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedBrands, selectedCategories, searchQuery, priceRange]);

  useEffect(() => {
    applyFiltersAndSorting();
  }, [applyFiltersAndSorting]);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handlePriceChange = (min, max) => {
    setPriceRange({ min, max });
  };

  // Apply sorting manually in the render logic
  const sortedProducts = (() => {
    let sorted = [...filteredProducts]; // Create a copy of filteredProducts

    if (sortOption === "priceLowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighToLow") {
      sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
  })();

  if (isLoading) return <>Loading products .... </>;

  return (
    <div className="md:mx-0 mx-2">
      <div className="flex md:p-8 ">
        <div className="md:basis-1/5 basis-2/4  md:p-4 h-5">
          <div className="mt-6">
            <Brand onBrandChange={setSelectedBrands} />
          </div>
          <div className="mt-6">
            <Category onCategoryChange={setSelectedCategories} />
          </div>
          <div className="mt-6">
            {/* Uncomment if needed */}
            <PriceRange onPriceChange={handlePriceChange} />
          </div>
        </div>
        <div className="md:basis-4/5 basis-2/4  md:p-4 h-5">
          <div className="flex md:flex-row flex-col justify-between items-center mt-6">
            <Search onSearch={handleSearchChange} />
            <Sort onSortChange={handleSortChange} />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-10 ">
            {sortedProducts.length === 0 ? (
              <p className="text-center lg:col-span-3 md:col-span-2 col-span-1 bg-purple-50 h-52 flex justify-center items-center text-lg font-semibold">
                No Product is available.
              </p>
            ) : (
              sortedProducts.map((product) => (
                <Product product={product} key={product._id} />
              ))
            )}
          </div>
          <div className="flex justify-center ">
            <Pagination></Pagination>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
