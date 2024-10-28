"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Wallet } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

import Googler from "./googlee.png";
import { signIn } from "next-auth/react";

export default function Login() {
  const handleSignIn = async () => {
    await signIn("google");
  };
  return (
    <div className="min-h-screen flex items-center justify-center dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Wallet className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-black">
              ExpenseTracker
            </span>
          </div>
          <DropdownMenuSeparator />
          {/* <CardTitle className="text-2xl font-bold text-center">
            Welcome back
          </CardTitle> */}
          <CardDescription className="text-center">
            Login to your account using Google or GitHub
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            className="w-full bg-white text-black border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
            onClick={() => handleSignIn()}
          >
            <Image
              src={Googler}
              alt="Google logo"
              width={20}
              height={20}
              className="mr-2"
            />
            Continue with Google
          </Button>
          <Button
            disabled={true}
            className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={() => console.log("GitHub login clicked")}
          >
            <Github className="mr-2 h-5 w-5" />
            Continue with GitHub
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center space-y-2">
            <p>
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-primary hover:underline text-blue-500"
              >
                Sign up
              </Link>{" "}
              or{" "}
              <Link
                href="/"
                className="text-primary hover:underline text-blue-500"
              >
                Go back
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
