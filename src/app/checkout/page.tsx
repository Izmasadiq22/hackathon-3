import Feature from "../components/Feature";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function Checkout() {
  return (
    <main className="bg-white">
        {/* Hero Section */}
        <section
        className="bg-[#FFF3E3] relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}
      >
        <div className="flex flex-col items-center">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <h2 className="font-medium text-[48px] text-black">Cheackout</h2>
          <div className="flex items-center gap-1">
            <Link href="/" className="font-semibold text-[16px] text-black">
              Home
            </Link>
            <Icon icon="material-symbols:keyboard-arrow-right" className="w-5 h-5" />
            <p className="font-light text-[16px] text-black">Checkout</p>
          </div>
        </div>
      </section>


      {/* Billing and Order Section */}
      <section className="container mx-auto py-8 px-4 md:py-16 md:px-0">
        <h2 className="text-center text-xl md:text-2xl font-bold mb-8 md:mb-12">
          Billing Details
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
          {/* Billing Form */}
          <div className="lg:w-2/3 space-y-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="First Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="Last Name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
                <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="Company Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country / Region</label>
                <select className="mt-1 p-3 w-full border rounded-md">
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="Street Address" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Town / City</label>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="Town / City" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Province</label>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="Province" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="ZIP Code" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="Phone Number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="mt-1 p-3 w-full border rounded-md" placeholder="Email Address" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Additional Information</label>
                <textarea className="mt-1 p-3 w-full border rounded-md" rows={4} placeholder="Additional Information"></textarea>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3 border p-6 rounded-md space-y-6">
            <h3 className="text-xl font-bold">Product</h3>
            <div className="flex justify-between">
              <span>Agagard Sofa x 1</span>
              <span className="font-bold">Rs. 250,000.00</span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-yellow-500 text-lg font-bold">Rs. 250,000.00</span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Payment Method</label>
              <div className="mt-2 space-y-2">
                <div>
                  <input type="radio" id="bank" name="payment" className="mr-2" />
                  <label htmlFor="bank">Direct Bank Transfer</label>
                </div>
                <div>
                  <input type="radio" id="cash" name="payment" className="mr-2" />
                  <label htmlFor="cash">Cash On Delivery</label>
                </div>
              </div>
            </div>
            <button className="bg-yellow-500 text-white px-6 py-3 w-full rounded-md">
              Place Order
            </button>
          </div>
        </div>
      </section>
<Feature/>
    </main>
  );
}