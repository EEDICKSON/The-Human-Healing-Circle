"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-healing-slate/30 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-healing-green-dark hover:opacity-90 transition-all duration-300"
          >
            The Human Healing Circle
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              href="/"
              className="hover:text-healing-green transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-healing-green transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="hover:text-healing-green transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              href="/community"
              className="px-4 py-2 rounded-full bg-healing-green-light text-healing-green-dark font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              🤝 Friendship Hub
            </Link>
            <Link
              href="/contact"
              className="hover:text-healing-green transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Hamburger Toggle Button (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-healing-blue-dark hover:text-healing-green transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Close Icon (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-healing-slate/30 shadow-lg absolute w-full left-0">
          <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-healing-blue-dark">
            <Link
              href="/"
              onClick={closeMenu}
              className="hover:text-healing-green transition-colors block"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="hover:text-healing-green transition-colors block"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              onClick={closeMenu}
              className="hover:text-healing-green transition-colors block"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="hover:text-healing-green transition-colors block"
            >
              Contact
            </Link>
            <div className="pt-2 border-t border-healing-slate/20">
              <Link
                href="/community"
                onClick={closeMenu}
                className="inline-block mt-2 px-4 py-2 rounded-xl bg-healing-green-light text-healing-green-dark font-semibold shadow-sm w-full text-center"
              >
                🤝 Friendship Hub
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
