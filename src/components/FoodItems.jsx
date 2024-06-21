/* eslint-disable no-unused-vars */
import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  const handleToast = (name) => toast.success(`Added ${name} to cart`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLocaleLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            image={food.img}
            name={food.name}
            price={food.price}
            discription={food.desc}
            category={food.category}
            rating={food.rating}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
