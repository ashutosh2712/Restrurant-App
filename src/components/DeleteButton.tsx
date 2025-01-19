"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const DeleteButton = ({ id }: { id: string }) => {
  const { data: session, status } = useSession();

  const router = useRouter();
  if (status == "loading") {
    return <p>Loading..</p>;
  }

  if (status == "unauthenticated" || !session?.user.isAdmin) {
    return;
  }

  const handleDelete = async () => {
    const res = await fetch(`${API_BASE_URL}/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      router.push("/menu");
      toast.success("Product Deleted!");
    } else {
      const data = await res.json();
      toast.error(data.message);
    }
  };

  return (
    <button
      className="bg-red-400 p-2 rounded-full absolute top-4 right-4 text-white"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
