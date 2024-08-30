"use client";
import React from "react";
import classNames from "classnames";
import { TbCircleFilled } from "react-icons/tb";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     name: "Oct 15th",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Today",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

function OrderValue({ data }) {
  return (
    <div className="w-full relative py-4 bg-white rounded-sm grid gap-2 shadow-md">
      <div className="px-4 py-2">
        <p className="text=[#1E293B] font-semibold">AVG Order Value</p>
      </div>
      <hr />
      <div className="px-4 flex gap-8">
        <div className="flex gap-5 items-center justify-between w-full">
          <div className="flex gap-5 items-center">
            <div className="flex gap-3 items-center">
              <p className="text-3xl font-medium text-[#1E293B]">
                {data?.total}
              </p>
            </div>
            <p
              className={classNames(
                "p-1 px-2 text-sm text-white rounded-full font-semibold",
                data?.percentageDifference >= 0
                  ? "bg-green-500"
                  : "bg-yellow-500"
              )}
            >
              {data?.percentageDifference > 0 ? "+" : "-"}
              {Math.abs(data?.percentageDifference)}%
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 md:items-center">
            <div className="flex gap-2 items-center">
              <TbCircleFilled
                className="p-0.5 rounded-full bg-[#6366F1] "
                color="white"
                size="14px"
              />
              <p className="text-sm font-medium text-[#1E293B]">Current</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbCircleFilled
                className="p-0.5 rounded-full bg-[#CBD5E1] "
                color="white"
                size="14px"
              />
              <p className="text-sm font-medium text-[#1E293B]">Previous</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-72 mt-5">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data?.graphData}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fff" stopOpacity={0} />
                <stop offset="95%" stopColor="#fff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="0" vertical={false} />
            <XAxis
              tickSize="0"
              tickMargin="10"
              axisLine={false}
              dataKey="name"
              tick={{ fontSize: 12, fill: "#94A3B8" }}
            />
            <YAxis
              tickSize="0"
              tickMargin="5"
              axisLine={false}
              tick={{ fontSize: 12, fill: "#94A3B8" }}
            />
            <Area
              type="monotone"
              dataKey="previous"
              stroke="#CBD5E1"
              fill="url(#colorPv)"
              strokeWidth="2px"
            />
            <Area
              type="monotone"
              dataKey="current"
              stroke="#6366F1"
              fill="url(#colorUv)"
              strokeWidth="2px"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default OrderValue;
