import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const MenuItem = (props: Props) => {
  
  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };
  return (
    <>
      <motion.ul
        className="flex flex-col gap-14 rounded-t-3xl text-2xl justify-center items-center absolute bg-gradient-to-r from-[#6CB4EE] to-[#89CFF0] text-white left-0 top-20 h-[calc(100vh-80px)] w-full"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        <motion.li variants={navItem}>
          <Link href="/">Home</Link>
        </motion.li>
        <motion.li variants={navItem}>
          <Link href="/">Shop</Link>
        </motion.li>
        <motion.li variants={navItem}>
          <Link href="/">Deals</Link>
        </motion.li>
        
        <motion.li variants={navItem}>
          <Link href="/">Contact</Link>
        </motion.li>
        <motion.li variants={navItem}>
          <Link href="/">Cart(1)</Link>
        </motion.li>
      </motion.ul>
    </>
  );
};

export default MenuItem;
