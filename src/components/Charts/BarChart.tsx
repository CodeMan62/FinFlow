"use client";
import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarChartComponent = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <div className="w-full bg-[#1C1C1C] border border-gray-800 mt-10 rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255, 255, 255, 0.1)"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke="#fff"
            tick={{ fill: "#fff" }}
            tickLine={{ stroke: "#fff" }}
          />
          <YAxis
            stroke="#fff"
            tick={{ fill: "#fff" }}
            tickLine={{ stroke: "#fff" }}
          />
          <Tooltip
            cursor={{ fill: "rgba(255, 107, 0, 0.1)" }}
            contentStyle={{
              backgroundColor: "#2D2D2D",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
              color: "#fff",
            }}
          />
          <Bar
            dataKey="uv"
            fill="#FF6B00"
            radius={[4, 4, 0, 0]}
            maxBarSize={50}
          />
          <Bar
            dataKey="pv"
            fill="#FF9F45"
            radius={[4, 4, 0, 0]}
            maxBarSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
