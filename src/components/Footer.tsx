"use client";

import React from "react";
import CognixsLogo from "./CognixsLogo";
import { Mail, ArrowUpRight, MessageSquare, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "var(--bg-card)",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "64px",
        paddingBottom: "40px",
        overflow: "hidden",
      }}
    >
      <div className="container-custom" style={{ position: "relative", zIndex: 2 }}>
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div>
            <CognixsLogo size="md" className="mb-4" />
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-body)",
                lineHeight: 1.6,
                marginTop: "16px",
                marginBottom: "20px",
                maxWidth: "320px",
              }}
            >
              High-velocity digital engineering & embedded technical co-founder for funded startups and ambitious enterprises.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a
                href="mailto:hello@cognixs.in"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--text-heading)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <Mail size={16} style={{ color: "#84CC16" }} />
                <span>hello@cognixs.in</span>
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                }}
              >
                <MessageSquare size={15} style={{ color: "#25D366" }} />
                <span>+91 99999 99999 (Studio WhatsApp)</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-heading)",
                marginBottom: "16px",
              }}
            >
              SERVICES
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.875rem" }}>
              <li><a href="#services" style={{ color: "var(--text-body)" }}>High-Velocity Websites</a></li>
              <li><a href="#services" style={{ color: "var(--text-body)" }}>Cross-Platform Mobile Apps</a></li>
              <li><a href="#services" style={{ color: "var(--text-body)" }}>Bespoke LLM & AI Agents</a></li>
              <li><a href="#services" style={{ color: "var(--text-body)" }}>Zero-Manual Automations</a></li>
              <li><a href="#services" style={{ color: "var(--text-body)" }}>Embedded Technical Co-Founder</a></li>
            </ul>
          </div>

          {/* Integrations Column */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-heading)",
                marginBottom: "16px",
              }}
            >
              INDIAN STACK
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.875rem" }}>
              <li><span style={{ color: "var(--text-body)" }}>Razorpay & UPI Deep-links</span></li>
              <li><span style={{ color: "var(--text-body)" }}>WhatsApp Cloud API</span></li>
              <li><span style={{ color: "var(--text-body)" }}>Tally Prime ERP Integration</span></li>
              <li><span style={{ color: "var(--text-body)" }}>Zoho CRM & Books</span></li>
              <li><span style={{ color: "var(--text-body)" }}>Shopify Plus Headless</span></li>
            </ul>
          </div>

          {/* Studio & Legal Column */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-heading)",
                marginBottom: "16px",
              }}
            >
              STUDIO
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.875rem" }}>
              <li><a href="#work" style={{ color: "var(--text-body)" }}>Selected Work</a></li>
              <li><a href="#process" style={{ color: "var(--text-body)" }}>Sprint Methodology</a></li>
              <li><a href="#about" style={{ color: "var(--text-body)" }}>About Cognixs</a></li>
              <li><span style={{ color: "var(--text-body)" }}>Bengaluru · Mumbai · Gurugram</span></li>
              <li><span style={{ color: "#16A34A", fontWeight: 600 }}>● Sprints Open for Next Month</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
          }}
        >
          <div>© 2026 Cognixs Studio (`cognixs.in`). All rights reserved.</div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>SLA Guarantee</span>
          </div>
        </div>
      </div>

      {/* Giant Watermark "cognixs" Matching Bottom of Screenshot 3 */}
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(5rem, 16vw, 15rem)",
          color: "var(--text-heading)",
          opacity: 0.03,
          letterSpacing: "-0.05em",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          userSelect: "none",
          zIndex: 1,
        }}
      >
        cognixs
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 520px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
