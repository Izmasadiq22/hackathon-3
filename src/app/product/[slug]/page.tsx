"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/app/types/products";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

export default function ProductCard() {
  const params = useParams();
  const slug = params?.slug;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      if (!slug) return;
      const result = await client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
          _id,
          title,
          price,
          "imageUrl": productImage.asset->url,
          tags,
          slug,
          dicountPercentage,
          discountedPrice,
          isNew,
          description
        }`,
        { slug }
      );
      setProduct(result);
    }
    fetchProduct();
  }, [slug]);

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

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
      <nav className="text-gray-700 text-xl flex items-center space-x-2">
        <span className="font-bold hover:underline cursor-pointer">Home</span>
        <span className="font-bold">{">"}</span>
        <span className="hover:underline cursor-pointer">Shop</span>
        <span className="font-bold">{">"}</span>
        <span>{product.title}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          {product.imageUrl ? (
            <Image
              src={urlFor(product.imageUrl).url()}
              alt={product.title}
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          ) : (
            <p>Image not available</p>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-medium">{product.title}</h3>
          <p className="text-xl text-gray-500">${product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="flex items-center gap-4 mt-6">
            <button
              className="bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </button>

            <button
              className="bg-blue-600 text-white py-2 px-4 font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => (window.location.href = "/productComparison")}
            >
              View Comparison
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
