"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Wallet,
  Receipt,
  TrendingUp,
  HelpCircle,
  Settings,
  LogOut,
  ChevronRight,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

const NavLink = ({ href, icon: Icon, label, isCollapsed }: any) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center py-2 rounded-lg text-white hover:text-orange-400",
        "hover:bg-orange-500/10 transition-all duration-200 group relative",
        isCollapsed ? "justify-center" : "space-x-3"
      )}
    >
      <div className="absolute left-0 w-1 h-0 bg-orange-500 group-hover:h-full transition-all duration-200 rounded-r" />
      <Icon className="h-5 w-5 text-white group-hover:text-orange-400 flex-shrink-0" />
      {!isCollapsed && (
        <span className="font-medium whitespace-nowrap">{label}</span>
      )}
      {!isCollapsed && (
        <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      )}
    </Link>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const session = useSession();

  const handleLogout = () => {
    signOut().then(() => {
      window.location.href = "/";
    });
  };

  const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/transaction", icon: Receipt, label: "Transactions" },
    { href: "/plan", icon: TrendingUp, label: "Financial Plan" },
    { href: "/advice", icon: Wallet, label: "Gen Advice" },
    { href: "/help", icon: HelpCircle, label: "Help Center" },
  ];

  const sidebarWidth = isCollapsed ? "w-16" : "w-64";

  return (
    <div className="p-4 h-screen">
      <div
        className={cn(
          "flex flex-col h-[96vh] bg-zinc-900 relative group/sidebar",
          "rounded-xl shadow-xl shadow-black/10 backdrop-blur-sm",
          "border border-gray-800/50",
          sidebarWidth,
          "transition-all duration-300"
        )}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 bg-orange-500 rounded-full p-1.5 text-white hover:bg-orange-600 transition-colors duration-200 z-50 shadow-lg"
        >
          {isCollapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </button>

        <div
          className={cn(
            "flex items-center px-4 py-6",
            isCollapsed ? "justify-center" : "space-x-3"
          )}
        >
          <Wallet className="h-8 w-8 text-white flex-shrink-0" />
          {!isCollapsed && (
            <span className="text-lg font-semibold text-white bg-clip-text text-transparent whitespace-nowrap">
              ExpenseTracker
            </span>
          )}
        </div>

        <div className="flex-1 overflow-auto py-4 px-2 scrollbar-none">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                isCollapsed={isCollapsed}
              />
            ))}
          </nav>
        </div>

        <div className="p-3 border-t border-gray-800/50">
          {session.data?.user?.image && !isCollapsed ? (
            <div className="flex items-center space-x-3 mb-3 px-2">
              <Avatar className="h-8 w-8 border-2 border-orange-500/20">
                <AvatarImage
                  src={session.data.user.image}
                  alt={session.data.user.name || "User"}
                />
                <AvatarFallback className="bg-orange-500/10 text-orange-500">
                  {(session.data.user.name || "U")[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {session.data.user.name}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {session.data.user.email}
                </p>
              </div>
            </div>
          ) : session.data?.user?.image ? (
            <Avatar className="h-8 w-8 mx-auto mb-3 border-2 border-orange-500/20">
              <AvatarImage
                src={session.data.user.image}
                alt={session.data.user.name || "User"}
              />
              <AvatarFallback className="bg-orange-500/10 text-orange-500">
                {(session.data.user.name || "U")[0]}
              </AvatarFallback>
            </Avatar>
          ) : null}

          <div className="space-y-2">
            {!isCollapsed ? (
              <>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white hover:bg-orange-500/10"
                  asChild
                >
                  <Link href="/settings">
                    <Settings className="mr-2 h-5 w-5 text-orange-500" />
                    Settings
                  </Link>
                </Button>

                {session.data?.user?.image ? (
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-300 hover:text-white hover:bg-red-500/10 group"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-5 w-5 text-red-400 group-hover:text-red-500" />
                    Log out
                  </Button>
                ) : (
                  <Link href="/login" className="block">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Log In
                    </Button>
                  </Link>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center space-y-3">
                <Link href="/settings">
                  <Settings className="h-5 w-5 text-orange-500 hover:text-orange-400 transition-colors" />
                </Link>
                {session.data?.user?.image ? (
                  <button onClick={handleLogout}>
                    <LogOut className="h-5 w-5 text-red-400 hover:text-red-500 transition-colors" />
                  </button>
                ) : (
                  <Link href="/login">
                    <Menu className="h-5 w-5 text-orange-500 hover:text-orange-400 transition-colors" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
