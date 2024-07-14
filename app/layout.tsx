import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VEGA",
  description: "VEGA",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "VEGA",
    description: "VEGA",
    url: "/services_main.jpg",
    siteName: "Vega-ns",
    images: [
      {
        url: "/services_main.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta
          name="google-site-verification"
          content="VSiBE81eCVWmtHilJXKMLbENxegAdmc5LkwayPBdmnc"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
