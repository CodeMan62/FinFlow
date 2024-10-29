"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart2,
  DollarSign,
  PieChart,
  Shield,
  Star,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

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

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <motion.section
        initial={{ x: 300, y: -20 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
      >
        <DecorativeSquaresRight />
      </motion.section>

      <motion.section
        initial={{ x: -300, y: -20 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
      >
        <DecorativeSquaresLeft />
      </motion.section>
      <main className="flex-1">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`${inter600.className} w-full py-12 md:py-48 lg:py-64 xl:py-60 text-white`}
        >
          <div className="px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold mb-5 tracking-tighter sm:text-4xl md:text-5xl lg:text-8xl/none">
                  Your finances <br />
                  <span className="bg-gradient-to-t from-white to-orange-400 text-transparent bg-clip-text font-bold">
                    Simplified!
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] font-mono text-gray-400 md:text-xl dark:text-gray-200">
                  Track, analyze, and optimize your spending habits with our
                  powerful and intuitive dashboard.
                </p>
              </div>
              <div className="space-x-4">
                <button className="text-sm bg-orange-500 border-2 border-black text-gray-100 px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:border-orange-500 hover:bg-white hover:text-zinc-800 active:scale-95 hover:shadow-md">
                  Get Started
                </button>
                <button className="text-sm bg-white border-2 border-black text-black px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:border-black hover:bg-gray-200 hover:text-zinc-800 active:scale-95 hover:shadow-md">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.section>
        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className=" px-4 md:px-6">
            <h2
              className={` ${inter600.className} text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-100`}
            >
              Key Features
            </h2>
            <div
              className={`${inter600.className} grid grid-cols-1 md:grid-cols-3 gap-8`}
            >
              <Card>
                <CardHeader>
                  <BarChart2 className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Expense Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  Easily log and categorize your expenses for a clear overview
                  of your spending habits.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <PieChart className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Visual Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  Get insightful charts and graphs to visualize your financial
                  data at a glance.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Secure & Private</CardTitle>
                </CardHeader>
                <CardContent>
                  Your financial data is encrypted and protected with
                  industry-standard security measures.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>John Doe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "ExpenseTracker has completely transformed how I manage my
                    finances. It's intuitive and powerful!"
                  </p>
                  <div className="flex mt-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Jane Smith</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "I've tried many expense trackers, but this one stands out.
                    The visual analytics are fantastic!"
                  </p>
                  <div className="flex mt-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full py-12 md:py-24 lg:py-32 "
        >
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">
                    $0<span className="text-sm font-normal">/month</span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                      Basic expense tracking
                    </li>
                    <li className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                      Monthly reports
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">
                    $9.99<span className="text-sm font-normal">/month</span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                      Custom categories
                    </li>
                    <li className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                      Data export
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Upgrade to Pro</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                      All Pro features
                    </li>
                    <li className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                      Dedicated support
                    </li>
                    <li className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                      Custom integrations
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full py-12 md:py-24 lg:py-32 "
        >
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Take Control of Your Finances?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of users who are already managing their
                  expenses more effectively.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="flex bg-white flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 ExpenseTracker Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export const DecorativeSquaresLeft = () => {
  return (
    <div className={`absolute top-0 left-0 pointer-events-none`}>
      <div className="relative lg:mt-40 lg:h-[600px] xl:h-[700px] xl:mt-20 w-64">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 
              rounded-r-xl
              transform
              origin-left
              transition-transform
              duration-300
              bg-gradient-to-br from-orange-400/20 to-orange-800/40
              border-r border-t border-b border-orange-700
            `}
            style={{
              transform: `scale(${1 - index * 0.2})`,
              zIndex: 5 - index,
            }}
          />
        ))}
      </div>
    </div>
  );
};
export const DecorativeSquaresRight = () => {
  return (
    <div className={`absolute top-0 right-0 pointer-events-none`}>
      <div className="relative lg:mt-40 lg:h-[600px] xl:h-[700px] xl:mt-20 w-64">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 
              rounded-l-xl
              transform
              origin-right
              transition-transform
              duration-300
              bg-gradient-to-br from-orange-400/20 to-orange-800/40
              border-l border-t border-b border-orange-700
            `}
            style={{
              transform: `scale(${1 - index * 0.2})`,
              zIndex: 5 - index,
            }}
          />
        ))}
      </div>
    </div>
  );
};
