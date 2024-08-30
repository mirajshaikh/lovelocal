"use client";
import React, { useState } from "react";
import Image from "next/image";
import { chatIcon, infoIcon, searchIcon } from "@/constants/images";
import { FaAngleDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { dataStore } from "@/store/data";
import MobileMenu from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userDetails = dataStore((state) => state.userDetails);

  return (
    <header className="w-full shrink-0 p-4 bg- bg-white flex items-center justify-between sticky top-0 z-30 shadow-md">
      <div className="flex gap-4 items-center md:hidden">
        <div className="relative h-9 w-9 ">
          <Image src="/logo-pink.png" width={36} height={36} />
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <IoClose className="text-xl" />
          ) : (
            <FiMenu className="text-xl" />
          )}
        </button>
      </div>
      <div className="flex justify-end w-full items-center">
        <div className="flex gap-3 *:bg-[#F1F5F9] *:p-2 *:rounded-full justify-end border-r pr-3 mr-3">
          <button>
            <Image src={searchIcon} width={16} height={16} />
          </button>
          <button className="relative">
            {userDetails?.newChat ? (
              <div className="h-3 w-3 bg-red-600 z-30 rounded-full absolute right-0 top-0 border-2 border-white"></div>
            ) : (
              ""
            )}
            <Image src={chatIcon} width={16} height={16} />
          </button>
          <button>
            <Image src={infoIcon} width={16} height={16} />
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-700 font-medium flex items-center gap-1 cursor-pointer">
            {userDetails?.name ? (
              userDetails?.name
            ) : (
              <span className="h-4 w-14 bg-gray-400 rounded-full animate-pulse"></span>
            )}{" "}
            <span>
              <FaAngleDown className="text-gray-400" />
            </span>
          </p>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }} // Slide in from the left
            animate={{ x: 0 }} // Slide to original position
            exit={{ x: "-100%" }} // Slide out to the left
            transition={{
              duration: 0.5, // Adjust the duration of the transition
              ease: "easeInOut", // Ease transition
            }}
            className="h-screen max-h-screen fixed top-0 left-0 right-0 bottom-0 z-40"
          >
            <MobileMenu setPopup={setIsMenuOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
