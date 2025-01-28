"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../types/products";
import { getCartItems } from "../actions/actions";
import { urlFor } from "@/sanity/lib/image";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    country: false,
    streetAddress: false,
    city: false,
    province: false,
    zipCode: false,
    phoneNumber: false,
    emailAddress: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName.trim(),
      lastName: !formValues.lastName.trim(),
      country: !formValues.country.trim(),
      streetAddress: !formValues.streetAddress.trim(),
      city: !formValues.city.trim(),
      province: !formValues.province.trim(),
      zipCode: !formValues.zipCode.trim(),
      phoneNumber: !formValues.phoneNumber.match(/^[0-9]{10}$/),
      emailAddress: !formValues.emailAddress.includes("@"),
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      alert("Order placed successfully!");
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="bg-[#FFF3E3] relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}
      >
        <div className="flex flex-col items-center">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <h2 className="font-medium text-[48px] text-black">Checkout</h2>
          <div className="flex items-center gap-1">
            <Link href="/" className="font-semibold text-[16px] text-black">
              Home
            </Link>
            <span className="w-5 h-5 text-black"> &gt; </span>
            <p className="font-light text-[16px] text-black">Checkout</p>
          </div>
        </div>
      </section>

      {/* Billing and Order Section */}
      <section className="container mx-auto py-8 px-4 md:py-16 md:px-0">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
          {/* Billing Form */}
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Billing Details</h2>
            <form className="space-y-6">
              {[
                { id: "firstName", label: "First Name", placeholder: "Enter your first name" },
                { id: "lastName", label: "Last Name", placeholder: "Enter your last name" },
                { id: "country", label: "Country", placeholder: "Enter your country" },
                { id: "streetAddress", label: "Street Address", placeholder: "Enter your street address" },
                { id: "city", label: "City", placeholder: "Enter your city" },
                { id: "province", label: "Province", placeholder: "Enter your province" },
                { id: "zipCode", label: "Zip Code", placeholder: "Enter your zip code" },
                { id: "phoneNumber", label: "Phone Number", placeholder: "Enter your phone number" },
                { id: "emailAddress", label: "Email Address", placeholder: "Enter your email address" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    id={field.id}
                    value={formValues[field.id as keyof typeof formValues]}
                    placeholder={field.placeholder}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                  {formErrors[field.id as keyof typeof formErrors] && (
                    <p className="text-red-500 text-sm mt-1">{`${field.label} is required or invalid.`}</p>
                  )}
                </div>
              ))}
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3 border p-6 rounded-md space-y-6">
            <h3 className="text-xl font-bold">Order Summary</h3>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex justify-between">
                  <span>
                    {item.title} x {item.inventory}
                  </span>
                  <span className="font-bold">
                    ${item.price * item.inventory}
                  </span>
                </div>
              ))
            ) : (
              <p>No items in the cart</p>
            )}
            <hr className="border-gray-300" />
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold">${subTotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-yellow-500 text-lg font-bold">
                ${subTotal - discount}
              </span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="bg-yellow-500 text-white px-6 py-3 w-full rounded-md"
            >
              Place Order
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
