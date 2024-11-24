import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap">
      {/* Items */}
      <Link
        href="/test"
        className="w-full sm:w-[45%] lg:w-[22%] flex flex-col gap-4"
      >
        <div className="relative w-full h-64">
          <Image
            src="https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-300"
          />
          <Image
            src="https://images.pexels.com/photos/6214103/pexels-photo-6214103.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500 line-clamp-2">My Description</div>
        <button className="rounded-2xl ring-1 ring-[#f35c7a] w-max text-[#f35c7a] py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white ">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full sm:w-[45%] lg:w-[22%] flex flex-col gap-4"
      >
        <div className="relative w-full h-64">
          <Image
            src="https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-300"
          />
          <Image
            src="https://images.pexels.com/photos/6214103/pexels-photo-6214103.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500 line-clamp-2">My Description</div>
        <button className="rounded-2xl ring-1 ring-[#f35c7a] w-max text-[#f35c7a] py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white ">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full sm:w-[45%] lg:w-[22%] flex flex-col gap-4"
      >
        <div className="relative w-full h-64">
          <Image
            src="https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-300"
          />
          <Image
            src="https://images.pexels.com/photos/6214103/pexels-photo-6214103.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500 line-clamp-2">My Description</div>
        <button className="rounded-2xl ring-1 ring-[#f35c7a] w-max text-[#f35c7a] py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white ">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full sm:w-[45%] lg:w-[22%] flex flex-col gap-4"
      >
        <div className="relative w-full h-64">
          <Image
            src="https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-300"
          />
          <Image
            src="https://images.pexels.com/photos/6214103/pexels-photo-6214103.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500 line-clamp-2">My Description</div>
        <button className="rounded-2xl ring-1 ring-[#f35c7a] w-max text-[#f35c7a] py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white ">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
