"use client";
import { dataStore } from "@/store/data";
import React from "react";

function Greeting({ data }) {
  const setUserDetail = dataStore((state) => state.setUserDetail);
  setUserDetail(data);
  return (
    <div className="w-full bg-greeting-banner p-6 rounded-md bg-cover bg-left">
      <div>
        <p className="text-2xl md:text-3xl font-medium text-[#1E293B]">
          Good afternoon, {data?.name} 👋
        </p>
        <p className="font-medium text-base text-[#475569]">
          Here is what’s happening today
        </p>
      </div>
    </div>
  );
}

export default Greeting;
