import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import React from "react";

const Plan = () => {
  return (
    <div className="flex">
      {<Sidebar />}
      <div className="p-4">
        <h1 className="text-3xl">Plan Your Finance</h1>
        <p className="text-gray-500">Whats your expectation?</p>
        <div>
          <h1>Budget for whole year</h1>
          <Input type="text" placeholder="$100000" />
        </div>
        <div>
          <h1>What is your expected monthly income?</h1>
          <Input type="text" placeholder="$2000" />
        </div>
        <div>
          <h1>List your fixed expenses</h1>
          <Input type="text" placeholder="$2000" />
        </div>
      </div>
    </div>
  );
};

export default Plan;
