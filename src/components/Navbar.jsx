/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-7 py-3 mb-8">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold"> Foodogo Foods</h1>
      </div>
      <div>
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="border border-gray-400 text-sm rounded-lg outline-none p-3 w-full lg:w-[25vw]"
          type="search"
          name="search"
          placeholder="Search For Food Item"
          autoComplete="off"
        />
      </div>
    </nav>
  );
}

export default Navbar;
