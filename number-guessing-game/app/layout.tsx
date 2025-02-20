import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Number Guessing game",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: { children: React.ReactElement}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
