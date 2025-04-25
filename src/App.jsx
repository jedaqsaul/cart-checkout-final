import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar"; // adjust the path if different

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
