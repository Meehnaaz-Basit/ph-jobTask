// import React from "react";

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const handlePrevious = () => {
//     if (currentPage > 0) onPageChange(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages - 1) onPageChange(currentPage + 1);
//   };

//   return (
//     <div className="flex items-center justify-center space-x-4">
//       <button
//         onClick={handlePrevious}
//         disabled={currentPage === 0}
//         className="px-4 py-2 bg-gray-200 rounded"
//       >
//         Previous
//       </button>
//       <span>
//         Page {currentPage + 1} of {totalPages}
//       </span>
//       <button
//         onClick={handleNext}
//         disabled={currentPage >= totalPages - 1}
//         className="px-4 py-2 bg-gray-200 rounded"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;

// Pagination.jsx
import React from "react";
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
        <span className="text-purple-500 bold text-lg"> {currentPage} </span>{" "}
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
