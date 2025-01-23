import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Field from "../components/Field";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Checkout() {
  return (
    <div>
      <section
        className="bg-[#FFF3E3] relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: "url('/images/Rectangle 1.png')",
        }}
      >
        <div className="w-fit">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={50}
                height={100}
              />
            </div>
            <div>
              <h2 className="font-medium text-[48px] text-black">checkout</h2>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Link href="/" className="font-semibold text-[16px] text-black">
              Home
            </Link>
            <Icon
              icon="material-symbols:keyboard-arrow-right"
              className="w-5 h-5 font-bold"
            />
            <p className="font-light text-[16px] text-black">Checkout</p>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[608px] md:py-[35px] md:px-[74px] text-[16px] text-black font-medium gap-[36px] flex flex-col">
          <h3 className="text-[36px] font-semibold place-self-center md:place-self-start">
            Billing details
          </h3>
          <div className="gap-[31px] flex flex-col md:flex-row">
            <label className="flex flex-col gap-[22px]">
              <p>First Name</p>
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[211px] w-full h-[75px]"
              />
            </label>
            <label className="flex flex-col gap-[22px]">
              <p>Last Name</p>
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[211px] w-full h-[75px]"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Company Name (Optional)</p>
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px]"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Country / Region</p>
              <div className=" px-[30px] py-[25px] md:w-[453px] w-full h-[75px] border border-[#9F9F9F] rounded-[10px]">
                <select name="" id="" className="w-full h-full text-[#9F9F9F]">
                  <option value="SriLanka">Sri Lanka</option>
                </select>
              </div>
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Street address</p>
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px]"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Town / City</p>
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px]"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Province</p>
              <div className=" px-[30px] py-[25px] md:w-[453px] w-full h-[75px] border border-[#9F9F9F] rounded-[10px]">
                <select name="" id="" className="w-full h-full text-[#9F9F9F]">
                  <option value="WesternProvince">Western Province</option>
                </select>
              </div>
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>ZIP code</p>
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px]"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Phone</p>
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px]"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Email address</p>
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px]"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px] px-[30px] py-[25px]"
                placeholder="Additional information"
              />
            </label>
          </div>
        </div>

        <div className="md:py-[87px] md:px-[37px] md:w-[608px] w-full py-[50px] flex flex-col items-center gap-[40px]">
          <div className="">
            <div className="flex flex-col gap-[22px] pb-[33px]">
              <div className="flex justify-between text-[24px] font-medium text-black ">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              <div className="flex justify-between text-[16px]">
                <p className="font-normal text-[#9F9F9F]">Asgaard sofa</p>
                <p className="font-light text-black">Rs. 250,000.00</p>
              </div>
              <div className="flex justify-between text-[16px] text-black ">
                <p className="font-normal">Subtotal</p>
                <p className="font-light">Rs. 250,000.00</p>
              </div>
              <div className="flex justify-between">
                <p className="font-normal text-[16px] text-black">Total</p>
                <p className="font-bold text-[24px] text-[#B88E2F]">
                  Rs. 250,000.00
                </p>
              </div>
            </div>
            <div className="pt-[22px] border-t border-t-[#D9D9D9]">
              <div className="gap-[25px] flex flex-col">
                <label className="flex flex-col gap-[11px]">
                  <div className="flex gap-[15px] items-center">
                    <div className="h-[14px] w-[14px] bg-black rounded-full"></div>
                    <p className="text-[16px] font-normal">
                      Direct Bank Transfer
                    </p>
                  </div>
                  <p className="text-[16px] font-light text-[#9F9F9F]">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </label>

                <div className="gap-[11px] flex flex-col text-[16px] text-[#9F9F9F] font-medium">
                  <label className="flex  gap-[15px]">
                    <input type="radio" name="payment" />
                    <p>Direct Bank Transfer</p>
                  </label>
                  <label className="flex  gap-[15px]">
                    <input type="radio" name="payment" />
                    <p>Cash On Delivery</p>
                  </label>
                </div>
                <div className="text-black text-[16px] font-light">
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <Link href="#" className="font-bold">
                      {" "}
                      privacy policy.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-fit h-fit py-[17px] px-[102px] border border-black rounded-[15px]">
            Place Order
          </button>
        </div>
      </div>

      <Field />
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
