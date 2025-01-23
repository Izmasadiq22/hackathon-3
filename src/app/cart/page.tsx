import Link from "next/link";
import Image from "next/image";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Icon } from "@iconify/react";

// Define Types
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Asgaard sofa",
    price: 250000,
    quantity: 1,
    image: "/images/Group 160.png",
  },
];

const Cart = () => {
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-[#FFF3E3] relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}
      >
        <div className="flex flex-col items-center">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <h2 className="font-medium text-[48px] text-black">Cart</h2>
          <div className="flex items-center gap-1">
            <Link href="/" className="font-semibold text-[16px] text-black">
              Home
            </Link>
            <Icon icon="material-symbols:keyboard-arrow-right" className="w-5 h-5" />
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
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3 flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="p-3">Rs. {item.price.toLocaleString()}</td>
                    <td className="p-3">
                      <input
                        type="number"
                        min="1"
                        defaultValue={item.quantity}
                        className="w-16 border p-0 text-center"
                      />
                    </td>
                    <td className="p-3">Rs. {(item.price * item.quantity).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="w-full lg:w-1/4 bg-[#FFF3E3] p-6 lg:p-14">
            <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>Rs. {calculateSubtotal().toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>Total:</span>
              <span>Rs. {calculateSubtotal().toLocaleString()}</span>
            </div>
            <Link href="/checkout">
              <button className="w-full bg-orange-500 text-white py-2 font-bold hover:bg-orange-600">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Icons Section */}
      <div className="bg-[#FFF3E3] p-10 flex flex-wrap gap-6 justify-center">
        {iconDetails.map((icon) => (
          <IconCard key={icon.title} {...icon} />
        ))}
      </div>
    </div>
  );
};

// Icons Data and Component
const iconDetails = [
  {
    IconComponent: HiOutlineTrophy,
    title: "High Quality",
    description: "Delivery on all orders",
  },
  {
    IconComponent: IoShieldCheckmarkOutline,
    title: "Warranty Protection",
    description: "Delivery on all orders",
  },
  {
    IconComponent: LiaShippingFastSolid,
    title: "Free Shipping",
    description: "Delivery on all orders",
  },
  {
    IconComponent: MdOutlineSupportAgent,
    title: "24/7 Support",
    description: "Delivery on all orders",
  },
];

interface IconCardProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ IconComponent, title, description }) => (
  <div className="flex flex-col items-center text-center w-60">
    <IconComponent className="h-14 w-14 text-black mb-3" />
    <span className="font-sans font-bold text-black text-lg">{title}</span>
    <span className="text-gray-400 text-sm">{description}</span>
  </div>
);

export default Cart;
