import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UptimeCore Documentation",
  description: "Official documentation for UptimeCore, the ultimate uptime monitoring solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
    <body className={`text-gray-100`} style={{ background: ` radial-gradient(1200px 800px at 50% 0%, rgba(251,191,36,.35), transparent 60%), radial-gradient(1000px 600px at 80% 30%, rgba(34,197,94,.30), transparent 60%), radial-gradient(900px 500px at 20% 70%, rgba(59,130,246,.28), transparent 60%), radial-gradient(800px 480px at 50% 100%, rgba(236,72,153,.25), transparent 60%), linear-gradient(180deg, #0f172a, #020617 42%, #000000) `, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)"}}>
      <main className="pt-20">{children}</main>
      <Footer />
    </body>
  </html>
  );
}
