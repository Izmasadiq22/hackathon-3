import Link from "next/link";
import Field from "../components/Field";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Feature from "../components/Feature";
export default function Contact() {
  return (
    <main className="bg-white">
      <Link href="/"></Link>
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
            <Icon
              icon="material-symbols:keyboard-arrow-right"
              className="w-5 h-5"
            />
            <p className="font-light text-[16px] text-black">Contact</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="container mx-auto py-16 px-4 md:px-0">
        <h2 className="text-center text-2xl font-bold mb-4">
          Get In Touch With Us
        </h2>
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
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 w-full border rounded-md"
                  placeholder="Abc"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 p-3 w-full border rounded-md"
                  placeholder="abc@def.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 w-full border rounded-md"
                  placeholder="This is optional"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
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
          </div>
        </div>
      </section>
      <Field />
      <Feature />
    </main>
  );
}
