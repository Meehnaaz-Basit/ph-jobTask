import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Product = ({ product }) => {
  const { _id, name, image, price, brand, ratings } = product;

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
    <div className="flex flex-col items-center bg-gray-100 mx-2 rounded-md p-6">
      <div>
        <img
          src={image}
          className="w-52 h-52 rounded-md object-cover"
          alt={name}
        />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">${price}</p>
        <div className="flex justify-center mt-2">{renderStars(ratings)}</div>
      </div>
    </div>
  );
};

export default Product;
