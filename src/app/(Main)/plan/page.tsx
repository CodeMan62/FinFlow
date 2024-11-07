"use client";

import AccountCard from "@/components/AccountCard";
import CategoryCard from "@/components/CategoryCard";
import { motion } from "framer-motion";
import React from "react";

const Plan = () => {
  return (
    <div className="p-4 h-screen w-full">
      <section className="w-full bg-zinc-900 border-1 h-[96vh] rounded-xl p-4 text-white">
        <div>
          <p className="p-1 font-semibold md:text-xl lg:text-3xl ml-3">Plan</p>
        </div>
        <div className="p-4 grid">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AccountCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <CategoryCard />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Plan;
