"use client";

import React, { useState } from "react";
import { Check, Shield, Layers, ArrowRight, Zap } from "lucide-react";

export default function IntegrationStack() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      name: "Retail & D2C",
      bottleneck: "High cart abandonment on mobile ads, slow Shopify storefronts, fragmented return management.",
      engineered: "Headless Next.js edge storefront, 1-click Razorpay UPI checkout, automated WhatsApp tracking.",
      roi: "3.8x conversion surge, 40% reduction in customer support tickets.",
      stack: ["Next.js 15", "Shopify Plus", "Razorpay", "WhatsApp Cloud"],
    },
    {
      name: "Logistics & Supply Chain",
      bottleneck: "Manual dispatch calls, paper delivery challans, zero real-time visibility for end buyers.",
      engineered: "Automated Dunzo/Shiprocket carrier routing, live GPS tracking webhooks, automated Tally GST invoice.",
      roi: "Automated monthly parcel dispatches with high operational uptime.",
      stack: ["Node.js", "Tally Prime", "PostgreSQL", "WhatsApp API"],
    },
    {
      name: "Healthcare & Clinics",
      bottleneck: "Patients dropping off due to missed appointment reminders, unstructured doctor reports.",
      engineered: "Custom patient portal, automated WhatsApp appointment rescheduling bot, OCR doc parser.",
      roi: "45% reduction in clinic no-shows, zero manual front-desk scheduling.",
      stack: ["Flutter", "Python RAG", "Exotel", "AWS Bedrock"],
    },
    {
      name: "Real Estate & Housing",
      bottleneck: "Leads scattered across 99acres, MagicBricks, and Facebook ads with delayed sales follow-ups.",
      engineered: "Instant CRM webhook consolidation, automated AI lead qualification, instant broker dispatch.",
      roi: "Lead response time reduced from 4 hours to 45 seconds.",
      stack: ["Zoho CRM", "OpenAI GPT-4o", "n8n", "Meta Webhooks"],
    },
  ];

  return (
    <section id="integrations" className="section-padding" style={{ backgroundColor: "var(--bg-canvas)", position: "relative" }}>
      <div className="container-custom">
        <div style={{ maxWidth: "680px", marginBottom: "40px" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
              marginBottom: "8px",
            }}
          >
            DOMAIN EXPERTISE
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>
            Engineered for India’s fastest-growing sectors.
          </h2>
          <p style={{ color: "var(--text-body)", marginTop: "10px", fontSize: "1rem" }}>
            We know the local nuances: UPI deep-links, GST invoicing laws, WhatsApp Cloud API verification, and legacy ERP integration.
          </p>
        </div>

        {/* Industry Tabs */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
          {industries.map((ind, idx) => {
            const isActive = activeIndustry === idx;
            return (
              <button
                key={ind.name}
                type="button"
                onClick={() => setActiveIndustry(idx)}
                style={{
                  padding: "9px 20px",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  border: isActive ? "1px solid #101311" : "1px solid var(--border-subtle)",
                  backgroundColor: isActive ? "var(--accent-primary)" : "var(--bg-card)",
                  color: isActive ? "#101311" : "var(--text-muted)",
                }}
              >
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Active Industry Breakdown Card */}
        <div
          className="studio-card industry-breakdown-card"
          style={{
            padding: "36px",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "36px",
          }}
        >
          <div>
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "#EF4444", marginBottom: "4px" }}>
                THE BOTTLENECK
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.6 }}>
                {industries[activeIndustry].bottleneck}
              </p>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-heading)", marginBottom: "4px" }}>
                WHAT WE ENGINEER
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.6 }}>
                {industries[activeIndustry].engineered}
              </p>
            </div>

            <div
              style={{
                backgroundColor: "var(--accent-lime-subtle)",
                border: "1px solid var(--accent-lime-border)",
                borderRadius: "14px",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Zap size={18} style={{ color: "#2D4A1D", flexShrink: 0 }} />
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#2D4A1D" }}>
                Impact: {industries[activeIndustry].roi}
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "var(--bg-inset)",
              borderRadius: "18px",
              padding: "24px",
              border: "1px solid var(--border-subtle)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginBottom: "12px" }}>
                ACTIVE STACK & INTERFACES
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {industries[activeIndustry].stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-heading)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: "24px",
                paddingTop: "16px",
                borderTop: "1px solid var(--border-subtle)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
              }}
            >
              <div>🔒 Compliant with Indian DPDP Act & GST Regulations</div>
              <div style={{ marginTop: "4px" }}>⚡ Zero vendor lock-in; code delivered to your GitHub</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 800px) {
          :global(.industry-breakdown-card) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
