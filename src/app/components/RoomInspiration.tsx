import Image from "next/image";
export function RoomInspiration() {
  return (
    <section className="flex flex-col lg:flex-row gap-8 p-8 bg-[#F4F5F7]">
      {/* Left Content Box */}
      <div className="flex-1 bg-[#FFF3E3] p-8 rounded-lg shadow-md flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-snug">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600 mb-6">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button className="bg-[#B88E2F] text-white py-3 px-6 rounded hover:bg-[#9c751f]">
          Explore More
        </button>
      </div>

      {/* Right Image Grid */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        {/* Image 1 */}
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/images/image4.png"
            alt="Paintings Room"
            className="w-full h-full object-cover"
            width={900} height={100}
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded">
            <p className="text-sm text-gray-700">01 — Bed Room</p>
            <h4 className="font-semibold text-gray-800">Inner Peace</h4>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/images/image5.png"
            alt="Beautiful Room"
            className="w-full h-full object-cover"
             width={900} height={100}
          />
        </div>
      </div>
    </section>
  );
}