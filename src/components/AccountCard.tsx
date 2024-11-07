import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const AccountCard = () => {
  return (
    <Card className="w-full shadow-2xl max-w-md text-center bg-gradient-to-r from-zinc-900/90 to-zinc-900 border-2 border-zinc-700 text-white mt-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-mono">Account</CardTitle>
        <CardDescription className="text-zinc-400">
          Manage your account settings and preferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-300">
          Your account gives you access to all features and services. Update
          your profile, security settings, and notification preferences in one
          place.
        </p>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <Dialog>
            <DialogTrigger className="w-full bg-blue-600 hover:bg-blue-700 text-sm text-white rounded-sm p-3 font-semibold">
              Add Account
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 text-white">
              <DialogHeader>
                <DialogTitle className="text-xl">Add a new account</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Enter the name for your new account.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Account Name :
                  </Label>
                  <Input
                    id="name"
                    placeholder="YourAccountName"
                    className="col-span-3 border caret-orange-500 text-black caret-thick"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  className="bg-orange-400 hover:bg-orange-500"
                  type="submit"
                >
                  Add Account
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AccountCard;
