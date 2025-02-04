"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../types/products";
import { FiTrash2 } from "react-icons/fi";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

// Define the Wishlist component
const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu state

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

  // Function to extract the image URL from the asset reference
  const getImageUrl = (image: { asset: { _ref: string } } | undefined | string) => {
    if (typeof image === "string") {
      return image; // If image is a direct URL string
    }
    if (image && image.asset) {
      return image.asset._ref || "/images/default-image.jpg"; // Fallback if _ref is not present
    }
    return "/images/default-image.jpg"; // Fallback if image is undefined or doesn't have an asset
  };

  return (
    <div className="container mx-auto p-6">
      {/* Navbar */}
      <nav className="bg-[#FFF3E3] fixed top-0 left-0 w-full z-10 p-4 shadow-md">
        <div className="flex justify-between items-center">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />

          {/* Hamburger Icon */}
          <div className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon icon="mdi:menu" className="w-8 h-8" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6">
            <Link href="/" className="font-semibold text-black">
              Home
            </Link>
            <Link href="/wishlist" className="font-semibold text-black">
              Wishlist
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2 bg-[#FFF3E3] p-4 rounded-md">
            <Link
              href="/"
              className="block font-semibold text-black mb-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/wishlist"
              className="block font-semibold text-black mb-2"
              onClick={() => setMenuOpen(false)}
            >
              Wishlist
            </Link>
          </div>
        )}
      </nav>

      <h2 className="text-3xl font-bold text-center mb-6">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-center text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <Image
                src={getImageUrl(product.imageUrl)} // Use the function to get the image URL
                alt={product.title}
                width={200}
                height={200}
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
