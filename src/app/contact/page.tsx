"use client";
import { useState } from "react";
import Link from "next/link";
import Field from "../components/Field";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Feature from "../components/Feature";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu state

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMessage(result.message); // Show success or error message
    } catch (error) {
      console.error("Error occurred:", error); // Log the error
      setResponseMessage("Failed to send the message. Please try again."); // Set message on error
    }
  };

  return (
    <main className="bg-white">
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
              Contact
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
              Contact
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
          <h2 className="font-medium text-[48px] text-black">Contact</h2>
          <div className="flex items-center gap-1">
            <Link href="/" className="font-semibold text-[16px] text-black">
              Home
            </Link>
            <Icon icon="material-symbols:keyboard-arrow-right" className="w-5 h-5" />
            <p className="font-light text-[16px] text-black">Contact</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="container mx-auto py-16 px-4 md:px-0">
        <h2 className="text-center text-2xl font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-center text-gray-600 mb-12">
          For more information about our product & services, please feel free to
          drop us <br /> an email. Our staff is always here to help you out. Do
          not hesitate!
        </p>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-8">
            <div className="flex items-center">
              <i className="text-yellow-500 text-xl fas fa-map-marker-alt mr-4"></i>
              <div>
                <h3 className="font-bold">Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="text-yellow-500 text-xl fas fa-phone-alt mr-4"></i>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>Mobile: (+84) 546-6789</p>
                <p>Hotline: (+84) 456-5789</p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="text-yellow-500 text-xl fas fa-clock mr-4"></i>
              <div>
                <h3 className="font-bold">Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full border rounded-md"
                  placeholder="Abc"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full border rounded-md"
                  placeholder="abc@def.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full border rounded-md"
                  placeholder="This is optional"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full border rounded-md"
                  rows={4}
                  placeholder="Hi! I'd like to ask about..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-white px-16 py-3 rounded-md"
              >
                Submit
              </button>
            </form>
            {responseMessage && <p className="mt-4 text-green-500">{responseMessage}</p>} {/* Show response */}
          </div>
        </div>
      </section>

      {/* Optional components */}
      <Field />
      <Feature />
    </main>
  );
}
