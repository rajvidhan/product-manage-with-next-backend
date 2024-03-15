"use client";

import React, { useEffect } from "react";
import { products } from "../services/operations/productOp";

const page = async () => {
  let data = await products();

  return (
    <div className="bg-teal-200 min-h-screen flex justify-center flex-col   items-center ">
      <h1 className="text-5xl mb-10 font-bold text-teal-700">Products List</h1>

      <table className="flex flex-col">
        <thead>
          <tr className="flex flex-row ">
            <th className="mr-10">name</th>
            <th className="mr-10">price</th>
            <th className="mr-10">color</th>
            <th className="mr-10">company</th>
            <th className="mr-10">category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,index) => (
            <tr key={index} className="flex flex-row">
              <td className="mr-10">{d.name}</td>
              <td className="mr-10">{d.price}</td>
              <td className="mr-10">{d.color}</td>
              <td className="mr-10">{d.company}</td>
              <td className="mr-10">{d.categry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
