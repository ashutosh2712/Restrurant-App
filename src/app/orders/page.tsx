"use client";

import { OrderType } from "@/types/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const OrdersPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isLoading, error, data } = useQuery("orders", () =>
    fetch(`${API_BASE_URL}/api/orders`).then((res) => res.json())
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: String; status: String }) => {
      return fetch(`${API_BASE_URL}/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    mutation.mutate({ id, status });

    toast.success("Order status Has been Changed!");
  };

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
                  <form
                    className="flex items-center justify-center gap-4"
                    onSubmit={(e) => handleUpdate(e, item.id)}
                  >
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
