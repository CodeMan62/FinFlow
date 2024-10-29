import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Expensify",
  description: "Expense Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={` antialiased bg-black `}>
          <Navbar />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
