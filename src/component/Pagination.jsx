import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn btn-xs mr-2"
      >
        <IoIosArrowBack />
      </button>
      <span className="text-base">
        Page{" "}
        <span className="text-purple-500 text-bold text-lg">
          {" "}
          {currentPage}{" "}
        </span>{" "}
        <span className="text-sm">/ {totalPages} </span>
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn btn-xs ml-2"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
