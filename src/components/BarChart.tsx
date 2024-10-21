"use client";

import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({ month }: { month: string }) => {
  let state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [10, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [30, 20, 65, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg">
      <h1 className="text-sm text-zinc-700 ml-4 mb-2">Plan</h1>
      <h1 className="text-2xl font-semibold text-blue-600 ml-4 mb1">{month}</h1>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width="500"
      />
    </div>
  );
};

export default BarChart;
