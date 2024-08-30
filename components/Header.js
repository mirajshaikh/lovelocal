"use client";
import React, { useState } from "react";
import Image from "next/image";
import { chatIcon, infoIcon, searchIcon } from "@/constants/images";
import { FaAngleDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { dataStore } from "@/store/data";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userDetails = dataStore((state) => state.userDetails);

  return (
    <header className="w-full shrink-0 p-4 bg- bg-white flex items-center justify-between">
      <button
        className="block md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <IoClose className="text-xl" />
        ) : (
          <FiMenu className="text-xl" />
        )}
      </button>
      <div className="flex justify-end w-full items-center">
        <div className="flex gap-3 *:bg-[#F1F5F9] *:p-2 *:rounded-full justify-end border-r pr-3 mr-3">
          <button>
            <Image src={searchIcon} width={16} height={16} />
          </button>
          <button className="relative">
            {userDetails?.newChat ? (
              <div className="h-3 w-3 bg-red-600 z-50 rounded-full absolute right-0 top-0 border-2 border-white"></div>
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
    </header>
  );
}

export default Header;
