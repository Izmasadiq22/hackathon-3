"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Feature from "../components/Feature";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Swal from "sweetalert2";
import { Product } from "../types/products";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import { useRouter } from "next/navigation";

export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu state

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You will not be able to recover this item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#308566",
      cancelButtonColor: "#ed3333",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1)
      handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#308566",
      cancelButtonColor: "#ed3333",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your Order has been successfully processed",
          "success"
        );

        router.push("/checkout");
        setCartItems([]);
      }
    });
  };

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
              Cart
            </Link>
            <Link href="/checkout" className="font-semibold text-black">
              Checkout
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
              Cart
            </Link>
            <Link
              href="/checkout"
              className="block font-semibold text-black"
              onClick={() => setMenuOpen(false)}
            >
              Checkout
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="bg-[#FFF3E3] relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-center mt-16"
        style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}
      >
        <div className="flex flex-col items-center">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <h2 className="font-medium text-[48px] text-black">Cart</h2>
          <div className="flex items-center gap-1">
            <Link href="/" className="font-semibold text-[16px] text-black">
              Home
            </Link>
            <Icon
              icon="material-symbols:keyboard-arrow-right"
              className="w-5 h-5"
            />
            <p className="font-light text-[16px] text-black">Cart</p>
          </div>
        </div>
      </section>

      {/* Cart Table */}
      <section className="p-6 lg:p-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Product Table */}
          <div className="w-full lg:w-3/4 overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#FFF3E3] text-left">
                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Subtotal</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id} className="border-b">
                    <td className="p-3 flex items-center space-x-4">
                      <Image
                        src={
                          typeof item.imageUrl === "string"
                            ? item.imageUrl
                            : item.imageUrl?.asset?._ref ||
                              "/images/default-product.png"
                        }
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                      <span>{item.title}</span>
                    </td>
                    <td className="p-3"> ${item.price}</td>
                    <td className="p-3 flex items-center space-x-2">
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.inventory}
                        onChange={(e) =>
                          handleQuantityChange(
                            item._id,
                            parseInt(e.target.value) || 1
                          )
                        }
                        className="w-16 border text-center"
                      />
                      <button
                        onClick={() => handleIncrement(item._id)}
                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                      >
                        +
                      </button>
                    </td>
                    <td className="p-3"> ${item.price * item.inventory}</td>
                    <td className="p-3">
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="px-3 py-1 bg-[#B88E2F] text-white hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="w-full lg:w-1/4 bg-[#FFF3E3] p-6 lg:p-14">
            <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span> ${calculatedTotal()}</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>Total:</span>
              <span> ${calculatedTotal()}</span>
            </div>
            <button
              onClick={handleProceed}
              className="w-full bg-[#B88E2F] text-white py-3 border border-black font-bold rounded-xl hover:bg-[#ecb431]"
            >
              Check Out
            </button>
          </div>
        </div>
      </section>

      <Feature />
    </div>
  );
}
