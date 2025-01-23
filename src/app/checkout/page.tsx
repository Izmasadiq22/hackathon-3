"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "USA",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
    paymentMethod: "bank",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true); // Mark the order as placed
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="bg-[#FFF3E3] relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: "url('/images/Rectangle 1.png')",
        }}
      >
        <div className="w-fit">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <Image src="/images/logo.png" alt="logo" width={50} height={100} />
            </div>
            <div>
              <h2 className="font-medium text-[48px] text-black">Checkout</h2>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Link href="/" className="font-semibold text-[16px] text-black">
              Home
            </Link>
            <Icon icon="material-symbols:keyboard-arrow-right" className="w-5 h-5 font-bold" />
            <p className="font-light text-[16px] text-black">Checkout</p>
          </div>
        </div>
      </section>

      {/* Billing and Order Section */}
      <section className="container mx-auto py-8 px-4 md:py-16 md:px-0">
        <h2 className="text-center text-xl md:text-2xl font-bold mb-8 md:mb-12">
          {orderPlaced ? "Order Confirmed!" : "Billing Details"}
        </h2>

        {!orderPlaced ? (
          <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
            {/* Billing Form */}
            <div className="lg:w-2/3 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 p-3 w-full border rounded-md"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 p-3 w-full border rounded-md"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="mt-1 p-3 w-full border rounded-md"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country / Region</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="mt-1 p-3 w-full border rounded-md"
                  >
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="mt-1 p-3 w-full border rounded-md"
                    placeholder="Street Address"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Town / City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1 p-3 w-full border rounded-md"
                      placeholder="Town / City"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Province</label>
                    <input
                      type="text"
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      className="mt-1 p-3 w-full border rounded-md"
                      placeholder="Province"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="mt-1 p-3 w-full border rounded-md"
                      placeholder="ZIP Code"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 p-3 w-full border rounded-md"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 p-3 w-full border rounded-md"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="mt-1 p-3 w-full border rounded-md"
                    rows={4}
                    placeholder="Additional Information"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                  <div className="mt-2 space-y-2">
                    <div>
                      <input
                        type="radio"
                        id="bank"
                        name="paymentMethod"
                        value="bank"
                        checked={formData.paymentMethod === "bank"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <label htmlFor="bank">Direct Bank Transfer</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="cash"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === "cash"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <label htmlFor="cash">Cash On Delivery</label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-3 w-full rounded-md"
                >
                  Place Order
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3 space-y-6">
              <div className="p-6 bg-gray-100 rounded-md shadow">
                <h3 className="text-lg font-semibold">Order Summary</h3>
                <p className="mt-2 text-gray-700">Product A - $50</p>
                <p className="mt-2 text-gray-700">Shipping - $10</p>
                <p className="mt-2 text-gray-700 font-bold">Total: $60</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Thank you for your order!</h3>
            <p className="text-gray-700">We have received your order and will process it shortly.</p>
          </div>
        )}
      </section>
    </main>
  );
}
