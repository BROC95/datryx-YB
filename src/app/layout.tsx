import type { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Datrix YB",
  description: "Creando soluciones tecnologicas",
  verification: {
    google: 'lwwLuQvKu0eg3XFvk_MCfeVkIYvYevYTmPoVBZc7Y8I',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
          <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

