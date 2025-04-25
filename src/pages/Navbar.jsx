import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => setCartCount(data.length));
  }, []);

  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition"
        >
          🍕 QuickBite
        </Link>
        <div className="flex gap-6 items-center">
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-indigo-600 hover:text-indigo-800 font-medium transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-indigo-600 hover:text-indigo-800 font-medium transition"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
          >
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>
    </>
  );
}
