
import Image from 'next/image';
export function Hero() {
  return (
    <section className="relative bg-white">
      <div className="flex md:justify-end justify-center items-center md:h-[716px] h-[400px] bg-no-repeat bg-center bg-contain bg-[#F4F5F7]">
        {/* Background Image */}
        <Image src="/images/hero.png"
          alt="Hero Background"
          objectFit="cover"
          layout="fill"
          priority/>
        

        {/* Hero Text */}
        <div className="absolute top-1/2 right-16 transform -translate-y-1/2 bg-[#FFF3E3] p-8 rounded-lg shadow-md max-w-md">
          <h6 className="text-sm font-semibold text-gray-600">New Arrival</h6>
          <h2 className="text-3xl font-extrabold text-[#B88E2F] leading-tight">
            Discover Our <br /> New Collection
          </h2>
          <p className="mt-4 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-6 bg-[#B88E2F] text-white py-3 px-8 rounded hover:bg-[#9c751f]">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
}