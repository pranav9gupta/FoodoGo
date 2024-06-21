import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";

function Home() {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems></FoodItems>
      <Cart />
    </>
  );
}

export default Home;