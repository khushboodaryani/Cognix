"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Activity } from "lucide-react";

interface DeepDiveProps {
  onOpenBooking: () => void;
}

export default function SelectedDeepDive({ onOpenBooking }: DeepDiveProps) {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      tabLabel: "Project 01",
      client: "FinPulse NeoBank & UPI",
      industry: "Fintech & Embedded Banking",
      problem:
        "Disparate legacy manual spreadsheets and slow payment verification cycles caused high transaction drop-off, reconciliation errors, and 3-day delays in merchant settlement.",
      engineered:
        "Engineered an event-driven Next.js & Flutter payment platform with native Razorpay deep-linking, automated webhook ledgering, and sub-150ms verification latency.",
      result: "3x faster fulfillment order cycle, zero manual latency",
      stats: [
        { label: "Uptime & Delivery", value: "99.98%" },
        { label: "Manual Drag", value: "-45h / mo" },
        { label: "Settlement Speed", value: "4x Faster" },
      ],
      sparklinePoints: "M0,50 Q60,45 120,30 T240,25 T360,10 T460,4",
      gradientId: "grad01",
    },
    {
      tabLabel: "Project 02",
      client: "Omniflow Logistics",
      industry: "Supply Chain & Last Mile",
      problem:
        "Overwhelmed customer support team handling 2,400+ daily WhatsApp queries about delivery dispatch manually, leading to missed shipments and customer frustration.",
      engineered:
        "Integrated Meta WhatsApp Cloud API with custom LLM triage agent, live Dunzo/Shiprocket webhook dispatch, and automated Tally GST e-invoice generation.",
      result: "82% automated resolution rate, 12,000+ hours saved annually",
      stats: [
        { label: "Query Automation", value: "82.4%" },
        { label: "Support Cost", value: "-64%" },
        { label: "First Response", value: "< 1.2s" },
      ],
      sparklinePoints: "M0,60 Q70,40 140,45 T280,20 T380,12 T460,2",
      gradientId: "grad02",
    },
    {
      tabLabel: "Project 03",
      client: "Kensho Retail D2C",
      industry: "Fashion E-commerce",
      problem:
        "Standard Shopify theme suffered from slow mobile LCP (> 4.8s) and poor conversion on mobile ad traffic from Meta & Instagram.",
      engineered:
        "Architected a headless Next.js App Router storefront with edge caching, 1-click Cashfree & UPI checkout, and automated inventory sync with Zoho Books.",
      result: "3.8x mobile conversion jump, sub-second LCP globally",
      stats: [
        { label: "Lighthouse LCP", value: "0.8s" },
        { label: "Mobile Conv.", value: "+280%" },
        { label: "Cart Abandonment", value: "-38%" },
      ],
      sparklinePoints: "M0,55 Q80,50 160,28 T290,22 T390,8 T460,3",
      gradientId: "grad03",
    },
  ];

  const current = projects[activeTab];

  return (
    <section id="work" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          <div>
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
              CASE STUDY
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>
              Selected deep dive.
            </h2>
          </div>

          {/* Project Switcher Tabs Matching Screenshot 2 */}
          <div style={{ display: "flex", gap: "8px" }}>
            {projects.map((proj, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={proj.tabLabel}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: isActive ? "1px solid #101311" : "1px solid var(--border-subtle)",
                    backgroundColor: isActive ? "var(--accent-primary)" : "var(--bg-card)",
                    color: isActive ? "#101311" : "var(--text-muted)",
                    boxShadow: isActive ? "var(--shadow-sm)" : "none",
                  }}
                >
                  {proj.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Deep Dive Split Card Matching Screenshot 2 */}
        <div
          className="studio-card deep-dive-card"
          style={{
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left Column: Problem, Engineered, Result */}
          <div>
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "4px",
                }}
              >
                {current.industry}
              </div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-heading)" }}>
                {current.client}
              </h3>
            </div>

            {/* PROBLEM block */}
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  marginBottom: "6px",
                }}
              >
                PROBLEM
              </div>
              <p style={{ color: "var(--text-body)", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                {current.problem}
              </p>
            </div>

            {/* WHAT WE ENGINEERED block */}
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  marginBottom: "6px",
                }}
              >
                WHAT WE ENGINEERED
              </div>
              <p style={{ color: "var(--text-body)", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                {current.engineered}
              </p>
            </div>

            {/* RESULT highlighted lime callout matching Screenshot 2 */}
            <div
              style={{
                backgroundColor: "var(--accent-primary)",
                color: "#101311",
                padding: "14px 20px",
                borderRadius: "14px",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.95rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
                boxShadow: "0 2px 10px rgba(199, 243, 107, 0.3)",
              }}
            >
              <CheckCircle2 size={18} strokeWidth={2.5} />
              <span>[ {current.result} ]</span>
            </div>

            <div>
              <button
                type="button"
                onClick={onOpenBooking}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-heading)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: 0,
                }}
              >
                <span>Read full case study</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Live Telemetry & Interactive Sparkline Card */}
          <div
            style={{
              backgroundColor: "var(--bg-inset)",
              borderRadius: "20px",
              border: "1px solid var(--border-subtle)",
              padding: "24px",
            }}
          >
            {/* Header pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "16px",
                borderBottom: "1px solid var(--border-subtle)",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Activity size={14} style={{ color: "#22C55E" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-heading)" }}>
                  REAL-TIME TELEMETRY
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-mono)",
                  padding: "3px 8px",
                  borderRadius: "9999px",
                  background: "rgba(34, 197, 94, 0.15)",
                  color: "#16A34A",
                  fontWeight: 700,
                }}
              >
                VERIFIED OUTCOME
              </span>
            </div>

            {/* Stats Triplets */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              {current.stats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    padding: "14px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "var(--text-heading)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Sparkline Visual */}
            <div
              style={{
                backgroundColor: "var(--bg-card)",
                borderRadius: "14px",
                padding: "16px",
                border: "1px solid var(--border-subtle)",
                marginBottom: "16px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "10px" }}>
                <span>VELOCITY CURVE</span>
                <span style={{ color: "#16A34A", fontWeight: 700 }}>+99.8% Reliability</span>
              </div>
              <svg viewBox="0 0 460 70" style={{ width: "100%", height: "65px", overflow: "visible" }}>
                <defs>
                  <linearGradient id={current.gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C7F36B" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#C7F36B" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d={`${current.sparklinePoints} L460,70 L0,70 Z`}
                  fill={`url(#${current.gradientId})`}
                />
                <path
                  d={current.sparklinePoints}
                  fill="none"
                  stroke="#84CC16"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <circle cx="460" cy="4" r="5" fill="#C7F36B" stroke="#101311" strokeWidth="2" />
              </svg>
            </div>

            {/* Bottom sprint timeline */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span>Sprint Week 1: PoC</span>
              <span>Sprint Week 2: Build</span>
              <span style={{ color: "var(--text-heading)", fontWeight: 700 }}>Sprint Week 3: Production</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.deep-dive-card) {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
