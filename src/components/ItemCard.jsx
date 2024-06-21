/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

function ItemCard({ id, name, qty, price, image }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, image, name, price, qty }));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 cursor-pointer hover:text-red-700"
      />
      <img src={image} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>

        <div className="flex justify-between items-center">
          <span className="text-green-500 font-semibold">{price}</span>
          <div className="flex justify-center absolute right-7">
            <AiOutlineMinus
              onClick={() => {
                dispatch(decreaseQuantity({ id, image, name, price, qty }));
                toast(`${name} Quantity reduced`, {
                  icon: "👋",
                });
              }}
              className="cursor-pointer text-gray-600 hover:bg-green-500 border-2 border-gray-600 rounded-md hover:border-none hover:text-white p-1 text-xl transition-all ease-linear"
            />
            <span className="mx-[3px]">{qty}</span>
            <AiOutlinePlus
              onClick={() => {
                dispatch(increaseQuantity({ id, image, name, price, qty }));
                toast(`${name} Quantity reduced`, {
                  icon: "👋",
                });
              }}
              className="cursor-pointer  text-gray-600 hover:bg-green-500 border-2 border-gray-600 rounded-md hover:border-none hover:text-white p-1 text-xl transition-all ease-linear"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
