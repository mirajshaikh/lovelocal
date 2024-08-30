import { teamsImage } from "@/constants/images";
import { IoFilter } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa6";
import Image from "next/image";
import React from "react";

function Controls() {
  return (
    <div className="py-8 flex w-full justify-between items-center">
      <button className="h-9 relative">
        <Image src={teamsImage} height={36} />
      </button>
      <div className="flex gap-2 items-center">
        <button className="p-2 bg-white border border-[#E2E8F0] rounded-sm">
          <IoFilter />
        </button>
        <button className="p-2 bg-white border border-[#E2E8F0] rounded-sm">
          <p className="text-[10px] md:text-xs font-medium text-[#475569] flex items-center gap-2">
            <FaRegCalendar className="text-base" />
            OCT 15, 2022 - OCT 31, 2022
          </p>
        </button>
      </div>
    </div>
  );
}

export default Controls;
