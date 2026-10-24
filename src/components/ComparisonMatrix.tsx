"use client";

import React from "react";
import { CheckCircle2, XCircle, Sparkles, ArrowRight } from "lucide-react";

interface ComparisonMatrixProps {
  onOpenBooking: () => void;
}

export default function ComparisonMatrix({ onOpenBooking }: ComparisonMatrixProps) {
  const comparisons = [
    {
      dimension: "System Architecture",
      subtext: "The foundation of your software",
      oldWay: "Static monolithic templates, rigid CMS themes, and fragile low-code plugins.",
      cognixsWay: "Event-driven Next.js 16 platforms, custom vector indexes, and scalable microservices.",
    },
    {
      dimension: "Lead & Customer Support",
      subtext: "How inbound interest is handled",
      oldWay: "Slow support ticket backlogs, 4+ hour SDR delays, and weekend coverage voids.",
      cognixsWay: "Autonomous AI agents instantly resolving questions and qualifying leads 24/7.",
    },
    {
      dimension: "Delivery Velocity",
      subtext: "Time from scope to production",
      oldWay: "3–6 month sluggish development cycles bloated by endless committee meetings.",
      cognixsWay: "High-velocity 14-day production sprints with live test environments from Day 3.",
    },
    {
      dimension: "Workflow & Tool Integration",
      subtext: "Connecting your business tools",
      oldWay: "Manual copy-paste between spreadsheets, disconnected CRMs, and broken Zapier zaps.",
      cognixsWay: "Production-grade n8n & webhook pipelines uniting WhatsApp, HubSpot, Tally, and ERP.",
    },
    {
      dimension: "Code & IP Ownership",
      subtext: "Who owns what is built",
      oldWay: "Vendor lock-in, proprietary licensing traps, and opaque unmaintainable codebases.",
      cognixsWay: "100% client IP ownership with pristine GitHub repositories, CI/CD, and docs from Day 1.",
    },
    {
      dimension: "Engineering Accountability",
      subtext: "Who actually builds your product",
      oldWay: "Sales reps pitch senior talent, then quietly hand off to junior offshore contractors.",
      cognixsWay: "Direct access to your embedded senior technical co-founder in a shared dedicated Slack.",
    },
  ];

  return (
    <section id="comparison" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ maxWidth: "700px", margin: "0 auto 48px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
              marginBottom: "10px",
            }}
          >
            THE COGNIXS ADVANTAGE
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "var(--text-heading)",
              marginBottom: "16px",
            }}
          >
            The Old Agency Model vs The Cognixs Studio Model
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-body)",
              lineHeight: 1.6,
            }}
          >
            Why high-growth founders and ambitious enterprises replace traditional dev shops with our autonomous engineering studio.
          </p>
        </div>

        {/* Comparison Table Bento Card */}
        <div
          className="studio-card"
          style={{
            padding: "0",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1.4fr 1.6fr",
              padding: "20px 28px",
              backgroundColor: "var(--bg-inset)",
              borderBottom: "1px solid var(--border-subtle)",
              fontWeight: 700,
              fontFamily: "var(--font-display)",
              fontSize: "0.875rem",
              letterSpacing: "0.06em",
            }}
            className="comparison-row-grid"
          >
            <div style={{ color: "var(--text-muted)" }}>DIMENSION</div>
            <div style={{ color: "#EF4444", display: "flex", alignItems: "center", gap: "6px" }}>
              <XCircle size={16} />
              <span>THE TRADITIONAL WAY</span>
            </div>
            <div style={{ color: "#84CC16", display: "flex", alignItems: "center", gap: "6px" }}>
              <Sparkles size={16} />
              <span>THE COGNIXS STUDIO WAY</span>
            </div>
          </div>

          {/* Rows */}
          <div>
            {comparisons.map((row, idx) => (
              <div
                key={row.dimension}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1.4fr 1.6fr",
                  padding: "24px 28px",
                  borderBottom:
                    idx < comparisons.length - 1
                      ? "1px solid var(--border-subtle)"
                      : "none",
                  backgroundColor: idx % 2 === 1 ? "var(--bg-card-subtle)" : "var(--bg-card)",
                  transition: "background-color 0.15s ease",
                }}
                className="comparison-row-grid"
              >
                {/* Dimension */}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--text-heading)",
                      marginBottom: "4px",
                    }}
                  >
                    {row.dimension}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {row.subtext}
                  </div>
                </div>

                {/* Old Way */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    paddingRight: "16px",
                  }}
                >
                  <XCircle
                    size={16}
                    style={{ color: "#EF4444", flexShrink: 0, marginTop: "3px" }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-body)",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.oldWay}
                  </span>
                </div>

                {/* Cognixs Way */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    backgroundColor: "rgba(199, 243, 107, 0.06)",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid rgba(199, 243, 107, 0.25)",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    style={{ color: "#84CC16", flexShrink: 0, marginTop: "2px" }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--text-heading)",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.cognixsWay}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout in Comparison Card */}
          <div
            style={{
              padding: "24px 28px",
              backgroundColor: "var(--bg-inset)",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text-heading)",
                }}
              >
                Ready to cut busywork and build digital products that scale?
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-body)",
                  marginTop: "2px",
                }}
              >
                Fixed weekly sprints · Zero lock-in · 100% IP ownership.
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-primary"
              type="button"
              style={{ padding: "10px 22px", fontSize: "0.875rem", gap: "8px" }}
            >
              <span>Book Your Scoping Call</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
