"use client"; 
import { useState } from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { HiOutlineTrophy } from "react-icons/hi2";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import Image from "next/image";

export default function ProductComparison() {
  const [products, setProducts] = useState([
    {
      id: 2,
      name: "Outdoor Sofa Set",
      price: 224000,
      rating: 4.2,
      image: "/images/Group 157.png",
      details: "1 Three-Seater, 2 Single-Seaters, Model DTU/BLS/568",
    },
  ]);

  // Function to add a new product
  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `New Product ${products.length + 1}`,
      price: 200000 + products.length * 10000,
      rating: parseFloat((Math.random() * 5).toFixed(1)), 
      image: "/images/placeholder.png", 
      details: "New product details",
    };
    setProducts([...products, newProduct]);
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className=" bg-[#FFF3E3] relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: "url('/images/Rectangle 1.png')",
        }}
      >
        <div className=" bg-opacity-50 px-4 py-2 rounded-md text-black">
          <h1 className="text-4xl font-bold">Product Comparison</h1>
          <p className="text-sm mt-2">Home &gt; Product Comparison</p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 md:px-0">
        <h2 className="text-center text-2xl font-bold mb-12">
          Compare Your Favorite Products
        </h2>

        <div className="flex justify-between items-center mb-8">
          <a href="/products" className="text-yellow-500 underline">
            Go to Product Page for More Products
          </a>
          <button
            className="bg-yellow-500 text-white px-6 py-2 rounded-md"
            onClick={addProduct}
          >
            Add a Product
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-4">Category</th>
                {products.map((product) => (
                  <th key={product.id} className="p-4">
                    <div className="text-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={150} 
                        height={100}
                        className="mx-auto h-20"
                      />
                      <p className="font-bold">{product.name}</p>
                      <p className="text-yellow-500">
                        Rs. {product.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        {product.rating} <span className="text-yellow-500">★</span>
                      </p>
                      <button className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-md">
                        Add to Cart
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* General Section */}
              <tr className="border-b">
                <td className="p-4">General</td>
                {products.map((product) => (
                  <td key={product.id} className="p-4">
                    {product.details}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Icons Section */}
      <div className="bg-[#FFF3E3] p-10 flex items-center space-x-3 justify-around">
        <div className="flex flex-col items-center text-center w-60">
          <HiOutlineTrophy className="h-14 w-14 text-black mb-3" />
          <span className="font-sans font-bold text-black text-lg">
            High Quality
          </span>
          <span className="text-grey-400 text-sm">Delivery on all orders</span>
        </div>

        <div className="flex flex-col items-center text-center w-60">
          <IoShieldCheckmarkOutline className="h-14 w-14 text-black mb-3" />
          <span className="font-sans font-bold text-black text-lg">
            Warranty Protection
          </span>
          <span className="text-grey-400 text-sm">Delivery on all orders</span>
        </div>

        <div className="flex flex-col items-center text-center w-60">
          <LiaShippingFastSolid className="h-14 w-14 text-black mb-3" />
          <span className="font-sans font-bold text-black text-lg">
            Free Shipping
          </span>
          <span className="text-grey-400 text-sm">Delivery on all orders</span>
        </div>

        <div className="flex flex-col items-center text-center w-60">
          <MdOutlineSupportAgent className="h-14 w-14 text-black mb-3" />
          <span className="font-sans font-bold text-black text-lg">
            24/7 Support
          </span>
          <span className="text-grey-400 text-sm">Delivery on all orders</span>
        </div>
      </div>
    </main>
  );
}
