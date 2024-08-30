import { customerPageIcon, dashboardIcon } from "@/constants/images";
import Image from "next/image";
import React from "react";

function Sidebar() {
  return (
    <div className="md:w-64 p-4 bg-sidebar-bg shrink-0 h-screen max-h-screen hidden md:block">
      <div className="relative h-9 w-9">
        <Image src="./logo.svg" width={36} height={36} />
      </div>
      <div className="mt-8">
        <p className="text-xs font-semibold text-gray-500 ">PAGES</p>
        <div className="grid gap-2 my-4">
          <button className="bg-sidebar-item_bg p-3 rounded-md flex gap-2 items-center">
            <Image src={dashboardIcon} />
            <p className="text-gray-200 text-sm font-medium ">Dashboard</p>
          </button>
          <button className="p-3 hover:bg-sidebar-item_bg rounded-md flex gap-2 items-center">
            <Image src={customerPageIcon} />
            <p className="text-gray-200 text-sm font-medium ">Customers</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
