import React from "react";

export default function About() {
  return (
    <div className="px-6 py-12 bg-white sm:px-12 lg:px-32">
      <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 rounded-2xl p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-red-500">QuickBite</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">QuickBite</span> is a
            modern, user-friendly web application designed to simplify food
            ordering by connecting users with the finest restaurants in their
            area. We offer a seamless browsing experience, allowing users to
            explore a curated list of restaurants, filter by cuisine, and search
            for their favorite dining options.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Our platform allows you to dynamically manage your orders in the
            cart, enjoy a streamlined checkout process, and receive real-time
            notifications on your order journey when adding or removing items
            from the cart.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            With a focus on <span className="font-semibold">performance</span>{" "}
            and <span className="font-semibold">accessibility</span>, QuickBite
            ensures a smooth experience across devices, whether you're searching
            for <span className="text-red-500">Nyama Choma</span>,
            <span className="text-green-600"> Italian</span>, or{" "}
            <span className="text-yellow-600">Fast Food</span>.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Whether you're craving a quick bite or planning a feast,{" "}
            <span className="font-semibold text-gray-800">QuickBite</span> has
            you covered!
          </p>
        </div>
      </div>
    </div>
  );
}
