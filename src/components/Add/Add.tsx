"use client";
import React, { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "increase" | "decrease") => {
    if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "increase" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-between w-32 bg-gray-100 py-2 px-4 rounded-full">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("decrease")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("increase")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500 ">{stockNumber} items</span>
            left! <br /> {" Don't"} miss it
          </div>
        </div>
        <button className="w-36 text-sm ring-1 rounded-3xl ring-main text-main py-2 px-3 hover:bg-main hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
