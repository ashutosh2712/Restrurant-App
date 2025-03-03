import DeleteButton from "@/components/DeleteButton";
import Price from "@/components/Price";
import { ProductType } from "@/types/types";

import Image from "next/image";
import React from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const getData = async (id: string) => {
  const res = await fetch(`${API_BASE_URL}/api/products/${id}`, {
    cache: "no-store",
  });
  // console.log("Response status:", res.status);
  // console.log("Response headers:", res.headers);
  // const text = await res.text();
  // console.log("Response body:", text);

  if (!res.ok) {
    // Log the error status and message without consuming the body multiple times.
    const error = await res.json().catch(() => ({ message: "Unknown error" }));
    console.error("Error response:", error);
    throw new Error("Failed!");
  }
  return res.json();
};

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const singleProduct: ProductType = await getData(params.id);
  //
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-orange-500 md:flex-row md:gap-8 md:items-center relative">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price product={singleProduct} />
      </div>
      <DeleteButton id={singleProduct.id} />
    </div>
  );
};

export default SingleProduct;
