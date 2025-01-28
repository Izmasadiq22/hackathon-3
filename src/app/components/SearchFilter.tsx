// import React, { useState } from "react";

// interface SearchFilterProps {
//   products: Product[];
//   onFilter: (filteredProducts: Product[]) => void;
// }

// const SearchFilter: React.FC<SearchFilterProps> = ({ products, onFilter }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedTag, setSelectedTag] = useState<string | null>(null);
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
//   const [isNew, setIsNew] = useState<boolean>(false);

//   const handleFilter = () => {
//     const filteredProducts = products.filter((product) => {
//       const matchesSearch = product.title
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase());
//       const matchesTag =
//         !selectedTag || product.tags.toLowerCase().includes(selectedTag);
//       const matchesPrice =
//         product.discountedPrice >= priceRange[0] &&
//         product.discountedPrice <= priceRange[1];
//       const matchesIsNew = isNew ? product.isNew : true;

//       return matchesSearch && matchesTag && matchesPrice && matchesIsNew;
//     });

//     onFilter(filteredProducts);
//   };

//   return (
//     <div className="bg-gray-100 p-4 rounded-lg mb-6">
//       <h3 className="text-xl font-bold mb-4">Search and Filter</h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Search Input */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Search</label>
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search by title..."
//             className="w-full p-2 border rounded-md"
//           />
//         </div>

//         {/* Tag Filter */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Tags</label>
//           <select
//             value={selectedTag || ""}
//             onChange={(e) =>
//               setSelectedTag(e.target.value === "" ? null : e.target.value)
//             }
//             className="w-full p-2 border rounded-md"
//           >
//             <option value="">All Tags</option>
//             {[...new Set(products.map((product) => product.tags))].map(
//               (tag, index) => (
//                 <option key={index} value={tag}>
//                   {tag}
//                 </option>
//               )
//             )}
//           </select>
//         </div>

//         {/* Price Range */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Price Range</label>
//           <div className="flex items-center gap-2">
//             <input
//               type="number"
//               value={priceRange[0]}
//               onChange={(e) =>
//                 setPriceRange([+e.target.value, priceRange[1]])
//               }
//               placeholder="Min"
//               className="w-full p-2 border rounded-md"
//             />
//             <input
//               type="number"
//               value={priceRange[1]}
//               onChange={(e) =>
//                 setPriceRange([priceRange[0], +e.target.value])
//               }
//               placeholder="Max"
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//         </div>

//         {/* New Arrival Filter */}
//         <div>
//           <label className="block text-sm font-medium mb-2">New Arrivals</label>
//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={isNew}
//               onChange={() => setIsNew(!isNew)}
//               className="w-5 h-5"
//             />
//             <span className="text-sm">Show only new arrivals</span>
//           </div>
//         </div>
//       </div>

//       {/* Apply Filter Button */}
//       <div className="flex justify-end mt-4">
//         <button
//           onClick={handleFilter}
//           className="bg-[#B88E2F] text-white px-6 py-2 rounded-lg hover:bg-[#8C6D1F] transition"
//         >
//           Apply Filters
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchFilter;
