import React from "react";
import { wixClientServer } from "@/lib/wixClientServer";
import CategorySlider from "../CategorySlider/CategorySlider";
import { collections } from "@wix/stores";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const category = await wixClient.collections.queryCollections().find();

  return (
    <div className="relative px-4 mt-12">
      {/* Pass categories to CategorySlider */}
      <CategorySlider categories={category.items} />
    </div>
  );
};

export default CategoryList;
