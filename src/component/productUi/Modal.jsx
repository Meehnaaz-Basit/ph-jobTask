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
      <div className="bg-white p-8 rounded-lg shadow-lg relative flex justify-center items-center max-w-4xl h-2/4">
        <button
          className="absolute top-2 right-5 text-gray-600 hover:text-gray-800 text-3xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex items-center">
          <div className="basis-2/5 mr-8">
            <img src={image} className="w-80" alt={name} />
          </div>
          <div className="basis-3/5 border-l-2 ">
            <div className="ml-8">
              <h2>{name}</h2>
              <p className="">{description}</p>
              <p>Brand : {brand}</p>
              <p>Category : {category}</p>
              <p>
                Launched on : {formattedDate} {formattedTime}
              </p>
              <p className="flex">Rating : {renderStars(ratings)}</p>
              <p>Price : {price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
