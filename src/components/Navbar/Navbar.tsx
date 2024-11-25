"use client";
import Link from "next/link";
import React from "react";
import Menu from "../Menu/Menu";
import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";
import dynamic from "next/dynamic";

const NavbarIcons = dynamic(() => import("../NavbarIcons/NavbarIcons"), {
  ssr: false,
});


const Navbar = () => {
  return (
    <div className="h-20 top-0 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 z-20  relative">
      {/* Mobile */}
      <div className="h-full md:hidden flex justify-between items-center">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/logo.png" alt="logo" width={24} height={24} />
          <div className="text-2xl tracking-tighter font-semibold">
            Nish Luxe
          </div>
        </Link>
        <Menu />
      </div>
      {/* Bigger Screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12 ">
          <Link href="/" className="flex gap-3 items-center">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-tighter font-semibold">
              Nish Luxe
            </div>
          </Link>
          <div className="hidden xl:flex gap-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/list" className="hover:underline">
              Shop
            </Link>
            <Link href="/list" className="hover:underline">
              Deals
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
