"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { Varela_Round } from "next/font/google";

const varela = Varela_Round({
  subsets: ["latin"],
  weight: "400",
});

export default function DocsNavbar() {
  const [open, setOpen] = useState(false);

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

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/docs"
            className={`${varela.className} px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-400 transition-all font-medium shadow-sm`}
          >
            Inicio
          </Link>
          <Link
            href="/docs/installation"
            className={`${varela.className} px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400 transition-all font-medium shadow-sm`}
          >
            Instalación
          </Link>
          <Link
            href="/docs/configuration"
            className={`${varela.className} px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-pink-500/20 hover:border-pink-400 transition-all font-medium shadow-sm`}
          >
            Configuración
          </Link>
          <Link
            href="/docs/usage"
            className={`${varela.className} px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-amber-500/20 hover:border-amber-400 transition-all font-medium shadow-sm`}
          >
            Uso
          </Link>
          <Link
            href="/docs/contribution"
            className={`${varela.className} px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-violet-500/20 hover:border-violet-400 transition-all font-medium shadow-sm`}
          >
            Contribución
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          {open ? <FiX className="h-7 w-7" /> : <FiMenu className="h-7 w-7" />}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-950 shadow-lg transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-6 space-y-6">
          <Link href="/docs" onClick={() => setOpen(false)}
            className={`${varela.className} block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-400 transition-all font-medium shadow-sm`}>
            Inicio
          </Link>
          <Link href="/docs/installation" onClick={() => setOpen(false)}
            className={`${varela.className} block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400 transition-all font-medium shadow-sm`}>
            Instalación
          </Link>
          <Link href="/docs/configuration" onClick={() => setOpen(false)}
            className={`${varela.className} block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-pink-500/20 hover:border-pink-400 transition-all font-medium shadow-sm`}>
            Configuración
          </Link>
          <Link href="/docs/usage" onClick={() => setOpen(false)}
            className={`${varela.className} block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-amber-500/20 hover:border-amber-400 transition-all font-medium shadow-sm`}>
            Uso
          </Link>
          <Link href="/docs/contribution" onClick={() => setOpen(false)}
            className={`${varela.className} block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-violet-500/20 hover:border-violet-400 transition-all font-medium shadow-sm`}>
            Contribución
          </Link>
        </div>
      </div>
    </nav>
  );
}
