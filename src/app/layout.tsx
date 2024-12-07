import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { PolyfillContext } from "../context/polyfill";
import { satoshi } from "./fonts";
import { Navigation } from "../components/Layout/Navigation";
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
      <body className={satoshi.className}>
        <div className="flex flex-col justify-between items-center min-h-screen p-4 sm:p-8 sm:pt-4 bg-neutral-50 text-neutral-900">
          <PolyfillContext>
            <Navigation />
            <Header />
            <main className="flex flex-col items-center grow gap-2 sm:gap-8 m-auto">
              {children}
            </main>
            <Footer />
          </PolyfillContext>
        </div>
      </body>
    </html>
  );
}
