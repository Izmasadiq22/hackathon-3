import Image from "next/image";

export default function Browse(): JSX.Element {
  return (
    <div className="flex flex-col gap-[30px] md:gap-[60px] pt-[30px] md:pt-0 items-center bg-[#F4F5F7] px-4">
      <div className="w-fit text-center">
        <h2 className="text-Font font-bold text-[32px]">Browse The Range</h2>
        <p className="text-Font1 font-normal text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[20px]">
        {[
          { src: "/images/dining.png", alt: "Diningroom", title: "Dining" },
          { src: "/images/living.png", alt: "Livingroom", title: "Living" },
          { src: "/images/bedroom.png", alt: "Bedroom image", title: "Bedroom" },
        ].map((item, index) => (
          <div key={index} className="w-[100%] sm:w-[381px] flex flex-col gap-[30px]">
            <Image
              src={item.src}
              alt={item.alt}
              className="rounded-[4px] w-full"
              width={900}
              height={100}
            />
            <div className="w-full text-center">
              <p className="font-semibold text-[24px] text-Font">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
