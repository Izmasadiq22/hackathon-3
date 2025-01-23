import Link from "next/link";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { HiOutlineTrophy } from "react-icons/hi2";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function ProductComparison() {
  return (
    <>
    <Link href="/productcomparison"></Link>
     
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
          <h2 className="text-center text-2xl font-bold mb-12">Compare Your Favorite Products</h2>


          <div className="flex justify-between items-center mb-8">
            <a href="/products" className="text-yellow-500 underline">
              Go to Product Page for More Products
            </a>
            <div>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-md">
                Add a Product
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="p-4">Category</th>
                  <th className="p-4">
                    <div className="text-center">
                      <img src="/images/Group 160.png" alt="Asgaard Sofa" className="mx-auto h-20" />
                      <p className="font-bold">Asgaard Sofa</p>
                      <p className="text-yellow-500">Rs. 250,000</p>
                      <p className="text-sm text-gray-500">4.7 <span className="text-yellow-500">★</span></p>
                      <button className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-md">
                        Add to Cart
                      </button>
                    </div>
                  </th>
                  <th className="p-4">
                    <div className="text-center">
                      <img src="/images/Group 157.png" alt="Outdoor Sofa" className="mx-auto h-20" />
                      <p className="font-bold">Outdoor Sofa Set</p>
                      <p className="text-yellow-500">Rs. 224,000</p>
                      <p className="text-sm text-gray-500">4.2 <span className="text-yellow-500">★</span></p>
                      <button className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-md">
                        Add to Cart
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* General Section */}
                <tr className="border-b">
                  <td className="p-4">General</td>
                  <td className="p-4">1 sectional sofa, Model TCF/BU/BGRHS</td>
                  <td className="p-4">1 Three-Seater, 2 Single-Seaters, Model DTU/BLS/568</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Secondary Material</td>
                  <td className="p-4">Solid Wood</td>
                  <td className="p-4">Solid Wood</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Configuration</td>
                  <td className="p-4">L-Shaped</td>
                  <td className="p-4">L-Shaped</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Upholstery Color</td>
                  <td className="p-4">Bright Grey & Lion</td>
                  <td className="p-4">Bright Grey & Lion</td>
                </tr>

                {/* Product Details */}
                <tr className="border-b">
                  <td className="p-4">Filling Material</td>
                  <td className="p-4">Foam</td>
                  <td className="p-4">Matte</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Finish Type</td>
                  <td className="p-4">Bright Grey & Lion</td>
                  <td className="p-4">Bright Grey & Lion</td>
                </tr>

                {/* Dimensions */}
                <tr className="border-b">
                  <td className="p-4">Width</td>
                  <td className="p-4">265.32 cm</td>
                  <td className="p-4">265.32 cm</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Height</td>
                  <td className="p-4">76 cm</td>
                  <td className="p-4">76 cm</td>
                </tr>

                {/* Warranty */}
                <tr className="border-b">
                  <td className="p-4">Warranty</td>
                  <td className="p-4">1 Year Manufacturing Warranty</td>
                  <td className="p-4">1.2 Year Manufacturing Warranty</td>
                </tr>
                <tr>
                  <td className="p-4">Warranty Service Type</td>
                  <td className="p-4">
                    For Claims, Email: <a href="mailto:operations@furniture.com" className="text-yellow-500">operations@furniture.com</a>
                  </td>
                  <td className="p-4">
                    For Claims, Email: <a href="mailto:support@furniture.com" className="text-yellow-500">support@furniture.com</a>
                  </td>
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
     
    </>
  );
}