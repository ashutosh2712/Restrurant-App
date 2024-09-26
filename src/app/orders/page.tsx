import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base odd:bg-gray-200 even:bg-gray-50">
            <td className="hidden md:block py-5 px-1">2131411343</td>
            <td className="py-5 px-1">27.09.2024</td>
            <td className="py-5 px-1">89.70</td>
            <td className="hidden md:block py-5 px-1">Big Burger</td>
            <td className="py-5 px-1">On the Way</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-200  even:bg-gray-50">
            <td className="hidden md:block py-5 px-1">2131411343</td>
            <td className="py-5 px-1">27.09.2024</td>
            <td className="py-5 px-1">89.70</td>
            <td className="hidden md:block py-5 px-1">Big Burger</td>
            <td className="py-5 px-1">On the Way</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-200  even:bg-gray-50">
            <td className="hidden md:block py-5 px-1">2131411343</td>
            <td className="py-5 px-1">27.09.2024</td>
            <td className="py-5 px-1">89.70</td>
            <td className="hidden md:block py-5 px-1">Big Burger</td>
            <td className="py-5 px-1">On the Way</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-200  even:bg-gray-50">
            <td className="hidden md:block py-5 px-1">2131411343</td>
            <td className="py-5 px-1">27.09.2024</td>
            <td className="py-5 px-1">89.70</td>
            <td className="hidden md:block py-5 px-1">Big Burger</td>
            <td className="py-5 px-1">On the Way</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
