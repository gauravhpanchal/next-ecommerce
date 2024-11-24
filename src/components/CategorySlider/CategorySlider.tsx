"use client";

import { collections } from "@wix/stores";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "keen-slider/keen-slider.min.css";

type Props = {
  categories: collections.Collection[]; // Pass all categories as a prop
};

const CategorySlider = ({ categories }: Props) => {
  // Initialize KeenSlider
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 20,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 6,
          spacing: 20,
        },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {categories.map((category) => (
        <Link
          key={category._id}
          href={`/list?cat=${category.slug}`}
          className="keen-slider__slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative w-full h-72">
            <Image
              src={category.media?.mainMedia?.image?.url || "/cat.png"}
              alt={category.name || "Category"}
              sizes="20vw"
              className="object-cover"
              fill
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            {category.name}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default CategorySlider;
