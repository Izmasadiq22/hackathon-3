import Link from "next/link";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import Image from "next/image";
import Feature from "../components/Feature";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      img: "/images/Rectangle 68 (1).png",
      author: "Admin",
      date: "16 Oct 2022",
      category: "Wood",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum tempor lacus, in blandit magna ultricies sit amet. Mauris efficitur risus eu velit pharetra vehicula.",
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      img: "/images/Rectangle 68.png",
      author: "Admin",
      date: "14 Oct 2022",
      category: "Handmade",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum tempor lacus, in blandit magna ultricies sit amet. Mauris efficitur risus eu velit pharetra vehicula.",
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      img: "/images/Rectangle 68 (2).png",
      author: "Admin",
      date: "10 Oct 2022",
      category: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum tempor lacus, in blandit magna ultricies sit amet. Mauris efficitur risus eu velit pharetra vehicula.",
    },
  ];

  const categories = [
    { name: "Crafts", count: 3 },
    { name: "Design", count: 2 },
    { name: "Handmade", count: 4 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 2 },
  ];

  return (
    <div>
      <Link href="/"></Link>
           {/* Hero Section */}
           <section
        className="bg-[#FFF3E3] relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}
      >
        <div className="flex flex-col items-center">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <h2 className="font-medium text-[48px] text-black">Blog</h2>
          <div className="flex items-center gap-1">
            <Link href="/" className="font-semibold text-[16px] text-black">
              Home
            </Link>
            <Icon icon="material-symbols:keyboard-arrow-right" className="w-5 h-5" />
            <p className="font-light text-[16px] text-black">Blog</p>
          </div>
        </div>
      </section>


      <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Blog Posts Section */}
        <div className="lg:col-span-3 space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col space-y-4">
              <Image
                src={post.img}
                alt={post.title}
                width={600}
                height={400}
                className="w-full rounded-lg"
              />
              <div className="text-sm text-gray-500">
                <span>{post.author}</span> &middot; <span>{post.date}</span>{" "}
                &middot; <span>{post.category}</span>
              </div>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.description}</p>
              <a href="#" className="text-orange-500 font-semibold">
                Read more
              </a>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center space-x-3">
            <button className="border px-4 py-2">1</button>
            <button className="border px-4 py-2">2</button>
            <button className="border px-4 py-2">3</button>
            <button className="border px-4 py-2">Next</button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat, index) => (
                <li key={index} className="flex justify-between text-gray-700">
                  <span>{cat.name}</span>
                  <span>({cat.count})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[39px]">
            <div className="flex gap-[12px] items-center">
              <Image
                src="/images/pic1.png"
                alt="recentimg"
                height={120}
                width={120}
                className="rounded-[10px]"
              />
              <div>
                <p className="text-[14px] text-black font-normal">
                  Going all-in with millennial design
                </p>
                <p className="text-[12px] text-[#9F9F9F] font-normal">
                  03 Aug 2022
                </p>
              </div>
            </div>

            <div className="flex gap-[12px] items-center">
              <Image
                src="/images/pic2.png"
                alt="recentimg"
                height={120}
                width={120}
                className="rounded-[10px]"
              />
              <div>
                <p className="text-[14px] text-black font-normal">
                  Exploring new ways of decorating
                </p>
                <p className="text-[12px] text-[#9F9F9F] font-normal">
                  14 Oct 2022
                </p>
              </div>
            </div>

            <div className="flex gap-[12px] items-center">
              <Image
                src="/images/pic3.png"
                alt="recentimg"
                height={120}
                width={120}
                className="rounded-[10px]"
              />
              <div>
                <p className="text-[14px] text-black font-normal">
                  Handmade pieces that took time to make
                </p>
                <p className="text-[12px] text-[#9F9F9F] font-normal">
                  10 Oct 2022
                </p>
              </div>
            </div>

            <div className="flex gap-[12px] items-center">
              <Image
                src="/images/pic4.png"
                alt="recentimg"
                height={120}
                width={120}
                className="rounded-[10px]"
              />
              <div>
                <p className="text-[14px] text-black font-normal">
                  Modern items in motion
                </p>
                <p className="text-[12px] text-[#9F9F9F] font-normal">
                  05 Oct 2022
                </p>
              </div>
            </div>

            <div className="flex gap-[12px] items-center">
              <Image
                src="/images/pic5.png"
                alt="recentimg"
                height={120}
                width={120}
                className="rounded-[10px]"
              />
              <div>
                <p className="text-[14px] text-black font-normal">
                  Colorful office redesign
                </p>
                <p className="text-[12px] text-[#9F9F9F] font-normal">
                  02 Oct 2022
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <Feature />
    </div>
  );
}
