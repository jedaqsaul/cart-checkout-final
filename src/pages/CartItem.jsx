import React from "react";

export default function CartItem({ item, onIncrease, onDecrease, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow mb-4">
      <img
        className="w-20 h-20 object-cover rounded"
        src={item.image}
        alt={item.name}
      />
      <div className="flex-1 px-4">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
        <h4 className="font-bold text-indigo-600 mt-1">Ksh {item.price}</h4>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
          onClick={onDecrease}
        >
          -
        </button>
        <span className="font-semibold">{item.quantity}</span>
        <button
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
          onClick={onIncrease}
        >
          +
        </button>
      </div>
      <button
        onClick={onDelete}
        className="ml-4 text-sm text-red-600 hover:text-red-800"
      >
        Remove
      </button>
    </div>
  );
}
