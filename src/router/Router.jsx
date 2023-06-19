import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  ProductDetails,
  Products,
  Profile,
  UserCalories,
} from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/products" element={<Products />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/user-calories" element={<UserCalories />} />
    </Routes>
  );
};
