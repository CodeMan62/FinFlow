"use client";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Area,
  ComposedChart,
} from "recharts";

const LineChartComponent = () => {
  const data = [
    {
      name: "Jan",
      revenue: 4000,
      profit: 2400,
    },
    {
      name: "Feb",
      revenue: 3000,
      profit: 1398,
    },
    {
      name: "Mar",
      revenue: 2000,
      profit: 3800,
    },
    {
      name: "Apr",
      revenue: 2780,
      profit: 3908,
    },
    {
      name: "May",
      revenue: 1890,
      profit: 4800,
    },
    {
      name: "Jun",
      revenue: 2390,
      profit: 3800,
    },
    {
      name: "Jul",
      revenue: 3490,
      profit: 4300,
    },
  ];

  return (
    <div className="w-full bg-[#1C1C1C] rounded-lg p-4 mt-10">
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#FF6B00" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF9F45" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#FF9F45" stopOpacity={0} />
            </linearGradient>
          </defs>
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
            contentStyle={{
              backgroundColor: "#2D2D2D",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
              color: "#fff",
            }}
          />
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{
              color: "#fff",
            }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            fill="url(#colorRevenue)"
            stroke="#FF6B00"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 6,
              fill: "#FF6B00",
              stroke: "#1C1C1C",
              strokeWidth: 2,
            }}
          />
          <Area
            type="monotone"
            dataKey="profit"
            fill="url(#colorProfit)"
            stroke="#FF9F45"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 6,
              fill: "#FF9F45",
              stroke: "#1C1C1C",
              strokeWidth: 2,
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
