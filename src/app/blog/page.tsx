"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../types/products";
import { Icon } from "@iconify/react/dist/iconify.js";
import Feature from "../components/Feature";

const sanity = createClient({
  projectId: "j1efm4vy",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

export default function Blog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      img: "/images/Rectangle 68 (1).png",
      author: "Admin",
      date: "16 Oct 2022",
      category: "Wood",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      img: "/images/Rectangle 68.png",
      author: "Admin",
      date: "14 Oct 2022",
      category: "Handmade",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      img: "/images/Rectangle 68 (2).png",
      author: "Admin",
      date: "10 Oct 2022",
      category: "Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          _id,
          title,
          price,
          "imageUrl": productImage.asset->url,
          slug
        }`;
        const data = await sanity.fetch<Product[]>(query);
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };
    fetchProducts();
  }, []);

  // Calculate the range of products to be displayed
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
            <Icon
              icon="material-symbols:keyboard-arrow-right"
              className="w-5 h-5"
            />
            <p className="font-light text-[16px] text-black">Blog</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
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
          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>Crafts (3)</li>
              <li>Design (2)</li>
              <li>Handmade (4)</li>
              <li>Interior (1)</li>
              <li>Wood (2)</li>
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

      {/* Products Section Above Feature */}
      <section className="products-section">
        <h3 className="text-2xl font-semibold mb-4 px-5">Products</h3>
        {currentProducts.length > 0 && (
          <div className="flex overflow-x-auto gap-6 pb-8 px-5">
            {currentProducts.map((product) => (
              <div
                key={product._id}
                className="w-full h-full object-cover bg-white shadow-md rounded-md overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <Link href={`/product/${product.slug.current}`}>
                  {product.imageUrl && (
                    <Image
                      src={urlFor(product.imageUrl).url()}
                      alt={product.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  )}
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-700">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination for Products (Horizontal at Bottom) */}
        <div className="flex justify-center space-x-3 mt-8 mb-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`border px-4 py-2 ${
                currentPage === index + 1 ? "bg-[#B88E2F] text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>

      <Feature />
    </div>
  );
}
