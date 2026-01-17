import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "BABA - Balkan Artfood",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="bg">
      <body className="bg-[#212121]">
        <Navbar />

        {/* Основно съдържание */}
        <main className="relative z-10 bg-[#F5F2ED] mb-[600px] shadow-[0_50px_100px_rgba(0,0,0,0.3)] min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
