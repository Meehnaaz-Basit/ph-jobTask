import loader from "./../../public/img/loader.svg";

const Loader = () => {
  return (
    <div className="flex h-[70vh] justify-center items-center">
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
