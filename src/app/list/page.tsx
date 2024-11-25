import Filters from "@/components/Filters/Filters";
import ProductList from "@/components/ProductList/ProductList";
import Skeleton from "@/components/Skeleton/Skeleton";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import React, { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const search = await searchParams;
  const categorySlug = search?.cat || "all-products";
  try {
    const wixClient = await wixClientServer();
    const cat = await wixClient.collections.getCollectionBySlug(categorySlug);

    if (!cat?.collection) {
      throw new Error(`Collection not found for slug: ${categorySlug}`);
    }

    return (
      <div className="px-4 mt-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        {/* Campaign */}
        <div className="bg-pink-50 rounded-lg px-4 sm:flex justify-between h-fit">
          <div className="text-center sm:text-left sm:w-2/3 flex flex-col items-center justify-center gap-4 sm:gap-8">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-[48px] text-gray-700">
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
        <Suspense fallback={<Skeleton />}>
          <Filters />
        </Suspense>
        {/* Product List */}
        <h1 className="mt-12 text-xl font-semibold">
          {cat.collection?.name} for You!
        </h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={
              cat.collection?._id || "00000000-000000-000000-000000000001"
            }
            searchParams={search}
          />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error("Error fetching collection:", error);
    return (
      <div className="px-4 mt-4">
        <h1 className="text-xl font-semibold">Something went wrong!</h1>
        <p>We {"couldn’t"} load the page. Please try again later.</p>
      </div>
    );
  }
};

export default ListPage;
