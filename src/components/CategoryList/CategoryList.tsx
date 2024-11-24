"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const CategoryList = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2, // Medium screens
          spacing: 10,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4, // Large screens
          spacing: 20,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 6, // Extra large screens
          spacing: 20,
        },
      },
    },
  });

  return (
    <div className="relative px-4 mt-12">
      {/* Category List */}
      {/* <div className="flex gap-4 md:gap-8 overflow-x-scroll scrollbar-hide scroll-smooth"> */}
      <div className="keen-slider" ref={ref}>
        {/* Categories Card */}
        {Array(12)
          .fill("")
          .map((_, index) => (
            <Link
              key={index}
              href="/list?cat=test"
              className="keen-slider__slide flex-shrink-0 w-full  sm:w-1/2 lg:w-1/4 xl:w-1/6"
            >
              <div className="relative w-full h-96">
                <Image
                  src="https://images.pexels.com/photos/6214103/pexels-photo-6214103.jpeg"
                  alt=""
                  sizes="20vw"
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
              <h1 className="mt-8 font-light text-xl tracking-wide">
                Category
              </h1>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
