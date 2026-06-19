"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTalentoDropdownOpen, setIsTalentoDropdownOpen] = useState(false);
  const talentoDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isTalentoDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        talentoDropdownRef.current &&
        !talentoDropdownRef.current.contains(event.target as Node)
      ) {
        setIsTalentoDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTalentoDropdownOpen]);

  const toggleTalentoDropdown = () => {
    setIsTalentoDropdownOpen((open) => !open);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:px-12 px-8 ${
          isScrolled
            ? "bg-black/60 backdrop-blur-md mt-0 py-2"
            : "bg-transparent mt-2 py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="relative w-24 h-12">
            <Image
              src="/images/logo-white.png"
              alt="Blu2 Logo"
              className="object-contain"
              fill
            />
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {/* Talento Dropdown */}
            <div className="relative" ref={talentoDropdownRef}>
              <button
                type="button"
                onClick={toggleTalentoDropdown}
                aria-expanded={isTalentoDropdownOpen}
                aria-haspopup="true"
                className="text-white hover:text-white/70 transition-colors font-roboto-regular flex items-center gap-1"
              >
                Talento
                <Icon
                  icon="mdi:chevron-down"
                  className={`w-4 h-4 transition-transform ${
                    isTalentoDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isTalentoDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md rounded-xl border border-white/10 py-2 min-w-[200px] shadow-xl">
                  <Link
                    href="/artist/miguel-bose"
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors font-roboto-regular"
                    onClick={() => setIsTalentoDropdownOpen(false)}
                  >
                    Miguel Bosé
                  </Link>
                  <Link
                    href="/artist/flans"
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors font-roboto-regular"
                    onClick={() => setIsTalentoDropdownOpen(false)}
                  >
                    Flans
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-white hover:text-white/70 transition-colors font-roboto-regular"
            >
              Eventos
            </a>
            <a
              href="#"
              className="text-white hover:text-white/70 transition-colors font-roboto-regular"
            >
              Servicios
            </a>
          </div>

          <div className="hidden md:block">
            <a
              href="mailto:info@blu2.mx"
              className="bg-transparent border border-white text-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition-colors backdrop-blur-sm font-roboto-black text-xs uppercase tracking-wider inline-block"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            <Icon
              icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
              className="w-6 h-6"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black flex flex-col transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Link
            href="/"
            className="relative w-32 h-8"
            onClick={closeMobileMenu}
          >
            <Image
              src="/images/logo-white.png"
              alt="Blu2 Logo"
              className="object-contain"
              fill
            />
          </Link>
          <button
            onClick={closeMobileMenu}
            className="text-white p-2"
            aria-label="Close mobile menu"
          >
            <Icon icon="mdi:close" className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex-1 flex flex-col justify-center items-center space-y-8 px-6">
          {/* Talento with submenu */}
          <div className="flex flex-col items-center space-y-4">
            <div className="text-white text-2xl font-roboto-black">Talento</div>
            <div className="flex flex-col items-center space-y-3">
              <Link
                href="/artist/miguel-bose"
                className="text-white text-lg font-roboto-regular hover:text-white/70 transition-colors"
                onClick={closeMobileMenu}
              >
                Miguel Bosé
              </Link>
              <Link
                href="/artist/flans"
                className="text-white text-lg font-roboto-regular hover:text-white/70 transition-colors"
                onClick={closeMobileMenu}
              >
                Flans
              </Link>
            </div>
          </div>

          <a
            href="#"
            className="text-white text-2xl font-roboto-black hover:text-white/70 transition-colors"
            onClick={closeMobileMenu}
          >
            Eventos
          </a>
          <a
            href="#"
            className="text-white text-2xl font-roboto-black hover:text-white/70 transition-colors"
            onClick={closeMobileMenu}
          >
            Servicios
          </a>

          <div className="pt-8">
            <a
              href="mailto:info@blu2.mx"
              onClick={closeMobileMenu}
              className="bg-transparent border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-colors backdrop-blur-sm font-roboto-black uppercase tracking-wider inline-block"
            >
              Contáctanos
            </a>
          </div>
        </div>

        {/* Mobile Menu Footer */}
        <div className="p-6 border-t border-white/10">
          <div className="flex justify-center space-x-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon icon="mdi:instagram" className="w-6 h-6 text-white" />
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon icon="mdi:facebook" className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
