import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Clock Application",
  description: "Manage your time efficiently with my digital clock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
