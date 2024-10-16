import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Word Counter Application",
  description: "Count the length of your text",
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
