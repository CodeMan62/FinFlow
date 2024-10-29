"use client";
import Link from "next/link";
import React from "react";
import { Wallet } from "lucide-react";
import { Button } from "./ui/button";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Inter } from "next/font/google";

const inter600 = Inter({
  subsets: ["cyrillic"],
  variable: "--font-inter",
  weight: ["600"],
});

const Navbar = () => {
  const session = useSession();

  const handleLogout = () => {
    signOut().then(() => {
      window.location.href = "/";
    });
  };

  return (
    <header
      className={` ${inter600.className} relative mx-auto mt-5 bg-[#0C0E0E] shadow-lg rounded-lg px-4 lg:px-6 py-3 border-2 border-[#202325] w-11/12 max-w-3xl h-auto flex items-center`}
    >
      <Link className="flex items-center justify-center" href="#">
        <Wallet className="h-6 w-6 text-primary text-white" />
        <span className="ml-2 text-2xl font-bold text-slate-100">FinFlow</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center text-gray-400 ">
        <Link
          className="text-sm font-medium underline-offset-4 transition duration-300 ease-in-out hover:text-orange-500 "
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 transition duration-300 ease-in-out hover:text-orange-500 "
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 transition duration-300 ease-in-out hover:text-orange-500 "
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 transition duration-300 ease-in-out hover:text-orange-500 "
          href="#"
        >
          Contact
        </Link>

        {session.data?.user?.image ? (
          <Avatar className="max-sm:hidden cursor-pointer">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <AvatarFallback>{session?.data?.user?.name}</AvatarFallback>
                <AvatarImage src={session?.data?.user?.image} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Teams</DropdownMenuItem>
                <DropdownMenuSeparator />
                <Button
                  size="sm"
                  variant="destructive"
                  className="w-full"
                  onClick={handleLogout}
                >
                  LogOut
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
          </Avatar>
        ) : (
          <Link href="/login">
            <button className="text-sm bg-orange-500 border-2 border-black text-gray-100 px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:border-orange-500 hover:bg-white hover:text-zinc-800 active:scale-95 hover:shadow-md">
              Log In
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
