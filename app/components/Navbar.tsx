"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 flex justify-center items-center ${scrolled
          ? "top-0 left-0 right-0 w-full py-4 bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "top-0 md:top-6 left-0 right-0 py-4 md:py-0"
        }`}
    >
      <div
        className={`${scrolled
            ? "w-full px-6 lg:px-8 max-w-7xl mx-auto"
            : "w-full md:w-[95%] max-w-7xl bg-transparent md:bg-black/40 md:backdrop-blur-lg md:border md:border-white/10 md:rounded-2xl px-6 md:py-4 md:shadow-2xl md:shadow-orange-500/5"
          } transition-all duration-500 relative`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
            <div className={`relative w-32 h-12 md:w-40 md:h-16 overflow-hidden transition-transform hover:scale-105 duration-300`}>
              <Image
                src="/images/logo.png"
                alt="Logic Builder Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/ai-agents"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              AI Agents
            </Link>
            <Link
              href="/services"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary relative px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4 md:hidden">
            <Link
              href="/"
              className="text-lg font-medium text-gray-400 hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/ai-agents"
              className="text-lg font-medium text-gray-400 hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI Agents
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium text-gray-400 hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-gray-400 hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-gray-400 hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="h-px bg-white/10 my-2" />
            <Link
              href="/contact"
              className="btn-primary text-center px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
