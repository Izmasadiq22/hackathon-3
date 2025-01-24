import React from "react"
import { HiOutlineTrophy } from "react-icons/hi2"
import { IoShieldCheckmarkOutline } from "react-icons/io5"
import { LiaShippingFastSolid } from "react-icons/lia"
import { MdOutlineSupportAgent } from "react-icons/md"
     



const Feature = () => {
  return (
    <div>
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
  )
}

export default Feature