'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { usePathname } from 'next/navigation';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Note: metadata needs to be moved to a separate component due to 'use client'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="hu" className="scroll-smooth">
      <head>
        <title>Budai Krisztián Villanyszerelő | Szakszerű Elektromos Szolgáltatások Budapest</title>
        <meta name="description" content="Budai Krisztián villanyszerelő szolgáltatásai Budapesten és környékén. Elektromos szerelés, hálózati felújítás, okos otthon megoldások, kamera rendszerek. 10+ év tapasztalat." />
        <meta name="keywords" content="villanyszerelő, elektromos szerelés, hálózati felújítás, okos otthon, kamera rendszer, Budapest, panel lakás, vezetékezés" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        {isHomePage && <Header />}
        <main className="flex-1">
          {children}
        </main>
        {isHomePage && <Footer />}
      </body>
    </html>
  );
}
