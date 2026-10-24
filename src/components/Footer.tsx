"use client";

import React from "react";
import Link from "next/link";
import CognixsLogo from "./CognixsLogo";
import { ArrowUpRight } from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "var(--bg-card)",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "68px",
        paddingBottom: "16px",
        overflow: "hidden",
      }}
    >
      <div className="container-custom" style={{ position: "relative", zIndex: 2 }}>
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 0.9fr 0.9fr",
            gap: "36px",
            marginBottom: "56px",
            alignItems: "start",
          }}
          className="footer-grid"
        >
          {/* Brand Info & Inquiries */}
          <div>
            <CognixsLogo size="md" />
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-body)",
                lineHeight: 1.6,
                marginTop: "18px",
                marginBottom: "24px",
                maxWidth: "300px",
              }}
            >
              High-velocity digital engineering, architectural precision, and brand strategy for category-defining technology ventures.
            </p>

            <div>
              <div
                style={{
                  fontSize: "0.6875rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  marginBottom: "8px",
                }}
              >
                DIRECT INQUIRIES
              </div>
              <a
                href="mailto:work.cognixs@gmail.com"
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  color: "var(--text-heading)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  textDecorationThickness: "1.5px",
                  transition: "opacity 0.2s ease",
                  display: "inline-block",
                }}
                className="footer-email-link"
              >
                work.cognixs@gmail.com
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "20px",
              }}
            >
              SERVICES
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem" }}>
              <li>
                <button type="button" onClick={() => scrollToSection("services")} className="footer-nav-link footer-btn-link">
                  High-Velocity Websites
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("services")} className="footer-nav-link footer-btn-link">
                  Cross-Platform Mobile Apps
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("services")} className="footer-nav-link footer-btn-link">
                  Bespoke LLM &amp; AI Agents
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("services")} className="footer-nav-link footer-btn-link">
                  Zero-Manual Automations
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("services")} className="footer-nav-link footer-btn-link">
                  Embedded Technical Co-Founder
                </button>
              </li>
            </ul>
          </div>

          {/* Indian Stack Column */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "20px",
              }}
            >
              INDIAN STACK
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem" }}>
              <li>
                <span className="footer-nav-item">
                  Razorpay &amp; UPI Deep-links
                </span>
              </li>
              <li>
                <span className="footer-nav-item">
                  WhatsApp Cloud API
                </span>
              </li>
              <li>
                <span className="footer-nav-item">
                  Tally Prime ERP Integration
                </span>
              </li>
              <li>
                <span className="footer-nav-item">
                  Zoho CRM &amp; Books
                </span>
              </li>
              <li>
                <span className="footer-nav-item">
                  Shopify Plus Headless
                </span>
              </li>
            </ul>
          </div>

          {/* Studio Column */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "20px",
              }}
            >
              STUDIO
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem" }}>
              <li>
                <button type="button" onClick={() => scrollToSection("work")} className="footer-nav-link footer-btn-link">
                  Selected Work
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("process")} className="footer-nav-link footer-btn-link">
                  Sprint Methodology
                </button>
              </li>
              <li>
                <Link href="/about" className="footer-nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/916396880866?text=Hi%20Cognixs%20team%2C%20I%20would%20like%20to%20connect%20regarding%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="footer-nav-link"
                >
                  Contact
                </a>
              </li>
              <li>
                <span style={{ color: "#16A34A", fontWeight: 600, fontSize: "0.8125rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#16A34A" }} />
                  Sprints Open
                </span>
              </li>
            </ul>
          </div>

          {/* Network Column */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "20px",
              }}
            >
              NETWORK
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem" }}>
              <li>
                <a
                  href="tel:+916396880866"
                  className="footer-network-link"
                  title="Direct Call: +91 63968 80866"
                >
                  <span>+91 63968 80866</span>
                  <ArrowUpRight size={14} className="network-arrow" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cognixs.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-network-link"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={14} className="network-arrow" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/cognixs"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-network-link"
                >
                  <span>X (Twitter)</span>
                  <ArrowUpRight size={14} className="network-arrow" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Divider & Meta Row */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "24px",
            paddingBottom: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
          }}
        >
          <div>© 2025 Cognixs Studio (cognixs.in). All rights reserved.</div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link href="/privacy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span style={{ opacity: 0.4 }}>•</span>
            <Link href="/terms" className="footer-legal-link">
              Terms of Service
            </Link>
          </div>
          <div>Crafted for high-velocity teams.</div>
        </div>
      </div>

      {/* Oversized Full-Width Wordmark Baseline */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(4.5rem, 15vw, 12rem)",
          lineHeight: 0.82,
          letterSpacing: "-0.05em",
          color: "var(--text-heading)",
          opacity: 0.045,
          userSelect: "none",
          pointerEvents: "none",
          overflow: "hidden",
          marginTop: "8px",
          marginBottom: "-12px",
        }}
        aria-hidden="true"
      >
        cognixs
      </div>

      <style jsx>{`
        .footer-nav-link {
          color: var(--text-heading);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-btn-link {
          background: none;
          border: none;
          padding: 0;
          font: inherit;
          text-align: left;
          cursor: pointer;
        }
        .footer-nav-link:hover {
          color: #84CC16;
        }
        .footer-nav-item {
          color: var(--text-body);
        }
        .footer-email-link:hover {
          opacity: 0.75;
        }
        .footer-legal-link {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-legal-link:hover {
          color: var(--text-heading);
          text-decoration: underline;
        }
        .footer-network-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 175px;
          white-space: nowrap;
          color: var(--text-heading);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-network-link :global(.network-arrow) {
          color: var(--text-muted);
          transition: transform 0.15s ease, color 0.15s ease;
        }
        .footer-network-link:hover {
          color: #84CC16;
        }
        .footer-network-link:hover :global(.network-arrow) {
          transform: translate(2px, -2px);
          color: #84CC16;
        }

        @media (max-width: 1024px) {
          :global(.footer-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 600px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
