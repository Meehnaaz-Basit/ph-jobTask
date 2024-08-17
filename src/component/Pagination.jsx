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

import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 0) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 0}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Previous
      </button>
      <span>
        Page {currentPage + 1} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage >= totalPages - 1}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
