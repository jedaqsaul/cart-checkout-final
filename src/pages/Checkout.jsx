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
    <div className="checkout-container">
      <h2>Order Summary</h2>
      <div className="order-items">
        {cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <p>
              {item.name} x {item.quantity}
            </p>
            <p>Ksh {item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <h3>Total: Ksh {totalPrice}</h3>

      {submitted ? (
        <div className="success-message">
          ✅ Order submitted successfully! Redirecting to home...
        </div>
      ) : (
        <form className="confirmation-form" onSubmit={handleSubmit}>
          <p>Please confirm your order total above.</p>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Confirm Order"}
          </button>
        </form>
      )}
    </div>
  );
}
