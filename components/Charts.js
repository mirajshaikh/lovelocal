"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { PiDotsThreeBold } from "react-icons/pi";
import classNames from "classnames";
import { AnimatedNumber } from "./AnimateNum";

function Charts({ data, title, icon }) {
  const [saleValue, setSaleValue] = useState(0);
  const [graphData, setGraphData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const graphData = data?.graphData?.map((value, index) => ({
      name: `Point ${index + 1}`,
      value,
    }));
    setIsLoading(false);
    setTimeout(() => {
      setSaleValue(data?.totalSales);
      setGraphData(graphData);
      setAnimate(true);
    }, 100);
  }, [data]);

  console.log(data, "data1");

  return (
    <>
      {!isLoading ? (
        <div className="w-full relative bg-white p-4 rounded-sm grid gap-2">
          <div className="flex justify-between items-center">
            <Image src={icon} height={32} alt="Retail Icon" />
            <button>
              <PiDotsThreeBold className="text-3xl text-gray-500" />
            </button>
          </div>
          <div className="grid gap-2">
            <p className="text-xl font-medium text-gray-900">{title ?? ""}</p>
            <p className="text-xs font-semibold text-gray-400">SALES</p>
            <div className="flex gap-6 items-center">
              <p className="text-3xl font-medium text-gray-900">
                <AnimatedNumber value={saleValue} />
                {/* {new Intl.NumberFormat("en-IN").format(data?.totalSales)} */}
              </p>

              <p
                className={classNames(
                  "p-1 px-2 text-sm text-white rounded-full font-semibold",
                  data?.percentageDifference >= 0
                    ? "bg-green-500"
                    : "bg-yellow-500"
                )}
              >
                {data?.percentageDifference > 0 ? "+" : "-"}
                {/* <AnimatedNumber value={saleValue} /> */}
                {Math.abs(data?.percentageDifference)}%
              </p>
            </div>
          </div>
          <div className="h-24 mt-5">
            <ResponsiveContainer
              width="100%"
              height="100%"
              className="bg-gray-100 pt-3 "
              key={animate}
            >
              <AreaChart
                key={animate}
                width={200}
                height={60}
                data={graphData}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0.3} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <Area
                  type="linear"
                  dataKey="value"
                  //   dataKey="pv"
                  fill="url(#colorUv)"
                  stroke="#8884d8"
                  strokeWidth="2px"
                  isAnimationActive={animate}
                  animationDuration={1500} // Customize the duration of the animation
                  animationBegin={0} // Delay before the animation starts
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <div className="h-72 rounded-md w-full bg-gray-400 animate-pulse"></div>
      )}
    </>
  );
}

export default Charts;
