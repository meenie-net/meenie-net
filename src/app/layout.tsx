"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Meenie</title>
      </head>
      <body className={inter.className}>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header></Header>
            <div className="min-h-[calc(100vh-120px)]">{children}</div>
            <Footer></Footer>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
