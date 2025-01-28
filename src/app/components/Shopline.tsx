import React, { useState } from 'react';
import { HiRectangleStack } from 'react-icons/hi2';
import { MdOutlineFilterList } from 'react-icons/md';
import { PiCirclesFourFill } from 'react-icons/pi';

interface ShopLineProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onPriceChange: (minPrice: number, maxPrice: number) => void;
}

function ShopLine({ onSearch, onCategoryChange, onPriceChange }: ShopLineProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000); // Adjust max price as per your needs

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Trigger search
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category); // Trigger category change
  };

  const handlePriceChange = () => {
    onPriceChange(minPrice, maxPrice); // Trigger price filter
  };

  return (
    <div className="bg-[#F4F4F4] py-4 px-6 flex justify-between items-center flex-wrap">
      {/* Left Section */}
      <div className="flex items-center gap-4 flex-wrap mb-4 sm:mb-0">
        <div className="flex items-center gap-1 cursor-pointer">
          <MdOutlineFilterList className="text-xl" />
          <p className='ml-2'>Filter</p>
        </div>
        <div className="flex items-center gap-2">
          <PiCirclesFourFill className="text-xl cursor-pointer" />
          <HiRectangleStack className="text-xl ml-2 cursor-pointer" />
        </div>
        <div className="w-[2px] h-10 bg-gray-400 mx-4"></div>
        <p>Showing 1-8 of 24 results</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p>Search</p>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-2 py-1 border border-gray-300 rounded-md"
            placeholder="Search products..."
          />
        </div>
        <div className="flex items-center gap-2">
          <p>Category</p>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="px-2 py-1 bg-white border border-gray-300 rounded-md"
          >
            <option value="All">All</option>
            <option value="Sofas">Sofas</option>
            <option value="Bed">Bed</option>
            <option value="Table">Table</option>
            <option value="Vase">Vase</option>
            <option value="Lamp">Lamp</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <p>Price</p>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="px-2 py-1 border border-gray-300 rounded-md"
            placeholder="Min Price"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="px-2 py-1 border border-gray-300 rounded-md"
            placeholder="Max Price"
          />
          <button
            onClick={handlePriceChange}
            className="bg-amber-700 text-white px-4 py-1 rounded-md"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopLine;
