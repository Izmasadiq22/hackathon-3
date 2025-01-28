// "use client";

// import React from "react";

// export default function Pagination({ currentPage, totalPages, onPageChange }) {
//   const handlePageClick = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       onPageChange(page);
//     }
//   };

//   return (
//     <div className="flex justify-center space-x-2 mt-6">
//       <button
//         className={`px-3 py-1 border rounded ${
//           currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//         onClick={() => handlePageClick(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>

//       {Array.from({ length: totalPages }, (_, i) => (
//         <button
//           key={i}
//           className={`px-3 py-1 border rounded ${
//             currentPage === i + 1 ? "bg-orange-500 text-white" : ""
//           }`}
//           onClick={() => handlePageClick(i + 1)}
//         >
//           {i + 1}
//         </button>
//       ))}

//       <button
//         className={`px-3 py-1 border rounded ${
//           currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//         onClick={() => handlePageClick(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         Next
//       </button>
//     </div>
//   );
// }
