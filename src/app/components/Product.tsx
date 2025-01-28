"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const sanity = createClient({
  projectId: "j1efm4vy",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

// Product Interface
interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  tags: string;
  slug: { current: string };
  discountPercentage?: number;
  discountedPrice?: number;
  isNew: boolean;
}

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleProducts, setVisibleProducts] = useState(8);

  // Fetch products from Sanity
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

  // Handle "See More" functionality
  const handleShowMore = () => setVisibleProducts((prev) => prev + 8);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
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
                  src={urlFor(product.imageUrl).url()}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              )}
            </Link>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.tags}</p>

              {/* Price */}
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

      {/* See More Button */}
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
