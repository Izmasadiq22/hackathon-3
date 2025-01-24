"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image"; // Assuming this function is working properly
import { Icon } from "@iconify/react/dist/iconify.js";
import ShopLine from "../components/Shopline";
import Feature from "../components/Feature";

const sanity = createClient({
  projectId: "j1efm4vy", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true,
  apiVersion: "2023-01-01",
});

export interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  tags: string;
  slug: { current: string }; // Ensure the slug has the "current" field
  discountPercentage: number;
  discountedPrice: number;
  isNew: boolean;
  description: string;
}

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<number>(8);

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
        isNew,
        description
      }`;

      const data = await sanity.fetch(query);
      console.log("Fetched products:", data); // Debugging the fetched data
      setProducts(data);
    } catch (error) {
      setError("Error fetching products.");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + (product.discountedPrice || product.price),
      0
    );
  };

  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 8);
  };

  const [expandedDescription, setExpandedDescription] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDescription = (id: string) => {
    setExpandedDescription((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
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
            <Icon icon="material-symbols:keyboard-arrow-right" className="w-5 h-5" />
            <p className="font-light text-[16px] text-black">Shop</p>
          </div>
        </div>
      </section>


      <div>
        <ShopLine />
      </div>

      <h2 className="text-3xl font-bold text-center mb-8 mt-4">Shop Now</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, visibleProducts).map((product) => (
          <div
            key={product._id}
            className="relative bg-white shadow-md rounded-md overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            {/* Product Image */}
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

            {/* Product Details */}
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.tags}</p>

            {/* Description with truncation */}
            <div className="text-sm text-gray-600 mt-2">
              {expandedDescription[product._id] ? (
                product.description // Show full description
              ) : (
                <>{product.description?.slice(0, 150)}...</> // Show first 150 characters
              )}
            </div>

            {/* Toggle Read More */}
            <button
              onClick={() => toggleDescription(product._id)}
              className="text-[#B88E2F] text-sm mt-2"
            >
              {expandedDescription[product._id] ? "Read Less" : "Read More"}
            </button>

            <div className="mt-2">
              <span className="text-[#B88E2F] font-bold text-lg">
                ₹{product.discountedPrice || product.price}
              </span>
              {product.discountedPrice && (
                <span className="text-gray-400 line-through text-sm ml-2">
                  ₹{product.price}
                </span>
              )}
            </div>
            {product.discountPercentage && (
              <p className="text-green-600 text-sm font-medium mt-1">
                {product.discountPercentage}% OFF
              </p>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)} // Calls the addToCart function
              className="mt-4 bg-[#B88E2F] text-white py-2 px-4 rounded hover:bg-[#9A703A] transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className=" mb-6 border border-[#B88E2F] text-[#B88E2F] px-6 py-2 rounded hover:bg-[#B88E2F] hover:text-white transition"
          >
            See More
          </button>
        </div>
      )}

      {/* Cart Details */}
      <div className="fixed bottom-4 right-4 bg-[#B88E2F] text-white py-2 px-4 rounded-full cursor-pointer hover:bg-[#9A703A]">
        <span>Cart: {cart.length} items</span>
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-20 right-4 bg-white p-4 shadow-lg rounded-lg w-72">
          <h4 className="font-bold text-lg">Your Cart</h4>
          <ul className="my-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.title}</span>
                <span>${item.discountedPrice || item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            <span>Total</span>
            <span>${getTotalPrice()}</span>
          </div>
        </div>
      )}
      <Feature/>
    </div>
  );
};

export default ProductCard;
