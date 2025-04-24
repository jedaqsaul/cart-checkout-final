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
    <nav className="navbar">
      <Link to="/" className="logo">
        🍕 FoodieZone
      </Link>
      <Link to="/cart" className="cart-link">
        🛒 Cart ({cartCount})
      </Link>
    </nav>
  );
}
