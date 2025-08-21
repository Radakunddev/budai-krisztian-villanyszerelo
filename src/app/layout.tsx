import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Budai Krisztián Villanyszerelő | Szakszerű Elektromos Szolgáltatások Budapest",
  description: "Budai Krisztián villanyszerelő szolgáltatásai Budapesten és környékén. Elektromos szerelés, hálózati felújítás, okos otthon megoldások, kamera rendszerek. 10+ év tapasztalat.",
  keywords: "villanyszerelő, elektromos szerelés, hálózati felújítás, okos otthon, kamera rendszer, Budapest, panel lakás, vezetékezés",
  authors: [{ name: "Budai Krisztián" }],
  openGraph: {
    title: "Budai Krisztián Villanyszerelő",
    description: "Szakszerű elektromos szolgáltatások Budapesten és környékén",
    type: "website",
    locale: "hu_HU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
