"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CognixsLogo from "./CognixsLogo";
import ThemeToggle from "./ThemeToggle";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Compare", href: "#comparison" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: "16px",
        left: 0,
        right: 0,
        zIndex: 100,
        width: "100%",
        padding: "0 16px",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "10px 18px",
          borderRadius: "9999px",
          backgroundColor: "var(--bg-card)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid var(--border-subtle)",
          boxShadow: scrolled ? "var(--shadow-md)" : "var(--shadow-sm)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="nav-container"
      >
        {/* Brand Logo */}
        <CognixsLogo size="sm" />

        {/* Center Route Links (Desktop) */}
        <nav
          style={{
            display: "none",
            gap: "28px",
            alignItems: "center",
          }}
          className="desktop-nav-links"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-heading)",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4D7C0F")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-heading)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ThemeToggle />

          <button
            onClick={onOpenBooking}
            type="button"
            className="btn-dark"
            style={{
              padding: "9px 18px",
              fontSize: "0.85rem",
              borderRadius: "9999px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>Start a project</span>
            <ArrowUpRight size={15} style={{ color: "var(--accent-primary)" }} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="mobile-menu-btn"
            style={{
              display: "none",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "var(--bg-inset)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-heading)",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            maxWidth: "1120px",
            margin: "10px auto 0",
            padding: "20px",
            backgroundColor: "var(--bg-card)",
            borderRadius: "20px",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-lg)",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--text-heading)",
                padding: "8px 0",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            type="button"
            className="btn-primary"
            style={{ width: "100%", marginTop: "8px" }}
          >
            Start a project <ArrowUpRight size={16} />
          </button>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav-links {
            display: flex !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
