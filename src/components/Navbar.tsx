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

const Navbar = () => {
  const session = useSession();

  const handleLogout = () => {
    signOut().then(() => {
      window.location.href = "/";
    });
  };

  return (
    <header className="relative mx-auto mt-3 bg-white shadow-lg rounded-lg px-4 lg:px-6 py-2 w-11/12 max-w-8xl h-auto flex items-center border">
      <Link className="flex items-center justify-center" href="#">
        <Wallet className="h-6 w-6 text-primary" />
        <span className="ml-2 text-2xl font-bold">ExpenseTracker</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
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
            <Button className="text-sm">Log In</Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
