"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../types/products";
import { FiTrash2 } from "react-icons/fi";


const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    // Load wishlist from localStorage on component mount
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  // Handle removing product from wishlist
  const handleRemoveFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((product) => product._id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save updated wishlist to localStorage
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-center text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <img
                src={product.imageUrl || '/images/default-image.jpg'} // Default fallback image if imageUrl is not available
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
              <p className="text-lg font-medium text-gray-600 mt-2">${product.discountedPrice || product.price}</p>
              <div className="mt-4 flex justify-between items-center">
              <button
                 onClick={() => handleRemoveFromWishlist(product._id)}
                  className="text-red-500 hover:text-red-700 transition duration-200"
                  aria-label="Remove from wishlist"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
