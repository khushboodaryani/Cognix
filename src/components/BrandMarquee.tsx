"use client";

import React from "react";
import { Zap, Cpu, Layers, Terminal, Sparkles, Database, ShieldCheck } from "lucide-react";

export default function BrandMarquee() {
  const items = [
    { name: "WhatsApp Cloud API", category: "Direct Messaging", tag: "Enterprise Verified" },
    { name: "Razorpay & UPI", category: "Instant Payments", tag: "120ms Latency" },
    { name: "Tally Prime ERP", category: "Automated GST", tag: "Real-time Sync" },
    { name: "Zoho CRM & Books", category: "Lead Ingestion", tag: "Zero Loss" },
    { name: "Shopify Plus", category: "Headless D2C", tag: "Sub-second LCP" },
    { name: "OpenAI GPT-4o", category: "Autonomous LLMs", tag: "Custom RAG" },
    { name: "n8n Distributed", category: "Event Pipelines", tag: "Self-Hosted" },
    { name: "PostgreSQL & Redis", category: "Core Persistence", tag: "High Concurrency" },
  ];

  return (
    <div
      style={{
        padding: "24px 0",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-card)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Side gradient fades */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "120px",
          background: "linear-gradient(to right, var(--bg-card), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "120px",
          background: "linear-gradient(to left, var(--bg-card), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div className="animate-marquee" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {/* Render twice for continuous infinite loop */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "var(--bg-inset)",
              border: "1px solid var(--border-subtle)",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-primary)",
                border: "1px solid #101311",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "var(--text-heading)",
                letterSpacing: "-0.01em",
              }}
            >
              {item.name}
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                backgroundColor: "var(--bg-card)",
                padding: "2px 8px",
                borderRadius: "9999px",
                border: "1px solid var(--border-subtle)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
