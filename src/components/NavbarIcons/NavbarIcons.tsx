"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModal from "../CartModal/CartModal";

type Props = {};

const NavbarIcons = (props: Props) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
      setIsProfileOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex gap-4 xl:gap-6 items-center relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md bg-white top-12 left-0 text-sm border shadow-xl z-20 ">
          <Link href="/" className="hover:underline">
            Profile
          </Link>
          <div className="mt-2 cursor-pointer hover:underline">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className=""
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 size-6 bg-[#f35c7a] rounded-full text-white text-center text-sm flex justify-center items-center">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavbarIcons;
