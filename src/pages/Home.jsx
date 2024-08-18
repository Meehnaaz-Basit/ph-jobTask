// import React, { useState, useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosCommon from "../provider/useAxiosCommon";
// import Product from "../component/productUi/Product";
// import Brand from "../component/leftSide/Brand";
// import Category from "../component/leftSide/Category";
// import Sort from "../component/Sort";
// import Search from "../component/Search";
// import Pagination from "../component/Pagination";
// import PriceRange from "../component/leftSide/PriceRange";
// import Footer from "../component/Footer";

// const Home = () => {
//   const axiosCommon = useAxiosCommon();
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [sortOption, setSortOption] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [priceRange, setPriceRange] = useState({ min: "", max: "" });
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);

//   // Fetch products
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["products", page],
//     queryFn: async () => {
//       const response = await axiosCommon.get(`/products?page=${page}&limit=10`);
//       return response.data;
//     },
//   });

//   useEffect(() => {
//     if (data) {
//       console.log("API response data:", data);

//       const totalProducts = data.length;
//       setProducts(data);
//       setTotalPages(Math.ceil(totalProducts / 10));
//     } else {
//       console.error("Data format is incorrect or empty.");
//     }
//   }, [data]);

//   useEffect(() => {
//     const applyFiltersAndSorting = () => {
//       let filtered = [...products];

//       // Apply filtering
//       if (selectedBrands.length) {
//         filtered = filtered.filter((product) =>
//           selectedBrands.includes(product.brand)
//         );
//       }
//       if (selectedCategories.length) {
//         filtered = filtered.filter((product) =>
//           selectedCategories.includes(product.category)
//         );
//       }
//       if (searchQuery) {
//         filtered = filtered.filter((product) =>
//           product.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//       }
//       if (priceRange.min || priceRange.max) {
//         filtered = filtered.filter((product) => {
//           const price = parseFloat(product.price);
//           return (
//             (!priceRange.min || price >= parseFloat(priceRange.min)) &&
//             (!priceRange.max || price <= parseFloat(priceRange.max))
//           );
//         });
//       }

//       // Apply sorting
//       if (sortOption === "price-asc") {
//         filtered.sort((a, b) => a.price - b.price);
//       } else if (sortOption === "price-desc") {
//         filtered.sort((a, b) => b.price - a.price);
//       }

//       // Paginate the filtered results
//       const startIndex = (page - 1) * 10;
//       const paginated = filtered.slice(startIndex, startIndex + 10);
//       setFilteredProducts(paginated);
//     };

//     applyFiltersAndSorting();
//   }, [
//     products,
//     selectedBrands,
//     selectedCategories,
//     searchQuery,
//     priceRange,
//     sortOption,
//     page,
//   ]);

//   const handleSortChange = (option) => setSortOption(option);
//   const handleSearchChange = (query) => setSearchQuery(query);
//   const handlePriceChange = (min, max) => setPriceRange({ min, max });
//   const handlePageChange = (newPage) => setPage(newPage);

//   if (isLoading) return <>Loading products ....</>;
//   if (error) return <>Error loading products.</>;

//   return (
//     <div className="md:mx-0 mx-2">
//       <div className="flex md:p-8">
//         <div className="md:basis-1/5 basis-2/4 md:p-4">
//           <Brand onBrandChange={setSelectedBrands} />
//           <Category onCategoryChange={setSelectedCategories} />
//           <PriceRange onPriceChange={handlePriceChange} />
//         </div>
//         <div className="md:basis-4/5 basis-2/4 md:p-4">
//           <div className="flex md:flex-row flex-col justify-between items-center mt-6">
//             <Search onSearch={handleSearchChange} />
//             <Sort onSortChange={handleSortChange} />
//           </div>
//           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-10">
//             {filteredProducts.length === 0 ? (
//               <p className="text-center lg:col-span-3 md:col-span-2 col-span-1 bg-purple-50 h-52 flex justify-center items-center text-lg font-semibold">
//                 No Product is available.
//               </p>
//             ) : (
//               filteredProducts.map((product) => (
//                 <Product product={product} key={product._id} />
//               ))
//             )}
//           </div>
//           <div className="flex justify-center">
//             <Pagination
//               currentPage={page}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//             />
//           </div>
//           <br />
//         </div>
//       </div>
//       <div className="absolute left-0 bg-purple-500 w-full p-6 text-center">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../provider/useAxiosCommon";
import Product from "../component/productUi/Product";
import Brand from "../component/leftSide/Brand";
import Category from "../component/leftSide/Category";
import Sort from "../component/Sort";
import Search from "../component/Search";
import Pagination from "../component/Pagination";
import PriceRange from "../component/leftSide/PriceRange";
import Footer from "../component/Footer";
import Loader from "../component/Loader";

const Home = () => {
  const axiosCommon = useAxiosCommon();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch products
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page],
    queryFn: async () => {
      const response = await axiosCommon.get(`/products?page=${page}&limit=10`);
      return response.data;
    },
  });

  useEffect(() => {
    if (data) {
      console.log("API response data:", data);

      setProducts(data);
      setTotalPages(Math.ceil(data.length / 10));
    } else {
      console.error("Data format is incorrect or empty.");
    }
  }, [data]);

  useEffect(() => {
    // Step 1: Apply filters
    let filtered = products;

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    if (priceRange.min || priceRange.max) {
      filtered = filtered.filter((product) => {
        const price = parseFloat(product.price);
        return (
          (!priceRange.min || price >= parseFloat(priceRange.min)) &&
          (!priceRange.max || price <= parseFloat(priceRange.max))
        );
      });
    }

    // Step 2: Sort filtered products
    if (sortOption === "priceLowToHigh") {
      filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === "priceHighToLow") {
      filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    // Step 3: Paginate results
    const productsPerPage = 10;
    const startIndex = (page - 1) * productsPerPage;
    const paginated = filtered.slice(startIndex, startIndex + productsPerPage);

    setFilteredProducts(paginated);
    setTotalPages(Math.ceil(filtered.length / productsPerPage));
  }, [
    products,
    selectedBrands,
    selectedCategories,
    searchQuery,
    priceRange,
    sortOption,
    page,
  ]);

  const handleSortChange = (option) => setSortOption(option);
  const handleSearchChange = (query) => setSearchQuery(query);
  const handlePriceChange = (min, max) => setPriceRange({ min, max });
  const handlePageChange = (newPage) => setPage(newPage);

  if (isLoading) return <Loader />;
  if (error) return <>Error loading products.</>;

  return (
    <div className="md:mx-0 mx-2">
      <div className="flex md:p-8">
        <div className="md:basis-1/5 basis-2/4 md:p-4">
          <Brand onBrandChange={setSelectedBrands} />
          <Category onCategoryChange={setSelectedCategories} />
          <PriceRange onPriceChange={handlePriceChange} />
        </div>
        <div className="md:basis-4/5 basis-2/4 md:p-4">
          <div className="flex md:flex-row flex-col justify-between items-center mt-6">
            <Search onSearch={handleSearchChange} />
            <Sort onSortChange={handleSortChange} />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-10">
            {filteredProducts.length === 0 ? (
              <p className="text-center lg:col-span-3 md:col-span-2 col-span-1 bg-purple-50 h-52 flex justify-center items-center text-lg font-semibold">
                No Product is available.
              </p>
            ) : (
              filteredProducts.map((product) => (
                <Product product={product} key={product._id} />
              ))
            )}
          </div>
          <div className="flex justify-center">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
          <br />
        </div>
      </div>
      <div className="absolute left-0 bg-purple-500 w-full p-6 text-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
