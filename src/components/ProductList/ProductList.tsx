import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../Pagination/Pagination";
import { Suspense } from "react";
import Skeleton from "../Skeleton/Skeleton";

const PRODUCT_PER_PAGE = 8;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();
  const search = await searchParams;

  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", search?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      search?.type ? [search.type] : ["physical", "digital"]
    )
    .gt("priceData.price", search?.min || 0)
    .lt("priceData.price", search?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      search?.page ? parseInt(search.page) * (limit || PRODUCT_PER_PAGE) : 0
    );

  if (search?.sort) {
    const [sortType, sortBy] = search.sort.split(" ");

    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">
              {product.priceData?.formatted?.price}
            </span>
          </div>
          <div className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </div>
          <button className="rounded-2xl ring-1 ring-main text-main w-max py-2 px-4 text-xs hover:bg-main hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
      {search?.cat || search?.name ? (
        <Suspense fallback={<Skeleton />}>
          <Pagination
            currentPage={res.currentPage || 0}
            hasPrev={res.hasPrev()}
            hasNext={res.hasNext()}
          />
        </Suspense>
      ) : null}
    </div>
  );
};

export default ProductList;
