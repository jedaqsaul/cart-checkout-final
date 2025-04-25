import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dishes")
      .then((res) => res.json())
      .then((data) => setDishes(data))
      .catch((error) => console.error("Error fetching dishes:", error));
  }, []);

  const handleAddToCart = (dish) => {
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dish),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add to cart");
        return res.json();
      })
      .then((data) => {
        console.log("Added to cart:", data);
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {dishes.map((dish) => (
        <div
          key={dish.id}
          className="bg-white rounded-xl shadow hover:shadow-lg transition duration-200 overflow-hidden"
        >
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{dish.name}</h2>
            <p className="text-gray-600 mb-2">Price: Ksh {dish.price}</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => handleAddToCart(dish)}
              className="mt-2 w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      ))}
    </div>
  );
}
