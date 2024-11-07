"use client";
import React from "react";
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
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { signIn } from "next-auth/react";

const Login = () => {
  const handleSignIn = async () => {
    await signIn("google", { redirect: true, callbackUrl: "/dashboard" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-black dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,127,80,0.1),transparent_25%),radial-gradient(circle_at_70%_80%,rgba(255,127,80,0.15),transparent_25%)]" />

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>

        <Card className="w-full max-w-md relative backdrop-blur-sm bg-white dark:bg-gray-900/90 border-0">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur-lg opacity-30 group-hover:opacity-40 transition duration-200" />
              <Wallet className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                FinFlow
              </span>
            </div>

            <DropdownMenuSeparator className="bg-orange-200/20 dark:bg-gray-700" />

            <CardDescription className="text-center text-gray-600 dark:text-gray-300 mt-4">
              Login to your account using Google or GitHub
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Button
              className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-orange-100 hover:border-orange-200 dark:bg-gray-800 dark:text-white dark:border-orange-900 dark:hover:bg-gray-700 transition-all duration-200 group relative"
              onClick={() => handleSignIn()}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-md" />
              <svg
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>

            <Button
              disabled
              className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-md" />
              <Github className="mr-2 h-5 w-5" />
              Continue with GitHub
            </Button>
          </CardContent>

          <CardFooter className="flex flex-col space-y-2">
            <div className="text-sm text-center space-y-2 text-gray-600 dark:text-gray-300">
              <p>
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-orange-500 hover:text-orange-600 hover:underline transition-colors duration-200"
                >
                  Sign up
                </Link>{" "}
                or{" "}
                <Link
                  href="/"
                  className="text-orange-500 hover:text-orange-600 hover:underline transition-colors duration-200"
                >
                  Go back
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
