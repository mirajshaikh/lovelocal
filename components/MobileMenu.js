import { customerPageIcon, dashboardIcon } from "@/constants/images";
import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";

function MobileMenu({ setPopup }) {
  return (
    <div className="w-screen p-4 bg-sidebar-bg shrink-0 h-screen max-h-screen fixed top-0 left-0 right-0 bottom-0 z-40">
      <div className="relative h-9 flex justify-between w-full items-center">
        <Image src="./logo.svg" width={36} height={36} />
        <button onClick={() => setPopup(false)}>
          <IoClose className="text-3xl" color="white" />
        </button>
      </div>
      <div className="mt-8">
        <p className="text-xs font-semibold text-gray-500 ">PAGES</p>
        <div className="grid gap-2 my-4">
          <button
            onClick={() => setPopup(false)}
            className="bg-sidebar-item_bg p-3 rounded-md flex gap-2 items-center"
          >
            <Image src={dashboardIcon} />
            <p className="text-gray-200 text-sm font-medium ">Dashboard</p>
          </button>
          <button
            onClick={() => setPopup(false)}
            className="p-3 hover:bg-sidebar-item_bg rounded-md flex gap-2 items-center"
          >
            <Image src={customerPageIcon} />
            <p className="text-gray-200 text-sm font-medium ">Customers</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
