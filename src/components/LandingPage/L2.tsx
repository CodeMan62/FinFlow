import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BarChart2, PieChart, Shield } from "lucide-react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter900 = Inter({
  subsets: ["cyrillic"],
  variable: "--font-inter",
  weight: ["900"],
});

const inter600 = Inter({
  subsets: ["cyrillic"],
  variable: "--font-inter",
  weight: ["600"],
});

const L2 = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 mb-32">
      <div className=" px-4 md:px-6">
        <h2
          className={` font-mono text-3xl tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-gradient-to-t from-white to-orange-500 text-transparent bg-clip-text font-bold`}
        >
          Key Features
        </h2>
        <div
          className={`${inter600.className} grid grid-cols-1 md:grid-cols-3 gap-8`}
        >
          <Card className="myCard1 relative bg-white overflow-hidden animate-border-line">
            <div className="relative p-4">
              <CardHeader>
                <BarChart2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Expense Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                Easily log and categorize your expenses for a clear overview of
                your spending habits.
              </CardContent>
            </div>
          </Card>
          <Card className="myCard2 relative bg-white overflow-hidden animate-border-line">
            <div className="relative p-4">
              <CardHeader>
                <PieChart className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Visual Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                Get insightful charts and graphs to visualize your financial
                data at a glance.
              </CardContent>
            </div>
          </Card>
          <Card className="myCard3 relative bg-white overflow-hidden animate-border-line">
            <div className="relative p-4">
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Secure & Private</CardTitle>
              </CardHeader>
              <CardContent>
                Your financial data is encrypted and protected with
                industry-standard security measures.
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default L2;
