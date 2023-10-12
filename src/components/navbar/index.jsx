"use client";

import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "@/data/animationConfig";
import Image from "next/image";
import logo from "../../../public/assets/logo/main-logo.webp";
import logo2 from "../../../public/assets/logo/slogan.webp";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOnClick = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className="text-white bg-purple-800 px-4 md:px-12 flex flex-row justify-between items-center">
        <div className="flex flex-row py-4 md:py-2">
          <Image src={logo} className="w-20" alt="logo" />
          <Image src={logo2} className="w-[110px]" alt="slogan" />
        </div>
        <div className="hidden md:flex space-x-1 text-xs py-4">
          <span>Selamat Datang di </span>
          <span className="uppercase font-semibold">
            PT. RIHLAH DUTA AMANAH
          </span>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleOnClick}>
          {isOpen ? <AiOutlineClose /> : <HiMenu />}
        </div>
      </div>
      <ul className="w-full hidden md:flex md:flex-row bg-slate-600 text-xs text-white px-4 space-x-0 space-y-4 md:space-y-0 md:space-x-14 md:px-12 py-2 items-center md:items-start">
        <li className="uppercase cursor-pointer">promo</li>
        <li className="uppercase cursor-pointer">home</li>
        <li className="uppercase cursor-pointer">products</li>
        <li className="uppercase cursor-pointer">visa & passport</li>
        <li className="uppercase cursor-pointer">gallery</li>
        <li className="uppercase cursor-pointer">about us</li>
      </ul>
      <AnimatePresence mode="wait">
        <motion.div
          layout="position"
          key="nav-links"
          variants={mobileNavContainerVariant}
          initial="hidden"
          animate="show"
          className="md:hidden"
        >
          {isOpen && (
            <ul className="w-full flex flex-col bg-slate-600 text-xs text-white px-4 space-x-0 space-y-4 md:space-y-0 md:space-x-14 md:px-12 py-2 items-center md:items-start">
              <motion.div
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <li className="uppercase cursor-pointer hover:opacity-80">
                  promo
                </li>
              </motion.div>
              <motion.div
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <li className="uppercase cursor-pointer hover:opacity-80">
                  home
                </li>
              </motion.div>
              <motion.div
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <li className="uppercase cursor-pointer hover:opacity-80">
                  products
                </li>
              </motion.div>
              <motion.div
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <li className="uppercase cursor-pointer hover:opacity-80">
                  visa & passport
                </li>
              </motion.div>
              <motion.div
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <li className="uppercase cursor-pointer hover:opacity-80">
                  gallery
                </li>
              </motion.div>
              <motion.div
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <li className="uppercase cursor-pointer hover:opacity-80">
                  about us
                </li>
              </motion.div>
            </ul>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
