import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BMI calculator application",
  description: "Find your correct BMI",
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
