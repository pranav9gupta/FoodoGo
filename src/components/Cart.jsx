/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalAmt = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[30vw] h-full bg-white p-5 ${
          activeCart ? "translate-x-o" : "translate-x-full"
        } transition-all duration-500 z-50 `}>
        <div className="flex justify-between my-4 items-center">
          <span className="font-bold">My orders</span>
          {/* <button className="group bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"> */}
          <MdOutlineRemoveShoppingCart
            onClick={(e) => setActiveCart(!activeCart)}
            className="text-2xl cursor-pointer hover:text-pink-600 border-2 border-gray-500 p-1 rounded-md hover:border-pink-600 "></MdOutlineRemoveShoppingCart>
          {/* </button> */}
        </div>
        {/* {console.log(`${cartItems} is for ItemCard`)} */}
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                image={food.image}
                qty={food.qty}></ItemCard>
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your Cart is Empty
          </h2>
        )}
        <div className="absolute bottom-2">
          <h3 className="text-gray-800 font-semibold">
            Total Items : <span className="text-green-600">{totalQty}</span>{" "}
          </h3>
          <h3 className="text-gray-800 font-semibold">
            Total Amount :<span className="text-green-600">₹{totalAmt}</span>
          </h3>
          <hr className="w-[90vw] lg:w-[26vw] my-1 " />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 hover:bg-yellow-400 cursor-pointer text-white rounded-lg font-semibold m-2 px-3 py-2 w-[90vw] lg:w-[24vw] ">
            Checkout
          </button>
        </div>
      </div>
      <MdShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-10 right-9 cursor-pointer hover:text-violet-500 hover:bg-yellow-400 hover:scale-110 transition-all duration-500 ease-in-out 
          ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}
      />
    </>
  );
}

export default Cart;
