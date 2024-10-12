import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Book,
  Folder,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-64 bg-background border-r">
      <div className="flex-1 overflow-auto py-2">
        <nav className="space-y-2 px-2">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent"
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>DashBoard</span>
          </Link>
          <Link
            href="/folders"
            className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent"
          >
            <Folder className="h-4 w-4" />
            <span>Transaction</span>
          </Link>
          <Link
            href="/folders"
            className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent"
          >
            <HelpCircle className="h-4 w-4" />
            <span>Help</span>
          </Link>
        </nav>
        {/* <div className="px-4 py-2">
          <Input placeholder="Search notes..." className="w-full" />
        </div> */}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3 mb-2">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">User Name</p>
            <p className="text-xs text-muted-foreground">user@example.com</p>
          </div>
        </div>
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
          {/* <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button> */}
        </div>
      </div>
    </div>
  );
}
