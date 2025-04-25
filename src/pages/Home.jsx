import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Assuming you're now fetching this from your server:
const RESTAURANT_API = "http://localhost:3000/restaurants";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    fetch(RESTAURANT_API)
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error("Failed to fetch restaurants", err));
  }, []);

  const handleAddToCart = (dish) => {
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dish),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add to cart");
        return res.json();
      })
      .then((data) => {
        console.log("Added to cart:", data);
      })
      .catch((err) => console.error("Error adding to cart:", err));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {!selectedRestaurant ? (
        // Display Restaurant List
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-200 p-4 cursor-pointer"
              onClick={() => setSelectedRestaurant(restaurant)}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {restaurant.name}
              </h2>
              <p className="text-gray-600">{restaurant.cuisineType}</p>
              <p className="text-sm text-indigo-500 mt-2">
                Click to view menu →
              </p>
            </div>
          ))}
        </div>
      ) : (
        // Display Menu for Selected Restaurant
        <div>
          <button
            className="mb-6 text-indigo-600 hover:underline"
            onClick={() => setSelectedRestaurant(null)}
          >
            ← Back to restaurants
          </button>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {selectedRestaurant.name}'s Menu
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selectedRestaurant.menu.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition duration-200 p-4"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {dish.name}
                </h2>
                <p className="text-gray-600 text-sm mb-2">{dish.description}</p>
                <p className="text-gray-700 font-medium mb-2">
                  Price: Ksh {dish.price}
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={(e) => {
                    e.preventDefault(); // Prevents the page reload
                    handleAddToCart(dish);
                  }}
                  className="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
                >
                  Add to Cart
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
