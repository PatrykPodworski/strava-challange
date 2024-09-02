import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XtraMile Sport Challenge 2024",
  description: "A leaderboard for the XtraMile Sport Challenge 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between min-h-screen p-4 sm:p-8 bg-neutral-50">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
