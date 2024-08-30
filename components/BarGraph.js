"use client";
import React from "react";
import { TbCircleFilled } from "react-icons/tb";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function formatYAxis(value) {
  if (value >= 100000) {
    return `${(value / 100000).toFixed(0)}L`;
  } else {
    return value;
  }
}

function formatDigit(value) {
  if (value >= 10000000) {
    return `${(value / 10000000).toFixed(2)}Cr`;
  } else if (value >= 100000) {
    return `${(value / 100000).toFixed(2)}L`;
  } else {
    return value;
  }
}

function BarGraph({ data }) {
  return (
    <div className="w-full relative py-4 bg-white rounded-sm grid gap-2 shadow-md">
      <div className="px-4 py-2">
        <p className="text=[#1E293B] font-semibold">Direct VS Indirect</p>
      </div>
      <hr />
      <div className="px-4 flex flex-col md:flex-row gap-8">
        <div className="flex  gap-5 items-center">
          <div className="flex gap-3 items-center">
            <TbCircleFilled
              className="p-1 rounded-full bg-[#38BDF8] "
              color="white"
              size="18px"
            />
            <p className="text-3xl font-medium text-[#1E293B]">
              {formatDigit(data?.totalSalesDirect)}
            </p>
          </div>
          <p className="text-sm font-normal">Direct</p>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex gap-3 items-center">
            <TbCircleFilled
              className="p-1 rounded-full bg-[#6366F1] "
              color="white"
              size="18px"
            />
            <p className="text-3xl font-medium text-[#1E293B]">
              {formatDigit(data?.totalSalesIndirect)}
            </p>
          </div>
          <p className="text-sm font-normal">Indirect</p>
        </div>
      </div>
      <div className="h-72 mt-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data?.graphData}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="0" vertical={false} />
            <XAxis
              tickSize="0"
              tickMargin="10"
              axisLine={false}
              dataKey="month"
              tick={{ fontSize: 12, fill: "#94A3B8" }}
            />
            <YAxis
              tickSize="0"
              tickMargin="5"
              axisLine={false}
              tickFormatter={formatYAxis}
              tick={{ fontSize: 12, fill: "#94A3B8" }}
            />
            <Bar dataKey="direct" barSize={16} fill="#38BDF8" />
            <Bar dataKey="indirect" barSize={16} fill="#6366F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarGraph;
