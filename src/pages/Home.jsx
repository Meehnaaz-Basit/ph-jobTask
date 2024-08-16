import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../provider/useAxiosCommon";
import Product from "../component/productUi/Product";
import PriceRange from "../component/leftSide/PriceRange";
import Brand from "../component/leftSide/Brand";
import Category from "../component/leftSide/Category";

const Home = () => {
  const axiosCommon = useAxiosCommon();
  const [selectedBrands, setSelectedBrands] = useState([]);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["filter-products", selectedBrands],
    queryFn: async () => {
      const { data } = await axiosCommon.post("/filter-products", {
        brands: selectedBrands,
      });
      return data;
    },
  });

  if (isLoading) return <>Loading .... </>;

  return (
    <div>
      <h2>This is home</h2>
      <div className="flex md:p-8">
        <div className="md:basis-1/5 basis-1/3 bg-red-400 md:p-4 h-5">
          <div>
            <PriceRange />
          </div>
          <div className="mt-6">
            <Brand onBrandChange={setSelectedBrands} />
          </div>
          <div>
            <Category />
          </div>
        </div>
        <div className="md:basis-4/5 basis-2/3 bg-green-400 md:p-4 h-5">
          <h1>{products.length}</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-10 ">
            {products.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
