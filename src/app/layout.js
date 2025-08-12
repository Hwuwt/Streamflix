"use client"
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import { usePathname } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathName = usePathname();
  const hideHeader = pathName?.startsWith("/watch")
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!hideHeader && <Header />}
        <main>{children}</main>
      </body>
    </html>
  );
}
