import { MenuType } from "@/types/types";
import Link from "next/link";
import React from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const getData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};
const MenuPage = async () => {
  const menu: MenuType = await getData();

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold lg:text-3xl text-2xl">
              {category.title}
            </h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button
              className={`hidden xl:block py-2 px-4 rounded-md ${
                category.color === "black"
                  ? "bg-black text-white"
                  : "bg-white text-red-500"
              }`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
