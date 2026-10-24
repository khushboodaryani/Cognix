"use client";

import React from "react";
import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";

export default function PredictableCadence() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      timeline: "Days 1 - 3",
      icon: Search,
      desc: "We dissect your business logic, existing bottleneck bottlenecks, and identify exact integration touchpoints (WhatsApp, Tally, Zoho, DBs).",
    },
    {
      step: "02",
      title: "Design",
      timeline: "Days 4 - 8",
      icon: PenTool,
      desc: "Interactive Figma prototype and architectural blueprints. You test every screen, edge case, and user flow before a single line of code is written.",
    },
    {
      step: "03",
      title: "Build",
      timeline: "Sprint Wk 2 - 3",
      icon: Code2,
      desc: "Engineered in high-velocity sprints using Next.js 15, Flutter, or Python. Continuous staging deployments updated directly in your team's Slack.",
    },
    {
      step: "04",
      title: "Launch & grow",
      timeline: "Sprint Wk 4 & Beyond",
      icon: Rocket,
      desc: "Production cutover with zero downtime. Automated error logging, telemetry dashboards, and 100% intellectual property & code ownership.",
    },
  ];

  return (
    <section id="process" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ maxWidth: "640px", marginBottom: "48px" }}>
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
            OUR PROCESS
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>
            Predictable cadence from day zero.
          </h2>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div
          className="cadence-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: "24px",
            position: "relative",
          }}
        >
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isLimeHighlight = idx === 2; // Step 03 Build is highlighted as active sprint

            return (
              <div
                key={item.step}
                className="studio-card cadence-card"
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  border: isLimeHighlight ? "1px solid #101311" : "1px solid var(--border-subtle)",
                }}
              >
                <div>
                  {/* Step Number Circle */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        backgroundColor: isLimeHighlight ? "var(--accent-primary)" : "var(--bg-inset)",
                        color: isLimeHighlight ? "#101311" : "var(--text-heading)",
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      {item.step}
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        fontWeight: 600,
                      }}
                    >
                      {item.timeline}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "10px" }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "0.9rem", color: "var(--text-body)", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "20px",
                    paddingTop: "14px",
                    borderTop: "1px solid var(--border-subtle)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <Icon size={14} style={{ color: isLimeHighlight ? "#16A34A" : "var(--text-heading)" }} />
                  <span>Phase Deliverable Signed</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .cadence-grid {
            gap: 16px !important;
          }
          :global(.cadence-card) {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
