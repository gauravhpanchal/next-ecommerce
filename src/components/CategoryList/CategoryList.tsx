import React from "react";
import { wixClientServer } from "@/lib/wixClientServer";
import CategorySlider from "../CategorySlider/CategorySlider";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const category = await wixClient.collections.queryCollections().find();

  return (
    <div className="relative px-4 mt-12">
      <CategorySlider categories={category.items} />
    </div>
  );
};

export default CategoryList;
