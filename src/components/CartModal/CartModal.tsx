"use client";

import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="absolute p-4 w-max rounded-2xl border shadow-xl bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <>
          <h1 className=" text-lg font-medium">Shopping Cart</h1>
          {/* Cart Items Wrapper */}
          <div className="flex flex-col gap-5">
            {/* Cart Items */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="logo"
                width={72}
                height={96}
                className="object-cover rounded-md w-20 h-24"
              />
              {/* Top */}
              <div className="flex flex-col justify-between">
                {/* Top */}
                <div>
                  {/* Title */}
                  <div className="flex items-center justify-between gap-16">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* Description */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Qty 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="logo"
                width={72}
                height={96}
                className="object-cover rounded-md w-20 h-24"
              />
              {/* Top */}
              <div className="flex flex-col justify-between">
                {/* Top */}
                <div>
                  {/* Title */}
                  <div className="flex items-center justify-between gap-16">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* Description */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Qty 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Details */}
          <div className="">
            <div className="flex items-center justify-between font-semibold ">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes are calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md  py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 text-white bg-black">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
