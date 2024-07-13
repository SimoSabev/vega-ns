import type { Metadata } from "next";
import { Inter } from "next/font/google";
import favicon from "../app/favicon.ico";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "../app/favicon.ico", // /public path
        href: "../app/favicon.ico", // /public path
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
      <head>
        <link rel="icon" type="image/x-icon" href={favicon.src}  sizes="any" />
        <meta
          name="google-site-verification"
          content="VSiBE81eCVWmtHilJXKMLbENxegAdmc5LkwayPBdmnc"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
