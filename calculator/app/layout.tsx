import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple calculator",
  description: "Simple calculator using nextjs, tailwind and shadcn-ui",
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
