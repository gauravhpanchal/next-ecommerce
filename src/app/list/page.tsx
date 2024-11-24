import Filters from "@/components/Filters/Filters";
import ProductList from "@/components/ProductList/ProductList";
import Image from "next/image";
import React from "react";

type Props = {};

const ListPage = (props: Props) => {
  return (
    <div className="px-4 mt-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Campaign */}
      <div className=" bg-pink-50 rounded-lg px-4 sm:flex justify-between h-fit">
        <div className="text-center sm:text-left sm:w-2/3 flex flex-col items-center justify-center gap-4 sm:gap-8">
          <h1 className=" text-3xl sm:text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-[#f35c7a] text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-full h-52 sm:w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* Filters */}
      <Filters />
      {/* Product List */}
      <h1 className="mt-12 text-xl font-semibold">Shoes for You!</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
