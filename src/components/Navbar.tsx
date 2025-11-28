"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/awards", label: "Awards" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 py-4">
            <Image
              src="/logo.png"
              alt="Atharva Enterprises Logo"
              width={40}
              height={40}
              className="object-contain"
            />

            <span
              className="font-normal text-xl text-black leading-tight"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              ATHARVA ENTERPRISES
            </span>
          </Link>

          {/* Desktop Navigation (black text) */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-black hover:bg-black/10 rounded-lg transition-colors"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="tel:+919423593257">
              <Button
                className="hover:opacity-90"
                style={{ backgroundColor: '#3164b6ff', fontFamily: 'var(--font-pt-sans-caption)' }}
              >
                <Phone className="w-4 h-4 mr-2 text-white" />
                <span className="text-white">Call Now</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-black hover:bg-black/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-black/10 pt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-black hover:bg-black/10 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <a href="tel:+919423593257" className="px-4 py-2">
                <Button className="w-full" style={{ backgroundColor: '#3B82F6' }}>
                  <Phone className="w-4 h-4 mr-2 text-white" />
                  <span className="text-white">Call Now</span>
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
