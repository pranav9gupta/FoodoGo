/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const FoodCard = ({
  id,
  image,
  name,
  price,
  discription,
  category,
  rating,
  handleToast,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex-col rounded-lg gap-2">
      <div className=" flex flex-center mb-3 items-center">
        <img
          src={image}
          alt=""
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out items-center justify-center"
        />
      </div>
      <div className="flex text-sm justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 font-semibold">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{discription.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="text-yellow-400 mr-1" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, image, name, price, qty: 1 }));
            handleToast(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-pink-600 rounded-lg text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
