import type { Metadata } from "next";
import { Inter } from "next/font/google";
import favicon from "../app/favicon.ico";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/favicon.ico", // /public path
        href: "/images/icon_name.svg", // /public path
      },
    ],
  },

  title: "VEGA",
  description: "VEGA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
       <head/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
