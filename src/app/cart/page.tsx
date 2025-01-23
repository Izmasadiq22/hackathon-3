import Link from "next/link";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Field from "../components/Field";

export default function Cart() {
  return (
    <div>
      <Link href="/cart"></Link>

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
              <h2 className="font-medium text-[48px] text-black">Cart</h2>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Link href="/" className="font-semibold text-[16px] text-black">
              Home
            </Link>
            <Icon icon="material-symbols:keyboard-arrow-right" className="w-5 h-5 font-bold" />
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
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 flex items-center space-x-4">
                    <img
                      src="/images/Group 160.png"
                      alt="Asgaard sofa"
                      className="w-16 h-16 object-cover"
                    />
                    <span>Asgaard sofa</span>
                  </td>
                  <td className="p-3">Rs. 250,000.00</td>
                  <td className="p-3">
                    <input
                      type="number"
                      min="1"
                      value="1"
                      className="w-16 border p-0 text-center"
                    />
                  </td>
                  <td className="p-3">Rs. 250,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="w-full lg:w-1/4 bg-[#FFF3E3] p-6 lg:p-14">
            <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>Total:</span>
              <span>Rs. 250,000.00</span>
            </div>
            <Link href="/checkout">
              <button className="w-full bg-orange-500 text-white py-2 font-bold hover:bg-orange-600">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Field/>
{/* Icons Section */}
      <div className="bg-[#FFF3E3] p-10 flex flex-wrap gap-6 justify-center">
        <div className="flex flex-col items-center text-center w-60">
          <HiOutlineTrophy className="h-14 w-14 text-black mb-3" />
          <span className="font-sans font-bold text-black text-lg">
            High Quality
          </span>
          <span className="text-gray-400 text-sm">Delivery on all orders</span>
        </div>

        <div className="flex flex-col items-center text-center w-60">
          <IoShieldCheckmarkOutline className="h-14 w-14 text-black mb-3" />
          <span className="font-sans font-bold text-black text-lg">
            Warranty Protection
          </span>
          <span className="text-gray-400 text-sm">Delivery on all orders</span>
        </div>

        <div className="flex flex-col items-center text-center w-60">
          <LiaShippingFastSolid className="h-14 w-14 text-black mb-3" />
          <span className="font-sans font-bold text-black text-lg">
            Free Shipping
          </span>
          <span className="text-gray-400 text-sm">Delivery on all orders</span>
        </div>

        <div className="flex flex-col items-center text-center w-60">
          <MdOutlineSupportAgent className="h-14 w-14 text-black mb-3" />
          <span className="font-sans font-bold text-black text-lg">
            24/7 Support
          </span>
          <span className="text-gray-400 text-sm">Delivery on all orders</span>
        </div>
      </div>
    </div>
  );
}