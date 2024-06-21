/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import foodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(foodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="mx-6">
      <h3 className=" font-semibold text-xl">Find the best food</h3>
      <div className="my-5 flex gap-3">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}>
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => dispatch(setCategory(category))}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-600 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              }`}>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
