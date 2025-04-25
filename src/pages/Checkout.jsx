import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const { state } = useLocation();
  const { cartItems = [], totalPrice = 0 } = state || {};
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Order Summary</h2>

        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <p>
                {item.name} × {item.quantity}
              </p>
              <p className="font-medium">Ksh {item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 text-right">
          Total: Ksh {totalPrice}
        </h3>

        {submitted ? (
          <div className="text-green-600 text-center font-medium bg-green-100 p-4 rounded">
            ✅ Order submitted successfully! Redirecting to home...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-center">
            <p className="mb-4 text-gray-700">
              Please confirm your order total above.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-500 text-white py-3 rounded hover:bg-indigo-600 transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Confirm Order"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
