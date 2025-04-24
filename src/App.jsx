import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar"; // adjust the path if different

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* renders Home, Cart, or Checkout depending on route */}
    </>
  );
}
