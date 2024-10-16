import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tip calculator",
  description: "Calculate tip with just few steps",
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
