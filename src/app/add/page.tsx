"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { title } from "process";
import React, { useState } from "react";

type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlung: string;
};

type Option = {
  title: string;
  additonalPrice: number;
};
const AddPage = () => {
  const { data: session, status } = useSession();

  const [input, setInputs] = useState<Inputs>({
    title: "",
    desc: "",
    price: 0,
    catSlung: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additonalPrice: 0,
  });

  const [options, setOptions] = useState<Option[]>([]);

  const router = useRouter();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <div>
      <form
        className="shadow-lg flex flex-wrap gap-4 p-8"
        onSubmit={handleSubmit}
      >
        <h1>Add New Product</h1>
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
            name="category"
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
