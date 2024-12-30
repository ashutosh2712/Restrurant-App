"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { title } from "process";
import React, { useState } from "react";

type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};

type Option = {
  title: string;
  additonalPrice: number;
};
const AddPage = () => {
  const { data: session, status } = useSession();

  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additonalPrice: 0,
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
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
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
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          img: url,
          ...inputs,
          options,
        }),
      });

      const data = await res.json();

      router.push(`/product/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form
        className="shadow-lg flex flex-wrap gap-4 p-8"
        onSubmit={handleSubmit}
      >
        <h1>Add New Product</h1>
        <div className="w-full flex flex-col">
          <label>Image</label>
          <input
            className="ring-1 ring-orange-200 p-2 rounded-sm"
            type="file"
            onChange={handleChangeImg}
          />
        </div>

        <div className="w-full flex flex-col">
          <label>Title</label>
          <input
            onChange={handleChange}
            className="ring-1 ring-orange-200 p-2 rounded-sm"
            type="text"
            name="title"
          />
        </div>

        <div className="w-full flex flex-col">
          <label>Desc</label>
          <textarea
            onChange={handleChange}
            className="ring-1 ring-orange-200 p-2 rounded-sm"
            name="desc"
          />
        </div>

        <div className="w-full flex flex-col">
          <label>Price</label>
          <input
            onChange={handleChange}
            className="ring-1 ring-orange-200 p-2 rounded-sm"
            type="number"
            name="price"
          />
        </div>

        <div className="w-full flex flex-col">
          <label>Category</label>
          <input
            onChange={handleChange}
            className="ring-1 ring-orange-200 p-2 rounded-sm"
            type="text"
            name="catSlug"
          />
        </div>

        <div className="w-full flex flex-col">
          <label>Options</label>
          <div>
            <input
              onChange={changeOption}
              className="ring-1 ring-orange-200 p-2 rounded-sm"
              type="text"
              placeholder="Title"
              name="title"
            />
            <input
              onChange={changeOption}
              className="ring-1 ring-orange-200 p-2 rounded-sm"
              type="number"
              placeholder="Additonal Price"
              name="additonalPrice"
            />
          </div>
          <div
            className="w-52 bg-orange-500 text-white p-2"
            onClick={() => setOptions((prev) => [...prev, option])}
          >
            Add Option
          </div>
        </div>
        <div>
          {options.map((item) => (
            <div
              className="ring-1 p-2 ring-orange-500 rounded-md cursor-pointer"
              key={item.title}
              onClick={() =>
                setOptions(options.filter((opt) => opt.title !== item.title))
              }
            >
              <span>{item.title}</span>
              <span>${item.additonalPrice}</span>
            </div>
          ))}
        </div>
        <button type="submit" className="p-2 w-full bg-orange-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPage;
