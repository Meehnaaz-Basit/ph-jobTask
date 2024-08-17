const Modal = ({ isVisible, onClose, product, renderStars }) => {
  const {
    _id,
    name,
    image,
    price,
    ratings,
    description,
    brand,
    category,
    createdTime,
    createdDate,
  } = product;
  // Parse the date and time
  const date = new Date(`${createdDate}T${createdTime}`);

  // Format the date to '3-Aug-24'
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });

  // Format the time to '1:00 pm'
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative flex justify-center items-center lg:max-w-4xl md:max-w-2xl max-w-md md:m-0 m-4 md:h-2/4 h-auto">
        <button
          className="absolute top-2 right-5 text-gray-600 hover:text-gray-800 text-3xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex md:flex-row flex-col items-center">
          <div className="basis-2/5 mr-8">
            <img
              src={image}
              className="md:w-80 w-56 object-contain"
              alt={name}
            />
          </div>
          <div className="basis-3/5 md:border-l-2 border-none ">
            <div className="ml-8 space-y-2">
              <h2 className="font-bold text-xl text-purple-600">{name}</h2>
              <p className="">
                {" "}
                <span className="font-semibold">Description :</span>{" "}
                {description}
              </p>
              <p>
                <span className="font-semibold">Brand :</span> {brand}
              </p>
              <p>
                <span className="font-semibold">Category :</span> {category}
              </p>
              <p>
                <span className="font-semibold">Launched on :</span>{" "}
                {formattedDate} {formattedTime}
              </p>
              <p className="flex">
                <span className="font-semibold">Rating :</span>{" "}
                {renderStars(ratings)}
              </p>
              <p>
                <span className="font-semibold">Price :</span>{" "}
                <span className="text-purple-500 font-semibold">{price}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
