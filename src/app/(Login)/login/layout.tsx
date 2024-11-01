import type { Metadata } from "next";
import "../../globals.css";
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
        <body className={`antialiased bg-black`}>{children}</body>
      </SessionProvider>
    </html>
  );
}
