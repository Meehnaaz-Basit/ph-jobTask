import { FaStar, FaStarHalfAlt, FaRegStar, FaEye } from "react-icons/fa";
import "./style.css";
import { useState } from "react";
import Modal from "./Modal";

const Product = ({ product }) => {
  const { _id, name, image, price, ratings } = product;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
    }
    return stars;
  };

  return (
    <div className="flex flex-col items-center bg-purple-50 mx-2 my-2 rounded-md md:p-6 p-2 relative  my-card">
      <div className="img-card">
        <img
          src={image}
          className="md:w-52 md:h-52 w-36 h-36 rounded-md object-contain"
          alt={name}
        />
      </div>
      <div className="text-center mt-4 my-des">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">${price}</p>
        <div className="flex justify-center mt-2">{renderStars(ratings)}</div>
      </div>
      {/*  */}
      {/* <div className="absolute z-10 inset-0 flex items-center justify-center cursor-pointer my-view">
        <FaEye className="text-green-400 text-5xl " />
      </div> */}
      <div
        className="absolute z-10 inset-0 flex items-center justify-center cursor-pointer my-view"
        // onClick={() => setIsModalVisible(true)}
      >
        <FaEye
          className="text-white md:text-5xl text-3xl"
          onClick={() => setIsModalVisible(true)}
        />
      </div>
      <Modal
        isVisible={isModalVisible}
        product={product}
        renderStars={renderStars}
        onClose={() => setIsModalVisible(false)}
      ></Modal>
      <div className="my-opacity absolute top-0  bg-purple-500 opacity-40 h-full w-0 rounded-md"></div>
    </div>
  );
};

export default Product;
