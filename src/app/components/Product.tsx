"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToCart } from "../actions/actions";
import { Product } from "../types/products";

const sanity = createClient({
  projectId: "j1efm4vy",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleProducts, setVisibleProducts] = useState(8);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
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
        const data = await sanity.fetch<Product[]>(query);
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleShowMore = () => setVisibleProducts((prev) => prev + 8);

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

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, visibleProducts).map((product) => (
          <div
            key={product._id}
            className="relative bg-white shadow-md rounded-md overflow-hidden group"
          >
            <Link href={`/product/${product.slug.current}`}>
              {product.imageUrl && (
                <Image
                  src={urlFor(product.imageUrl).url()}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              )}
            </Link>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <div className="space-x-3 text-white text-sm ">
                
                <button 
                  className="bg-amber-600 px-4 py-2 rounded shadow hover:shadow-lg mb-4"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </button>
             
                {/* Navigate to Product Detail Page */}
                <Link href={`/product/${product.slug.current}`}>
                  <button className="bg-amber-600 px-4 py-2 rounded shadow hover:shadow-lg">
                    View Image
                  </button>
                </Link>

               <div>
                <button className="border border-white px-3 py-1 rounded hover:bg-white hover:text-black gap-2">Share</button>
                <button className="border border-white px-3 py-1 rounded hover:bg-white hover:text-black">Compare</button>
                <button className="border border-white px-3 py-1 rounded hover:bg-white hover:text-black">Like</button>
             </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.tags}</p>
              <div className="mt-2">
                <span className="text-[#B88E2F] font-bold text-lg">
                  ${product.discountedPrice || product.price}
                </span>
                {product.discountedPrice && (
                  <span className="text-gray-400 line-through text-sm ml-2">
                    ${product.price}
                  </span>
                )}
              </div>
              {product.discountPercentage && (
                <p className="text-green-600 text-sm font-medium mt-1">
                  {product.discountPercentage}% OFF
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="border border-[#B88E2F] text-[#B88E2F] px-6 py-2 rounded hover:bg-[#B88E2F] hover:text-white transition"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
