import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../provider/useAxiosCommon";
import Product from "../component/productUi/Product";

const Home = () => {
  const axiosCommon = useAxiosCommon();

  const { data: products = {}, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/products");
      console.log(data);
      return data;
    },
  });

  return (
    <div>
      <h2>this is home</h2>
      <div className="flex ">
        <div className="basis-1/5 bg-red-400 h-5"></div>
        <div className="basis-4/5 bg-green-400 h-5">
          <div className="grid lg:grid-cols-3 md:grid-col-2 grid-col gap-3 my-10 ">
            {products?.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
