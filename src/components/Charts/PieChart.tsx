"use client";
import React from "react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const PieChartComponent = () => {
  const data = [
    { name: "Category A", value: 400 },
    { name: "Category B", value: 300 },
    { name: "Category C", value: 300 },
    { name: "Category D", value: 200 },
  ];

  const COLORS = ["#FF6B00", "#FF8533", "#FF9F45", "#FFB366"];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#2D2D2D] px-3 py-2 rounded-lg shadow-lg border border-gray-700">
          <p className="text-white font-medium">{payload[0].name}</p>
          <p className="text-gray-300">Value: {payload[0].value}</p>
          <p className="text-gray-300">
            Percentage:{" "}
            {(
              (payload[0].value / data.reduce((a, b) => a + b.value, 0)) *
              100
            ).toFixed(1)}
            %
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-[#1C1C1C] rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#1C1C1C"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{
              color: "#fff",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
