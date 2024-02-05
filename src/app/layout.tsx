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

        <link href="https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@700&display=swap" rel="stylesheet" />

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
