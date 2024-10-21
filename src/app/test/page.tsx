import BarChart from "@/components/BarChart";
import Sidebar from "@/components/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      {<Sidebar />}
      <div className="p-4">{/* <BarChart month="April" /> */}</div>
    </div>
  );
};

export default page;
