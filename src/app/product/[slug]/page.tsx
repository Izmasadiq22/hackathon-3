"use client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/app/types/products";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  title,
  price,
  "imageUrl": productImage.asset->url, // Update the field name here
  tags,
  slug,
  dicountPercentage,
  discountedPrice,
  isNew,
  description
}
`,
    { slug }
  );
}

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

export default async function ProductCard({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return (
      <div>
        <h1>Product not found!</h1>
        <p>
          Make sure the slug is correct and the product exists in the database.
        </p>
      </div>
    );
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
        {/* Product Images */}
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

        {/* Product Details */}
        <div>
          <h3 className="text-2xl font-medium">{product.title}</h3>
          <p className="text-xl text-gray-500">${product.price}</p>

          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="mt-4">
            <h4 className="font-semibold">Size</h4>
            <div className="flex gap-2 mt-2">
              {/* Sizes hardcoded for demo, adjust logic as needed */}
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className="border rounded-md px-4 py-2 hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">Color</h4>
            <div className="flex gap-2 mt-2">
              {/* Colors hardcoded for demo, adjust logic as needed */}
              {["bg-purple-700", "bg-blue-500", "bg-green-400"].map(
                (color, idx) => (
                  <div
                    key={idx}
                    className={`rounded-full h-5 w-5 ${color}`}
                  ></div>
                )
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border p-2 gap-4">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button
              className="bg-amber-700 text-white font-semibold mt-4 ml-40 py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </button>

            <button
              className="bg-blue-600 text-white py-2 px-4 font-semibold rounded-lg hover:bg-blue-700 transition duration-300 mt-4"
              onClick={() => (window.location.href = "/productComparison")}
            >
              View Comparison
            </button>
          </div>

          <hr className="my-6" />

          <div>
            <div className="flex justify-between">
              <span>SKU:</span>
              <span>{product._id}</span>
            </div>
            <div className="flex justify-between">
              <span>Category:</span>
              <span>Sofas</span>
            </div>
            <div className="flex justify-between">
              <span>Tags:</span>
              {/* <span>{product.tags?.join(", ")}</span> */}
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Share:</span>
              <div className="flex space-x-2">
                <span className="text-blue-600 cursor-pointer">Facebook</span>
                <span className="text-blue-700 cursor-pointer">LinkedIn</span>
                <span className="text-blue-400 cursor-pointer">Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
