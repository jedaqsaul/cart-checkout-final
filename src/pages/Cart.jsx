import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setCartItems(updatedData);
      });
  }, []);

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={() => handleIncrease(item.id)}
                  onDecrease={() => handleDecrease(item.id)}
                  onDelete={() => handleDelete(item.id)}
                />
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <h3 className="text-xl font-semibold">Total: Ksh {totalPrice}</h3>
              <Link to="/checkout" state={{ cartItems, totalPrice }}>
                <button className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600 transition">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
