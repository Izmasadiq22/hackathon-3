// "use client";
// import React, { useEffect, useState } from "react";
// import { Product } from "../types/products";
// import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
// import Swal from "sweetalert2";
// import page from "../page";

// const Viewcart = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   useEffect(() => {
//     setCartItems(getCartItems());
//   }, []);

//   const handleRemove = (id : string ) => {
//     Swal.fire ({
//         title: "Are You Sure?",
//         text : "You will not able to recover this item",
//         icon : "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#308566",
//         cancelButtonColor :"ed33",

//     }).then((result) => {
//         if(result.isConfirmed){
//             removeFromCart(id)
//             setCartItems(getCartItems())
//             Swal.fire("Removed", "Item has been removed", "success");
//         }
//     })
//   }

//   const handleQuantityChange = (id : string, quantity: number) => {
//     updateCartQuantity(id, quantity);
//     setCartItems(getCartItems())
//   }

//  const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if(product)
//         handleQuantityChange(id, product.inventory + 1)
//  }

//  const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if(product && product.inventory > 1)
//         handleQuantityChange(id, product.inventory - 1)
//  }

//  const calculatedTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)

//  }

//  const handleProceed = () => {
//     Swal.fire({
//         title: 'Proceed to Checkout?',
//         text: 'Please review your cart before checkout',
//         icon: "question",
//         showCancelButton : true,
//         confirmButtonColor: "#",
//         cancelButtonColor: "ed33" ,
//         confirmButtonText: "Yes, Proceed!",
     
    
//     }).then((result)=> {
//         if(result.isConfirmed){
//             Swal.fire("Success" ," Your Order has been successfully processed", "success")
//             setCartItems([])
//         }
//     })

//  }



//   return (
//     <div>
//       {cartItems.map((item) => (
//         <div key={item._id}>{item.title}</div>
//       ))}
//     </div>
//   );
// };

// export default Viewcart;
