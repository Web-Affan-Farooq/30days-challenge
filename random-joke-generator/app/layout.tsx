import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Random Joke generator application",
  description: "Generate random jokes in realtime",
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
