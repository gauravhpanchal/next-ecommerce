"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

type Props = {};

const Menu = (props: Props) => {
  const [open, setOpen] = useState(false);

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };
  return (
    <div>
      <Image
        src="/menu.png"
        alt="logo"
        height={28}
        width={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate={open ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <MenuItem />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
