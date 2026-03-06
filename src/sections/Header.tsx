"use client"
import ArrowRight from "@/public/arrow-right.svg";
import Logo from "@/public/logo.svg";
import MenuIcon from "@/assets/MenuIcon.svg";
import Link from 'next/link'
import { useEffect, useState, useRef } from "react";
import { AbrirWhatsApp } from '@/components/whatsapptalk'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Sombra al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Nosotros" },
    { href: "/services", label: "Servicios" },
    { href: "/demos", label: "Demos" },
  ];

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-sm transition-shadow duration-300 overflow-x-clip ${scrolled ? "shadow-lg" : "shadow-md"}`}>

      {/* Banner superior */}
      <div className="flex justify-center items-center py-2.5 bg-black text-white text-sm gap-3 flex-wrap px-4">
        <p className="text-white/50 hidden md:block">Contactanos ahora</p>

        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="text-white/80">Agenda una reunión gratuita:</span>
          <ArrowRight className="h-4 w-4 shrink-0" />

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-white/50 text-xs">🇨🇴 </span>
              <AbrirWhatsApp country="CO" />
            </div>
            <div className="w-px h-4 bg-white/20" /> {/* divisor */}
            <div className="flex items-center gap-1.5">
              <span className="text-white/50 text-xs">🇦🇷</span>
              <AbrirWhatsApp country="AR" />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between" ref={menuRef}>

          {/* Logo */}
          <Link href="/" aria-label="Inicio">
            <Logo className="rounded-full hover:opacity-80 transition-opacity" width="40" height="40" alt="Logo Datrix YB" />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-black/60 hover:text-black transition-colors text-sm font-medium"
              >
                {label}
              </Link>
            ))}
            <Link href="/contact">
              <button className="btn btn-primary text-sm">Contacto</button>
            </Link>
          </nav>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden p-2 rounded-md hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <MenuIcon className="h-5 w-5" />
          </button>

          {/* Nav mobile */}
          {menuOpen && (
            <nav className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-1 p-4 border-t border-black/5">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-black/60 hover:text-black hover:bg-black/5 transition-colors px-3 py-2.5 rounded-md text-sm font-medium"
                >
                  {label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-2">
                <button className="btn btn-primary w-full text-sm">Contacto</button>
              </Link>
            </nav>
          )}

        </div>
      </div>
    </header>
  );
};