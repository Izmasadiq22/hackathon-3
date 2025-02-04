"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image"; // Assuming this function works properly
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";
import ShopLine from "../components/Shopline";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FaRegHeart } from "react-icons/fa";
import { Product } from "../types/products";

const sanity = createClient({
  projectId: "j1efm4vy", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true,
  apiVersion: "2023-01-01",
});

// export interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
//   tags: string | string[];
//   slug: { current: string };
//   discountPercentage: number;
//   discountedPrice: number;
//   isNew: boolean;
//   description: string;
//   inventory: number;
// }

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleProducts, setVisibleProducts] = useState<number>(8);
  const [wishlist, setWishlist] = useState<Product[]>([]); // Wishlist state
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu state

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        "imageUrl": productImage.asset->url,
        tags,
        slug,
        discountPercentage,
        discountedPrice,
        isNew
      }`;

      const data = await sanity.fetch(query);

      const transformedData = data.map((product: any) => ({
        ...product,
        imageUrl: product.imageUrl || "",
      }));

      setProducts(transformedData);
      setFilteredProducts(transformedData); // Initialize filtered products
    } catch (error) {
      setError("Error fetching products.");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => {
        if (Array.isArray(product.tags)) {
          return product.tags.some(
            (tag) => tag.toLowerCase() === category.toLowerCase()
          );
        } else if (typeof product.tags === "string") {
          return product.tags.toLowerCase() === category.toLowerCase();
        }
        return false;
      });
      setFilteredProducts(filtered);
    }
  };

  // Handle price change
  const handlePriceChange = (minPrice: number, maxPrice: number) => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };

  // Handle 'See More' button
  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 8);
  };

  // Handle Add to Cart
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "bottom-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  // Handle Add to Wishlist
  const handleAddToWishlist = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item._id === product._id)) {
        Swal.fire({
          position: "bottom-right",
          icon: "info",
          title: `${product.title} is already in your wishlist`,
          showConfirmButton: false,
          timer: 1500,
        });
        return prevWishlist; // Prevent duplicates
      }
      const updatedWishlist = [...prevWishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save wishlist to localStorage
      Swal.fire({
        position: "bottom-right",
        icon: "success",
        title: `${product.title} added to wishlist`,
        showConfirmButton: false,
        timer: 1000,
      });
      return updatedWishlist;
    });
  };

  useEffect(() => {
    fetchProducts();
    // Load wishlist from localStorage
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-[#FFF3E3] fixed top-0 left-0 w-full z-10 p-4 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />

          {/* Hamburger Icon */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon icon="mdi:menu" className="w-8 h-8" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6">
            <Link href="/" className="font-semibold text-black">
              Home
            </Link>
            <Link href="/cart" className="font-semibold text-black">
              Shop
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
              href="/cart"
              className="block font-semibold text-black mb-2"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        className="bg-[#FFF3E3] relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}
      >
        <div className="flex flex-col items-center">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <h2 className="font-medium text-[48px] text-black">Shop</h2>
          <div className="flex items-center gap-1">
            <Link href="/" className="font-semibold text-[16px] text-black">
              Home
            </Link>
            <Icon
              icon="material-symbols:keyboard-arrow-right"
              className="w-5 h-5"
            />
            <p className="font-light text-[16px] text-black">Shop</p>
          </div>
        </div>
      </section>

      <ShopLine
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
      />

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div
            key={product._id}
            className="relative mt-6 bg-white shadow-md rounded-md overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <Link href={`/product/${product.slug.current}`}>
              {product.imageUrl && (
                <Image
                  src={urlFor(product.imageUrl).url()} // Assuming this returns a valid URL
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              )}
            </Link>

            <button
              className="bg-amber-700 text-white font-semibold mt-4 ml-40 py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </button>

            <h3 className="text-lg font-semibold ml-2">{product.title}</h3>
            <p className="text-sm text-gray-500 ml-2">
              {Array.isArray(product.tags)
                ? product.tags.join(", ")
                : product.tags}
            </p>

            <button
              onClick={(e) => handleAddToWishlist(e, product)}
              className="text-red-500 hover:text-red-700 transition duration-200 absolute bottom-0 right-0 p-4"
              aria-label="add to wishlist"
            >
              <FaRegHeart size={20} />
            </button>

            <div className="mt-2">
              <span className="text-[#B88E2F] font-bold text-lg ml-4">
                ${product.discountedPrice || product.price}
              </span>
              {product.discountedPrice && (
                <span className="text-gray-400 line-through text-sm ml-2">
                  ${product.price}
                </span>
              )}
            </div>
            {product.discountPercentage && (
              <p className="text-green-600 text-sm font-medium mt-1 ml-4 mb-2">
                {product.discountPercentage}% OFF
              </p>
            )}
          </div>
        ))}
      </div>

      {visibleProducts < filteredProducts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="mb-6 border border-[#B88E2F] text-[#B88E2F] px-6 py-2 rounded hover:bg-[#B88E2F] hover:text-white transition"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
