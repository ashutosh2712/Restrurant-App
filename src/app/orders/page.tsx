"use client";

import { OrderType } from "@/types/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useQuery } from "react-query";

const OrdersPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isLoading, error, data } = useQuery("orders", () =>
    fetch("http://localhost:3000/api/orders").then((res) => res.json())
  );
  console.log("orders:", data);
  if (isLoading || status === "loading") return "Loading...";

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
          {data.map((item: OrderType) => (
            <tr
              className="text-sm md:text-base odd:bg-gray-200 even:bg-gray-50"
              key={item.id}
            >
              <td className="hidden md:block py-5 px-1">{item.id}</td>
              <td className="py-5 px-1">
                {item.createdAt.toString().slice(0, 10)}
              </td>
              <td className="py-5 px-1">{item.price}</td>
              <td className="hidden md:block py-5 px-1">
                {item.products[0].title}
              </td>
              {session?.user.isAdmin ? (
                <td className="py-5 px-1">
                  <form className="flex items-center justify-center gap-4">
                    <input
                      placeholder={item.status}
                      className="p-2 ring ring-orange-100 rounded-md"
                    />
                    <button>
                      <Image src="/edit.png" alt="" width={20} height={20} />
                    </button>
                  </form>
                </td>
              ) : (
                <td className="py-5 px-1">{item.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
