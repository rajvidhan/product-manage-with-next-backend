"use client";

import React, { useState } from "react";
import { AddproductDB } from "../services/operations/productOp";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    color: "",
    category: "",
    price: "",
  });

  const AddProduct = async () => {
    const result = await AddproductDB(formData);
    if(result){
    
    }
  };


  return (
    <div className="bg-teal-200 flex-col min-h-screen items-center justify-center flex ">
      <h1 className="text-4xl font-bold text-teal-900 ">Add Products</h1>
      <div className="w-[700px] items-center flex flex-col justify-center ">
        <div className="items-center flex justify-between gap-10">
          <input
            type="text"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter the name"
            className="bg-teal-900 mt-5  p-4 rounded-xl text-white "
          />
        </div>
        <div className="items-center flex justify-between gap-10">
          <input
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            placeholder="Enter the category"
            className="bg-teal-900 mt-5  p-4 rounded-xl text-white "
          />
        </div>
        <div className="items-center flex justify-between gap-10">
          <input
            onChange={(e) =>
              setFormData({ ...formData, color: e.target.value })
            }
            type="text"
            placeholder="Enter the color "
            className="bg-teal-900 mt-5  p-4 rounded-xl text-white "
          />
        </div>
        <div className="items-center flex justify-between gap-10">
          <input
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            placeholder="Enter the company name"
            className="bg-teal-900 mt-5  p-4 rounded-xl text-white "
          />
        </div>
        <div className="items-center flex justify-between gap-10">
          <input
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            type="text"
            placeholder="Enter the price"
            className="bg-teal-900 mt-5  p-4 rounded-xl text-white "
          />
        </div>
      </div>
      <button
        onClick={() => AddProduct()}
        className="bg-teal-100 px-4 py-3 rounded-2xl mt-10 font-bold  flex justify-start"
      >
        Save
      </button>
    </div>
  );
};

export default page;
