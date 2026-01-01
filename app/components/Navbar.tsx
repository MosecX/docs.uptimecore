"use client";
import Link from "next/link";
import { Varela_Round } from "next/font/google";

const varela = Varela_Round({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Fondo con blur translúcido */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/30 border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.6)]" />

      {/* Contenido del navbar */}
      <div className="relative max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`${varela.className} text-2xl font-bold text-white tracking-tight hover:text-emerald-400 transition-colors`}
          >
            Uptime<span className="text-emerald-400">Core</span>
          </span>
        </Link>

        {/* Desktop Link */}
        <div className="flex items-center gap-6">
          <Link
            href="/docs"
            className={`${varela.className} px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-400 transition-all font-medium shadow-sm`}
          >
            Documentación
          </Link>
        </div>
      </div>
    </nav>
  );
}
