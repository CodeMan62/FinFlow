import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      {<Sidebar />}
      <div className="p-4">
        <Dashboard />
      </div>
    </div>
  );
};

export default page;
