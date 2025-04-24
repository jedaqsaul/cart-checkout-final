import React, { useEffect, useState } from "react";

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
    <div className="grid grid-cols-2 gap-4 p-4">
      {dishes.map((dish) => (
        <div key={dish.id} className="border p-4 rounded shadow">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-40 object-cover mb-2"
          />
          <h2 className="text-xl font-bold">{dish.name}</h2>
          <p className="text-gray-700">Price: Ksh {dish.price}</p>
          <button
            onClick={() => handleAddToCart(dish)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
