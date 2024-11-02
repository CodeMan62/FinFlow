import BarChartComponent from "@/components/Charts/BarChart";
import LineChartComponent from "@/components/Charts/LineChart";
import PieChartComponent from "@/components/Charts/PieChart";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-4 h-screen w-full">
      <section className="w-full bg-zinc-900 border-1 h-[96vh] rounded-xl p-4 text-white">
        <div>
          <p className="p-1 font-semibold md:text-xl lg:text-3xl ml-3">
            Dashboard
          </p>
        </div>
        <div>
          <LineChartComponent />
          <BarChartComponent />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
