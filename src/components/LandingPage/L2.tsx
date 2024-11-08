import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, PieChart, Shield } from "lucide-react";

const L2 = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 mb-32 bg-zinc-950">
      <div className="px-4 md:px-6 z-[2]">
        <div className="relative">
          <h2 className="relative font-mono z-[6] text-3xl tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-gradient-to-t from-orange-500 to-orange-300 text-transparent bg-clip-text font-bold">
            Key Features
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <BarChart2 className="w-8 h-8 text-orange-500 mb-2" />,
              title: "Expense Tracking",
              content:
                "Easily log and categorize your expenses for a clear overview of your spending habits.",
            },
            {
              icon: <PieChart className="w-8 h-8 text-orange-500 mb-2" />,
              title: "Visual Analytics",
              content:
                "Get insightful charts and graphs to visualize your financial data at a glance.",
            },
            {
              icon: <Shield className="w-8 h-8 text-orange-500 mb-2" />,
              title: "Secure & Private",
              content:
                "Your financial data is encrypted and protected with industry-standard security measures.",
            },
          ].map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-300 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <Card className="relative bg-zinc-900 border-0 hover:bg-zinc-900 transition-colors duration-200">
                <div className="p-4">
                  <CardHeader>
                    {feature.icon}
                    <CardTitle className="text-orange-500">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-300">
                    {feature.content}
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default L2;
