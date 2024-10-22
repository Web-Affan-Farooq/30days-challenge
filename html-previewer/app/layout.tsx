import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Html previewer app",
  description: "Build and preview your html",
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
