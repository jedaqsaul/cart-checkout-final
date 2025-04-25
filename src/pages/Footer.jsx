// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-100 text-gray-700 text-sm mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} QuickBite Kenya. All rights
          reserved.
        </p>
        <p className="text-green-700">Made with ❤️ in Nairobi 🇰🇪</p>
      </div>
    </footer>
  );
}
