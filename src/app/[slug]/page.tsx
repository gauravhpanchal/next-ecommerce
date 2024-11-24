import Add from "@/components/Add/Add";
import CustomizeProducts from "@/components/CustomizeProducts/CustomizeProducts";
import ProductImages from "@/components/ProductImages/ProductImages";
import React from "react";

type Props = {};

const ProductDetailsPage = (props: Props) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Images */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* Texts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {/* Product Name */}
        <h1 className="text-4xl font-medium">Product Name</h1>
        {/* Product Description */}
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
          asperiores voluptate ipsa accusamus iure vel cum, dolorum deleniti
          consectetur tempore?
        </p>
        <div className="h-[2px] bg-gray-100" />
        {/* Pricing */}
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        {/* Customize Options */}
        <CustomizeProducts />
        {/* Add to Cart */}
        <Add />
        <div className="h-[2px] bg-gray-100" />
        {/* Terms and Condition */}
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta
            magni exercitationem voluptas adipisci, architecto autem sint aut
            numquam velit!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta
            magni exercitationem voluptas adipisci, architecto autem sint aut
            numquam velit!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta
            magni exercitationem voluptas adipisci, architecto autem sint aut
            numquam velit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
