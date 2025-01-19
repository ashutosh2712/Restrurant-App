"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { toast } from "react-toastify";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

type Inputs = {
  title: string;
  desc: string;
  price: string;
  catSlug: string;
};

type Option = {
  title: string;
  additionalPrice: number;
};
const AddPage = () => {
  const { data: session, status } = useSession();

  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    desc: "",
    price: "",
    catSlug: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });

  const [options, setOptions] = useState<Option[]>([]);
  const [image, setImage] = useState<File>();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      const { name, value } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOption((prev) => ({
      ...prev,
      [name]: name === "additionalPrice" ? parseFloat(value) || 0 : value, // Ensure `additionalPrice` is a number
    }));
  };

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const item = (target.files as FileList)[0];
    setImage(item);
  };

  const upload = async () => {
    const data = new FormData();
    data.append("file", image!);
    data.append("upload_preset", "restrurantapp");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/deeuxev50/image/upload",
      {
        method: "POST",

        body: data,
      }
    );

    const resData = await res.json();
    return resData.url;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const url = await upload();
      const parsedPrice = parseFloat(inputs.price);
      const res = await fetch(`${API_BASE_URL}/api/products`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          img: url,
          ...inputs,
          price: parsedPrice.toString(),
          options,
        }),
      });

      const data = await res.json();

      router.push(`/product/${data.id}`);
      toast.success("The product has been added!");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-4 lg:px-20 xl:px-40 flex items-center justify-center text-orange-500">
      <form className="flex flex-wrap gap-6" onSubmit={handleSubmit}>
        <h1>Add New Product</h1>
        <div className="w-full flex flex-col gap-2 ">
          <label
            className="text-sm cursor-pointer flex gap-4 items-center"
            htmlFor="file"
          >
            <Image src="/upload.png" alt="" width={64} height={64} />
            <span>Upload Image</span>
          </label>
          <input
            type="file"
            onChange={handleChangeImg}
            id="file"
            className="hidden"
          />
        </div>

        <div className="w-full flex flex-col">
          <label>Title</label>
          <input
            onChange={handleChange}
            className="ring-1 ring-orange-200 p-4 rounded-sm placeholder:text-orange-200 outline-none"
            type="text"
            placeholder="Bella Napoli"
            name="title"
          />
        </div>

        <div className="w-full flex flex-col">
          <label>Desc</label>
          <textarea
            onChange={handleChange}
            className="ring-1 ring-orange-200 p-4 rounded-sm placeholder:text-orange-200 outline-none"
            name="desc"
            placeholder="A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil and creamy mozzarella."
          />
        </div>

        <div className="w-full flex flex-col">
          <label>Price</label>
          <input
            onChange={handleChange}
            className="ring-1 ring-orange-200 p-4 rounded-sm placeholder:text-orange-200 outline-none"
            type="text"
            placeholder="29"
            name="price"
          />
        </div>

        <div className="w-full flex flex-col">
          <label>Category</label>
          <input
            onChange={handleChange}
            className="ring-1 ring-orange-200 p-4 rounded-sm  placeholder:text-orange-200 outline-none"
            type="text"
            placeholder="pizzas"
            name="catSlug"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label>Options</label>
          <div>
            <input
              onChange={changeOption}
              className="ring-1 ring-orange-200 p-4 rounded-sm placeholder:text-orange-200 outline-none"
              type="text"
              placeholder="Title"
              name="title"
            />
            <input
              onChange={changeOption}
              className="ring-1 ring-orange-200 p-4 rounded-sm placeholder:text-orange-200 outline-none"
              type="number"
              placeholder="Additonal Price"
              name="additionalPrice"
            />
          </div>
          <div
            className="bg-gray-500 p-2 w-48 rounded-md text-white"
            onClick={() => setOptions((prev) => [...prev, option])}
          >
            Add Option
          </div>
        </div>
        <div>
          {options.map((item) => (
            <div
              className="p-2  rounded-md cursor-pointer bg-gray-200 text-gray-400"
              key={item.title}
              onClick={() =>
                setOptions(options.filter((opt) => opt.title !== item.title))
              }
            >
              <span>{item.title}</span>
              <span>${item.additionalPrice}</span>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-orange-500 p-4 text-white w-48 rounded-md relative h-14 flex items-center justify-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPage;
