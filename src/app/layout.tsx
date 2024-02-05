"use client"

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


import Nvbar from "@/Components/NavBar";
import SmoothScroll from "@/Components/SmoothScroll";
import BrandTitle from "@/Components/BrandTitle";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        <BrandTitle />
        <SmoothScroll />
        <Nvbar />

        {children}
      </body>
    </html>
  );
}
