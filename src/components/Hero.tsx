"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Play, Sparkles, Activity, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState(0);

  const tabs = ["Dashboard UI", "AI Pipeline", "Mobile UPI"];

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "60px",
        paddingBottom: "80px",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(199, 243, 107, 0.18) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Top Tag Pill */}
        <div style={{ marginBottom: "20px" }}>
          <div
            className="pill-badge"
            style={{
              padding: "6px 14px",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span className="pulse-dot" />
            <span>WEBSITES · APPS · AI SOLUTIONS · AUTOMATION</span>
          </div>
        </div>

        {/* Master Headline */}
        <h1
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
            maxWidth: "960px",
            margin: "0 auto 20px",
            color: "var(--text-heading)",
          }}
        >
          We’ve already made the mistakes. You get{" "}
          <span
            style={{
              display: "inline-block",
              backgroundColor: "var(--accent-primary)",
              color: "#101311",
              padding: "2px 16px",
              borderRadius: "16px",
              transform: "rotate(-1deg)",
              boxShadow: "0 4px 14px rgba(199, 243, 107, 0.35)",
            }}
          >
            the results.
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            lineHeight: 1.6,
            maxWidth: "680px",
            margin: "0 auto 34px",
            color: "var(--text-body)",
          }}
        >
          We design and build digital products that cut busywork and help your business grow.
          Smart tech that works while you sleep.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "50px",
          }}
        >
          <button
            onClick={onOpenBooking}
            type="button"
            className="btn-primary"
            style={{ padding: "13px 28px", fontSize: "1rem" }}
          >
            <span>Start a project</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>

          <a
            href="#work"
            className="btn-secondary"
            style={{ padding: "13px 26px", fontSize: "1rem" }}
          >
            <span>See our work</span>
          </a>
        </div>

        {/* Telemetry Status Chip */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "6px 14px",
            borderRadius: "9999px",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
            marginBottom: "44px",
            fontFamily: "var(--font-mono)",
          }}
        >
          <Activity size={14} style={{ color: "#22C55E" }} />
          <span>Live Ops: <strong style={{ color: "var(--text-heading)" }}>99.4% automated uptime</strong></span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span><strong style={{ color: "var(--text-heading)" }}>+42 hrs/mo</strong> saved per client</span>
        </div>

        {/* Fanned Multi-Device UI Mockups (Matching Screenshot 2) */}
        <div
          style={{
            position: "relative",
            maxWidth: "960px",
            margin: "0 auto",
            paddingTop: "20px",
          }}
        >
          {/* Left Angled Window Mockup (Background layer) */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "-30px",
              width: "360px",
              height: "260px",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "18px",
              boxShadow: "var(--shadow-md)",
              transform: "rotate(-8deg) scale(0.9)",
              opacity: 0.7,
              zIndex: 1,
              pointerEvents: "none",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            className="hidden-mobile"
          >
            <div style={{ display: "flex", gap: "6px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E2E8F0" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E2E8F0" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E2E8F0" }} />
            </div>
            <div style={{ height: "14px", width: "40%", background: "var(--bg-inset)", borderRadius: "4px" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", flex: 1 }}>
              <div style={{ background: "var(--bg-inset)", borderRadius: "10px" }} />
              <div style={{ background: "var(--bg-inset)", borderRadius: "10px" }} />
            </div>
          </div>

          {/* Right Angled Mobile Phone Mockup (Background layer) */}
          <div
            style={{
              position: "absolute",
              top: "30px",
              right: "-20px",
              width: "220px",
              height: "360px",
              backgroundColor: "var(--bg-card)",
              border: "3px solid #101311",
              borderRadius: "32px",
              boxShadow: "var(--shadow-lg)",
              transform: "rotate(6deg) scale(0.95)",
              zIndex: 3,
              pointerEvents: "none",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
            className="hidden-mobile"
          >
            {/* Phone Speaker Notch */}
            <div
              style={{
                width: "48px",
                height: "4px",
                backgroundColor: "#101311",
                borderRadius: "9999px",
                margin: "4px auto 8px",
              }}
            />
            {/* Card inside mobile */}
            <div
              style={{
                backgroundColor: "var(--bg-inset)",
                borderRadius: "14px",
                padding: "10px",
              }}
            >
              <div style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>Razorpay UPI</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-heading)" }}>
                ₹ 42,850.00
              </div>
              <div
                style={{
                  display: "inline-block",
                  padding: "2px 6px",
                  borderRadius: "9999px",
                  background: "var(--accent-primary)",
                  color: "#101311",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  marginTop: "4px",
                }}
              >
                Instant Payout
              </div>
            </div>
            <div
              style={{
                backgroundColor: "var(--bg-card-subtle)",
                border: "1px dashed var(--border-strong)",
                borderRadius: "12px",
                padding: "8px",
                fontSize: "0.7rem",
              }}
            >
              WhatsApp Bot: Order #892 dispatched via Dunzo
            </div>
          </div>

          {/* Center Main Stage Window Mockup */}
          <div
            className="studio-card"
            style={{
              position: "relative",
              zIndex: 2,
              padding: "20px 24px 28px",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-lg)",
              background: "var(--bg-card)",
            }}
          >
            {/* Window Header */}
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
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F56" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD2E" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27C93F" }} />
                <span
                  style={{
                    marginLeft: "8px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  cognixs.in/console/preview
                </span>
              </div>

              {/* Status Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  background: "rgba(199, 243, 107, 0.2)",
                  color: "#101311",
                  border: "1px solid rgba(199, 243, 107, 0.4)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                }}
              >
                <span className="pulse-dot" />
                <span>LIVE PRODUCTION</span>
              </div>
            </div>

            {/* Dashboard Mockup Content */}
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", fontWeight: 600 }}>
                    Client Platform
                  </div>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 700 }}>[Project Name]</h3>
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  {tabs.map((tab, idx) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTelemetryTab(idx)}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        cursor: "pointer",
                        border: activeTelemetryTab === idx ? "1px solid #101311" : "1px solid var(--border-subtle)",
                        background: activeTelemetryTab === idx ? "var(--accent-primary)" : "var(--bg-inset)",
                        color: activeTelemetryTab === idx ? "#101311" : "var(--text-muted)",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wireframe blocks matching screenshot 2 */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "var(--bg-inset)",
                    borderRadius: "14px",
                    padding: "16px",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                    Avg Response Latency
                  </div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-heading)", fontFamily: "var(--font-mono)" }}>
                    142 ms
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#16A34A", display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
                    <CheckCircle2 size={12} /> 99.98% SLA Guaranteed
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "var(--bg-inset)",
                    borderRadius: "14px",
                    padding: "16px",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                    Automated Ingestion
                  </div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-heading)", fontFamily: "var(--font-mono)" }}>
                    12,840 / mo
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                    WhatsApp + Tally Sync
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    borderRadius: "14px",
                    padding: "16px",
                    color: "#101311",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                    Autonomous Execution
                  </div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800 }}>
                    Zero Manual Drag
                  </div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.85 }}>
                    Engineered by Cognixs
                  </div>
                </div>
              </div>

              {/* SVG Sparkline Graph */}
              <div
                style={{
                  backgroundColor: "var(--bg-inset)",
                  borderRadius: "14px",
                  padding: "16px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  <span>SYSTEM THROUGHPUT & SPRINT TRAJECTORY</span>
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-heading)" }}>+320% Velocity</span>
                </div>
                <svg
                  viewBox="0 0 500 80"
                  style={{ width: "100%", height: "70px", overflow: "visible" }}
                >
                  <defs>
                    <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C7F36B" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#C7F36B" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,60 Q80,55 140,40 T260,35 T380,15 T500,8 L500,80 L0,80 Z"
                    fill="url(#heroGradient)"
                  />
                  <path
                    d="M0,60 Q80,55 140,40 T260,35 T380,15 T500,8"
                    fill="none"
                    stroke="#84CC16"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="500" cy="8" r="5" fill="#C7F36B" stroke="#101311" strokeWidth="2" />
                </svg>
              </div>

              {/* Bottom footer bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "16px",
                  paddingTop: "12px",
                  borderTop: "1px solid var(--border-subtle)",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                <span>Stack: Next.js 15 · TypeScript · WhatsApp Cloud · PostgreSQL</span>
                <span style={{ color: "var(--text-heading)", fontWeight: 600 }}>Delivery: Sprint Week 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
